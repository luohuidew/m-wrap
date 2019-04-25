<template>
  <div id="weget"
    v-if="homeData">
    <banner :bannerData="homeData.home_banner"></banner>
    <category :listsData="homeData.recommend_category"></category>
    <store :bannerData="homeData.store_banner"
      :listsData="homeData.recommend_store"></store>
    <pick :listsData="homeData.influence_pick"></pick>
    <topic :listsData="homeData.topic_data"></topic>
    <scrollCate :listData="homeData.category_row"></scrollCate>
    <van-popup v-model="show">
      <div><h1>2222</h1><h1>2222</h1><h1>2222</h1>
        <h1>2222</h1><h1>2222</h1><h1>2222</h1><h1>2222</h1><h1>2222</h1><h1>2222</h1><h1>2222</h1><h1>2222</h1><h1>2222</h1><h1>2222</h1><h1>2222</h1><h1>2222</h1>
      </div>
    </van-popup>
  </div>
</template>

<script>
import banner from "./components/banner";
import category from "./components/homeCate";
import store from "./components/homeStore";
import pick from "./components/homePick";
import topic from "./components/homeTopic";
import scrollCate from "./components/scrollCate"
import api from "@/api/weget";
export default {
  name: "",
  props: {},
  data() {
    return {
      show: true,
      homeData: undefined,

    };
  },
  computed: {},
  created() {
    this.init_data();
  },
  methods: {
    init_data() {
      api.homeData().then(res => {
        this.homeData = res.data;
      });
    },
  },
  components: {
    banner,
    category,
    store,
    pick,
    topic,
    scrollCate
  }
};
</script>

<style lang='scss' scoped>
#weget {
  position: relative;
  & /deep/ .van-popup{
    position: absolute;
    height: 300px;
    border: 1px solid red;
  }
  background-color: #f3f3f3;
}
h1{
  margin: 50px;
}

</style>
