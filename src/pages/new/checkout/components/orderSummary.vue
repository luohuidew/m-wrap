<template>
  <div class="order-summary-box">
    <h2>Order Summary (3 items)</h2>
    <div class="select-coupon">
      <img src="/static/images/icon/cart/搜索 copy 2@3x.png"
        alt=""
        srcset="">
      <span>Save $4.00 优惠券的名字</span>
    </div>
    <ul class="all-total-lists">
      <li>
        <span>
          Total:
        </span>
        <span>
          $121.99
        </span>
      </li>
      <li>
        <span>
          Weget Coupon:
        </span>
        <span class="color-red">
          $-4.00
        </span>
      </li>
      <li>
        <span>
          Total Before Tax:
        </span>
        <span>
          $0 $0
        </span>
      </li>
      <li>
        <span>
          Tax:
        </span>
        <span>
          $0
        </span>
      </li>
      <li>
        <span>
          Tax All Total:
        </span>
        <span>
          $121.99
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {},
  components: {}
};
</script>

<style lang='scss' scoped>
.order-summary-box {
  h2 {
    padding: 20px 0;
  }
}
.select-coupon {
  display: flex;
  align-items: center;
  font-size: 16px;
  // padding-right: 20px;
  padding: 20px 20px 20px 0;
  background: url("/static/img/icon/right.png") no-repeat right center;
  border-top: 1px solid #f3f3f3;
  span {
    font-size: 12px;
    color: #9b9b9b;
  }
  img {
    height: 20px;
    width: auto;
    vertical-align: middle;
    margin-right: 10px;
  }
}
/* jiagelibiao */
.all-total-lists {
  border-top: 1px solid #f3f3f3;
  padding: 20px 0 40px 0;
}
/* zongjianjisuan  */
.all-total-lists {
  li {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 2;
  }
}
</style>
