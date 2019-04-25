import facebookLogin from './index.vue'
export const facebookLoginPlugin = {
  install: function (Vue, options) {
    Vue.component(facebookLogin.name, facebookLogin)
  }
}
export default facebookLogin
