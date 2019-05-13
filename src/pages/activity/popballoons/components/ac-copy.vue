<template>
  <div class="copy-share"
    v-clipboard:copy="message"
    v-clipboard:success="onCopy"
    v-clipboard:error="onError">
    <slot name="box"></slot>
    <p class="copy-tips"
      :class="{'hidden':!show_tips,'show':show_tips}">
      <slot name="tips"></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      message: this.$store.state.popballoons_share_params,
      show_tips: false
    };
  },
  mounted() {},
  computed: {},
  methods: {
    onCopy(e) {
      this.show_tips = true;
      // alert("You just copied: " + e.text);
      setTimeout(() => {
        this.show_tips = false;
      }, 4000);
    },
    onError(e) {
       alert("Failed to copy!");
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.copy-share {
  width: 100%;
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
}
.copy-tips {
  font-size: 16px;
  // line-height: 24px;
  position: absolute;
  width: 100%;
  left: 0;
  // transform: translateX(-50%);
  top: 100%;
  z-index: 50;
  text-align: center;
  color: #fff;
  transition: all 1s;
  p {
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 6px;
     padding: 10px 4px;
  }
}
.show {
  opacity: 1;
}
.hidden {
  display: none;
  opacity: 0;
}
</style>
