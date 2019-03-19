<template>
  <div class="cart-list"
    v-if="goodsData.length">
    <div class="total-cart-box">
      <h2>Cart (9)</h2>
      <div class="head-select">
        <div class="icon-box"
          @click="toggle_checked_all(all_store_is_select)">
          <img v-if="all_store_is_select"
            src="/static/images/icon/cart/多选 选中@3x.png"
            alt=""
            srcset="">
          <img v-else
            src="/static/images/icon/cart/多选 未选中@3x.png"
            alt=""
            srcset="">
        </div>
        <p class="total-select">
          Select All Available Items (9)
        </p>
      </div>
    </div>
    <ul v-for="(item,index) in goodsData"
      :key="index"
      class="cart-lists">
      <li class="cart-lists-item">
        <cart-item @checkout="get_item_checkout(index,$event)"
          :lists-data="item"></cart-item>
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
    all_store_is_select() {
      let temp_boolean = false;
      let equal =
        this.cart_lists_item.length === this.goodsData.length &&
        this.cart_lists_item.length > 0;
      if (equal) {
        temp_boolean = this.cart_lists_item.every(item => {
          return item.checked_store === true;
        });
      }
      return temp_boolean;
    }
  },
  methods: {
    init_data() {},
    get_item_checkout(index, data) {
      // debugger
      this.$set(this.cart_lists_item, index, data);
      let temp = {
        cart_lists_item: this.cart_lists_item,
        total_data: this.total_data
      };
      // debugger;
      this.$emit("change", temp);
    },
    toggle_checked_all(){
      this.$children.forEach(item=>{
        item.toggle_checked();
      })
    }
  },
  components: {
    cartItem
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
/*  */
.head-select {
  display: flex;
}
.cart-lists {
  padding: 5px 20px;
  border-top: 10px solid #f3f3f3;
  .cart-lists-item {
  }
}
</style>
