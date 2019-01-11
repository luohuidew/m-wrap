<template>
  <div class="home-tips-box">
    <img class="them"
      src="/static/img/popballoons/background/coupon_box.png"
      alt="">
    <!-- <span class="need-persion">{{showData.lessCount}}</span> -->
    <p class="need-num">
      <span>
        Wow! You popped all the balloons! The gift is yours
      </span>
      <!-- <span> Don’t give up, try next time</span> -->
    </p>
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
      time: "00:00:00",
      run_time: [0, 0, 0, 0, 0, 0],
      is_rules_show: false
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
  z-index: 10;
  .need-persion {
    position: absolute;
    left: 156px;
    top: 47px;
    width: 40px;
    height: 22px;
    text-align: center;
    z-index: 30;
    font-size: 18px;
    color: #d5832f;
    font-weight: bold;
  }
  .need-num {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 292px;
    color: #2c2c2c;
    z-index: 20;
    font-size: 22px;
    line-height: 32px;
    span {
      text-align: center;
      // &:nth-child(1) {
      //   font-size: 12px;
      // }
    }
  }
  .run-time {
    position: absolute;
    width: 227px;
    height: 55px;
    bottom: 0%;
    left: 50%;
    z-index: 30;
    background: url("/static/img/popballoons/background/run_time_box.png")
      no-repeat center center;
    background-size: 100%;
    transform: translate(-50%, 60%);
    color: #3d3d3d;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    line-height: 55px;
    // span {
    //   position: absolute;
    //   left: 0;
    //   top: 0;
    //   color: #3d3d3d;
    //   font-size: 30px;
    // }
    .time-pointer {
      font-size: 30px;
      font-weight: normal;
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
    img {
      width: 100%;
      height: auto;
    }
  }
  // background: url("/static/img/christmas/主题.png") no-repeat top center;
  // background-size: 100% auto;
  .rules-tips-box {
    position: absolute;
    bottom: 20px;
    right: -3px;
    transform: translateY(100%);
    z-index: 0;
    img {
      width: 70px;
    }
  }
  .gift-tips-box {
    position: absolute;
    bottom: 26px;
    left: 7px;
    transform: translateY(100%);
    z-index: 50;
  }
}
</style>
