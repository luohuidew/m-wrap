import Vue from 'vue'
import App from './App'
// import './cube-ui.js'
require('es6-promise').polyfill();
require('es6-promise/auto');
import router from './router'
import store from './store'
// import BScroll from 'better-scroll'
// 引入计算页面根元素font-size的大小
import 'amfe-flexible';
// import Cube from 'cube-ui'
// Vue.use(Cube)
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import VueScrollLock from 'vue-scroll-lock'

Vue.use(VueScrollLock)

import VueClipboard from 'vue-clipboard2';
Vue.use(VueClipboard);

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper, /* { default global options } */);

// import LazyLoad from '@/utils/imgLazy.js'
// Vue.use(LazyLoad);

import '@/style/reset.scss'
import '@/style/layout.scss'

import '@/utils/request.js'
import '@/utils/common'
import '@/utils/filters'
import '@/utils/directives'
import '@/utils/base'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
