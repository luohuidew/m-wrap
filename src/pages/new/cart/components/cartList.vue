<template>
  <div class="cart-list"
    v-if="goodsData.length">
    <div class="total-cart-box">
      <h2>Cart (9)</h2>
      <p class="total-select">
        Select All Available Items (9)
      </p>
    </div>
    <ul v-for="(item,index) in goodsData"
      :key="index"
      class="cart-lists">
      <li class="cart-lists-item">
        <cart-item @checkout="get_item_checkout(index,$event)" :lists-data="item"></cart-item>
      </li>
    </ul>
  </div>
</template>

<script>
import cartItem from "./cartItem";
export default {
  name: "",
  data() {
    return {
      cart_lists_item: [],
      total_data: {
        total: 0,
        cart_ids: []
      }
    };
  },
  props: {
    goodsData: {
      type: Array,
      default: []
    }
  },
  created() {
    this.init_data();
  },
  watch: {},
  mounted() {},
  computed: {
    to_parent_data(){
      let temp = {
        cart_lists_item:this.cart_lists_item,
        total_data:this.total_data
      }
      this.$emit('change',temp);
      return temp;
    }
  },
  methods: {
    init_data() {},
    get_item_checkout(index, data) {
      this.$set(this.cart_lists_item, index, data);
    }
  },
  components: {
    cartItem,    
  }
};
</script>

<style lang='scss' scoped>
.total-cart-box {
  padding: 30px 20px 13px 20px;
  h2 {
    font-size: 26px;
    padding-bottom: 28px;
  }
  .total-select {
    font-size: 14px;
  }
}
.cart-lists {
  padding: 5px 20px;
  border-top: 10px solid #f3f3f3;
  .cart-lists-item {
  }
}
</style>
