<template>
  <div class="page">
    <div class="box">
      <img :src="cur_img"
        alt="">
    </div>
    <p class="text">Application successful</p>
    <card></card>
  </div>
</template>
<script>
import api from "@/api/trial";
import card from './common-card'
export default {
  name: "submit",
  data() {
    return {
      datas: []
    };
  },
  computed: {
    cur_img() {
      return sessionStorage.getItem("cur_img");
    }
  },
  created() {},
  mounted() {},
  methods: {
    to_share() {
      if (window.weget_mobile_type === "iOS") {
        let share_params = {
          type: 102,
          data: {}
        };
        window.webkit.messageHandlers.javaScriptToNative.postMessage(
          share_params
        );
      } else {
        sessionStorage.setItem("share", "yes");
        this.$router.push({ name: "free", query: { type: "share" } });
      }
    }
  },
  components:{
    card
  }
};
</script>
<style lang="scss" scoped>
html {
  background: rgba(243, 243, 243, 1);
}
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
    text-align: center;
    font-size: 16px;
    font-family: PingFangSC-Semibold;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
    margin-bottom: 20px;
    padding:20px 70px;
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