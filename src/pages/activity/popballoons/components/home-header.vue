<template>
  <div class="home-tips-box">
    <img class="them"
      src="/static/img/christmas/icon/主题@2x.png"
      alt="">
    <div class="rules-tips-box">
      <ac-rules @open="is_rules_show=true"></ac-rules>
    </div>
    <div class="gift-tips-box">     
    <ac-gift></ac-gift>
    </div>
    <rules v-if="is_rules_show" @close="is_rules_show=false"></rules>
  </div>
</template>

<script>
import acRules from "./ac-rules";
import acGift from "./ac-gift";
import rules from "./dialog-rules";
export default {
  name: "",
  data() {
    return {
      is_rules_show: false
    };
  },
  computed: {},
  props: [],
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
  .need-num {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 55%;
    width: 100%;
    color: #fff;
    z-index: 20;
    font-size: 14px;
    span {
      text-align: center;
      &:nth-child(1) {
        font-size: 12px;
      }
    }
  }
  .run-time {
    position: absolute;
    width: 100%;
    height: 24px;
    bottom: 20px;
    left: 0;
    top: 0;
    z-index: 30;
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
    .time-4 {
      left: 132px;
    }
    .time-5 {
      left: 176px;
    }
    .time-7 {
      left: 237px;
    }
    .time-8 {
      left: 281px;
    }
    .time-3 {
      left: 105px;
    }
    .time-6 {
      left: 209px;
    }
  }
  .them {
    width: 100%;
    height: auto;
    position: relative;
    z-index: 20;
  }
  // background: url("/static/img/christmas/主题.png") no-repeat top center;
  // background-size: 100% auto;
  .rules-tips-box {
    position: absolute;
    bottom: 16px;
    right: 2px;
    transform: translateY(100%);
    z-index: 99;   
  }
  .gift-tips-box {
    position: absolute;
    bottom: 16px;
    left: 40px;
    transform: translateY(100%);
    z-index: 99;    
  }
}
.banner-board {
  padding: 0 10px;
  transform: translateY(-120px);
  img {
    width: 100%;
    height: auto;
  }
}
</style>
