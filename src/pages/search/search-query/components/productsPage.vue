<template>
  <ul class="search-recommended">
    <li class="history-block"
      v-if="history_lists.length">
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
        <li v-for="(item,index) in hotData"
          :key="index"
          @click="to_cate_search(item.cat_id,item.name)">{{item.name}}</li>
      </ul>
    </li>
  </ul>
</template>

<script>
import SEARCH from "@/api/search";
export default {
  name: "",
  props: {},
  data() {
    return {
      history_lists: [],
      hotData: []
    };
  },
  computed: {},
  created() {
    this.init_data();
  },
  methods: {
    init_data() {
      SEARCH.searchrecord({type:1}).then(res => {
        this.history_lists = res.data.history;
        this.hotData = res.data.hot;
      });
    },
    to_cate_search(cat_id, cat_name) {
      if (cat_id) {
        let params = {
          path: "/search/search-lists",
          query: {
            cat_id: cat_id,
            page_label: cat_name
          }
        };
        this.$router.push(params);
      }
    },
    clear_history() {
      SEARCH.delRecord({type:1}).then(res => {
        this.history_lists = [];
      });
    },
    to_search(val){
      this.$emit('search',val);
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
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
