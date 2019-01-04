<template>
  <div class="pop-home">
    <template>
      <!-- <home-header></home-header> -->
      <home-body></home-body>
    </template>    
  </div>
</template>

<script>
import homeBody from "./components/home-body";
export default {
  name: "",
  data() {
    return {
    };
  },
  created() {
  },
  mounted() {
    // alert(window.webkit);
  },
  computed: {},
  components: {
   
    homeBody,
  }
};
</script>

<style lang='scss'>
.pop-home {
  // width: 375px;
  // min-width: 100%;
  // min-height: 100%;
  // height: 920px;
  // // min-width: 100%;
  // padding: 0 20px;
  // overflow: hidden;
  // font-size: 0;
  // background: url("/static/img/christmas/首页背景.jpg") no-repeat top center;
  // background-color: #333;
  // padding: 0 30px;
  // background-size: 100% 100%;
}
</style>
