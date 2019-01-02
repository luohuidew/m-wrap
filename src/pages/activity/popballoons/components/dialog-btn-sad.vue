<template>
  <div class="btn-dialog">
    <div class="bg-wrapper">
      <div class="bg-img">
        <img class="box-bg"
          src="/static/img/popballoons/icon/sad.png"
          alt="">
        <!-- <p class="tips-text">Lit one light</p> -->
        <div class="btn-group">
          <slot name="dialog-desc"></slot>
          <slot name="btn-top"></slot>
          <slot name="btn-buttom"></slot>
        </div>
        <span class="close-icon"
          @click.stop="close_dialog">
          <img src="/static/img/popballoons/icon/X.png"
            alt=""
            srcset=""></span>
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
  background: rgba(0, 0, 0, 0.5);
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
  width: 300px;
  height: 430px;
  background: url("/static/img/popballoons/background/click_tips_box.png")
    no-repeat center center;
  background-size: 100% 100%;
  text-align: center;
  .box-bg {
    margin-top: 50px;
    width: 136px;
    height: auto;
  }
  .btn-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    text-align: center;
    left: 50%;
    top: 52%;
    transform: translateX(-50%);
    width: 90%;
    /* height: 120px; */
  }
  .tips-text {
    position: absolute;
    top: 70px;
    left: 12px;
    width: 140px;
    height: 70px;
    font-size: 12px;
    color: #fff;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .close-icon {
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
  }
  // .box-bg {
  //   position: absolute;
  //   width: 100%;
  // }
}
</style>
