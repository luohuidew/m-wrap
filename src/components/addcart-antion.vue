<template>
  <div class="add-cart-antion">
    <!-- 水平运动 -->
    <div class="item" :style='{background:"url("+sku.img_urls[0]+")"}' >
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    created() {
    },
    methods: {

    },
    props:["sku"],
    components: {}
  };
</script>

<style lang="scss" scoped>

  .item{
    width: 26px;
    background-size: cover!important;
    height: 26px;
    left: 10%;
    /*background-color: #000;*/
    border-radius: 50%;
  }
  .add-cart-antion{
    opacity:0;
    position: absolute;
    left: 50%;
    top: 50%;
    animation-fill-mode: both;
    -webkit-animation: ver-animation .4s 0.5s 1;
    -webkit-animation-timing-function:cubic-bezier(.4,0,.99,0);
    animation: ver-animation .4s 0.5s 1;
    animation-timing-function: cubic-bezier(.4,0,.99,0)
  }
  .add-cart-antion .item{
    animation-fill-mode: both;

    animation: hor-animation .4s linear .5s 1;
  }
  @keyframes hor-animation{
    0%{

      transform: translateX(-30px)
    }
    100%{
      transform: translateX(150px)
    }
  }
  @keyframes ver-animation{
    0%{
      opacity:1;
      transform: translateY(0px)
    }

    100%{
      transform: translateY(-340px);
    }
  }
</style>
