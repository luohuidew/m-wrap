<template>
  <div class="bulletin-board" v-if="showData">
    <p class="pepole-join">Decorators</p>
    <div class="board-texts">
      <ul :class="{'scroll-ul':showData.lampHelper.length>0}">
        <li class="board-item"
          v-for="(item,index) in showData.lampHelper"
          :key="index">
          <p>
            <img :src="item.photo">
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
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props:['showData'],
  mounted() {},
  computed: {},
  methods: {},
  components: {}
};
</script>

<style lang='scss' scoped>
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
    & > .scroll-ui {
      animation: scroll_board 100s infinite;
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
        transform: translateY(-100%);
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
        width: auto;
        height: 100%;
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
</style>
