<template>
  <div class="love">

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
  methods: {},
  components: {}
};
</script>

<style lang='scss' scoped>
.love {
  display: block;
  width: 194px;
  height: 265px;
  background: url("/static/img/popballoons/gif/transtion.png") 0 0 no-repeat;
  background-size: 600%;
  animation: heart-burst steps(5) 1s forwards;
}
.stop {
  animation-play-state: paused;
}
@keyframes heart-burst {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 100%;
  }
}
.trans-img {
}
</style>
