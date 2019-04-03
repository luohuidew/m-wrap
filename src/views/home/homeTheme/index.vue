<template>
  <div class="hemo-theme-page"
    v-if="homeData">
    <div class="theme-content">
      <themeHeader :bannerData="homeData.storeBanners" />
    </div>
  </div>
</template>

<script>
import api from "@/api/store";
import themeHeader from "./components/themeHeader";

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
    themeHeader
  }
};
</script>

<style lang='scss' scoped>
</style>
