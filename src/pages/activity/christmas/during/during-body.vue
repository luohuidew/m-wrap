<template>
  <div class="tree-home-box"
    v-if="showData.sku_image">
    <img v-if="Percentage===0"
      src="/static/img/christmas/lightsetup@2x.png">
    <img v-if="Percentage===1"
      :src="lighting_tree1[cur_index]">
    <img v-if="Percentage===2"
      :src="lighting_tree2[cur_index]">
    <img v-if="Percentage===3"
      :src="lighting_tree3[cur_index]">
    <img v-if="Percentage===4"
      :src="lighting_tree4[cur_index]">
    <img v-if="Percentage===5"
      :src="lighting_tree5[cur_index]">
    <img v-if="Percentage===6"
      :src="lighting_tree6[cur_index]">
    <img v-if="Percentage===7"
      :src="lighting_tree7[cur_index]">
    <img v-if="Percentage===8"
      :src="lighting_tree8[cur_index]">
    <img v-if="Percentage===9"
      :src="lighting_tree9[cur_index]">
    <img v-if="Percentage===10"
      :src="lighting_tree10[cur_index]">
    <div class="tips-info">
      <img :src="showData.sku_image"
        alt=""
        srcset="">
    </div>
    <div class="btn-click">
      <img src="/static/img/christmas/icon/Sharewithyourfriends@2x.png"
        alt=""
        srcset=""
        @click="to_share(uid)">
      <ac-copy v-if="!is_ios">
        <img slot="box"
          src="/static/img/christmas/icon/ShareLink@2x.png"
          alt=""
          srcset=""
          height="50">
        <p slot="tips">This link has been copied. <br /> Go share to your friends!</p>
      </ac-copy>
    </div>
    <!-- <div class="bulletin-board">
      <img class="board-background-img"
        src="/static/img/christmas/Qeaql.com拷贝.png"
        alt=""
        srcset="">
    </div> -->
    <div class="bulletin-board">
      <p class="pepole-join">Decorators</p>
      <div class="board-texts">
        <div class="scroll-box">
          <ul :class="{'scroll-ul':showData.lampHelper.length>0}">
            <li class="board-item"
              v-for="(item,index) in showData.lampHelper"
              :key="index">
              <p class="item-left">
                <img :src="item.photo">
                <span>{{item.nickName}} Lit for me</span>
              </p>
              <p class="user-box">
                <span>{{item.time | timeDateServer}}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <img class="board-background-img"
        src="/static/img/christmas/Qeaql.com拷贝.png"
        alt=""
        srcset="">
    </div>
    <!-- <div class="banner-board"
      @click.stop="to_home">
      <img class="board-img"
        src="/static/img/christmas/广告.png"
        alt=""
        srcset="">
    </div> -->
    <fb-ms-share v-show="is_fb_show"
      @close="close_href">
      <template>
        <span slot="btn-top"
          @click="share_type(1)"
          class="tips-btns">
          <img src="/static/img/christmas/矢量智能对象@2x_38.png"
            alt="Facebook">
        </span>
        <span slot="btn-other"
          @click="share_type(2)"
          class="tips-btns">
          <img src="/static/img/christmas/矢量智能对象@2x.png"
            alt="Messenger">
        </span>
        <span slot="btn-buttom"
          class="tips-btns">
          <ac-copy>
            <img slot="box"
              src="/static/img/christmas/icon/dashujukeshihuaico-@2x.png"
              alt=""
              srcset="">
            <p slot="tips"
              class="dialog-tips">This link has been copied. Go share to your friends!</p>
          </ac-copy>
        </span>
      </template>
    </fb-ms-share>
  </div>
</template>

<script>
let timer;
import acCopy from "../components/ac-copy";
import fbMsShare from "../components/fb-ms-share";
import api from "@/api/christmas";
export default {
  name: "",
  data() {
    return {
      /*  */
      // uid:undefined,
      is_ios: sessionStorage.getItem('is_ios')==='yes',
      is_fb_show: false,
      share_info: this.$store.state.christmas_share_info,
      showData: {},
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
  props: ["uid", "userName"],
  computed: {
    copy_mes() {
      return (
        window.location.origin +
        "/activity/christmas-groupbuy?id=" +
        this.uid +
        "&user_name=" +
        this.userName.replace(" ", "_")
      );
    }
  },
  created() {
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
  methods: {
    init_data() {
      api.init_info().then(res => {
        this.showData = res.data;
        console.log(res.data);
        this.Percentage = Math.ceil(
          (this.showData.lampHelper.length / this.showData.lamp_num) * 10
        );
        this.Percentage = this.Percentage > 10 ? 10 : this.Percentage;
        console.log(this.Percentage);
        // console.log(this.showData.lampHelper.length);
        // console.log(this.showData.lessCount);
      });
    },
    to_share(cuid) {
      if (window.weget_mobile_type === "iOS") {
        this.is_fb_show = true;
        this.$parent.share_show = true;
      } else {
        this.$emit("share", "share");
        console.log("share");
        let params = {
          path: "/activity/christmas-groupbuy",
          query: {
            id: cuid,
            user_name: this.userName.replace(" ", "_")
          }
        };
        this.$router.push(params);
      }
    },
    share_type(type) {
      let params;
      if (type === 1) {
        params = {
          type: 107,
          data: this.share_info
        };
      } else {
        params = {
          //108 分享内容到Messenger
          type: 108,
          data: this.share_info
        };
      }
      window.webkit.messageHandlers.javaScriptToNative.postMessage(params);
    },
    close_href() {
      this.is_fb_show = false;
      this.$parent.share_show = false;
      // let params = {
      //   path: "/activity/christmas-during"
      //   // query: this.share_params
      // };
      // this.$router.replace(params);
    },

    to_home() {
      if (window.weget_mobile_type === "iOS") {
        let share_params = {
          type: 105,
          data: {}
        };
        window.webkit.messageHandlers.javaScriptToNative.postMessage(
          share_params
        );
      } else {
        this.$router.push("/");
      }
    }
  },
  components: {
    fbMsShare,
    acCopy
  }
};
</script>

<style lang='scss' scoped>
.tree-home-box {
  width: 100%;
  // padding-left: 24px;
  position: relative;
  z-index: 0;
  // transform: translateY(-73px);
  & > img {
    width: 100%;
    height: auto;
    min-height: 520px;
    padding-left: 5px;
  }
  .tips-info {
    position: absolute;
    left: 50%;
    top: 180px;
    text-align: center;
    transform: translate(-50%, -50%);
    img {
      width: 104px;
      height: auto;
    }
    .you-got-it {
      // display: inline-block;
      width: 160px;
      height: auto;
      margin-bottom: 20px;
      // margin: 0 auto;
    }
  }
  .btn-click {
    position: absolute;
    left: 50%;
    top: 330px;
    transform: translateX(-50%);
    text-align: center;
    img {
      height: 50px;
      margin-top: 10px;
      width: auto;
    }
  }
}
.bulletin-board {
  position: relative;
  margin-top: -44px;
  font-size: 14px;
  padding-bottom: 60px;
  // padding-bottom: 10px;
  // transform: translateY(-90px);
  .pepole-join {
    position: absolute;
    left: 0;
    top: 24%;
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
    left: 50%;
    top: 37%;
    transform: translateX(-50%);
    width: 70%;
    height: 28%;
    z-index: 10;
    font-size: 11px;
    color: #fff;
    overflow: hidden;
    // padding: 6px;
    // background-color: #fff;
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
      display: flex;
      height: 50%;
      border-top: 1px solid #78141888;
      padding: 4px 10px;
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
        // flex-direction: column;
        // align-items: center;
      }
    }
  }
}
.banner-board {
  padding: 0 10px;
  // transform: translateY(-42px);
  padding-bottom: 20px;
  img {
    width: 100%;
    height: auto;
  }
}
#app .dialog-tips {
  transform: translateY(100%);
  background-color: transparent;
}
</style>
