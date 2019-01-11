<template>
  <div class="tree-home-box"
    v-if="showData.lamp_num">
    <div class="bg-pop-box">
      <!-- <img src="/static/img/popballoons/background/big_box_pop.png"
        alt=""> -->
      <div class="tips-info">
        <img :src="showData.image"
          alt=""
          srcset="">

      </div>
      <div class="price-box">
        <p>REG</p>
        <p>${{showData.price}}</p>
      </div>
    </div>
    <div class="btn-click">
      <img src="/static/img/popballoons/btn/btn-4Sharetoyourfriends@2x.png"
        alt=""
        srcset=""
        @click="to_share(uid)">
      <ac-copy v-if="!is_weget">
        <img slot="box"
          src="/static/img/popballoons/btn/share_link.png"
          alt=""
          srcset="">
        <p slot="tips">This link has been copied. <br /> Go share to your friends!</p>
      </ac-copy>
    </div>
    <!-- <div class="bulletin-board">
      <img class="board-background-img"
        src="/static/img/christmas/Qeaql.com拷贝.png"
        alt=""
        srcset="">
    </div> -->
    <scroll v-if="showData.lampHelper"
      :board-lists="showData.lampHelper"></scroll>
    <!-- <div class="bulletin-board">
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
    </div> -->
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
        <span slot="dialog-desc">
          You’re almost done.<br />
          Share!
        </span>
        <span slot="btn-top"
          @click="share_type(1)"
          class="tips-btns">
          <img src="/static/img/popballoons/btn/btn-7Facebook@2x.png"
            alt="Facebook">
        </span>
        <span slot="btn-other"
          @click="share_type(2)"
          class="tips-btns">
          <img src="/static/img/popballoons/btn/btn-7Messenger@2x.png"
            alt="Messenger">
        </span>
        <span slot="btn-buttom"
          class="tips-btns">
          <ac-copy>
            <img slot="box"
              src="/static/img/popballoons/btn/btn-7ShareLink@2x.png"
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
import api from "@/api/newyear";
import scroll from "../components/lamp-scroll";
export default {
  name: "",
  data() {
    return {
      /*  */
      // uid:undefined,
      is_weget: localStorage.getItem('device'),
      is_fb_show: false,
      share_info: this.$store.state.popballoons_share_info,
      showData: {},
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
      if (this.$CM.is_weget()) {
        this.is_fb_show = true;
        this.$parent.share_show = true;
      } else {
        this.$emit("share", "share");
        // console.log("share");
        let params = {
          path: "/activity/popballoons/popballoons-groupbuy",
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
      let temp = this.$CM.weget_device_link(params);
    },
    close_href() {
      this.is_fb_show = false;
      this.$parent.share_show = false;
      // let params = {
      //   path: "/activity/christmas-during"
      //   // query: this.share_params
      // };
      // this.$router.replace(params);
    }
  },
  components: {
    fbMsShare,
    acCopy,
    scroll
  }
};
</script>

<style lang='scss' scoped>
.tree-home-box {
  width: 100%;
  // padding-left: 24px;
  position: relative;

  // z-index: 20;
  margin-top: 26px;
  // transform: translateY(-73px);
  .bg-pop-box {
    position: relative;
    width: 230px;
    height: 400px;
    margin: 0 auto;
    text-align: center;
    background: url("/static/img/popballoons/background/big_box_pop.png")
      no-repeat center bottom;
    background-size: 100% auto;
    & > img {
      width: 100%;
      height: auto;
      // min-height: 520px;
      // padding-left: 5px;
    }
  }
  .price-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 11%;
    right: 14%;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    font-size: 14px;
    background-color: #000;
    color: #e3c388;
    p {
      text-align: center;
    }
  }
  .tips-info {
    position: absolute;
    left: 50%;
    top: 274px;
    text-align: center;
    transform: translate(-50%, -50%);
    img {
      width: auto;
      height: 152px;
      max-width: 200px;
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
    // position: absolute;
    // left: 50%;
    // top: 330px;
    // transform: translateX(-50%);
    text-align: center;
    img {
      height: 50px;
      margin-top: 10px;
      width: auto;
    }
  }
}
#app .dialog-tips {
  transform: translateY(100%);
  background-color: transparent;
}
</style>
