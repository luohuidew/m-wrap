<template>
  <div class="tree-home-box">
    <img src="/static/img/christmas/星星@2x.png"
      alt=""
      srcset="">
    <div class="tips-info">
      <!-- <img class="you-got-it"
        src="/static/img/christmas/YouGotIt@2x.png"
        alt=""
        srcset=""> -->
      <img src="/static/img/christmas/成功表情@2x.png"
        alt=""
        srcset="">
    </div>
    <div class="btn-click">
      <img src="/static/img/christmas/Checkyourcoupons@2x.png"
        alt=""
        srcset=""
        @click="to_download">
      <img src="/static/img/christmas/TryAgain@2x.png"
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
      this.$router.push({
        name: "christmas-download",
      });
    },
    to_lists() {
      sessionStorage.setItem("temp_status", "5");
      if (sessionStorage.getItem("temp_status") === "5") {
        let params = {
          path: "/activity/christmas-lists"
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
  padding-bottom: 24px;
  position: relative;
  img {
    width: 100%;
    height: auto;
    padding-left:5px;
  }
  .tips-info {
    position: absolute;
    left: 50%;
    top: 33%;
    text-align: center;
    transform: translate(-50%, -50%);
    img {
      display: block;
      width: 104px;
      height: auto;
      margin: 20px auto;
    }
    .you-got-it {
      // display: inline-block;

      width: 160px;
      height: auto;
      margin: 30px auto;
    }
  }
  .btn-click {
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translateX(-50%);
    text-align: center;
    img {
      height: 40px;
      margin-top: 10px;
      width: auto;
    }
  }
}
.banner-board {
  padding: 0 10px;
  // transform: translateY(-42px);
  img {
    width: 100%;
    height: auto;
  }
}
</style>
