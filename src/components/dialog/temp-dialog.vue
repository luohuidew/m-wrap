<template>
  <div class="dialog-box"
    @click="close_cur_dialog"
    :class="{'show-transtion':show_transtion}">
    <slot name="tips"></slot>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      show_transtion: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.show_transtion = true;
    }, 10);
  },
  beforeDestroy() {
    setTimeout(() => {
      this.show_transtion = false;
    }, 10);
  },
  computed: {},
  methods: {
    close_cur_dialog() {
      let data = 0;
      this.$emit("close", data);
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.dialog-box {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  transform: translateY(100%);
  transition: all 0.5s;
}
.show-transtion {
  transform: translateY(0);
}
</style>
