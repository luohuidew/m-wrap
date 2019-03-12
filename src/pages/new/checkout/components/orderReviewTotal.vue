<template>
  <ul class="coupon-code-box">
    <li class="select-shipping">
      <div>
        <p class="shipping-title">Free Shipping</p>
        <p>
          <span>Estimated Delivery On</span><span>23days</span>
        </p>
      </div>
    </li>
    <li class="select-code">
      <div>
        <input type="text"
          v-model="code"
          placeholder="Enter Promo Code">
        <button>Apply</button>
      </div>
    </li>
    <li class="code-tips-box">
      <p>Oops, this code is invalid</p>
    </li>
    <li class="checkout-summary">
      <ul>
        <li>
          <span>Subtotal: </span>
          <span>$40.00</span>
        </li>
        <li>
          <span>Shipping: </span>
          <span>$6.99</span>
        </li>
        <li>
          <span>Total: </span>
          <span class="all-total">$46.00</span>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      code: ""
    };
  },
  computed: {},
  created() {},
  methods: {},
  components: {}
};
</script>

<style lang='scss' scoped>
$border_1px: 1px solid #f3f3f3;
.select-shipping,
.select-code {
  border-bottom: $border_1px;
  & > div {
    font-size: 16px;
    // padding-right: 20px;
    padding: 20px 20px 20px 0;
    background: url("/static/img/icon/right.png") no-repeat right center;
  }
}
.select-code {
  div {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding: 20px 0;

    input {
      color: #b6b6b6;
      border: 0;
    }
    button {
      width: 80px;
      height: 24px;
      font-size: 12px;
      line-height: 24px;
      background: #d70e19;
      border: 0;
      color: #fff;
      border-radius: 12px;
    }
  }
}
.code-tips-box {
  padding: 10px 0;
  color: #d70e19;
  font-size: 12px;
}
.checkout-summary {
  padding-bottom: 10px;
  ul {
  }
  li {
    display: flex;
    justify-content: space-between;
    color: #9b9b9b;
    font-size: 14px;
    line-height: 28px;
    .all-total {
      color: #000000;
      font-weight: bold;
    }
  }
}
</style>
