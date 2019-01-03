<template>
  <div class="tree-home-box">
    <div class="bg-pop-box">
      <!-- <img src="/static/img/popballoons/background/big_box_pop.png"
        alt=""> -->
    </div>
    <div class="tips-info">
      <img src="/static/img/popballoons/icon/fun.png"
        alt=""
        srcset="">
    </div>
    <div class="btn-click">
      <img src="/static/img/popballoons/btn/btn-8Checkyourcoupons@2x.png"
        alt=""
        srcset=""
        @click="to_download">
      <img src="/static/img/popballoons/btn/btn-5TryAgain@2x.png"
        alt=""
        srcset=""
        @click="to_lists">
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: ["showData", "uid", "isShow"],
  mounted() {},
  computed: {},
  methods: {
    to_download(id) {
      // this.$router.push({
      //   name: "popballoons-download"
      // });
    },
    to_lists() {
      sessionStorage.setItem("temp_status", "5");
      if (sessionStorage.getItem("temp_status") === "5") {
        let params = {
          name: "popballoons-lists"
        };
        this.$router.push(params);
      }
      // api.init_status({ is_retry: 1 }).then(res => {
      // });
    },
    to_home() {
      if (window.weget_mobile_type === "iOS") {
        let share_params = {
          type: 105,
          data: {}
        };
        window.webkit.messageHandlers.javaScriptToNative.postMessage(
          share_params
        );
      } else {
        this.$router.push("/");
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
      width: 104px;
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
