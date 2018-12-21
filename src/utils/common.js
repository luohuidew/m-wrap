import Vue from 'vue';
// import Meta from 'vue-meta';
// Vue.use(Meta);
const ua = navigator.userAgent.toLowerCase();
const CM = {
  goback(that) {
    // Vue.$router.back(-1);
    that.$router.back(-1)
  },
  is_weixn() {
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
    if (ua.indexOf('fbav') !== -1) {
      return true;
    } else {
      return false;
    }
  }, 
}
Vue.prototype.$CM = CM;
export default  CM;