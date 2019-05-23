<template>
  <div class="store-page"
    v-if="homeData">

    <div class="theme-content">
      <themeHeader :bannerData="homeData.storeBanners" />
      <themeCate :cateData="homeData.recommendCateStores" />
      <themeHot :hotData="homeData.hotSkuList" />
      <scrollCate :listData="homeData.categoryList" />
    </div>
  </div>
  
</template>

<script>
import api from "@/api/store";
import themeHeader from "./components/themeHeader";
import themeCate from "./components/themeCate";
import themeHot from "./components/themeHot";
import scrollCate from "@/views/home/components/scrollCate"
export default {
  name: "",
  props: {},
  data() {
    return {
      homeData: undefined
    };
  },
  computed: {},
  created() {
    this.init_data();
  },
  methods: {
    init_data() {
      api.getThemeStoreInfo().then(res => {
        this.homeData = res.data;
      });
    }
  },
  components: {
    themeHeader,
    themeCate,
    themeHot,
    scrollCate
  }
};
</script>

<style lang='scss' scoped>
</style>
