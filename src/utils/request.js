// import Vue from 'vue';
import axios from 'axios'
import $CM from '@/utils/common'
// import Vuex from 'vuex'
// import store from '@/store'
import {
  Toast
} from 'vant';
let http_load;
let axios_num = 0;
import {
  getToken,
  removeToken,
  setToken
} from '@/utils/auth';
import {
  sha256
} from 'js-sha256';
let CUR_ORIDIN = window.location.origin;
// let BASE_API = 'https://app.weget.com/wap/';
let BASE_API = 'http://app.weget.pzjhw.com:8088/wap/';
// if (process.env.NODE_ENV === 'development') {
//   // dev
//   BASE_API = 'http://app.weget.pzjhw.com:8088/wap/';
// } else {
//   // build
//   BASE_API = 'https://app.weget.com/wap/';
// }
/* 全局检测获取APP的登录状态 */


/* 获取app的状态登录 */

const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  // baseURL: 'http://app.wks.wegetcn.com:8088/index.php/admin/',
  baseURL: BASE_API,
  // request timeout
  // timeout: 5000, 
  headers: {
    // 'Content-Type': 'application/json'
    // 'Content-Type': 'text/html; charset=UTF-8'
    // 'Content-Type':'multipart/form-data; charset=UTF-8'
    // 'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
  },
});
window.nativeToJavaScript_sendToken = function (res) {
  // alert(JSON.stringify(res));
  let token = res.token;
  if (token) {
    setToken(token);
    if (getToken()) {
      window.location.reload();
    }
  }
};
// request interceptor
service.interceptors.request.use(
  config => {
    axios_num += 1;
    // console.log(config);
    if (config.url.indexOf('loading=yes') !== -1) {
      http_load = Toast.loading({
        mask: true,
        loadingType: "spinner",
        message: 'Loading'
      });
    }
    // Do something before request is sent
    // if (store.getters.token) {
    // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    // }
    // console.log(getToken());
    // localStorage.getItem('token')
    // config.data.token = localStorage.getItem('token');
    // debugger;
    delete_emity_params(config.params);
    config.headers['Encrypt-Sign'] = set_header(config.data);
    // console.log(set_header(config.data),config.data);
    return config
  },
  error => {
    // Do something with request error
    // alert('请求报错');
    Promise.reject(error)
  }
)

// respone interceptor
service.interceptors.response.use(
  // response => response,
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过xmlhttprequest来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  response => {
    const res = response.data;
    const config = response.config;
    // console.log(response);
    if (res.code !== 1000) {
      // console.log(config);
      /* 处于weget的app下不显示弹框 */
      if (window.weget_mobile_type !== 'iOS') {
        Toast(res.message);
      }

      let show_tips = false;
      if (res.code === 3001) {
        show_tips = false;
      }
      if (config.url.indexOf('getInfoByToken') !== -1) {
        show_tips = false;
      }
      if (show_tips) {
        Toast(res.message);
      }
      // console.log(JSON.stringify(res.message));
      if (res.code === 1207 || res.code === 1209) {
        /* 清空旧的token */
        removeToken();
        /* window.weget_mobile_type   用来检测是否处于 */
        // alert(window.weget_mobile_type)
        if (window.weget_mobile_type === 'iOS') {
          let params;
          if (res.code === 1207) {
            params = {
              type: 103,
              data: {}
            };
          }
          if (res.code === 1209) {
            params = {
              type: 104,
              data: {}
            };
          }
          window.webkit.messageHandlers.javaScriptToNative.postMessage(params);
          // alert('to login');
          // window.nativeToJavaScript_sendToken = function (res) {
          //   // alert(JSON.stringify(res));
          //   let token = res.token;
          //   setToken(token);
          //   if (getToken()) {
          //     window.location.reload();
          //   }
          // }
        } else {
          // alert($CM.is_ins());
          if ($CM.is_ins() || $CM.is_snapchat()) {
            window.location.href = window.location.origin + "/login?autoshow=1&redirect=" + window.location.href;
          } else {
            window.location.href = window.location.origin + "/login?redirect=" + window.location.href;
          }
        }
      }
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // 请自行在引入 MessageBox
        // import { Message, MessageBox } from 'element-ui'
        // MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
        //   confirmButtonText: '重新登录',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        //   store.dispatch('FedLogOut').then(() => {
        //     location.reload() // 为了重新实例化vue-router对象 避免bug
        //   })
        // }
      }
      return Promise.reject(response.data);
      // return response.data;
    } else {
      // console.log('走过拦截相应');
      axios_num += -1;
      if (axios_num === 0) {
        if (http_load) {
          setTimeout(() => {
            http_load.clear();
          }, 300)
        }
      }
      return response.data;
    }
  },
  error => {
    console.log('err' + error) // for debug

    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    alert(JSON.parse(error));
    return Promise.reject(error)
  }
)
//全局拦截去掉空字符串参数
function delete_emity_params(val) {
  let temp_config = val;
  for (var key in temp_config) {
    if (temp_config[key] === '') {
      temp_config[key] = undefined;
    }
  }
}

function set_header(data = "{}") {
  var arys = typeof (data) == 'string' ? JSON.parse(data) : data;
  // arys.extra_str = 'be01S%3eMa#0b15a?8y@zX';
  // console.log(typeof(data), data);
  // arys.extra_str = 'be01S%3eMa#0b15a?8y@zX';
  var jsonnew = objKeySort(arys); //函数执行
  var params = "";
  for (var key in jsonnew) {
    // console.log(typeof (jsonnew[key]), jsonnew[key]);
    if (typeof (jsonnew[key]) == 'object') {
      params += key + '=' + JSON.stringify(jsonnew[key]) + '&';
    } else {
      params += key + '=' + jsonnew[key] + '&';
    }
  }
  params = params.substring(0, params.length - 1);
  // console.log(params, sha256(params));

  // console.log(sha256('extra_str=be01S%3eMa#0b15a?8y@zX'));
  return sha256(params);
  // var newstr=str3+extra_str;
  // console.log('new_string=='+newstr);
  // 打印结果==> "ac"="acac"&"ba"="baba"&"bb"="bbbb"&"cc"="cccc"12345678901234561234567890123456"


  //排序的函数
  function objKeySort(arys) {
    //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
    var temp = JSON.parse(JSON.stringify(arys));
    temp.extra_str = 'xm01S%3eMa#0b1@z#Pa9dW';
    // console.log(temp,6666);
    var newkey = Object.keys(temp).sort();
    //console.log('newkey='+newkey);
    var newObj = {}; //创建一个新的对象，用于存放排好序的键值对
    for (var i = 0; i < newkey.length; i++) {
      //遍历newkey数组
      newObj[newkey[i].toLowerCase()] = temp[newkey[i]];
      //向新创建的对象中按照排好的顺序依次增加键值对
    }
    return newObj; //返回排好序的新对象
  }
}
export default service