<template>
  <div class="cart-guide">
    <h2>You May Also Like</h2>
    <ul>
      <li v-for="(item,index) in req_data"
        :key="index">
        <sale-list :card-data="item"
          class="sku-item"></sale-list>
      </li>
    </ul>
  </div>
</template>

<script>
import saleList from "@/components/card-column-auto";
export default {
  name: "",
  props: {
    guiData: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      req_data: this.guiData
    };
  },
  mounted() {},
  computed: {},
  methods: {},
  components: {
    saleList
  }
};
</script>

<style lang='scss' scoped>
.cart-guide {
  padding: 10px;
  background-color: #f3f3f3;
  h2 {
    font-size: 18px;
    padding: 10px 5px 10px;
  }
  li {
    display: inline-block;
    width: 50%;
    padding: 5px;
  }
}
.sku-item {
}
</style>
