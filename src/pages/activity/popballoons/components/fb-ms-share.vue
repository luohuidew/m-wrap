<template>
  <div class="btn-dialog">
    <div class="bg-wrapper">
      <div class="bg-img">
        <!-- <img class="box-bg" src="/static/img/christmas/矢量智能对象@2x_39.png" alt=""> -->
        <p class="tips-text">
          <slot name="dialog-desc">

          </slot>
        </p>
        <div class="btn-group">
          <slot name="btn-top"></slot>
          <slot name="btn-other"></slot>
          <slot name="btn-buttom"></slot>
        </div>
        <span class="close-icon"
          @click.stop="close_dialog">
          <img src="/static/img/popballoons/icon/X.png"
            alt="">
        </span>
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
      console.log("link");
      this.$emit("close", "close");
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.btn-dialog {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
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
  width: 350px;
  height: 564px;
  background: url("/static/img/popballoons/background/click_tips_box.png")
    no-repeat center center;
  // background-size: 100% 100%;
  .box-bg {
    width: 100%;
    height: auto;
  }
  .btn-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
    width: 219px;
    height: 160px;
    img {
      width: 100%;
      height: auto;
    }
  }
  .tips-text {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    font-size: 25px;
    line-height: 40px;
    color: #2c2c2c;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .close-icon {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    text-align: center;
  }
}
</style>
