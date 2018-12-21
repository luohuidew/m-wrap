<template>
  <div class="home-tips-box">
    <img class="them"
      src="/static/img/christmas/主题.png"
      alt="">
    <!-- <p class="run-time">
      <span v-for="(item,index) in time"
        :class="'time-'+(index+1)+''"
        :key="index">{{item}}</span>
    </p>
    <p class="need-num">
      <span>Only need XXX people to complete the tree.</span>
      <span>Share Immediately!</span>
    </p> -->
    <div class="rules-tips-box" @click.stop="show_dialog">
      <img src="/static/img/christmas/规则-这个会动.png"
        alt=""
        srcset="" >
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      // run_time: [0, 0, 0, 0, 0, 0]
    };
  },
  computed: {
    run_time() {
      let temp = [];
      for (let i = 0; i < this.time.length; i++) {
        temp.push(this.time[i]);
      }
      // let temp = this.time.split(',');
      return temp;
    }
  },
  props: ["time"],
  mounted() {},
  computed: {},
  methods: {
    show_dialog(type){
      console.log(type);
      this.$emit('showrules',type)
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.home-tips-box {
  width: 320px;
  margin: 0 auto;
  position: relative;
  .need-num {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 55%;
    width: 100%;
    color: #fff;
    z-index: 20;
    font-size: 14px;
    span {
      text-align: center;
      &:nth-child(1){
        font-size: 12px;
      }
    }
  }
  .run-time {
    position: absolute;
    width: 100%;
    height: 24px;
    bottom: 20px;
    left: 0;
    top: 0;
    z-index: 30;
    span {
      position: absolute;
      left: 0;
      top: 0;
      font-size: 18px;
      font-weight: bold;
      color: #fff;
    }
    .time-1 {
      left: 28px;
    }
    .time-2 {
      left: 72px;
    }
    .time-4 {
      left: 132px;
    }
    .time-5 {
      left: 176px;
    }
    .time-7 {
      left: 237px;
    }
    .time-8 {
      left: 281px;
    }
    .time-3 {
      left: 105px;
    }
    .time-6 {
      left: 209px;
    }
  }
  .them {
    width: 100%;
    height: auto;
    position: relative;
    z-index: 20;
  }
  // background: url("/static/img/christmas/主题.png") no-repeat top center;
  // background-size: 100% auto;
  .rules-tips-box {
    position: absolute;
    bottom: 20px;
    right: -20px;
    transform: translateY(100%);
    img {
      width: 70px;
    }
  }
}
.banner-board {
  padding: 0 10px;
  transform: translateY(-120px);
  img {
    width: 100%;
    height: auto;
  }
}
</style>
