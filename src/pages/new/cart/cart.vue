<template>
  <div class="cart-layout">
    <div class="scroll-lists">     
      <cart-list></cart-list>
      <cart-expired></cart-expired>
      <cart-guide></cart-guide>
    </div>
    <div class="footer-buy">
      <ul>
        <li class="get-coupon">
          <div class="content">
            <img src="/static/images/icon/cart/搜索 copy 2@3x.png"
              alt="">
            <span>Get Weget Coupon</span>
          </div>
        </li>
        <li class="to-buy">
          <div class="total-box">
            <p class="total-desc">Total</p>
            <p class="total-price">$75.00</p>
          </div>
          <div class="buy-btn">
            Buy (3)
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import cartList from "./components/cartList";
import cartGuide from "./components/cartGuide";
import cartExpired from "./components/cartExpired";
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {},
  components: {
    cartList,
    cartGuide,
    cartExpired
  }
};
</script>

<style lang='scss' scoped>
.cart-layout {
  height: 100%;
}
.scroll-lists {
  height: calc(100% - 90px);
  overflow: auto;
}
/* 优惠券领取入口 */
.footer-buy {
  height: 90px;
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
