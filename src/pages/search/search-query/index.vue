<template>
  <div class="search-query"
    v-if="show_page">
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
    <ul class="search-recommended">
      <li class="history-block">
        <h3>
          <span>{{'Recent Search'.toUpperCase()}}
          </span> <img src="/static/img/icon/delete3.png"
            alt=""
            srcset=""
            @click="clear_history"> </h3>
        <ul>
          <li v-for="(item,index) in history_lists"
            :key="index"
            @click="to_search(item)">{{item}}</li>
        </ul>
      </li>
      <li class="recommend-block">
        <h3>{{'Discover More'.toUpperCase()}}</h3>
        <ul>
          <li>naer</li>
          <li>naer</li>
          <li>naer</li>
          <li>naervvvvvvvvvvvvvvvvvvvvvvvv</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      show_page: true,
      req_data: undefined,
      history_lists: [1, 2, 3],
      recommend_lists: []
    };
  },
  mounted() {},
  computed: {},
  methods: {
    to_search(val) {
      if (val) {
        this.search_text = "";
        let params = {
          path: "/search/search-lists",
          query: {
            title: val,
            page_label: val
          }
        };
        this.$router.push(params);
      }
    },
    clear_history() {
      this.history_lists = [];
    },
    go_back() {
      this.$router.go(-1);
    }
  },
  components: {}
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
.search-recommended {
  padding: 0px 15px;
  h3 {
    font-size: 14px;
    font-weight: normal;
    padding-left: 5px;
    padding-bottom: 8px;
    padding-top: 30px;
  }
  ul {
    li {
      display: inline-block;
      // max-width:160px;
      height: 24px;
      line-height: 24px;
      font-size: 12px;
      overflow: hidden;
      padding: 0 24px;
      background-color: #f3f3f3;
      border-radius: 12px;
      margin: 7px 5px;
      // &:nth-child(1){
      //   margin-left: 0;
      // }
    }
  }
  .history-block {
    h3 {
      display: flex;
      justify-content: space-between;
      img {
        height: 18px;
        width: auto;
      }
    }
  }
}
</style>
