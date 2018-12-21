<template>
  <div class="rules-content">
    <div class="bg-wrapper">
      <div class="bg-img">
        <!-- <img class="box-bg" src="/static/img/christmas/矢量智能对象@2x_39.png" alt=""> -->

        <div class="btn-group">
          <img src="/static/img/christmas/规则明细-你看用哪个.png"
            alt="">
        <span class="close-icon"
          @click="close_dialog"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {
    close_dialog() {
      this.$emit('closerules','close');
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.rules-content {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.8);
}
.bg-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
.bg-img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  // background: url("/static/img/christmas/规则明细-你看用哪个.png") no-repeat
  //   center center;
  // background-size: 100% 100%;
  .box-bg {
    width: 100%;
    height: auto;
  }
  .btn-group {
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    left: 0;
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
    .close-icon {
      position: absolute;
      right: 13%;
      top: 0;
      width: 50px;
      height: 50px;
    }
  }
  .tips-text {
    position: absolute;
    top: 70px;
    left: 12px;
    width: 140px;
    height: 70px;
  }
}
</style>
