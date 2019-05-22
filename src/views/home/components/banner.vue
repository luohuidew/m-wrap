
<template>
  <swiper :options="swiperOption" ref="mySwiper"  v-if="bannerData" class="home-banner-wrap">
    <!-- slides -->
    <swiper-slide  v-for="(item,index) in bannerData"  :key="index">
      <img :src="item.image_url" alt="" srcset="" @click="to_path(item.route)">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        loop : true,
        pagination: {
          el: '.swiper-pagination',
        },
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      },
      banner_lists: this.bannerData
    };
  },
  props:["bannerData"],
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

<style lang='scss' scoped>

     .swiper-pagination-bullets {
      bottom: 0px;
      & /deep/ .swiper-pagination-bullet {
        width:30px;
        height:2px;
        background:rgba(199,199,199,1);
        border-radius:1px;
        &.swiper-pagination-bullet-active{
          background:rgba(74,74,74,1);
        }
      }
    }



  .home-banner-wrap {
  height: 300px;
  & /deep/ .swiper-wrapper {
    height: 280px;
    .swiper-slide {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

}

/*.van-swipe {*/
  /*height: 100%;*/

/*}*/

</style>
