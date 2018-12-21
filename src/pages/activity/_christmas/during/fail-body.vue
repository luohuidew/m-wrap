<template>
  <div class="tree-home-box">
    <img class="bg-img"
      src="/static/img/christmas/lightsetup@2x的副本.png"
      alt=""
      srcset="">
    <div class="tips-info">
      <img class="you-got-it"
        src="/static/img/christmas/Sorry,TimesUp.Treewasnotlitintime@2x.png"
        alt=""
        srcset="">
      <img src="/static/img/christmas/失败表情@2x.png"
        alt=""
        srcset="">
    </div>
    <div class="btn-click">
      <img src="/static/img/christmas/TryAgain@2x.png"
        alt=""
        srcset=""
        @click="to_lists">
      <img src="/static/img/christmas/Sharewithyourfriends@2x.png"
        alt=""
        srcset=""
        @click="to_share(uid)">
    </div>
    <div class="banner-board"
      @click.stop="to_home">
      <img class="board-img"
        src="/static/img/christmas/广告.png"
        alt=""
        srcset="">
    </div>
  </div>
</template>

<script>
import api from "@/api/christmas";
export default {
  name: "",
  data() {
    return {};
  },
  props: ["uid","shareInfo"],
  mounted() {},
  computed: {},
  methods: {
    to_lists() {
      // alert(55);
      let params = {
        path: "/activity/christmas-lists",
        query: {
          try: "hash"
        }
      };
      this.$router.push(params);
    },
    to_share(cuid) {
       if (window.weget_mobile_type === "iOS") {
        let share_params = {
          type: 102,
          data: this.shareInfo
        };
        window.webkit.messageHandlers.javaScriptToNative.postMessage(
          share_params
        );
      } else {
        let params = {
          path: "/activity/christmas-groupbuy",
          query: {
            id: cuid
          }
        };
        this.$router.push(params);
      }
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
  .bg-img {
    transform: translateY(-50px);
    width: 100%;
    height: auto;
    margin-left: 5px;
  }
  .tips-info {
    position: absolute;
    left: 50%;
    top: 150px;
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
    position: absolute;
    left: 50%;
    top: 318px;
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
  position: absolute;
  bottom: 0px;
  left: 0;
  // transform: translateY(-42px);
  img {
    width: 100%;
    height: auto;
  }
}
</style>
