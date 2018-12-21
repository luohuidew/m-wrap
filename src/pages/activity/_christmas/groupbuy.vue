<template>
  <div class="christmas">
    <div class="home-tips-box">
      <img class="them"
        src="/static/img/christmas/主题的副本.png">
      <ul class="user-detail">
        <li class="user-phone">
          <p><img :src="user_info.photo"
              alt=""></p>
        </li>
        <li class="user-info">
          <p>{{user_info.user_name}}</p>
          <p class="second">Your friend start the "light up the tree, get free gift "event </p>
          <p class="black">{{christmat.count}} people get the free gift today</p>
        </li>
      </ul>
      <div class="rules-tips-box"
        @click.stop="show_dialog">
        <img src="/static/img/christmas/规则-这个会动.png">
      </div>
    </div>
    <div class="tree-home-box">
      <img src="/static/img/christmas/lightsetup@2x.png"
        class="tree_photo">
      <div class="finished_photo"
        v-if="christmat.status!==1">
        <img src="/static/img/christmas/Theeventyourfriendstartedhasfinished.png">
      </div>
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
          <img src="/static/img/christmas/Lightupthetreeforfriend@2x.png">
        </a>
        <a href="javascript:;"
          @click="try_again">
          <img src="/static/img/christmas/Startyourevent@2x.png">
        </a>
        <a href="javascript:;"
          v-if="christmat.status!==1">
          <img src="/static/img/christmas/Sharewithyourfriends@2x.png"
            alt="分享给好友"
            @click="to_share_f">
        </a>
      </div>
    </div>
    <div class="bulletin-board">
      <div class="board-texts">
        <ul>
          <li class="board-item"
            v-for="(item,index) in help_user"
            :key="index">
            <p class="item-left">
              <img :src="item.photo">
              <span>{{item.user_name}} Lit for me</span>
            </p>
            <p class="user-box">
              <span>{{item.time}}</span>
            </p>
          </li>
        </ul>
      </div>
      <img class="board-background-img"
        src="/static/img/christmas/Qeaql.com拷贝.png">
    </div>
    <div class="bulletin-adv"
      @click.stop="to_home">
      <img class="adv-background-img"
        src="/static/img/christmas/广告.png">
    </div>
    <rule v-show="show_rules"
      @closerules="show_rules=false"></rule>
    <share-box v-show="show_share_box"
      @close="show_share_box=false"></share-box>
    <btn-box v-show="show_btn_box"
      @close="show_btn_box=false">
      <template v-if="callback_status===1">
        <p slot="dialog-desc"
          class="tips-text">Lit one light</p>
        <span slot="btn-top">
          <img src="/static/img/christmas/Startyourevent_54.png"
            @click.stop="start_new"
            alt="开新团">
        </span>
        <span slot="btn-buttom">
          <img src="/static/img/christmas/Sharewithyourfriends.png"
            @click.stop="to_share_f"
            alt="分享给好友">
        </span>
      </template>
      <template v-else>
        <p slot="dialog-desc"
          class="tips-text">Lit light failed<br /> You only have one chance to light up the tree
        </p>
        <span slot="btn-top">
          <img src="/static/img/christmas/Startyourevent_54.png"
            @click.stop="start_new"
            alt="开新团">
        </span>
        <!-- <span slot="btn-buttom">
          <img src="/static/img/christmas/Sharewithyourfriends.png"
            @click.stop="to_share_f"
            alt="分享给好友">
        </span> -->
      </template>
    </btn-box>
    <btn-box v-show="show_share_btn"
      @close="close_back">
      <template>
        <p slot="dialog-desc"
          class="tips-text">You’re almost done.<br /> Share!
        </p>
        <span slot="btn-top"
          @click="share_type(1)"
          class="tips-btns">
          <img src="/static/img/christmas/矢量智能对象@2x_38.png"
            alt="Facebook">
        </span>
        <span slot="btn-buttom"
          @click="share_type(2)"
          class="tips-btns">
          <img src="/static/img/christmas/矢量智能对象@2x.png"
            alt="Messenger">
        </span>
      </template>
    </btn-box>
  </div>
</template>

<script>
import api from "@/api/christmas";
import product from "@/api/share";
import rule from "./components/dialog-rules";
import shareBox from "./components/share-btn";
import btnBox from "./components/dialog-btn";
export default {
  name: "",
  data() {
    return {
      christmat: {},
      user_info: {},
      christmat_info: {},
      help_user: [
        {
          photo:
            "https://we-get.s3.us-west-1.amazonaws.com/7209467075beeb71e600cd.jpg",
          user_name: "Yafei",
          time: "Sep 17:34"
        },
        {
          photo:
            "https://we-get.s3.us-west-1.amazonaws.com/7209467075beeb71e600cd.jpg",
          user_name: "Wenfu",
          time: "Sep 17:34"
        },
        {
          photo:
            "https://we-get.s3.us-west-1.amazonaws.com/7209467075beeb71e600cd.jpg",
          user_name: "Yide",
          time: "Sep 17:34"
        },
        {
          photo:
            "https://we-get.s3.us-west-1.amazonaws.com/7209467075beeb71e600cd.jpg",
          user_name: "Rui",
          time: "Sep 17:34"
        },
        {
          photo:
            "https://we-get.s3.us-west-1.amazonaws.com/7209467075beeb71e600cd.jpg",
          user_name: "Wang",
          time: "Sep 17:34"
        },
        {
          photo:
            "https://we-get.s3.us-west-1.amazonaws.com/7209467075beeb71e600cd.jpg",
          user_name: "Dan",
          time: "Sep 17:34"
        },
        {
          photo:
            "https://we-get.s3.us-west-1.amazonaws.com/7209467075beeb71e600cd.jpg",
          user_name: "Hua",
          time: "Sep 17:34"
        }
      ],
      uid: this.$route.query.id,
      show_rules: false,
      show_share: false,
      show_share_box: false,
      show_share_btn: false,
      show_btn_box: false,
      callback_status: 1,
      showData: undefined,
      share_info: {}
    };
  },
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {},
  methods: {
    start_new() {
      this.$router.push({ name: "christmas" });
    },
    share_type(type) {
      api
        .share_Info({
          id: this.$route.query.id,
          share_type: 5,
          user_name: this.user_info.user_name
        })
        .then(res => {
          this.share_info = res.data;
          console.log(res.data);
          let params;
          //107 分享内容到Facebook
          if (type === 1) {
            params = {
              type: 107,
              data: res.data
            };
          } else {
            params = {
              //108 分享内容到Messenger
              type: 108,
              data: res.data
            };
          }
          if (window.webkit !== undefined) {
            window.webkit.messageHandlers.javaScriptToNative.postMessage(
              params
            );
          } else {
            console.log(`调用app方法成功! params = ${params}`);
          }
        })
        .catch((error, res, body) => {
          console.log(res.err);
        });
    },
    show_dialog() {
      console.log("123123");
      this.show_rules = !this.show_rules;
    },
    try_again() {
      this.$router.push({
        name: "christmas"
      });
    },
    close_back() {
      if (window.weget_mobile_type === "iOS") {
        this.$router.go(-1);
      } else {
        this.show_share_btn = false;
      }
    },
    init_data() {
      if (sessionStorage.getItem("from_self") === "yes") {
        if (window.weget_mobile_type === "iOS") {
          this.show_share_box = false;
          this.show_share_btn = true;
          if (window.webkit !== undefined) {
            window.webkit.messageHandlers.javaScriptToNative.postMessage(
              params
            );
          } else {
            console.log(`调用app方法成功! params = ${JSON.stringify(params)}`);
          }
        } else {
          this.show_share_box = true;
          this.show_share_btn = false;
        }
        sessionStorage.setItem("from_self", "no");
      }
      console.log(this.$route.query.id);
      // console.log(this.uid);
      let id = this.uid;
      api
        .share_detail({ id: this.$route.query.id })
        .then(res => {
          console.log(res);
          this.christmat = res.data;
          this.user_info = res.data.user_info;
          this.christmat_info = res.data.christmat_info;
          // this.help_user = res.data.help_user;
        })
        .catch(res => {
          console.log(res.err);
        });
    },
    link_light() {
      console.log(this.uid);
      let id = this.uid;
      api
        .help_light({ inviter_id: id })
        .then(res => {
          this.show_btn_box = true;
          this.showData = res.data;
        })
        .catch(res => {
          this.show_btn_box = true;
          this.callback_status = 2;
          console.log();
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
    rule,
    shareBox,
    btnBox
  }
};
</script>

<style lang='scss' scoped>
.christmas {
  width: 375px;
  min-width: 100%;
  height: 920px;
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
      }
      .black {
        color: #4e0105;
      }
    }
  }
  .rules-tips-box {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 20;
    transform: translateY(100%);
    img {
      width: 68x;
      height: 85px;
    }
  }
}
.tree-home-box {
  width: 100%;
  padding-left: 24px;
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
      height: 40px;
      margin-bottom: 10px;
    }
  }
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
    left: 50%;
    top: 46%;
    transform: translateX(-47%);
    width: 70%;
    height: 34%;
    z-index: 10;
    font-size: 11px;
    color: #fff;
    overflow: hidden;
    & > ul {
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
      padding: 4px;
      justify-content: space-between;
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
        width: 40%;
        padding-left: 20px;
        display: flex;
        align-items: center;
        font-size: 10px;
        span {
        }
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
