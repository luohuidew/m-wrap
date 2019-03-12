<template>
  <div class="checkout-layout">
    <div class="scroll-lists">
      <h2>Checkout</h2>
      <ul class="content-lists">
        <li>
          <user-address></user-address>
        </li>
        <li>
          <payment></payment>
        </li>
        <li>
          <order-review></order-review>
        </li>
        <li>
          <order-summary></order-summary>
        </li>
      </ul>
    </div>
    <div class="footer-buy">
      <ul>
        <li class="to-buy">
          <div class="total-box">
            <p class="total-desc">All Total</p>
            <p class="total-price">$75.00</p>
          </div>
          <div class="buy-btn"
            @click="to_pay">
            Checkout
          </div>
        </li>
      </ul>
    </div>   
  </div>
</template>

<script>
import userAddress from "./components/userAddress";
import payment from "./components/payment";
import orderReview from "./components/orderReview";
import orderSummary from "./components/orderSummary";
export default {
  name: "",
  data() {
    return {
      req_data: null,
      show_coupon_dialog: false
    };
  },
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {},
  methods: {
    init_data() {},
    /* buy some goods */
    to_pay() {
      let router_params = {
        path: "/pay",
        query: {}
      };
      this.$router.push(router_params);
    }
  },
  components: {
    userAddress,
    payment,
    orderReview,
    orderSummary
  }
};
</script>

<style lang='scss' scoped>
.checkout-layout {
  height: 100%;
}
.scroll-lists {
  height: calc(100% - 50px);
  overflow: auto;
  h2 {
    font-size: 24px;
    font-weight: bold;
    padding: 30px 20px;
  }
  .content-lists {
    li {
      border-bottom: 10px solid #f3f3f3;
      padding: 0 20px;
    }
  }
}
/* 优惠券领取入口 */
.footer-buy {
  height: 50px;
  border-top: 1px solid #e9e9e9;
  .get-coupon {
    height: 40px;
    border-top: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
    padding-left: 20px;
    padding-right: 20px;
    vertical-align: middle;
    img {
      height: 18px;
      width: auto;
    }
    span {
      font-size: 14px;
      padding-left: 10px;
    }
    .content {
      display: flex;
      align-items: center;
      height: 100%;
      background: url("/static/images/icon/cart/分类 copy@3x.png") no-repeat
        right center;
      background-size: auto 18px;
    }
  }
}
/* 计算总价 */
.to-buy {
  display: flex;
  justify-content: space-between;
  height: 50px;
  .total-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    .total-desc {
      font-size: 12px;
    }
    .total-price {
      font-size: 18px;
      font-weight: bold;
    }
  }
  .buy-btn {
    width: 140px;
    font-size: 16px;
    color: #ffffff;
    background-color: #d70e19;
    line-height: 50px;
    text-align: center;
  }
}
</style>
