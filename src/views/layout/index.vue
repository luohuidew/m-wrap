<template>
  <div id="layout">
    <template v-if="!no_header">
      <div class="page-head"
        v-show="!full_screen">
        <keep-alive>
          <home-header></home-header>
        </keep-alive>
      </div>
      <div class="page-head"
        v-show="full_screen">
        <home-title />
      </div>
    </template>
    <div class="page-body"
      :class="{'in-app':full_screen,'no-header':no_header}">
      <transition :name="transitionName">
        <template v-if="$route.meta.keepAlive">
          <keep-alive>
            <router-view class="child-view"></router-view>
          </keep-alive>
        </template>
        <template v-else>
          <router-view class="child-view"
            :key="new Date().getTime()"></router-view>
        </template>
        <!-- <router-view></router-view> -->
      </transition>

    </div>
    <div class="home-footer"
      v-show="!full_screen">
      <home-footer />
    </div>
    <!-- <div class="auto-login"> -->
    <!-- <login-auto></login-auto> -->
    <!-- </div> -->
  </div>
</template>

<script>
import shareApp from "./components/appShare";
import loginAuto from "@/pages/login/auth/facebook.vue";
import homeHeader from "./components/appHeader";
import homeTitle from "./components/appTitle";
import homeFooter from "./components/appFooter";
export default {
  name: "layout",
  data() {
    return {
      transitionName: "slide-left"
    };
  },
  computed: {
    share_token() {
      return this.$store.state.share_token;
    },
    full_screen() {
      let temp = this.$route.meta.fullScreen;
      if (
        temp ||
        (localStorage.getItem("device") === "ios" ||
          localStorage.getItem("device") === "android")
      ) {
        return true;
      } else {
        return false;
      }
    },
    no_header() {
      let temp = this.$route.meta.noHeader;
      return temp;
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
      // document.title = this.$route.meta.title
      //   ? this.$route.meta.title
      //   : "Weget";
    },
    init_transtion(to, from) {
      /* 设置动画的类名 */
      if (to.path == "/") {
        this.transitionName = "slide-right";
      } else {
        this.transitionName = "slide-left";
      }
    },
    init_device() {
      /* 开局获取设备的壳子 */
      let query_device_type = this.$route.query.device_type;
      if (query_device_type) {
        // debugger;
        localStorage.setItem("device", query_device_type);
      }
    }
  },
  components: {
    loginAuto,
    shareApp,
    homeHeader,
    homeTitle,
    homeFooter
  }
};
</script>

<style lang="scss">
#layout {
  height: 100%;
  /* display: flex; */
  /* height: 100%; */
  // flex-direction: column;
  /* margin-top:50px; */
}
.page-head {
  height: 55px;
  /*background-color: #f3f3f3;*/
}
.page-body {
  /* flex:1; */
  /* 计算高度 */
  height: calc(100% - 100px);
  /*overflow-y: scroll;*/
  /*overflow-scrolling: touch;*/
  &.in-app {
    height: calc(100% - 55px);
  }
  &.no-header {
    height: 100%;
  }
}
/*  */
.home-footer {
  height: 45px;
  overflow: hidden;
}
// .in-app.page-body {
// }
.child-view {
  /* position: absolute; */
  /* left: 0; */
  /* top: 0; */
  width: 100%;
  height: 100%;
  overflow: auto;
  /* height: 100%; */
  // transition: transform 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
// .slide-left-enter,
// .slide-right-leave-active {
//   opacity: 0;
//   -webkit-transform: translate(30px, 0);
//   transform: translate(30px, 0);
// }
// .slide-left-leave-active,
// .slide-right-enter {
//   opacity: 0;
//   -webkit-transform: translate(-30px, 0);
//   transform: translate(-30px, 0);
// }
.auto-login {
  display: none;
}
</style>
