<template>
  <div class="tree-home-box">
    <img :src="bg_img_lists[cur_index]"
      alt=""
      srcset="">
    <div class="tips-info">
      <!-- <img src="/static/img/christmas/Tom-Ford-2.png" alt="" srcset=""> -->
    </div>
    <div class="btn-click"
      @click="to_lists">
      <img src="/static/img/christmas/JoinNow@2x.png"
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
      <p class="pepole-join">{{people}} people got free gift</p>
      <div class="board-texts">
        <ul>
          <li class="board-item"
            v-for="(item,index) in board_lists"
            :key="index">
            <p>
              <img class="user_photo"
                :src="item.photo"
                alt=""
                srcset="">
            </p>
            <p class="user-box">
              <span>{{item.nickname}} 1s ago</span>
              <span>Got {{item.name}} for FREE</span>
            </p>
          </li>
        </ul>
      </div>
      <img class="board-background-img"
        src="/static/img/christmas/Qeaql.com拷贝.png"
        alt=""
        srcset="">
    </div>
    <div class="banner-board">
      <img class="board-img"
        src="/static/img/christmas/广告.png"
        alt=""
        srcset="">
    </div>
  </div>
</template>

<script>
let timer;
import api from "@/api/christmas";
import { getToken } from "@/utils/auth";
export default {
  name: "",
  data() {
    return {
      bg_img_lists: [
        "/static/img/christmas/toggle/x圣诞树动画2.png",
        "/static/img/christmas/toggle/x圣诞树动画3.png",
        "/static/img/christmas/toggle/x圣诞树动画4.png",
        "/static/img/christmas/toggle/x圣诞树动画5.png"
      ],
      cur_index: 0,
      board_lists: undefined,
      people:0
    };
  },
  props: ["uid"],

  mounted() {
    api.successActivityList().then(res => {
      this.board_lists = res.data.successList;
      this.people = res.data.successNumber;
    });
    timer = setInterval(() => {
      // console.log(this.cur_index);
      this.cur_index += 1;
      if (this.cur_index > 3) {
        this.cur_index = 0;
      }
    }, 1000);
  },
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
    to_lists() {
      let params = {
        path: "/activity/christmas-lists"
      };
      window.clearInterval(timer);
      this.$router.push(params);
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
  }
  .tips-info {
    position: absolute;
    left: 50%;
    top: 150px;
    text-align: center;
    transform: translate(-50%, -50%);
    img {
      width: 140px;
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
  @keyframes scrollboard {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-80%);
    }
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
    overflow: auto;
    // padding: 6px;
    // background-color: #fff;
    & > ul {
      animation: scrollboard 10s infinite;
      // animation-fill-mode: forwards;
      animation-timing-function: 1s;
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
        // flex:1;
        padding-left: 20px;
        display: flex;
        flex-direction: column;
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
  display: none;
}
</style>
