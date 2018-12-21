<template>
  <div class="home-tips-box">
    <img class="them"
      src="/static/img/christmas/主题@2x的副本.png"
      alt="">
    <p class="run-time">
      <!-- <span v-for="(item,index) in run_time" :key="index">{{item}}</span> -->
      <span class="time-1">0</span>
      <span class="time-2">0</span>
      <span class="point-1">:</span>
      <span class="time-3">0</span>
      <span class="time-4">0</span>
      <span class="point-2">:</span>
      <span class="time-5">0</span>
      <span class="time-6">0</span>
    </p>
    <div class="rules-tips-box">

      <img src="/static/img/christmas/规则-这个会动.png"
        alt=""
        srcset="" @click.stop="show_dialog">
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      run_time: [0, 0, 0, 0, 0, 0]
    };
  },
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
  z-index: 5;
  .run-time {
    position: absolute;
    width: 100%;
    height: 24px;
    bottom: 20px;
    left: 0;
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
    .time-3 {
      left: 132px;
    }
    .time-4 {
      left: 176px;
    }
    .time-5 {
      left: 237px;
    }
    .time-6 {
      left: 281px;
    }
    .point-1 {
      left: 105px;
    }
    .point-2 {
      left: 209px;
    }
  }
  .them {
    width: 100%;
    height: auto;
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
</style>
