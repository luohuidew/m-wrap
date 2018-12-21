<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
      <!-- <router-view></router-view> -->
    </transition>
    <!-- <div class="auto-login"> -->
    <!-- <login-auto></login-auto> -->
    <!-- </div> -->
  </div>
</template>

<script>
import shareApp from "@/components/dialog/share-app";
import loginAuto from "@/pages/login/auth/facebook.vue";
export default {
  name: "App",
  data() {
    return {
      transitionName: "slide-left"
    };
  },
  computed: {
    share_token() {
      return this.$store.state.share_token;
    }
  },
  watch: {
    $route: {
      handler(to, from) {
        document.title = this.$route.meta.title
          ? this.$route.meta.title
          : "Weget";
        if (to.path == "/home/weget") {
          this.transitionName = "slide-right";
        } else {
          this.transitionName = "slide-left";
        }
      },
      immediate: true,
      deep: true
    }
  },
  mounted() {
    // alert(window.weget_mobile_type);
    // alert(window.cookies);
    // if (window.weget_mobile_type === "iOS") {
    //   alert(window.weget_mobile_type);
    //   let params = {
    //     type: 109,
    //     data: {}
    //   };
    //   window.webkit.messageHandlers.javaScriptToNative.postMessage(params);
    //   // alert('to login');
    //   // window.nativeToJavaScript_sendToken = function (res) {
    //   //   // alert(JSON.stringify(res));
    //   //   let token = res.token;
    //   //   setToken(token);
    //   //   if (getToken()) {
    //   //     window.location.reload();
    //   //   }
    //   // }
    // }
  },
  components: {
    loginAuto,
    shareApp
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  /* margin-top:50px; */
}
.child-view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
.auto-login {
  display: none;
}
</style>
