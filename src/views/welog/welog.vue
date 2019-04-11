<template>
  <div class="welog-section">
    <waterfall :line-gap="200"
      :watch="items">
      <!-- each component is wrapped by a waterfall slot -->
      <waterfall-slot v-for="(index) in 20"
        height=""
        width=""
        :order="index"
        :key="index">
        <li class="item" :style="{height:`${index*3+30}px`}"></li>
      </waterfall-slot>
    </waterfall>
  </div>
</template>

<script>
import Waterfall from "vue-waterfall/lib/waterfall";
import WaterfallSlot from "vue-waterfall/lib/waterfall-slot";
export default {
  name: "",
  props: {},
  data() {
    return {
      items:{}
    };
  },
  computed: {},
  created() {},
  methods: {},
  components: {
    Waterfall,
    WaterfallSlot
  }
};
</script>

<style lang='scss' scoped>
.item {
  display: inline-block;
  width: 50%;
  height: 60px;
  background-color: #f3f3f3;
  margin: 10px;
  vertical-align: top;
  &:nth-child(2n-1) {
    height: 30px;
  }
}
</style>
