<template>
  <div class="ac-rules"
    @click="open_dialog">   
       <img src="/static/img/christmas/icon/EventRules@2x.png" alt="" srcset="">
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
    };
  },
  mounted() {},
  computed: {},
  methods: {    
    open_dialog() {
      this.$emit("open", "open");
    }
  },
  components: {
  }
};
</script>

<style lang='scss' scoped>
.ac-rules {
  width: 80px;
  height: 120px;
  background: url("/static/img/christmas/icon/图层39拷贝@2x.png") no-repeat
    center top;
  background-size: 100% auto;
  @keyframes move {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(0.8);
      }
    }
  img {
    position: absolute;
    bottom: 30px;
    left: 11px;
    width: 70%;
    height: auto;
    animation: move 2s infinite;
    animation-direction:alternate;
  }
}
</style>
