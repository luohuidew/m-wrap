<template>
  <div class="accept">
    <template v-if="is_https">
      <iframe class="pay-frame"
        ref="payAccept"
        :src="'/pay/pay.html?order_no='+order_no+'&total='+total"
        frameborder="0"></iframe>
    </template>
    <template v-else>
      <iframe class="pay-frame"
        ref="payAccept"
        :src="'/pay/pay.1.html?order_no='+order_no+'&total='+total"
        frameborder="0"></iframe>
    </template>
    <div class="loading-box"
      v-if="show_loading">
      <!-- <img src="/static/img/icon/logo 白大.png" alt=""> -->
      <!-- <van-loading color="white" /> -->
      <div class="loading-tips">
        <van-loading color="#d70e19"
          size="60px" />
      </div>
      <div class="loading-content">
        <p>
          Payment is loading
        </p>
      </div>
      <!-- <van-loading color="white" /> -->
    </div>
  </div>
</template>

<script>
// import { Loading } from "vant";
// import "./helper.js";
// import { vanLoading } from "vant";
let res;
window.close = function(response) {
  // console.log(66666);
  console.log(response);
  if (response.code == 1000) {
    window.location.replace(
      window.location.origin + "/callback?order_no=" + response.data.order_no
    );
  }else {
    // alert(response.message);
    // let callback_url = window.location.origin + '/pay' +  window.location.search;
    // console.log(callback_url);
    setTimeout(()=>{
      window.history.go(-1);
      // window.location.replace(callback_url);
    },3000);
  }
};
export default {
  name: "",
  data() {
    return {
      order_no: this.$route.query.order_no,
      total: this.$route.query.total,
      show_loading: true
    };
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this.init_data();
    }, 0);
  },
  computed: {
    is_https() {
      return window.location.protocol === "https:" ? true : false;
    }
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log(from);
    // next();
  },
  methods: {
    init_data() {
      if (sessionStorage.getItem("core_reload") === "yes") {
        this.send_data();
      } else {
        // let loading_wait = Toast.loading({
        //   mask: true,
        //   loadingType: "spinner",
        //   // duration：4000,
        //   message: "Loading"
        // });
        // this.show_loading = false
        sessionStorage.setItem("core_reload", "yes");
        setTimeout(() => {
          // loading_wait.clear();
          window.location.reload();
        }, 3000);
      }
    },
    send_data() {
      var childWindow = document.querySelector(".pay-frame").contentWindow; //表示获取了嵌入在iframe中的子页面的window对象。  []将JQuery对象转成DOM对象，用DOM对象的contentWindow获取子页面window对象。
      // var childWindow = this.refs['payAccept'];
      // console.log(childWindow);
      /* 删除倒计时flag重新开始 */
      this.show_loading = false;
      sessionStorage.removeItem("timer_goback");
      sessionStorage.removeItem("core_reload");
      res = {
        type: 1000,
        data: {
          device_type: "web",
          token: "xxxxxxxxx",
          order_no: this.$route.query.order_no,
          price: this.$route.query.total
        }
      };
      // console.log(childWindow);
      // setTimeout(res => {
      //   childWindow.nativeToJavaScript(res);
      // }, 300);
      // childWindow.nativeToJavaScript(); //调用子页面中的subFunction方法。
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.accept {
  height: 100vh;
}
.pay-frame {
  height: 100%;
  width: 100%;
}
.loading-box {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #fff;
  left: 0;
  top: 0;
}
.loading-tips {
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
}
.loading-content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #000;
  width: 100%;
  font-size: 20px;
  text-align: center;
}
</style>
