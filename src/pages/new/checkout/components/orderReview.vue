<template>
  <div class="review-box">
    <h2>Order Review</h2>
    <ul class="checkout-lists-box">
      <li class="checkout-lists"
        v-for="(item) in 3"
        :key="item">
        <p class="total-store">
          <img src="/static/images/icon/cart/store@3x.png"
            alt=""
            srcset="">
          <span>w shop</span>
          <!-- <span>{{item.store_name}}</span> -->
        </p>
        <order-review-item></order-review-item>
        <order-review-total></order-review-total>
      </li>
    </ul>
  </div>
</template>

<script>
import orderReviewItem from "./orderReviewItem";
import orderReviewTotal from "./orderReviewTotal";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
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
