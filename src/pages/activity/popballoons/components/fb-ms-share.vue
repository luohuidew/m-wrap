<template>
  <div class="btn-dialog">
    <div class="bg-wrapper">
      <div class="bg-img">
        <!-- <img class="box-bg" src="/static/img/christmas/矢量智能对象@2x_39.png" alt=""> -->
        <!-- <p class="tips-text">Lit one light</p> -->
        <slot name="dialog-desc" class="tips-text"></slot>
        <div class="btn-group">
          <slot name="btn-top"></slot>
          <slot name="btn-other"></slot>
          <slot name="btn-buttom"></slot>
        </div>
        <span class="close-icon" @click.stop="close_dialog"></span>
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
    close_dialog(){
      console.log('link');
      this.$emit('close','close');
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
  width: 350px;
  height: 564px;
  background: url("/static/img/christmas/icon/组2@2x_54.png") no-repeat
    center center;
  background-size: 100% 100%;
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
    top:43%;
    transform: translateX(-50%);
    width: 184px;
    height: 160px;
    img {
      width: 100%;
      height: auto;
    }
  }
  .tips-text {
    position: absolute;
    top: 70px;
    left: 12px;
    width: 140px;
    height: 70px;
    font-size: 12px;
    color:#fff;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .close-icon {
    position: absolute;
    top:0;
    right: 35px;
    width: 50px;
    height: 50px;
  }
  // .box-bg {
  //   position: absolute;
  //   width: 100%;
  // }
}
</style>
