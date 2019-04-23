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
      <div></div>
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
      show: false,
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
  background-color: #f3f3f3;
}
</style>
