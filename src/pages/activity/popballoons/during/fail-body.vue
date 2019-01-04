<template>
  <div class="tree-home-box">
    <div class="bg-pop-box">
      <!-- <img src="/static/img/popballoons/background/big_box_pop.png"
        alt=""> -->
    </div>
    <div class="tips-info">
      <img src="/static/img/popballoons/icon/sad.png"
        alt=""
        srcset="">
    </div>
    <div class="btn-click">
      <img src="/static/img/popballoons/btn/btn-5TryAgain@2x.png"
        alt=""
        srcset=""
        @click="to_lists">
    </div>
  </div>
</template>

<script>
import api from "@/api/newyear";
export default {
  name: "",
  data() {
    return {};
  },
  props: ["uid"],
  mounted() {},
  computed: {},
  methods: {
    to_lists() {
      // alert(55);
      sessionStorage.setItem("temp_status", "5");
      if (sessionStorage.getItem("temp_status") === "5") {
        let params = {
          path: "/activity/popballoons/popballoons-lists"
        };
        this.$router.push(params);
      }
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.tree-home-box {
  width: 100%;
  // padding-left: 24px;
  position: relative;
  z-index: 0;
  // transform: translateY(-73px);
  .bg-pop-box {
    width: 230px;
    height: 400px;
    margin: 0 auto;
    text-align: center;
    background: url("/static/img/popballoons/background/big_box_pop.png")
      no-repeat center bottom;
    background-size: 100% auto;
    & > img {
      width: 100%;
      height: auto;
      // min-height: 520px;
      // padding-left: 5px;
    }
  }
  .tips-info {
    position: absolute;
    left: 50%;
    top: 280px;
    text-align: center;
    transform: translate(-50%, -50%);
    img {
      width: 140px;
      height: auto;
    }
    .you-got-it {
      // display: inline-block;
      width: 160px;
      height: auto;
      margin-bottom: 20px;
      // margin: 0 auto;
    }
  }
  .btn-click {
    // position: absolute;
    // left: 50%;
    // top: 330px;
    // transform: translateX(-50%);
    text-align: center;
    img {
      height: 50px;
      margin-top: 10px;
      width: auto;
    }
  }
}
#app .dialog-tips {
  transform: translateY(100%);
  background-color: transparent;
}
</style>
