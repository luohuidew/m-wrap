import Vue from 'vue';
// import Meta from 'vue-meta';
// Vue.use(Meta);
const ua = navigator.userAgent.toLowerCase();
console.log(ua);
const CM = {
  goback(that) {
    // Vue.$router.back(-1);
    that.$router.back(-1)
  },
  is_safari() {
    if (ua.indexOf('safari') !== -1 && (ua.indexOf('chrome') == -1) && (ua.indexOf('crios') == -1)) {
      return true;
    } else {
      return false;
    }
  },
  is_ipone() {
    if (ua.indexOf('iphone') !== -1 ) {
      return true;
    } else {
      return false;
    }
  },
  is_weixin() {
    if (ua.indexOf('micromessenger') !== -1) {
      return true;
    } else {
      return false;
    }
  },
  is_snapchat() {
    if (ua.indexOf('snapchat') !== -1) {
      return true;
    } else {
      return false;
    }
  },
  is_ins() {
    // console.log(ua);
    if (ua.indexOf('instagram') !== -1) {
      return true;
    } else {
      return false;
    }
  },
  is_facebook() {
    if (ua.indexOf('fbss') !== -1) {
      return true;
    } else {
      return false;
    }
  },
  is_messenger() {
    if (ua.indexOf('messenger') !== -1) {
      return true;
    } else {
      return false;
    }
  },
  is_weget() {
    let cur_device = localStorage.getItem('device');
    return (cur_device === 'android' || cur_device === 'ios');
  },
  weget_device_link(params) {
    // console.log('device_type_params', params);
    // alert(JSON.stringify(params));
    let cur_device = localStorage.getItem('device');
    if (cur_device === 'android') {
      // alert('我是安卓');
      let temp_params = JSON.stringify(params);
      return window.weget_mobile_type.nativeToJavaScript(temp_params);
    } else if (cur_device === 'ios') {
      return window.webkit.messageHandlers.javaScriptToNative.postMessage(params);
    } else {
      return 'h5';
    }
  }
}
Vue.prototype.$CM = CM;
export default CM;
