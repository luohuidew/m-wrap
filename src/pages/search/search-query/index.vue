<template>
  <div class="search-query">
    <div class="search-input">
      <div class="go-back"
        @click="go_back">
        <img src="/static/img/icon/返回 大@2x.png"
          alt="">
      </div>
      <div class="input-box">
        <input type="text"
          v-focus
          v-model="search_text">
      </div>
      <div class="search-btn"
        @click.stop="to_search(search_text)">
        Search
      </div>
    </div>
    <div class="tab-box">
      <van-tabs v-model="active"
        color="#000"
        :line-height="2">
        <van-tab title="Products">
          <productsPage @search="to_search" />
        </van-tab>
        <van-tab title="Stores">
          <storesPage @search="to_search" />
        </van-tab>
      </van-tabs>
    </div>

  </div>
</template>

<script>
import SEARCH from "@/api/search";
import productsPage from "./components/productsPage"
import storesPage from "./components/storesPage"
export default {
  name: "",
  data() {
    return {
      active: 0,
      search_text: ""
    };
  },
  mounted() {

  },
  computed: {},
  methods: {

    to_search(val) {
      if (val) {
        this.search_text = "";
        let params = undefined;
        if(this.active===0){
          params = {
            path: "/search/search-lists",
            query: {
              title: val,
              page_label: val
            }
          };
        }else {
           params = {
            path: "/search/search-store-lists",
            query: {
              title: val,
            }
          };
        }
        this.$router.push(params);
      }
    },

    go_back() {
      this.$router.go(-1);
    }
  },
  components: {
    productsPage,
    storesPage
  }
};
</script>

<style lang='scss' scoped>
.search-query {
}
.search-input {
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-shadow: 0px 2px 6px 0px #d0d0d0;
  .go-back {
    padding: 0 10px 0 0px;
    img {
      height: 22px;
    }
  }
  .input-box {
    height: 34px;
    border-radius: 17px;
    padding-left: 40px;
    flex: 1;
    background: #f1f1f2 url("/static/img/icon/search3.png") no-repeat 10px
      center;
    background-size: 22px 22px;
    input {
      height: 100%;
      font-size: 14px;
      border: none;
      outline: none;
      background: none;
    }
  }
  .search-btn {
    padding: 6px 10px;
    border: 1px solid #f1f1f2;
    font-weight: bold;
    border-radius: 24px;
    margin-left: 10px;
  }
}
</style>
