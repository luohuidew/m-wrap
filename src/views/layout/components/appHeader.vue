<template>
  <div class="app-header">
    <ul>
      <div>
        <template v-if="is_ins">
          <li v-if="appHome" class="aside-btn-box">
            <img src="/static/images/icon/header/home-left-icon@3x.png"
                 alt=""
                 srcset=""
                 @click="contractionShow=!contractionShow">
          </li>
          <li v-else class="aside-btn-box">
            <img src="/static/images/icon/normal/返回 大@2x.png"
                 alt=""
                 srcset=""
                 @click="go_back">
          </li>
        </template>
        <template v-else>
          <li v-if="checkOut" class="aside-btn-box">
            <img src="/static/images/icon/normal/返回 大@2x.png"
                 alt=""
                 srcset=""
                 @click="go_back">
          </li>
          <li v-if="!checkOut" class="aside-btn-box">
            <img src="/static/images/icon/header/home-left-icon@3x.png"
                 alt=""
                 srcset=""
                 @click="contractionShow=!contractionShow">
          </li>
        </template>


        <li class="weget-logo">
          <router-link to="/">
            <img src="/static/images/icon/header/big-logo.png"
                 alt=""
                 srcset="">
          </router-link>
        </li>
      </div>
      <div>
        <template v-if="!checkOut">
          <li class="setting-icon">
            <a>
              <span class="sign" @click="goLogin" v-if="!$store.state.token">Sign in</span>
              <router-link :to="{path:'/user'}">
                <img class="user-photo" v-if="$store.state.token" :src="userInfo.photo" alt="">
              </router-link>
            </a>

            <router-link :to="{path:'/search/search-query'}">
              <img class="search" src="/static/images/icon/normal/search@2x.png">
            </router-link>

            <router-link :to="{path:'/cart/index'}" class="car-warp" :class="{'have-goods':storeCartNum}">
              <span>{{storeCartNum}}</span>
              <img class="cart" src="/static/images/icon/header/H5-购物车@3x.png" alt="">
            </router-link>
          </li>
        </template>

      </div>
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
      is_ins : this.$CM.is_ins(),
      contractionShow: false,
      searchContent: "",
      haveMessages: true,
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
    storeCartNum() {
      return this.$store.state.cart.goods_num;
    },
    userInfo() {
      return this.$store.state.user
    },
    // noBack() {
    //   return this.$route.meta.noBack
    // },
    // appUser() {
    //   return this.$route.path === "/user/index";
    // },
    // appDetail() {
    //   return this.$route.path === "/detail";
    // },
    appHome() {
      return this.$route.path === "/home/index";
    },
    // appWelog() {
    //   return this.$route.path === "/welog/index";
    // },
    checkOut() {
      return this.$route.path === "/checkout/index";
    },
    // appTheme() {
    //   let configs = ["/store/theme", "/home/theme"];
    //   return configs.indexOf(this.$route.path) !== -1;
    // }
  },
  created() {
  },
  methods: {
    goLogin() {
      let href_params = {
        path: "/login",
        query:{
          redirect: this.$route.path ==='/login/index'? undefined: this.$route.fullPath
        }
      };
      this.$router.push(href_params);
    },
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
  height: 100%;
  padding: 0 20px;
  & > ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    div {
      align-items: center;
      display: flex;
      height: 100%;
      a{
        display: inline-block;
      }
      .car-warp {
        position: relative;
        span{
          display: none;
        }
        &.have-goods{
          span {
            position: absolute;
            right:-7px;
            top:-5px;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #D70E19;
            color: #fff;
            font-size: 10px;
          }
        }
      }

      li {
        display: inline-block;
      }
      .aside-btn-box {
        img {
          width: 23px;
        }
      }
      .weget-logo {
        margin-left: 14px;
        img {
          height: auto;
          width: 77px;
        }
      }
      .setting-icon {
        img.user-photo{
          width: 25px;
          height: 25px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 14px;
        }
         img.search {
           margin-right: 14px;
           width: 24px;
           height: 24px;
        }
        img.cart {
          width: 24px;
          height: 24px;
        }
        .sign{
          margin-right: 14px;
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
        .seeting {
          height: 24px;
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
  }
  .emity-block {
    width: 24px;
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
