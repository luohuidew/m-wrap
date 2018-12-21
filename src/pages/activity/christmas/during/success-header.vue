<template>
  <div class="home-tips-box">
    <img class="them"
      src="/static/img/christmas/icon/主题@2x_67.png"
      alt="">    
    <div class="rules-tips-box">
      <ac-rules @open="is_rules_show=true"></ac-rules>
    </div>
    <div class="gift-tips-box">
      <ac-gift></ac-gift>
    </div>
    <rules v-if="is_rules_show"
      @close="is_rules_show=false"></rules>
  </div>
</template>

<script>
import acRules from "../components/ac-rules";
import acGift from "../components/ac-gift";
import rules from "../components/dialog-rules";
export default {
  name: "",
  data() {
    return {
      run_time: [0, 0, 0, 0, 0, 0],
      is_rules_show:false
    };
  },
  mounted() {},
  computed: {},
  methods: {
    show_dialog(type) {
      console.log(type);
      this.$emit("showrules", type);
    }
  },
  components: {
    acRules,
    acGift,
    rules
  }
};
</script>

<style lang='scss' scoped>
.home-tips-box {
  width: 320px;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 5;
  .run-time {
    position: absolute;
    width: 100%;
    height: 24px;
    bottom: 20px;
    left: 0;
    span {
      position: absolute;
      left: 0;
      top: 0;
      font-size: 18px;
      font-weight: bold;
      color: #fff;
    }
    .time-1 {
      left: 28px;
    }
    .time-2 {
      left: 72px;
    }
    .time-3 {
      left: 132px;
    }
    .time-4 {
      left: 176px;
    }
    .time-5 {
      left: 237px;
    }
    .time-6 {
      left: 281px;
    }
    .point-1 {
      left: 105px;
    }
    .point-2 {
      left: 209px;
    }
  }
  .them {
    width: 100%;
    height: auto;
  }
  // background: url("/static/img/christmas/主题.png") no-repeat top center;
  // background-size: 100% auto;
  .rules-tips-box {
    position: absolute;
    bottom: 20px;
    right: -3px;
    transform: translateY(100%);
    img {
      width: 70px;
    }
  }
  .gift-tips-box {
    position: absolute;
    bottom: 26px;
    left: 7px;
    transform: translateY(100%);
    z-index: 99;
  }
}
</style>
