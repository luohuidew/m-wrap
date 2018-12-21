// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
require('es6-promise').polyfill();
require('es6-promise/auto');
import router from './router'
import store from './store'
import '@/style/reset.scss'
import '@/style/layout.scss'
import Vant from 'vant';
Vue.use(Vant);
import VueClipboard from 'vue-clipboard2';
Vue.use(VueClipboard);
import '@/utils/request.js'
import 'vant/lib/index.css';
import '@/utils/common'
import '@/utils/filters'
import '@/utils/directives'
// import '@/style/element.scss'
import '@/utils/base'

// import 'firebaseui/dist/firebaseui.css';
// 引入计算页面根元素font-size的大小
import 'amfe-flexible';
// import GoogleAuth from 'vue-google-auth'
// Vue.use(GoogleAuth, { client_id: '253293081814-kjale2iv8235l9i0qfm74md65jdi0eo5.apps.googleusercontent.com' })
// Vue.googleAuth().load()
// 全局执行的base函数
// import '@/utils/base.js'
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')