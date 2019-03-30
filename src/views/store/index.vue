<template>
  <div class="store-page">
    <Swiper :datas='bannerData'>
      <template slot="default"
        slot-scope="{item}">
        <div style="width:280px;height:307px">         
          <div class="img-box">
            <img src="" alt="" srcset="">
          </div>
        </div>
      </template>
    </Swiper>
  </div>
</template>

<script>
import Swiper from "@/components/Swiper";
export default {
  name: "",
  props: {},
  data() {
    return {
      bannerData: []
    };
  },
  computed: {},
  created() {},
  methods: {},
  components: {
    Swiper
  }
};
</script>

<style lang='scss' scoped>
</style>
