<template>
  <div v-if="bannerData" class="banner">
    <!--<van-icon name="arrow-left" class="arrow" />-->
    <van-swipe :autoplay="5000" :show-indicators="false">
      <van-swipe-item v-for="(item,index) in bannerData"
        :key="index">
        <p class="text" @click="to_path(item.url)">{{item.text}}</p>
      </van-swipe-item>
    </van-swipe>
    <!--<van-icon name="arrow" class="rights" />-->

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
    bannerData: {
      type: Array,
      default: [
        {
          text: 'valued coupons when you sign up',
          url: '/add_address'
        },
        {
          text: 'valued coupons when you sign up44',
          url: '/add_address'
        }
      ]
    }
  },
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
.van-swipe {
  height: 100%;
}
  .banner {
    position: relative;
    .arrow {
      color: #fff;
      height: 12px;
      position: absolute;
      top: 10px;
      left: 0px;
    }
    .rights {
      color: #fff;
      height: 12px;
      position: absolute;
      top: 10px;
      right: 0px;
    }
    .text {
      font-size: 13px;
      width: 85%;
      margin: 0px auto;
      overflow: hidden;
    }
  }
</style>
