<template>
  <div class="christmas"
    v-if="show_home">
    <template>
      <home-header :time="run_time"
        @showrules="show_rules=true"></home-header>
      <home-body :uid="user_id"></home-body>
    </template>
    <rule v-show="show_rules"
      @closerules="show_rules=false"></rule>
  </div>
</template>

<script>
import { getToken, removeToken, setToken } from "@/utils/auth";
import { Toast } from "vant";
if (sessionStorage.getItem("have_req") !== "yes") {
  let login_load = Toast.loading({
    mask: true,
    loadingType: "spinner",
    message: "Loading"
  });
}
setTimeout(() => {
  // alert(window.weget_mobile_type === "iOS");
  // alert(sessionStorage.getItem("have_req") !== "yes");
  if (
    window.weget_mobile_type === "iOS" &&
    sessionStorage.getItem("have_req") !== "yes"
  ) {
    // if (window.weget_mobile_type === "iOS" && !getToken()) {
    // alert('jinlai');
    let params = {
      type: 109,
      data: {}
    };
    sessionStorage.setItem("have_req", "yes");
    window.webkit.messageHandlers.javaScriptToNative.postMessage(params);
  }
}, 2000);
import api from "@/api/christmas";
import homeHeader from "./home-header";
import homeBody from "./home-body";
import rule from "./components/dialog-rules";
export default {
  name: "",
  data() {
    return {
      run_time: "",
      user_id: "",
      show_rules: false,
      show_home: false
    };
  },
  created() {
    this.init_data();
  },
  mounted() {
    // alert(window.webkit);
  },
  computed: {},
  methods: {
    init_data() {
      if (getToken()) {
        api.init_status().then(res => {
          if (res.data.status !== 0 && !this.$route.query.try) {
            // window.location.href = window.location.origin + '/activity/christmas-during'
            this.$router.replace({ name: "christmas-during" });
          } else {
            this.show_home = true;
          }
        });
      } else {
        this.show_home = true;
      }
    },
    to_lists() {
      // this.$router.push({ name: "christmas-lists" });
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
    homeHeader,
    homeBody,
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
