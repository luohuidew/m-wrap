<template>
  <div class="page">
    <template v-if="is_ios">
      <p class="link"
        @click="to_share">Share with friends</p>
      <p class="link-blank"
        @click="to_home">Return Home</p>
    </template>
    <p class="link"
      @click="to_list"
      v-else>Return Lists & Share </p>

  </div>
</template>

<script>
import api from "@/api/trial";
import product from "@/api/share";
export default {
  name: "submit",
  data() {
    return {
      is_ios: false,
      share_info: undefined
    };
  },
  computed: {
    cur_img() {
      return sessionStorage.getItem("cur_img");
    }
  },
  created() {},
  mounted() {
    if (window.weget_mobile_type === "iOS") {
      this.is_ios = true;
    }
    product.getShareInfo({ share_type: 4 }).then(res => {
      this.share_info = res.data;
    });
  },
  methods: {
    to_home() {
      let share_params = {
        type: 105,
        data: {}
      };
      window.webkit.messageHandlers.javaScriptToNative.postMessage(
        share_params
      );
    },
    to_list() {
      // if (window.weget_mobile_type === "iOS") {
      //   let share_params = {
      //     type: 102,
      //     data: {}
      //   };
      //   window.webkit.messageHandlers.javaScriptToNative.postMessage(share_params);
      // } else {
      //   }
      sessionStorage.setItem("share", "yes");
      this.$router.replace({ name: "free", query: { type: "share" } });
    },
    to_share() {
      if (window.weget_mobile_type === "iOS") {
        let share_params = {
          type: 102,
          data: this.share_info
        };
        window.webkit.messageHandlers.javaScriptToNative.postMessage(
          share_params
        );
      } else {
        sessionStorage.setItem("share", "yes");
        this.$router.push({ name: "free", query: { type: "share" } });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  .box {
    width: 98px;
    height: 98px;
    background: #979797;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    margin: 43px auto 23px;
    img {
      height: 100%;
      width: auto;
    }
  }
  .text {
    width: 100%;
    text-align: left;
    font-size: 16px;
    font-family: PingFangSC-Semibold;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
    margin-bottom: 20px;
    padding: 20px 70px;
  }
  .link {
    width: 250px;
    height: 40px;
    margin: 0 auto;
    text-align: center;
    line-height: 40px;
    color: #fff;
    background: #d70e19;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    font-size: 16px;
    font-family: PingFangSC-Semibold;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
  }
  .link-blank {
    width: 250px;
    height: 40px;
    margin: 30px auto;
    text-align: center;
    line-height: 40px;
    color: #fff;
    background: #000;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    font-size: 16px;
    font-family: PingFangSC-Semibold;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
  }
}
</style>