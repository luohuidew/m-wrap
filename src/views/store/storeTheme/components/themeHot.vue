<template>
  <div class="hot-box">
    <p class="box-title">
      HOT
    </p>
    <ul class="scroll-lists">
      <li v-for="(item) in hotData"
        :key="item.sku_id">
        <cardScroll :cardData="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import cardScroll from "@/components/card-column-scroll";
export default {
  name: "",
  props: {
    hotData: {
      type: Array,
      default: undefined
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {},
  components: {
    cardScroll
  }
};
</script>

<style lang='scss' scoped>
.box-title {
  padding:20px;
}
.scroll-lists {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  overflow-y: hidden;
  padding-left: 20px;
  padding-bottom: 20px;
  li {
    margin-right: 10px;
  }
}
</style>
