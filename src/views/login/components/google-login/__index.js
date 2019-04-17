import Vue from 'vue'
(function () {
  function err(msg) {
    typeof console !== 'undefined' && console.error(`[g-signin-button] ${msg}`)
  }

  function install(Vue) {
    Vue.component('g-signin-button', {
      name: 'g-signin-button',
      render(createElement) {
        return createElement('div', {
          attrs: {
            class: 'g-signin-button'
          },
          ref: 'signinBtn'
        }, this.$slots.default)
      },
      props: {
        params: {
          type: Object,
          required: true,
          default () {
            return {}
          }
        }
      },
      mounted() {
        (function (d, s, id) { // eslint-disable-line func-names
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s);
          js.id = id;
          js.src = 'https://apis.google.com/js/api:client.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'google-jssdk'));
        if (!window.gapi) {
          err('"https://apis.google.com/js/api:client.js" needs to be included as a <script>.')
          return
        }

        if (!this.params.client_id) {
          err('params.client_id must be specified.')
          return
        }

        window.gapi.load('auth2', () => {
          const auth2 = window.gapi.auth2.init(this.params)
          auth2.attachClickHandler(this.$refs.signinBtn, {}, googleUser => {
            this.$emit('success', googleUser)
          }, error => {
            this.$emit('error', error)
            this.$emit('failure', error) // an alias
          })
        })
      }
    })
  }

  if (typeof exports === 'object') {
    module.exports = install
  } else if (typeof define === 'function' && define.amd) {
    /*global define*/
    define([], function () {
      return install
    })
  } else if (window.Vue) {
    window.Vue.use(install)
  }
})()