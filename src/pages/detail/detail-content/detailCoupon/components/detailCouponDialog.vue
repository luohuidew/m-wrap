<template>
  <div class="get-coupon-lists">
    <ul>
      <li class="close-coupon-get">
        <img src="/static/images/icon/normal/huise-close (2).png"
          alt="" @click="close_dialog">
      </li>
      <li class="coupon-page-title">
        <p>Enter Promo Code On Checkout Page To Save Money On Your Purchase</p>
      </li>
      <li class="all-lists">
        <h2> <img src="/static/images/icon/cart/搜索 copy 2@3x.png"
            alt="">
          <span>Weget Coupon</span>
        </h2>
        <ul>
          <li v-for="n in 5" :key="n">
            <coupon-item></coupon-item>
          </li>
        </ul>
      </li>
      <li class="coupon-rules-desc">
        Or You Can Use Weget Coupon On Checkout Page
      </li>
    </ul>
  </div>
</template>

<script>
import couponItem from "./couponItem";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {
    close_dialog(){
      this.$emit('close',null);
    }
  },
  components: {
    couponItem
  }
};
</script>

<style lang='scss' scoped>
.coupon-page-title {
  font-size: 14px;
}
/* title-close */
.close-coupon-get {
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  img {
    height: 17px;
    width: auto;
  }
}
/* title */
.coupon-page-title {
  background-color: #f3f3f3;
  padding: 17px 20px;
  p {
    color: #898989;
  }
}
/* lists */
.all-lists {
  height: 257px;
  overflow: auto;
  padding: 22px 20px 20px 20px;
  h2 {
    img {
      height: 17px;
      width: auto;
      vertical-align: middle;
    }
    span {
      font-size: 12px;
      font-weight: bold;
      padding-left: 10px;
    }
  }
}
/* 规则样式 */
.coupon-rules-desc {
  padding: 0px 20px 27px 20px;
  color: #9b9b9b;
  font-size: 12px;
}
</style>
