<template>
  <div class="home-theme-page"
    v-if="homeData">
    <div class="cover-box">
      <img :src="homeData.top_image.image_url"
        alt=""
        srcset="">
    </div>
    <div class="theme-content">
      <themeHeader :bannerData="homeData.store_banner" />
    </div>
    <div class="theme-lists-box">
      <cardRow :sku="item"
        v-for="(item) in homeData.product_list"
        :key="item.sku_id" />
    </div>
  </div>
</template>

<script>
import api from "@/api/weget";
import themeHeader from "./components/themeHeader";
import cardRow from "@/components/card-list-row";
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
      api.homeTopic().then(res => {
        this.homeData = res.data;
      });
    }
  },
  components: {
    themeHeader,
    cardRow
  }
};
</script>

<style lang='scss' scoped>
.home-theme-page {
  .cover-box {
    height: 190px;
    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
