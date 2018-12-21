<template>
  <div class="christmas">
    <div class="home-tips-box">
      <img class="them"
        src="/static/img/christmas/主题.png"
        alt="">
      <div class="rules-tips-box">

        <!-- <img src="/static/img/christmas/规则-这个会动.png"
          alt=""
          srcset=""> -->
      </div>
    </div>
    <div class="tree-home-box">      
      <div class="btn-click"
        @click="to_lists">
        <img src="/static/img/christmas/JoinNow@2x.png"
          alt=""
          srcset="">
      </div>
    </div>
    <div class="bulletin-board">
      <p class="pepole-join">xxxx people got free gift</p>
      <div class="board-texts">
        <ul>
          <li class="board-item"
            v-for="(item,index) in board_lists"
            :key="index">
            <p>
              <img :src="item.photo"
                alt=""
                srcset="">
            </p>
            <p class="user-box">
              <span>{{item.nickname}} 1s ago</span>
              <span class="free-info">Got {{item.name}} for FREE</span>
            </p>
          </li>
        </ul>
      </div>
      <img class="board-background-img"
        src="/static/img/christmas/Qeaql.com拷贝.png"
        alt=""
        srcset="">
    </div>
    <!--  -->
    <!-- <dialog-btn></dialog-btn> -->
  </div>
</template>

<script>
import api from "@/api/christmas";
import dialogBtn from "./components/dialog-btn";
export default {
  name: "",
  data() {
    return {
      board_lists:undefined
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
        console.log(res);
        this.board_lists = res.data.successList;
      });
    },
    to_lists() {
      this.$router.push({ name: "christmas-lists" });
    }
  },
  components: {
    dialogBtn
  }
};
</script>

<style lang='scss' scoped>
.christmas {
  width: 375px;
  min-width: 100%;
  // height: 920px;
  // min-width: 100%;
  padding: 0 20px;
  // overflow: auto;
  font-size: 0;
  background: url("/static/img/christmas/首页背景.jpg") no-repeat top center;
  background-size: 100% 100%;
}
.home-tips-box {
  width: 100%;
  position: relative;
  .them {
    width: 100%;
    height: auto;
  }
  // background: url("/static/img/christmas/主题.png") no-repeat top center;
  // background-size: 100% auto;
  .rules-tips-box {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(100%);
  }
}
@keyframes mymove {
  0% {
    background: url("/static/img/christmas/toggle/x圣诞树动画2.png") no-repeat
      center center;    
  }
  25% {
    background: url("/static/img/christmas/toggle/x圣诞树动画2.png") no-repeat
      center center;    
  }
  50% {
    background: url("/static/img/christmas/toggle/x圣诞树动画3.png") no-repeat
      center center;    
  }
  75% {
    background: url("/static/img/christmas/toggle/x圣诞树动画4.png") no-repeat
      center center;    
  }
  100% {
    background: url("/static/img/christmas/toggle/x圣诞树动画5.png") no-repeat
      center center;    
  }
}
.tree-home-box {
  width: 100%;
  height: 550px;
  // animation: mymove 3s infinite;
  animation-delay: 1s;
  animation-timing-function: linear;
  // animation-direction:alternate;
  // padding-left: 24px;
   background: url("/static/img/christmas/toggle/x圣诞树动画4.png") no-repeat
      center center; 
  background-size: 335px 550px;
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
  .btn-click {
    position: absolute;
    left: 50%;
    bottom: 61px;
    transform: translateX(-50%);
    img {
      height: 40px;
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
      animation: scroll_board 100s infinite;
      animation-timing-function: linear
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
        // flex:1;
        padding-left: 20px;
        display: flex;
        flex-direction: column;
        .free-info {
          display: flex;
          flex-wrap: nowrap;
        }
       
        // align-items: center;
      }
      .sku-box {
        width: 130px;
        font-size: 10px;
      }
    }
  }
}
</style>
