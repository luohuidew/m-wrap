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
        this.init_meta();
        this.init_transtion(to, from);
        // debugger;
        this.init_device();
      },
      immediate: true,
      deep: true
    }
  },
  created() {
    // let query_device_type = this.$route.query.device_type;
    // console.log(query_device_type);
    // console.log(this.$route);
    // console.log(window.location.href);
    // debugger;
  },
  mounted() {
    // console.log("路由参数", this.$route.query.device_type);
    // const ua = navigator.userAgent.toLowerCase();
    // alert(ua);
  },
  methods: {
    init_meta() {
      document.title = this.$route.meta.title
        ? this.$route.meta.title
        : "Weget";
    },
    init_transtion(to, from) {
      if (to.path == "/home/weget") {
        this.transitionName = "slide-right";
      } else {
        this.transitionName = "slide-left";
      }
    },
    init_device() {
      let query_device_type = this.$route.query.device_type;
      if (query_device_type) {
        // debugger;
        localStorage.setItem("device", query_device_type);
      }
    }
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
