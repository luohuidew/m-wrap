<template>
  <div class="review-box">
    <h2>Order Review</h2>
    <ul class="checkout-lists-box">
      <li class="checkout-lists"
        v-for="(item, index) in store_goods"
        :key="index">
        <p class="total-store">
          <img src="/static/images/icon/cart/store@3x.png"
            alt=""
            srcset="">
          <span>{{item.store_name}}</span>
          <!-- <span>{{item.store_name}}</span> -->
        </p>
        <order-review-item :goods_data = 'item.goods_data'></order-review-item>
        <order-review-total :address_item = 'address_item' :totalPrice = 'item'  v-on="$listeners" :store_updata_price =' store_total_price[index]'></order-review-total>
      </li>
    </ul>
  </div>
</template>

<script>
import orderReviewItem from "./orderReviewItem";
import orderReviewTotal from "./orderReviewTotal";
export default {
  name: "",
  props: {
    store_goods: {
      type: Array,
      default: function () {
        return []
      },
    },
    store_total_price: {
      type: Array,
      default:function () {
        return []
      }
    },
    address_item: {
      type: Object,
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {
    console.log(77733, this.store_goods)
  },
  methods: {},
  components: {
    orderReviewItem,
    orderReviewTotal
  }
};
</script>

<style lang='scss' scoped>
.review-box {
  h2 {
    padding-top: 20px;
  }
}
.checkout-lists-box {
  padding-bottom: 10px;
}
.checkout-lists {
  border-bottom: 10px solid #f3f3f3;
  &:nth-last-child(1) {
    border: none;
  }
  .total-store {
    padding-bottom: 18px;
    padding-top: 20px;
    border-bottom: 1px solid #f3f3f3;
    img {
      width: 18px;
      height: 18px;
      -o-object-fit: contain;
      object-fit: contain;
      vertical-align: middle;
    }
    span {
      font-size: 14px;
      padding-left: 5px;
      font-weight: bold;
    }
  }
}
</style>
