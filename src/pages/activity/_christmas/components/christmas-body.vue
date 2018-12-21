<template>
  <div class="tree-home-box">
    <img src="/static/img/christmas/lightsetup@2x.png"
      alt=""
      srcset="">
    <div class="tips-info">
      <img src="/static/img/christmas/Tom-Ford-2.png"
        alt=""
        srcset="">
    </div>
    <div class="btn-click"
      @click="to_share">
      <img src="/static/img/christmas/按钮@2x.png"
        alt=""
        srcset="">
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
        <ul>
          <li class="board-item"
            v-for="(item,index) in showData.lampHelper"
            :key="index">
            <p>
              <img :src="item.photo"
                alt=""
                srcset="">
            </p>
            <p class="user-box">
              <span>{{item.nickname}} Lit for me</span>
              <span>Got 17:34</span>
              <!-- <span>Got {{new Date(item.time*1000).getMonth()+1}}{{new Date(item.time*1000).getDate()}}{{new Date(item.time*1000).getHours()}}{{new Date(item.time*1000).getMinutes()}} </span> -->
            </p>
          </li>
        </ul>
      </div>
      <img class="board-background-img"
        src="/static/img/christmas/Qeaql.com拷贝.png"
        alt=""
        srcset="">
    </div>
    <div class="banner-board"
      @click.stop="to_home">
      <img class="board-img"
        src="/static/img/christmas/广告.png"
        alt=""
        srcset="">
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: ["uid", "showData"],
  mounted() {},
  computed: {},
  methods: {
    to_share() {
      let params = {
        path: "/activity/christmas-groupbuy",
        query: {
          id: this.uid
        }
      };
      this.$router.push(params);
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
  components: {}
};
</script>

<style lang='scss' scoped>
.tree-home-box {
  width: 100%;
  // padding-left: 24px;
  position: relative;
  // transform: translateY(-73px);
  z-index: 10;
  & > img {
    width: 100%;
    height: auto;
    margin-left: 10px;
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
    top: 395px;
    transform: translateX(-50%);
    text-align: center;
    img {
      height: 40px;
      margin-top: 10px;
      width: auto;
    }
  }
}
.bulletin-board {
  position: relative;
  margin-top: -44px;
  font-size: 14px;
  /* margin-bottom: 10px; */
  padding-bottom: 10px;
  // transform: translateY(-90px);
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
    transform: translateX(-50%);
    width: 70%;
    height: 34%;
    z-index: 10;
    font-size: 11px;
    color: #fff;
    overflow: hidden;
    // padding: 6px;
    // background-color: #fff;
    & > ul {
      animation: scroll_board 10s infinite;
      // animation-fill-mode: forwards;
      // animation-timing-function:2s;
      // position: absolute;
      // left: 0;
      // top: 0;
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
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
      .user-box {
        flex: 1;
        padding-left: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 10px;
        img {
          width: 30px;
          height: 30px;
        }
        // flex-direction: column;
        // align-items: center;
      }
      .sku-box {
        width: 130px;
        font-size: 10px;
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
</style>
