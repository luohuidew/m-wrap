<template>
  <div class="home-tips-box"
    v-if="showData">
    <div class="them">
      <img src="/static/img/popballoons/background/coupon_box.png"
        alt="">
    </div>
    <p class="run-time">
      <span>
        {{time[0]}}
        {{time[1]}}
      </span>
      <span class="time-pointer">
        :
      </span>
      <span>
        {{time[3]}}
        {{time[4]}}
      </span>
      <span class="time-pointer">
        :
      </span>
      <span>
        {{time[6]}}
        {{time[7]}}
      </span>
      <!-- <span v-for="(item,index) in time"
        :class="'time-'+(index+1)+''"
        :key="index">{{item}}</span> -->
    </p>
    <!-- <span class="need-persion">{{showData.lessCount}}</span> -->
    <p class="need-num">
      <span>Only {{showData.lessCount}} balloons need to be popped.</span>
      <span> Share to your friends now!!</span>
    </p>
  </div>
</template>

<script>
let timer;
import acRules from "../components/ac-rules";
import acGift from "../components/ac-gift";
import rules from "../components/dialog-rules";
import api from "@/api/newyear";
export default {
  name: "",
  data() {
    return {
      time: 0,
      showData: {}
      // is_rules_show: false
      // time: [0, 0, 0, 0, 0, 0]
    };
  },
  computed: {},
  // props: ["time","showData"],
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {},
  methods: {
    show_dialog(type) {
      console.log(type);
      this.$emit("showrules", type);
    },
    init_data() {
      api.init_info().then(res => {
        console.log(res);
        let diff_time = Math.abs(res.data.remaining_time);
        console.log(diff_time);
        timer = setInterval(() => {
          // console.log(this.time);
          diff_time -= 1;
          if (diff_time < 0) {
            diff_time = 0;
            window.clearInterval(timer);
          }
          this.time = this.timeDiff(diff_time);
        }, 1000);
        this.showData = res.data;
      });
    },
    timeDiff(diff) {
      // var date1 = '2015/05/01 00:00:00'; //开始时间
      // var date2 = new Date(); //结束时间
      // var date3 = date2.getTime() - new Date(date1).getTime(); //时间差的毫秒数
      if (diff < 0) {
        return "00:00:00";
      }
      //------------------------------
      var date3 = diff * 1000;
      //计算出相差天数
      var days = Math.floor(date3 / (24 * 3600 * 1000));

      //计算出小时数

      var leave1 = date3 % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
      var hours = Math.floor(leave1 / (3600 * 1000));
      hours = days * 24 + hours > days * 24 + hours ? hours : days * 24 + hours;
      hours = hours > 9 ? hours : "0" + hours;
      //计算相差分钟数
      var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
      var minutes = Math.floor(leave2 / (60 * 1000));
      minutes = minutes > 9 ? minutes : "0" + minutes;
      //计算相差秒数
      var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
      var seconds = Math.round(leave3 / 1000);
      seconds = seconds > 9 ? seconds : "0" + seconds;
      return hours + ":" + minutes + ":" + seconds;
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
    font-size: 24px;
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
.banner-board {
  padding: 0 10px;
  transform: translateY(-120px);
  img {
    width: 100%;
    height: auto;
  }
}
</style>
