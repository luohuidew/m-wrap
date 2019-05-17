<template>
  <div class="app-header">
    <ul>
      <template v-if="appHome ||appUser || appTheme || appCart|| appDetail">
        <li class="aside-btn-box">
          <img src="/static/images/icon/header/home-left-icon@3x.png"
            alt=""
            srcset=""
            @click="contractionShow=!contractionShow">
        </li>
      </template>
      <template v-else>
        <li class="aside-btn-box" v-show="!noBack">
          <img src="/static/images/icon/normal/返回 大@2x.png"
            alt=""
            srcset=""
            @click="go_back">
        </li>
      </template>
      <li class="weget-logo" v-if="!appDetail">
        <router-link to="/">
          <img src="/static/images/icon/header/big-logo.png"
            alt=""
            srcset="">
        </router-link>
      </li>

      <li class="weget-logo-detail" v-if="appDetail">
        <router-link to="/">
          <img src="/static/images/icon/header/big-logo.png"
               alt=""
               srcset="">
        </router-link>
      </li>

      <template v-if="appHome||appDetail">
        <li class="setting-icon">
          <a v-if="appDetail" >
            <router-link :to="{path:'/login'}">
              <span class="sign"  v-if="!$store.state.token">Sign in</span>
            </router-link>
            <router-link :to="{path:'/user'}">
              <img class="user-photo" v-if="$store.state.token" :src="photo"
                   alt="">
            </router-link>

          </a>

          <router-link :to="{path:'/search/search-query'}">
            <img src="/static/images/icon/normal/search@2x.png"
              alt="">
          </router-link>

          <router-link v-if="!appDetail" :to="{path:'/search/search-home'}">
            <img src="/static/images/icon/header/home-right-icon@3x.png"
              alt="">
          </router-link>
        </li>
      </template>
      <template v-if="appWelog">
        <!-- <li class="me">
          <span>WELOG</span>
        </li> -->
        <li class="emity-block"></li>
      </template>
      <template v-if="appCart">
        <!-- <li class="me">
          <span>CART</span>
        </li> -->
        <li class="emity-block"></li>
      </template>
      <template v-if="appUser">
        <!-- <li class="me">
          <span>ME</span>
        </li> -->
        <li class="setting-icon">
          <!-- <router-link :to="{path:'/'}"
            :class="{'active':haveMessages}">
            <img class="messages"
              src="/static/images/icon/user/mine_notifi_nav_icon@3x.png"
              alt="">
          </router-link> -->
          <router-link :to="{path:'/user/setting'}">
            <img src="/static/images/icon/user/mine_setting_nav_icon@3x.png"
              alt="">
          </router-link>
        </li>
      </template>
      <template v-if="appTheme">
        <!-- <li class="me">
          <span>{{$route.meta.title.toUpperCase()}}</span>
        </li> -->
        <li class="setting-icon">
          <router-link :to="{path:'/search/search-query'}">
            <img src="/static/images/icon/normal/search@2x.png"
              alt="">
          </router-link>
        </li>
      </template>
    </ul>
    <van-popup v-model="contractionShow"
      position="left"
      :overlay="true">
      <options-box @close="close_href" />
    </van-popup>
  </div>
</template>

<script>
import OptionsBox from "./optionsBox";
export default {
  name: "",
  props: {},
  data() {
    return {
      contractionShow: false,
      searchContent: "",
      haveMessages: true,
      photo:sessionStorage.getItem('photo')
    };
  },
  watch: {
    searchContent: {
      handler(cur, old) {
        if (cur) {
        } else {
          // this.
        }
      }
    }
  },
  mounted(){

  },
  computed: {
    noBack() {
      return this.$route.meta.noBack
    },
    appUser() {
      return this.$route.path === "/user/index";
    },
    appCart() {
      return this.$route.path === "/cart/index";
    },
    appDetail() {
      return this.$route.path === "/detail";
    },
    appHome() {
      return this.$route.path === "/home/index";
    },
    appWelog() {
      return this.$route.path === "/welog/index";
    },
    appCart() {
      return this.$route.path === "/cart/index";
    },
    appTheme() {
      let configs = ["/store/theme", "/home/theme"];
      return configs.indexOf(this.$route.path) !== -1;
    }
  },
  created() {},
  methods: {
    to_search() {
      let href_params = {
        path: "/search/search-query"
      };
      this.$router.push(href_params);
    },
    to_category() {
      let path_params = {
        path: "/search/search-home"
      };
      this.$router.push(path_params);
    },
    close_href(data) {
      let hef_parmas = {
        path: data
      };
      this.contractionShow = false;
      this.$router.push(hef_parmas);
    },
    go_back(){
      this.$router.go(-1);
    }
  },
  components: {
    OptionsBox
  }
};
</script>

<style lang='scss' scoped>
.app-header {
  overflow: hidden;
  & > ul {
    position: relative;
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    & > li {
      img {
        height: 24px;
        width: 24px;
      }
    }
    .weget-logo,.weget-logo-detail {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      img {
        height: 40px;
        width: auto;
      }
    }
  }
  .emity-block {
    width: 24px;
  }
  .aside-btn-box {
  }
  .search-box {
    width: 250px;
    height: 28px;
    border-radius: 15px;
    background: #f3f3f3 url("/static/img/icon/search3.png") no-repeat 10px
      center;
    background-size: 18px;
    padding-left: 40px;
    span {
      height: 100%;
      width: 100%;
      background-color: transparent;
    }
    input {
      height: 100%;
      width: 100%;
      background-color: transparent;
    }
  }
  /*  */
  .contraction-box {
  }
  /*  */
  .me {
    flex: 1;
    text-align: center;
    font-weight: bold;
    // padding-left: 50px;
  }
  .setting-icon {
    img {
      margin-left: 10px;
    }
    .sign{
      font-size: 11px;
      color: #000;
      width:51px;
      height:24px;
      border-radius:2px;
      border:1px solid rgba(0,0,0,1);
      display: inline-block;
      text-align: center;
      line-height: 24px;
      font-weight: bold;
    }
    .active {
      position: relative;
      &::after {
        display: block;
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #d70e19;
      }
    }
  }
}
  .user-photo{
    border-radius: 50%;
  }
  .weget-logo-detail{
    left: 25%!important;
    img{
      width: 77px!important;
      height: 28px!important;
    }
  }
</style>
