<template>
  <div class="app-header">
    <ul>
      <li class="aside-btn-box">
        <img src="/static/images/icon/header/home-left-icon@3x.png"
          alt=""
          srcset=""
          @click="contractionShow=!contractionShow">
      </li>
      <li class="search-box _bgf3">
        <input type="text"
          @keyup.enter="to_search(searchContent)"
          v-model="searchContent">
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
      <options-box />
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
    to_search(val) {
      alert(val);
    },
    to_category() {
      let path_params = {
        path: "/category"
      };
      this.$router.push(path_params);
    }
  },
  components: {
    OptionsBox
  }
};
</script>

<style lang='scss' scoped>
.app-header {
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
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
