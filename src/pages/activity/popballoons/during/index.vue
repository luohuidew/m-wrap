<template>
  <div class="popballoons-during"
    v-if="is_ready">
    <template v-if="info_type===1">
      <during-header @showrules="show_rules=true"
        v-show="!share_show"></during-header>
      <during-body :uid="user_id"
        :user-name="user_name" 
        :res="req_data"
        @share="share_to_group"></during-body>
    </template>
    <template v-if="info_type===2">
      <fail-header @showrules="show_rules=true"></fail-header>
      <fail-body :uid="user_id"
        :show-data="req_data"></fail-body>
    </template>
    <template v-if="info_type===3">
      <success-header @showrules="show_rules=true"></success-header>
      <success-body :uid="user_id"
        :show-data="req_data"
        :is-show="is_show_try"></success-body>
    </template>
    <!-- <div class="banner-board"
      @click.stop="to_home">
      <img class="board-img"
        src="/static/img/popballoons/广告.png"
        alt=""
        srcset="">
    </div> -->
    <banner></banner>
    <rule v-show="show_rules"
      @closerules="show_rules=false"></rule>
  </div>
</template>

<script>
let timer;
import { getToken, removeToken, setToken } from "@/utils/auth";
import api from "@/api/newyear";
import share from "@/api/share";
import successHeader from "./success-header";
import failHeader from "./fail-header";
import successBody from "./success-body";
import failBody from "./fail-body";
import duringHeader from "./during-header";
import duringBody from "./during-body";
import rule from "../components/dialog-rules";
import banner from "../components/ac-banner";
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
      user_name: "",
      show_rules: false,
      req_data: undefined,
      is_show_try: false,
      is_ready: false,
      login_load: undefined,
      share_show: false
    };
  },
  beforeCreate() {},
  created() {
    this.before_loading();
    this.init_data();
  },
  mounted() {},
  computed: {},
  methods: {
    before_loading() {
      if (sessionStorage.getItem("have_req") !== "yes") {
        this.login_load = Toast.loading({
          mask: true,
          loadingType: "spinner",
          message: "Loading",
          duration: 8000
        });
      }
    },
    init_data() {
      sessionStorage.setItem("from_self", "yes");
      // alert("yemian" + getToken());
      // if (getToken()) {
      api
        .init_status()
        .then(res => {
          console.log(res);
          /* 1.进行，2，失败，3成功 */
          this.req_data = res.data;
          this.user_id = res.data.id;
          this.user_name = res.data.user_name;
          this.is_ready = true;
          if (this.info_type === 5 || this.info_type === 4) {
            this.$router.replace({ name: "popballoons" });
          }
          if (res.data.isShow) {
            this.is_show_try = res.data.isShow;
          }
          return res;
        })
        .then(res => {
          console.log(res);
          let result = res;
          let params = {
            id: res.data.id,
            share_type: 6,
            user_name: res.data.user_name
          };
          let data =
            window.location.origin +
            "/activity/popballoons/popballoons-groupbuy?id=" +
            res.data.id +
            "&user_name=" +
            res.data.user_name.replace(" ", "_");
          this.$store.commit("set_popballoons_share_params", data);
          share.getShareInfo(params).then(res => {
            console.log(res);
            this.login_load.clear();
            this.info_type = result.data.status;
            this.$store.commit("set_popballoons_share_info", res.data);
          });
        });
      // }
      // api.init_info().then(res => {
      //   console.log(res);
      //   let diff_time = Math.abs(res.data.remaining_time);
      //   console.log(diff_time);
      //   timer = setInterval(() => {
      //     // console.log(this.run_time);
      //     diff_time -= 1;
      //     if (diff_time < 0) {
      //       diff_time = 0;
      //       window.clearInterval(timer);
      //     }
      //     this.run_time = this.timeDiff(diff_time);
      //   }, 1000);
      //   this.req_data = res.data;
      // });
    },
    share_to_group(data) {
      this.$emit("share", "share");
    },
    to_lists() {
      this.$router.push({ name: "popballoons-lists" });
    }
    // timeDiff(diff) {
    //   // var date1 = '2015/05/01 00:00:00'; //开始时间
    //   // var date2 = new Date(); //结束时间
    //   // var date3 = date2.getTime() - new Date(date1).getTime(); //时间差的毫秒数
    //   if (diff < 0) {
    //     return "00:00:00";
    //   }
    //   //------------------------------
    //   var date3 = diff * 1000;
    //   //计算出相差天数
    //   var days = Math.floor(date3 / (24 * 3600 * 1000));

    //   //计算出小时数

    //   var leave1 = date3 % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
    //   var hours = Math.floor(leave1 / (3600 * 1000));
    //   hours = days * 24 + hours > days * 24 + hours ? hours : days * 24 + hours;
    //   hours = hours > 9 ? hours : "0" + hours;
    //   //计算相差分钟数
    //   var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
    //   var minutes = Math.floor(leave2 / (60 * 1000));
    //   minutes = minutes > 9 ? minutes : "0" + minutes;
    //   //计算相差秒数
    //   var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
    //   var seconds = Math.round(leave3 / 1000);
    //   seconds = seconds > 9 ? seconds : "0" + seconds;
    //   return hours + ":" + minutes + ":" + seconds;
    // }
  },
  components: {
    successHeader,
    successBody,
    failBody,
    failHeader,
    duringHeader,
    duringBody,
    rule,
    banner
  }
};
</script>

<style lang='scss'>
.popballoons-during {
  // position: relative;
  // width: 375px;
  // min-width: 100%;
  // min-height: 100%;
  // height: 920px;
  // min-width: 100%;
  padding:20px;
  // overflow: auto;
  font-size: 0;
  // background: url("/static/img/popballoons/首页背景.jpg") no-repeat top center;
  // background-size: 100% 100%;
  z-index: 0;
}
.rules-tips-box {
  z-index: 40;
  width: 70px;
  height: auto;
  img {
    width: 100%;
  }
}
.rules-tips-box {
  z-index: 40;
  width: 70px;
  height: auto;
  img {
    width: 100%;
  }
}
.banner-board {
  margin-top: -40px;
  padding-bottom: 20px;
  img {
    width: 100%;
  }
}
</style>
