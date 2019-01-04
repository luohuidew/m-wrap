<template>
  <div :class="{'christmas':!from_myself}"
    v-if="is_ready">
    <template v-if="from_myself">
      <during @share="show_share_box=true"></during>
    </template>
    <template v-else>
      <div class="home-tips-box">
        <img class="them"
          src="/static/img/popballoons/background/coupon_box.png">
        <!-- <img v-else
          class="them"
          src="/static/img/christmas/icon/主题@2x_75.png"> -->
        <div class="pop-img-title">
          <img v-if="christmas.status===1"
            src="/static/img/popballoons/icon/sweet.png"
            style="height:30px">
          <img v-else
            src="/static/img/popballoons/icon/timesup.png">
        </div>
        <ul class="user-detail">
          <li class="user-phone">
            <p><img :src="user_info.photo"
                alt=""></p>
          </li>
          <li class="user-info">
            <p></p>
            <p class="second">Pop a balloon for your friend <span>{{user_info.user_name}}</span> to win free <span>{{christmas_info.name}}</span> </p>
            <!-- <p class="black">{{christmas.count}} people get the free gift today</p> -->
          </li>
        </ul>
        <!-- <div class="rules-tips-box">
          <ac-rules @open="is_rules_show=true"></ac-rules>
        </div> -->
        <!-- <div class="gift-tips-box">
        <ac-gift></ac-gift>
      </div> -->
        <!-- <rules v-if="is_rules_show"
          @close="is_rules_show=false"></rules> -->
      </div>
      <div class="tree-home-box">
        <div class="bg-pop-box">
          <div class="price-box">
            <p>REG</p>
            <p>${{christmas_info.price}}</p>
          </div>
        </div>
        <div class="goods_photo">
          <img :src="christmas_info.image"
            class="goods_img">

        </div>
        <!-- <div class="date_photo">
          <img :src="christmas_info.date_image"
            class="date_img">
        </div> -->
        <div class="btn-click">
          <a href="javascript:;"
            @click="link_light"
            v-if="christmas.status===1">
            <img src="/static/img/popballoons/btn/pop_help.png">
          </a>
          <a href="javascript:;"
            @click="try_again">
            <img src="/static/img/popballoons/btn/pop_want.png">
          </a>         
        </div>
      </div>    
      <scroll v-if="help_user"
        :board-lists="help_user"></scroll>    
      <banner :style="{'margin-top':'0px'}"></banner>
      <rule v-show="show_rules"
        @closerules="show_rules=false"></rule>     
      <btn-box-click v-show="show_btn_box"
        @close="close_reload(lap_status)"
        :status="lap_status">
        <span slot="dialog-desc"
          class="desc-text">
          <template v-if="lap_status===1">
            Thank You!<br>
            You helped
            {{user_info.user_name}}!
          </template>
          <template v-else-if="lap_status===2">
            Oops, times up !
          </template>
          <template v-else-if="lap_status===3">
            You cannot pop a balloon for yourself.
          </template>
          <template v-else-if="lap_status===4">
            Sorry, you already used your one chance today.Come back tomorrow
          </template>
          <template v-else-if="lap_status===5">
            Tree lighting failed.<br />
            The event your friend started has finished.
          </template>
          <template v-else>
            Oops, bad network connection !
          </template>
        </span>
      </btn-box-click>
    </template>
    <ac-tips @close="close_first_tips"
      v-show="show_first_tips">
      <span slot="dialog-desc"
        class="tips-desc">
        You got coupons worth $50 in your Weget wallet!<br />
        Go use them at Weget App right now !
      </span>
    </ac-tips>
    <share-box v-show="show_share_box"
      @close="close_share_alert_to_app"></share-box>
  </div>
</template>

<script>
let timer;
import { getToken } from "@/utils/auth";
import during from "./during/index.vue";
import api from "@/api/newyear";
import acRules from "./components/ac-rules";
import acGift from "./components/ac-gift";
import rules from "./components/dialog-rules";
import product from "@/api/share";
import rule from "./components/dialog-rules";
import shareBox from "./components/share-btn";
import btnBoxFun from "./components/dialog-btn-fun";
import acTips from "./components/ac-tips";
import btnBoxClick from "./components/dialog-btn-click";
import banner from "./components/ac-banner";
import scroll from "./components/lamp-scroll";
export default {
  name: "",
  data() {
    return {
      from_myself: false,
      christmas: {},
      user_info: {},
      christmas_info: {},
      help_user: [],
      uid: this.$route.query.id,
      show_rules: false,
      show_share: false,
      show_share_box: false,
      show_share_btn: false,
      show_btn_box: false,
      show_first_tips: false,
      share_info: {},
      is_rules_show: false,
      is_ready: false,
      lap_status: 0,
      cur_index: 0,
      Percentage: 0
    };
  },
  created() {
    let c_id = Number(this.$route.query.id);
    if (getToken()) {
      api.init_status().then(res => {
        console.log(c_id === res.data.id);
        if (c_id === res.data.id) {
          this.from_myself = true;
          this.is_ready = true;
        }
      });
      api.help_tips().then(res => {
        if (res.data.isAlert === 1) {
          sessionStorage.setItem("first_sign", "yes");
        }
        // else {
        //   sessionStorage.setItem("first_sign", "no");
        // }
      });
    }
    this.init_data();
  },
  mounted() {
    timer = setInterval(() => {
      // console.log(this.cur_index);
      this.cur_index += 1;
      if (this.cur_index > 2) {
        this.cur_index = 0;
      }
    }, 1000);
  },
  computed: {},
  methods: {
    close_share_alert_to_app() {
      this.show_share_box = false;
      if (sessionStorage.getItem("first_sign") === "yes") {
        this.show_first_tips = true;
      }
    },
    close_first_tips() {
      this.show_first_tips = false;
      sessionStorage.setItem("first_sign", "no");
      window.location.reload();
    },
    try_again() {
      this.$router.push({
        name: "popballoons"
      });
    },
    init_data() {
      if (sessionStorage.getItem("from_self") === "yes") {
        this.show_share_box = true;
        this.show_share_btn = false;
      }
      sessionStorage.setItem("from_self", "no");
      api
        .share_detail({ id: this.$route.query.id })
        .then(res => {
          console.log(res);
          this.christmas = res.data;
          this.user_info = res.data.user_info;
          this.christmas_info = res.data.christmas_info;
          this.help_user = res.data.help_user;
          this.Percentage = Math.ceil(
            (this.help_user.length / this.christmas.lamp_num) * 10
          );
          console.log(this.Percentage);
          this.Percentage = this.Percentage > 10 ? 10 : this.Percentage;
          this.is_ready = true;
          // console.log(this.help_user.length);
          // console.log(this.christmas.lamp_num);
        })
        .catch(res => {
          console.log(res.err);
        });
    },
    close_reload(lap_status) {
      this.show_btn_box = false;
      if (sessionStorage.getItem("first_sign") === "yes") {
        this.show_first_tips = true;
      } else {
        if (lap_status === 1) {
          window.location.reload();
        }
      }
    },
    link_light() {
      let id = this.uid;
      api
        .help_light({ inviter_id: id })
        .then(res => {
          this.lap_status = res.data.status;
          this.show_btn_box = true;
        })
        .catch(res => {
          if (res.code === 1207 || res.code === 1209) {
            console.log("denglu");
          } else {
            this.show_btn_box = true;
          }
        });
    },
    to_share_f() {
      if (window.weget_mobile_type === "iOS") {
        this.show_share_box = false;
        this.show_share_btn = true;
        if (window.webkit !== undefined) {
          window.webkit.messageHandlers.javaScriptToNative.postMessage(params);
        } else {
          console.log(`调用app方法成功! params = ${JSON.stringify(params)}`);
        }
      } else {
        this.show_share_box = true;
        this.show_share_btn = false;
      }
    }
  },
  components: {
    rule,
    shareBox,
    btnBoxFun,
    btnBoxClick,
    acRules,
    acGift,
    rules,
    banner,
    during,
    acTips,
    scroll
  }
};
</script>

<style lang='scss' scoped>
.christmas {
  width: 375px;
  min-width: 100%;
  // height: 920px;
  overflow: hidden;
  padding: 0 20px;
  z-index: 10;
  font-size: 0;
  // background: url("/static/img/christmas/首页背景.jpg") no-repeat top center;
  // background-size: 100% 100%;
}
.mbt10 {
  margin-bottom: 10px;
}
.bg-pop-box {
  position: relative;
  width: 230px;
  height: 460px;
  margin: 0 auto;
  text-align: center;
  background: url("/static/img/popballoons/background/small_box_pop.png")
    no-repeat center bottom;
  background-size: 100% auto;
  & > img {
    width: 100%;
    height: auto;
    // min-height: 520px;
    // padding-left: 5px;
  }
  .price-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 5%;
    right: 24%;
    height: 44px;
    width: 44px;
    border-radius: 50%;
    font-size: 12px;
    background-color: #000;
    color: #e3c388;
    z-index: 10;
    p {
      text-align: center;
    }
  }
}
.home-tips-box {
  width: 335px;
  position: relative;
  margin: 20px auto 0 auto;

  .them {
    width: 100%;
    height: auto;
    z-index: 40;
  }
  .pop-img-title {
    // display: flex;
    // justify-content: center;
    // align-self: center;
    top: 28px;
    position: absolute;
    width: 85%;
    height: 54px;
    left: 50%;
    text-align: center;
    transform: translateX(-50%);
    img {
      height: 100%;
      width: auto;
    }
  }
  .user-detail {
    position: absolute;
    width: 85%;
    // height: 80px;
    top: 80px;
    left: 50%;
    align-items: center;
    transform: translateX(-50%);
    font-size: 10px;
    display: flex;
    .user-phone {
      width: 20%;
      img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
    .user-info {
      width: 80%;
      color: #2c2c2c;
      p {
        width: 100%;
        padding: 0 10px;
      }
      .second {
        padding: 5px 10px;
        .weight-words {
          font-weight: bold;
          font-size: 14px;
        }
      }
      .black {
        color: #4e0105;
      }
    }
  }
  .rules-tips-box {
    position: absolute;
    bottom: 5px;
    right: -3px;
    z-index: 30;
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
.tree-home-box {
  width: 100%;
  position: relative;
  margin-top: -40px;
  .tree_photo {
    width: 100%;
    height: auto;
  }
  .finished_photo {
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    img {
      width: 100%;
      height: auto;
    }
  }
  .goods_photo {
    width: 30%;
    height: 100px;
    position: absolute;
    top: 67%;
    left: 50%;
    transform: translate(-50%, -60%);
    float: left;
    text-align: center;
    .goods_img {
      height: 100%;
      width: auto;
    }
  }
  .date_photo {
    width: 30%;
    height: 100px;
    position: absolute;
    top: 40%;
    right: 0;
    transform: translate(-20%, -70%);
    float: left;
    .date_img {
      height: auto;
      width: 100%;
    }
  }
  .btn-click {
    // position: absolute;
    // left: 50%;
    // bottom: 75px;
    // transform: translateX(-50%);
    text-align: center;
    img {
      height: 50px;
      margin-bottom: 10px;
    }
  }
}
.desc-text {
  font-size: 25px;
  line-height: 34px;
  color: #2c2c2c;
}
.tips-desc {
  color: #2c2c2c;
  font-size: 25px;
}
.bulletin-adv {
  transform: translateY(-10px);
  padding: 0 10px;
  .adv-background-img {
    width: 100%;
    height: auto;
  }
}
.tips-btns {
  margin: 10px auto;
  img {
    height: 40px;
    width: auto;
  }
}
</style>
