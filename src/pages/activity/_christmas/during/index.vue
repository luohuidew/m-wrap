<template>
  <div class="christmas"
    v-if="run_time">
    <template v-if="info_type===1">
      <during-header :time="run_time"
        @showrules="show_rules=true"
        :show-data="req_data"></during-header>
      <during-body :uid="user_id"
        :show-data="req_data" :share-info="share_info"></during-body>
    </template>
    <template v-if="info_type===3">
      <success-header @showrules="show_rules=true"></success-header>
      <success-body :uid="user_id"
        :show-data="req_data"
        :is-show="is_show_try" :share-info="share_info"></success-body>
    </template>
    <template v-else-if="info_type===2">
      <fail-header @showrules="show_rules=true"></fail-header>
      <fail-body :uid="user_id"
        :show-data="req_data" :share-info="share_info"></fail-body>
    </template>
    <rule v-show="show_rules"
      @closerules="show_rules=false"></rule>
  </div>
</template>

<script>
let timer;
import api from "@/api/christmas";
import share from '@/api/share'
import successHeader from "./success-header";
import failHeader from "./fail-header";
import successBody from "./success-body";
import failBody from "./fail-body";
import duringHeader from "./during-header";
import duringBody from "./during-body";
import rule from "../components/dialog-rules";
import { Toast } from "vant";
// let login_load = Toast.loading({
//   mask: true,
//   loadingType: "spinner",
//   message: "Loading",
//   duration: 1000
// });
export default {
  name: "",
  data() {
    return {
      info_type: 0,
      run_time: "",
      user_id: "",
      show_rules: false,
      req_data: undefined,
      is_show_try: false,
      share_info:{}
    };
  },
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {},
  methods: {
    init_data() {
      sessionStorage.setItem("from_self", "yes");
      api.init_status().then(res => {
        // console.log(res);
        /* 1.进行，2，失败，3成功 */
        this.user_id = res.data.id;
        // this.info_type = 3;
        this.info_type = res.data.status;
        if (res.data.isShow) {
          this.is_show_try = res.data.isShow;
        }
        return res;
      }).then(res=>{
        console.log();
        let params = {
          share_type:5,
          id:res.data.id,
          user_name:res.data.user_name
        }
        share.getShareInfo(params).then(res=>{
          console.log(res);
          this.share_info = res.data;
        })
      });
      api.init_info().then(res => {
        console.log(res);
        let diff_time = Math.abs(res.data.remaining_time);
        console.log(diff_time);
        timer = setInterval(() => {
          // console.log(this.run_time);
          diff_time -= 1;
          if (diff_time < 0) {
            diff_time = 0;
            window.clearInterval(timer);
          }
          this.run_time = this.timeDiff(diff_time);
        }, 1000);
        this.req_data = res.data;
      });
    },
    to_lists() {
      this.$router.push({ name: "christmas-lists" });
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
    successHeader,
    successBody,
    failBody,
    failHeader,
    duringHeader,
    duringBody,
    rule
  }
};
</script>

<style lang='scss'>
.christmas {
  width: 375px;
  min-width: 100%;
  min-height: 100%;
  // height: 920px;
  // min-width: 100%;
  padding: 0 20px;
  // overflow: auto;
  font-size: 0;
  background: url("/static/img/christmas/首页背景.jpg") no-repeat top center;
  background-size: 100% 100%;
}
.rules-tips-box {
  z-index: 40;
}
</style>
