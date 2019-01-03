<template>
  <div class="bulletin-board">
    <div class="board-texts">
      <ul :class="{'scroll-ul':boardLists.length>0}">
        <li class="board-item"
          v-for="(item,index) in boardLists"
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
    <img src="/static/img/popballoons/icon/lamp_scroll.png"
      class="board-background-title"
      alt=""
      srcset="">
    <img class="board-background-img"
      src="/static/img/popballoons/background_scroll.png"
      alt=""
      srcset="">
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
  padding: 10px 0px;
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
      position: relative;
      display: flex;
      height: 50%;
      border-top: 1px solid #78141888;
      padding: 4px 10px;
      color: #000;
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
</style>
