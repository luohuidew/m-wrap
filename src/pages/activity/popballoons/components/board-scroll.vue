<template>
  <div class="bulletin-board">
    <div class="board-texts">
      <ul :class="{'scroll-ul':boardLists.length>0}">
        <li class="board-item"
          v-for="(item,index) in boardLists"
          :key="index">
          <p>
            <img class="user_photo"
              :src="item.photo"
              alt=""
              srcset="">
          </p>
          <!-- 65765765765765 -->
          <p class="user-box">
            <span>{{item.user_name}} 1s ago</span>
            <span>Got {{item.name}} for FREE</span>
          </p>
        </li>
      </ul>
    </div>
    <!-- <img src="/static/img/popballoons/icon/con_scroll.png"
        class="board-background-title"
        alt=""
        srcset=""> -->
    <div class="board-background-title">

    </div>
    <div class="board-background-img">

    </div>
    <!-- <img class="board-background-img"
        src="/static/img/popballoons/background_scroll.png"
        alt=""
        srcset=""> -->
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: ["boardLists"],
  mounted() {},
  computed: {},
  methods: {},
  components: {}
};
</script>

<style lang='scss' scoped>
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
  .board-background-title {
    background: url("/static/img/popballoons/icon/con_scroll.png") no-repeat
      center center;
    background-size: auto 100%;
    height: 60px;
    // height: 50px;
    // width: auto;
    text-align: center;
  }
  .board-background-img {
    background: url("/static/img/popballoons/background/background_scroll@2x.png")
      no-repeat center center;
    background-size: auto 100%;
    height: 140px;
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
        overflow: hidden;
        // width: 208px;
        // display: -webkit-box;
        // -webkit-line-clamp: 1;
        // -webkit-box-orient: vertical;
        // text-overflow: ellipsis;
        span {
          width: 188px;
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
</style>
