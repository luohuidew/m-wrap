<template>
  <div class="app-content"
    ref="app_content">
    <div id="banner-box"
      v-show="show_banner">
      <bannerTop :bannerData="topBannerData"></bannerTop>
      <!--<router-link :to="{path:'/about'}"-->
        <!--class="about-us">-->
        <!--<img src="/static/images/elements/home/H5@3x.jpg"-->
          <!--alt=""-->
          <!--srcset="">-->
      <!--</router-link>-->
      <!--<span class="close-banner"-->
        <!--@click="keep_banner=!keep_banner">-->
        <!--<img src="/static/images/icon/header/close-white.png"-->
          <!--alt=""-->
          <!--srcset="">-->
      <!--</span>-->
    </div>
    <div id="layout"
      :class="{'no-banner':!show_banner}">
      <div id="app-header-top"
        v-if="!full_screen">
        <div class="page-head">
          <keep-alive>
            <home-header></home-header>
          </keep-alive>
        </div>
        <!-- <div class="page-head"
        v-show="!home_page">
        <homeTitleOptions />
      </div> -->
      </div>
      <div class="page-body"
        :class="{'in-app':full_screen}">
        <!-- <transition :name="transitionName"> -->
          <!-- <template v-if="$route.meta.keepAlive"> -->

          <!--</template> &ndash;&gt;-->
          <template>
            <keep-alive>
              <router-view v-if="$route.meta.keepAlive" class="child-view"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive" class="child-view" :key="$route.fullPath"></router-view>
          </template>
          <!-- <router-view></router-view> -->
        <!-- </transition> -->

      </div>
      <!--<div class="home-footer"-->
        <!--v-show="home_page && !home_page_no_footer">-->
        <!--<home-footer />-->
      <!--</div>-->

    </div>
  </div>
</template>

<script>
  import { getToken } from "@/utils/auth";
  import shareApp from "./components/appShare";
  import bannerTop from "./components/bannerTop";
  import loginAuto from "@/pages/login/auth/facebook.vue";
  import homeHeader from "./components/appHeader";
  import homeTitleOptions from "./components/appTitleOptions";
  import homeTitle from "./components/appTitle";
  import homeFooter from "./components/appFooter";
  import apiBase from "@/api/base";

  export default {
    name: "layout",
    data() {
      return {
        chachHistory: [],
        topBannerData: [
          {
            text: 'Get $15 in coupons when you sign up!',
            url: '/login?type=signUp',
          }
        ],
        transitionName: "",
        showTopPath: ['/cart/index','/checkout/index']
      };
    },
    computed: {
      show_banner() {
        return !this.full_screen && !this.showTopPath.includes(this.$route.fullPath);
      },
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
      home_page() {
        let home_page_lists = [
          "/home/index",
          "/user/index",
          "/welog/index",
          // "/cart/index",
          "/store/theme",
          "/home/theme"
        ];
        return home_page_lists.indexOf(this.$route.path) !== -1;
      },
      home_page_no_footer() {
        let home_page_lists = ["/store/theme", "/home/theme"];
        return home_page_lists.indexOf(this.$route.path) !== -1;
      }
    },
    watch: {
      $route: {
        handler(to, from) {
          this.init_meta();
          this.visitSaveLog();
          this.init_transtion(to, from);
          // debugger;
          this.init_device();
        },
        immediate: true,
        deep: true
      }
    },
    created() {
      if (getToken()) {
        this.$store.dispatch('SetToken', getToken()).then(()=> {})
        // CART.getCartNum().then(res => {
        //   this.$store.commit("SET_CATR", res.data.num);
        // });
      }
    },
    mounted() {
      // console.log("路由参数", this.$route.query.device_type);
      // const ua = navigator.userAgent.toLowerCase();
      // alert(ua);
    },
    methods: {
      visitSaveLog() {
        apiBase.visitSaveLog().then(()=>{})
      },
      init_meta() {
        // document.title = this.$route.meta.title
        //   ? this.$route.meta.title
        //   : "Weget";
      },
      get_scroll_event(data) {
        // console.log(this.$refs['app_content']);
      },
      init_transtion(to, from) {
        const toPath = to.path
        const formPath = from && from.path
        if (from && (toPath === formPath)) {
          this.transitionName = "";
          return
        }
        if(toPath.includes('/home/index') && this.chachHistory.length>0) {
          this.transitionName = "slide-move-right";
          this.chachHistory = []
          return
        }
        if (from) {
          const index = this.chachHistory.indexOf(toPath)
          if (index !== -1) {
            this.transitionName = "slide-move-right";
            const index2 = this.chachHistory.indexOf(formPath)
            this.chachHistory.splice(index2, 1)
          } else {
            this.transitionName = "slide-move-left";
            this.chachHistory.push(toPath)
          }
        }

        console.log(this.chachHistory, 888)

        /* 设置动画的类名 */

        // if (to.path == "/") {
        //   this.transitionName = "slide-move-right";
        // } else {
        //   this.transitionName = "slide-move-left";
        // }
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
      bannerTop,
      loginAuto,
      shareApp,
      homeHeader,
      homeTitle,
      homeTitleOptions,
      homeFooter
    }
  };
</script>

<style lang="scss">
.app-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}
#banner-box {
  height: 33px;
  background: black;
  color: #fff;
  text-align: center;
  line-height: 33px;
  padding: 0px 10px;
  transition: all 0.5s;
  // overflow: hidden;
  .close-banner {
    position: absolute;
    right: 4px;
    top: 4px;
    width: 20px;
    height: 20px;
    // background-color: #ffffff;
    border-radius: 50%;
    opacity: 0.8;
    text-align: center;
    img {
      height: 14px;
      vertical-align: center;
    }
  }
  .about-us {
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      // max-height: 60px;
    }
  }
}
#layout {
  // flex: 1;
  height: calc(100% - 33px);

  &.no-banner {
    height: 100%;
  }
  /* display: flex; */
  /* height: 100%; */
  // flex-direction: column;
  /* margin-top:50px; */
}
#app-header-top {
  height: 55px;
  border-bottom: 2px solid #f8f8f8;
}
.page-head {
  height: 53px;
  /*background-color: #f3f3f3;*/
}
.page-body {
  /* flex:1; */
  /* 计算高度 */
  height: calc(100% - 55px);
  overflow: auto;
  /*overflow-y: scroll;*/
  /*overflow-scrolling: touch;*/
  &.in-app {
    height: 100%;
  }
  &.home-page {
    height: calc(100% - 100px);
    // padding-top: 5px;
  }
  &.home-page-no-footer {
    height: calc(100% - 55px);
    // padding-top: 5px;
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
   /*position: absolute;*/
   /*left: 0;*/
   /*top: 0;*/

  width: 100%;
  height: 100%;
  overflow: auto;
  /* height: 100%; */
  /*transition: transform 23.5s cubic-bezier(0.55, 0, 0.1, 1);*/
}
.slide-move-left-enter-active {
  transform: translate(0, 0);
}

 .slide-move-left-enter,
 .slide-move-right-leave-active{
   opacity: 0.1;
   -webkit-transform: translate(100px, 0);
   transform: translate(100px, 0);
 }
  .slide-move-right-enter,
  .slide-move-left-leave-active{
    opacity: 0.1;
   -webkit-transform: translate(-100px, 0);
   transform: translate(-100px, 0);
 }
.auto-login {
  display: none;
}
</style>
