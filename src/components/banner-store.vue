<template>
  <div id="banner"
    v-if="bannerData">
    <!-- <el-carousel trigger="click" height="188px">
      <el-carousel-item v-for="(item,index) in banner_lists" :key="index">
        <img :src="item.img_url" alt="" srcset="">
      </el-carousel-item>
    </el-carousel> -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item,index) in bannerData"
        :key="index">
        <img :src="item.mobile_image_url"
          alt=""
          srcset=""
          @click="to_path(item.wap_route)">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import weget from "@/api/weget";
export default {
  data() {
    return {
      banner_lists: this.bannerData
    };
  },
  props:{
    bannerData:{
      type:Array,
      default:undefined
    }
  },
  // props:["bannerData"],
  created() {    
  },
  methods: {
    to_path(path) {
      this.$router.push({ path: path });
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
#banner {
  height: 140px;
  img {
    width: 100%;
    height: 100%;
  }
}
.van-swipe {
  height: 100%;
}
</style>
