<template>
  <div class="app-header">
    <ul>
      <li class="aside-btn-box">
        <img src="/static/images/icon/header/home-left-icon@3x.png"
          alt=""
          srcset=""
          @click="contractionShow=!contractionShow">
      </li>
      <li class="search-box _bgf3" @click="to_search">
        <span></span>        
      </li>
      <li class="get-more-box"
        @click="to_category">
        <img src="/static/images/icon/header/home-right-icon@3x.png"
          alt=""
          srcset="">
      </li>
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
      searchContent: ""
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
  computed: {},
  created() {},
  methods: {
    to_search() {
      let href_params = {
        path:'/search/search-query'
      }
      this.$router.push(href_params);
    },
    to_category() {
      let path_params = {
        path: "/category"
      };
      this.$router.push(path_params);
    },
    close_href(data) {
      let hef_parmas = {
        path: data
      };
      this.contractionShow = false;
      this.$router.push(hef_parmas);
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
}
</style>
