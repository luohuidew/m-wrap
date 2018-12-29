<template>
  <div class="tree-home-box">
    <!-- 背景图 -->    
    <img src="/static/img/popballons/Popballoonswinyourfavorites_90.png"
      alt=""
      srcset="">
    <!-- <img :src="bg_img_lists[cur_index]"
      alt=""
      srcset=""> -->
    <div class="tips-info">
    </div>
    <div class="btn-click"
      @click="to_lists">
      <img src="/static/img/popballons/start.png"
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
      <div class="board-texts">
        <ul :class="{'scroll-ul':board_lists.length>0}">
          <li class="board-item"
            v-for="(item,index) in board_lists"
            :key="index">
            <p>
              <img class="user_photo"
                :src="item.photo"
                alt=""
                srcset="">
            </p>
            <!-- 65765765765765 -->
            <p class="user-box">
              <span>{{item.nickname}} 1s ago</span>
              <span>Got {{item.name}} for FREE</span>
            </p>
          </li>
          <!-- <li class="board-item"
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
            </p>
          </li> -->
        </ul>
      </div>
      <img src="/static/img/popballons/background_title.png"
        class="board-background-title"
        alt=""
        srcset="">
      <img class="board-background-img"
        src="/static/img/popballons/background_scroll.png"
        alt=""
        srcset="">
    </div>
  </div>
</template>

<script>
let timer;
import api from "@/api/christmas";
export default {
  name: "",
  data() {
    return {
      bg_img_lists: [
        "/static/img/christmas/toggle/x圣诞树动画2_gaitubao_com_399x617.png",
        "/static/img/christmas/toggle/x圣诞树动画3_gaitubao_com_399x617.png",
        "/static/img/christmas/toggle/x圣诞树动画4_gaitubao_com_399x617.png",
        "/static/img/christmas/toggle/x圣诞树动画5_gaitubao_com_399x617.png"
      ],
      cur_index: 0,
      board_lists: [],
      people: 0,
      is_ios: this.$store.state.is_ios
    };
  },
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {},
  methods: {
    init_data() {
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
    to_lists() {
      let params = {
        path: "/activity/popballoons/popballoons-lists"
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
  text-align: center;
  & > img {
    width: 100%;
    height: auto;
  }
  
  .btn-click {
    position: absolute;
    left: 50%;
    bottom: 27.6%;
    transform: translateX(-50%);
    text-align: center;
    img {
      height: 40px;
      margin: 10px 0 8px 0;
      width: auto;
    }
  }
}
.bulletin-board {
  position: relative;
  margin-top: 30px;
  font-size: 0;
  /* margin-bottom: 10px; */
  // padding-bottom: 10px;
  padding: 10px 28px;
  text-align: center;
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
  .board-background-title {
    height: 50px;
    width: auto;
    text-align: center;
  }
  .board-texts {
    position: absolute;
    left: 50%;
    top: 36%;
    transform: translateX(-50%);
    width: 80%;
    height: 48%;
    z-index: 10;
    font-size: 11px;
    color: #fff;
    overflow: hidden;
    // padding: 6px;
    // background-color: #fff;
    & > .scroll-ul {
      animation: scroll_board 60s linear infinite;
      // animation: scroll_board 60s infinite;
      // animation-fill-mode: forwards;
      animation-timing-function: 2s;
      // position: absolute;
      // left: 0;
      // top: 0;
    }
    @keyframes scroll_board {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-82%);
      }
    }
    .board-item {
      display: flex;
      height: 50px;
      // border-top: 1px solid #78141888;
      padding: 4px 10px;
      color: #000;
      justify-content: center;
      &:nth-child(1) {
        border: none;
      }
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
      p {
        display: flex;
        align-items: center;
      }
      .user-box {
        // flex: 1;
        padding-left: 20px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        font-size: 12px;
        line-height: 16px;
        flex-direction: column;
        align-items: flex-start;
        span {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: left;
        }
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
