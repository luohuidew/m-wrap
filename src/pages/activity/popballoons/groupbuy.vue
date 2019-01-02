<template>
  <div :class="{'christmas':!from_myself}"
    v-if="is_ready">
    <template v-if="from_myself">
      <during @share="show_share_box=true"></during>
    </template>
    <template v-else>
      <div class="home-tips-box">
        <img v-if="christmat.status===1"
          class="them"
          src="/static/img/christmas/icon/主题@2x_80.png">
        <img v-else
          class="them"
          src="/static/img/christmas/icon/主题@2x_75.png">
        <ul class="user-detail">
          <li class="user-phone">
            <p><img :src="user_info.photo"
                alt=""></p>
          </li>
          <li class="user-info">
            <p></p>
            <p class="second">Help your friends <span class="weight-words">{{user_info.user_name}}</span> to light up the tree to get free <span class="weight-words">{{christmat_info.name}}</span> </p>
            <!-- <p class="black">{{christmat.count}} people get the free gift today</p> -->
          </li>
        </ul>
        <div class="rules-tips-box">
          <ac-rules @open="is_rules_show=true"></ac-rules>
        </div>
        <!-- <div class="gift-tips-box">
        <ac-gift></ac-gift>
      </div> -->
        <rules v-if="is_rules_show"
          @close="is_rules_show=false"></rules>
      </div>
      <div class="tree-home-box">
        <img v-if="Percentage===0"
          src="/static/img/christmas/lightsetup@2x.png"
          class="tree_photo">
        <img v-if="Percentage===1"
          :src="lighting_tree1[cur_index]"
          class="tree_photo">
        <img v-if="Percentage===2"
          :src="lighting_tree2[cur_index]"
          class="tree_photo">
        <img v-if="Percentage===3"
          :src="lighting_tree3[cur_index]"
          class="tree_photo">
        <img v-if="Percentage===4"
          :src="lighting_tree4[cur_index]"
          class="tree_photo">
        <img v-if="Percentage===5"
          :src="lighting_tree5[cur_index]"
          class="tree_photo">
        <img v-if="Percentage===6"
          :src="lighting_tree6[cur_index]"
          class="tree_photo">
        <img v-if="Percentage===7"
          :src="lighting_tree7[cur_index]"
          class="tree_photo">
        <img v-if="Percentage===8"
          :src="lighting_tree8[cur_index]"
          class="tree_photo">
        <img v-if="Percentage===9"
          :src="lighting_tree9[cur_index]"
          class="tree_photo">
        <img v-if="Percentage===10"
          :src="lighting_tree10[cur_index]"
          class="tree_photo">
        <!-- <div class="finished_photo"
        v-if="christmat.status!==1">
        <img src="/static/img/christmas/Theeventyourfriendstartedhasfinished.png">
      </div> -->
        <div class="goods_photo">
          <img :src="christmat_info.sku_image"
            class="goods_img">
        </div>
        <div class="date_photo">
          <img :src="christmat_info.date_image"
            class="date_img">
        </div>
        <div class="btn-click">
          <a href="javascript:;"
            @click="link_light"
            v-if="christmat.status===1">
            <img src="/static/img/christmas/icon/Sure_help@2x_0.png">
          </a>
          <a href="javascript:;"
            @click="try_again">
            <img src="/static/img/christmas/icon/Iwantone_too@2x.png">
          </a>
          <!-- <a href="javascript:;"
          v-if="christmat.status!==1">
          <img src="/static/img/christmas/Sharewithyourfriends@2x.png"
            alt="分享给好友"
            @click="to_share_f">
        </a> -->
        </div>
      </div>
      <div class="bulletin-board">
        <p class="pepole-join">Decorators</p>
        <div class="board-texts">
          <div class="scroll-box">
            <ul :class="{'scroll-ul':help_user.length>0}"
              v-if="help_user.length">
              <li class="board-item"
                v-for="(item,index) in help_user"
                :key="index">
                <p class="item-left">
                  <img :src="item.photo">
                  <span>{{item.user_name}} Lit for me</span>
                </p>
                <p class="user-box">
                  <span>{{item.time | timeDateServer}}</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <img class="board-background-img"
          src="/static/img/christmas/Qeaql.com拷贝.png">
      </div>
      <!-- <div class="bulletin-adv"
      @click.stop="to_home">
      <img class="adv-background-img"
        src="/static/img/christmas/广告.png">
    </div> -->
      <banner :style="{'margin-top':'0px'}"></banner>
      <rule v-show="show_rules"
        @closerules="show_rules=false"></rule>
      <!-- <share-box v-show="show_share_box"
        @close="show_share_box=false"></share-box> -->
      <btn-box-fun v-if="lap_status===1"
        v-show="show_btn_box"
        @close="close_reload">
        <span slot="dialog-desc"
          class="desc-text">
          Thank You!<br>
          You helped
          {{user_info.user_name}}!
        </span>
      </btn-box-fun>
      <btn-box-sad v-else
        v-show="show_btn_box"
        @close="show_btn_box = false">
        <span slot="dialog-desc"
          class="desc-text">
          <template v-if="lap_status===2">
            Oops, times up !
          </template>
          <template v-else-if="lap_status===3">
            Uh-oh invalid, you cannot light up your own tree.
          </template>
          <template v-else-if="lap_status===4">
            Tree lighting failed !<br />
            One chance per day. Come back tomorrow!
          </template>
          <template v-else-if="lap_status===5">
            Tree lighting failed.<br />
            The event your friend started has finished.
          </template>
          <template v-else>
            Oops, bad network connection !
          </template>
        </span>
      </btn-box-sad>
    </template>
    <ac-tips @close="close_first_tips"
      v-show="show_first_tips"></ac-tips>
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
import btnBoxSad from "./components/dialog-btn-sad";
import banner from "./components/ac-banner";
export default {
  name: "",
  data() {
    return {
      from_myself: false,
      christmat: {},
      user_info: {},
      christmat_info: {},
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
      lighting_tree1: [
        "/static/img/christmas/lighting/点灯1-1_gaitubao_com_375x580.png",
        "/static/img/christmas/lighting/点灯1-2_gaitubao_com_375x580.png",
        "/static/img/christmas/lighting/点灯1-3_gaitubao_com_375x580.png"
      ],
      lighting_tree2: [
        "/static/img/christmas/lighting/点灯2-1_gaitubao_com_375x580.png",
        "/static/img/christmas/lighting/点灯2-2_gaitubao_com_375x580.png",
        "/static/img/christmas/lighting/点灯2-3_gaitubao_com_375x580.png"
      ],
      lighting_tree3: [
        "/static/img/christmas/lighting/点灯3-1_gaitubao_com_375x580.png",
        "/static/img/christmas/lighting/点灯3-2_gaitubao_com_375x580.png",
        "/static/img/christmas/lighting/点灯3-3_gaitubao_com_375x580.png"
      ],
      lighting_tree4: [
        "/static/img/christmas/lighting/点灯4-1_gaitubao_com_375x580.png",
        "/static/img/christmas/lighting/点灯4-2_gaitubao_com_375x580.png",
        "/static/img/christmas/lighting/点灯4-3_gaitubao_com_375x580.png"
      ],
      lighting_tree5: [
        "/static/img/christmas/lighting/点灯5-1_gaitubao_com_375x580.png",
        "/static/img/christmas/lighting/点灯5-2_gaitubao_com_375x580.png",
        "/static/img/christmas/lighting/点灯5-3_gaitubao_com_375x580.png"
      ],
      lighting_tree6: [
        "/static/img/christmas/lighting/点灯6-1_gaitubao_com_375x580.png",
        "/static/img/christmas/lighting/点灯6-2_gaitubao_com_375x580.png",
        "/static/img/christmas/lighting/点灯6-3_gaitubao_com_375x580.png"
      ],
      lighting_tree7: [
        "/static/img/christmas/lighting/点灯7-1_gaitubao_com_375x580.png",
        "/static/img/christmas/lighting/点灯7-2_gaitubao_com_375x580.png",
        "/static/img/christmas/lighting/点灯7-3_gaitubao_com_375x580.png"
      ],
      lighting_tree8: [
        "/static/img/christmas/lighting/点灯8-1_gaitubao_com_375x580.png",
        "/static/img/christmas/lighting/点灯8-2_gaitubao_com_375x580.png",
        "/static/img/christmas/lighting/点灯8-3_gaitubao_com_375x580.png"
      ],
      lighting_tree9: [
        "/static/img/christmas/lighting/点灯9-1_gaitubao_com_375x580.png",
        "/static/img/christmas/lighting/点灯9-2_gaitubao_com_375x580.png",
        "/static/img/christmas/lighting/点灯9-3_gaitubao_com_375x580.png"
      ],
      lighting_tree10: [
        "/static/img/christmas/lighting/点灯10-1_gaitubao_com_375x580.png",
        "/static/img/christmas/lighting/点灯10-2_gaitubao_com_375x580.png",
        "/static/img/christmas/lighting/点灯10-3_gaitubao_com_375x580.png"
      ],
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
      sessionStorage.setItem('first_sign','no');
      window.location.reload();
    },
    try_again() {
      this.$router.push({
        name: "christmas"
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
          this.christmat = res.data;
          this.user_info = res.data.user_info;
          this.christmat_info = res.data.christmat_info;
          this.help_user = res.data.help_user;
          this.Percentage = Math.ceil(
            (this.help_user.length / this.christmat.lamp_num) * 10
          );
          console.log(this.Percentage);
          this.Percentage = this.Percentage > 10 ? 10 : this.Percentage;
          this.is_ready = true;
          // console.log(this.help_user.length);
          // console.log(this.christmat.lamp_num);
        })
        .catch(res => {
          console.log(res.err);
        });
    },
    close_reload() {
      this.show_btn_box = false;
      if (sessionStorage.getItem("first_sign") === "yes") {
        this.show_first_tips = true;
      } else {
        window.location.reload();
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
    btnBoxSad,
    acRules,
    acGift,
    rules,
    banner,
    during,
    acTips
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
  background: url("/static/img/christmas/首页背景.jpg") no-repeat top center;
  background-size: 100% 100%;
}
.mbt10 {
  margin-bottom: 10px;
}
.home-tips-box {
  width: 335px;
  position: relative;
  margin: 0 auto;
  .them {
    width: 100%;
    height: auto;
    z-index: 40;
  }
  .user-detail {
    position: absolute;
    width: 85%;
    height: 80px;
    top: 83px;
    left: 50%;
    align-items: center;
    transform: translateX(-50%);
    font-size: 9px;
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
      color: #fff;
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
  padding-left: 20px;
  position: relative;
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
    top: 40%;
    left: 50%;
    transform: translate(-50%, -60%);
    float: left;
    .goods_img {
      height: auto;
      width: 100%;
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
    position: absolute;
    left: 50%;
    bottom: 75px;
    transform: translateX(-50%);
    img {
      height: 50px;
      margin-bottom: 10px;
    }
  }
}
.desc-text {
  font-size: 16px;
  line-height: 22px;
  color: #fff;
}
.bulletin-board {
  position: relative;
  margin-top: -44px;
  font-size: 14px;
  padding-bottom: 10px;
  .pepole-join {
    position: absolute;
    left: 0;
    top: 30%;
    width: 100%;
    height: 24px;
    z-index: 10;
    font-size: 13px;
    color: rgb(255, 150, 4);
    text-align: center;
  }
  .board-background-img {
    width: 100%;
    height: auto;
  }
  .board-texts {
    position: absolute;
    left: 49%;
    top: 46%;
    transform: translateX(-47%);
    width: 70%;
    height: 34%;
    z-index: 0;
    font-size: 11px;
    color: #fff;
    overflow-y: hidden;
    // overflow-x: hidden;
    .scroll-box {
      width: 100%;
      height: 100%;
      overflow: hidden;
      overflow-y: hidden;
    }
    .scroll-ul {
      animation: scroll_board 20s linear 2s infinite;
    }
    @keyframes scroll_board {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-80%);
      }
    }
    .board-item {
      position: relative;
      display: flex;
      height: 50%;
      border-top: 1px solid #78141888;
      padding: 4px 10px;
      // z-index: 0;
      // justify-content: space-between;
      // transform: scale(0.5);
      &:nth-child(1) {
        border: none;
      }
      .item-left {
        width: 60%;
        display: flex;
        align-items: center;
        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          margin-right: 10px;
        }
        span {
          width: 90px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .user-box {
        flex: 1;
        padding-left: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 10px;
      }
    }
  }
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
