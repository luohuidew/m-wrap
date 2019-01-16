<template>
  <div class="share-box"
    @click="close_box">
    <div class="no-safari"
      v-if="!is_safari">

    </div>
    <div class="is-safari"
      v-else>

    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  computed: {
    is_safari() {
      // alert(this.$CM.is_safari());
      return this.$CM.is_safari();
    }
  },
  mounted() {},
  methods: {
    close_box() {
      this.$emit("close", "close");
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.share-box {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 40;
  background-color: rgba(0, 0, 0, 0.6);
  // border: 4px solid #f90;
  & > div {
    height: 100px;
  }
  .no-safari {
    background: url("/static/img/elements/Artboard 2@2x.png") no-repeat top
      right;
    background-size: auto 80px;
    transform: translate(-30px,30px);
  }
  .is-safari {
    position: absolute;
    width: 100%;
    height: 100px;
    // left: 50%;
    bottom: 80px;
    background: url("/static/img/elements/safari@3x.png") no-repeat 70% bottom;
    background-size: auto 80px;
  }
}
// .is-dsafari {
//   background: rgba(0, 0, 0, 0.6) url("/static/img/elements/safari@3x.png")
//     no-repeat 70% bottom;
//   background-size: auto 80px;
// }
</style>
