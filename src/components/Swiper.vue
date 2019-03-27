<template>
  <swiper :options="swiperOption" ref="mySwiper"  class="wrap-banner">
    <!-- slides -->
    <swiper-slide class="slide" v-for="(item, index) in datas" :key="index">
      <slot v-bind:item="item">
        <!-- 后备内容 -->
      </slot>
    </swiper-slide>
    <!-- Optional controls -->
  </swiper>
</template>
<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        // datas2: [
        //   {text: 1},
        //   {text: 2},
        //   {text: 3},
        // ],
        swiperOption: {
          watchSlidesProgress: true,
          slidesPerView : 1.5,
          centeredSlides : true,
          loop:true,
          loopAdditionalSlides:2,
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          on: {
            progress: function() {
              var swiper = this;
              for (var i = 0; i < swiper.slides.length; i++) {
                let slideProgress = swiper.slides[i].progress; // -1 0 1 2
                let scale = 1-Math.abs(slideProgress)*0.2;
                swiper.slides[i].style.transform =
                        "scale(" + scale + ")";
              }
            },
          },
        }
      }
    },
    props: {
      datas: {
        required: true,
        type: Array,
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
};
</script>

<style lang="scss" scoped>
.wrap-banner{
  padding: 20px 0px;
  background:rgba(74,74,74,1);
  .slide{
    background: #fff;
    width: 100%;
    text-align: center;
  }

}
</style>
