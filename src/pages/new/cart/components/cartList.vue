<template>
  <div class="cart-list"
    v-if="goodsData.length">
    <div class="total-cart-box">
      <div class="head-select">
        <div class="select-box">
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
            Select All Available Items <span>({{$store.state.cart.goods_num}})</span>
          </p>
        </div>
        <p class="remove"
          @click="remove_cart_items(total_data.cart_ids)">
          <img src="/static/images/icon/cart/H5 删除 grey@3x.png"
            alt=""
            srcset="">
        </p>
      </div>
    </div>
    <ul v-for="(item,index) in goodsData"
      :key="index"
      class="cart-lists">
      <li class="cart-lists-item">
        <cart-item @checkout="get_item_checkout"
          :lists-data="item"></cart-item>
      </li>
    </ul>
  </div>
</template>

<script>
import cartItem from "./cartItem";
import CART from "@/api/cart";
export default {
  name: "",
  data() {
    return {
      selectStoreGoods: [],
      all_store_is_select: false,

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
  },
  watch: {},
  mounted() {},
  computed: {
  },
  methods: {
    get_item_checkout(obj) {
      let clock = false
      this.selectStoreGoods.forEach((item) => {
        if (item.store_id === obj.store_id) {
          clock = true
          item = obj
        }
      })
      if (!clock) {
        this.selectStoreGoods.push(obj)
      }
      this.$emit("change", this.selectStoreGoods);
      this.findAllSelectStore()
    },
    findAllSelectStore() {
     const selectedStore =  this.selectStoreGoods.filter(item=> {
        return item.checkted_store === true
      })
      this.all_store_is_select = selectedStore.length === this.goodsData.length
    },
    toggle_checked_all(val) {
      this.$children.forEach(item => {
        item.toggle_checked(val);
      });
    },
    remove_cart_items(cartIds = []) {
      let params = {
        only: cartIds
      };
      if (!cartIds.length) {
        return false;
      }
      CART.delShopCartGood(params)
        .then(res => {
          window.location.reload();
        })
        .then(() => {
          CART.getCartNum().then(res => {
            this.$store.commit("SET_CATR", res.data.num);
          });
        });
    }
  },
  components: {
    cartItem
  }
};
</script>

<style lang='scss' scoped>
.total-cart-box {
  padding: 20px 20px 13px 20px;
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
  justify-content: space-between;
  .select-box {
    display: flex;
  }
  .remove {
    align-self: flex-end;
    img {
      height: 18px;
      width: 18px;
    }
  }
}
.cart-lists {
  padding: 5px 20px;
  border-top: 10px solid #f3f3f3;
  .cart-lists-item {
  }
}
</style>
