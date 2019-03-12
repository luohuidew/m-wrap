<template>
  <div>
    <div class="detail-coupon"
      @click="show_get_coupon_page">
      <img src="/static/images/icon/cart/搜索 copy 2@3x.png"
        alt="">
      <span>Store Promo Code & Weget Coupon</span>
    </div>
    <van-popup v-model="show_coupon"
      position="bottom"
      :overlay="true">
      <detail-coupon-dialog @close="show_coupon=false"></detail-coupon-dialog>
    </van-popup>
  </div>
</template>

<script>
import detailCouponDialog from "./components/detailCouponDialog";
export default {
  name: "",
  props: {},
  data() {
    return {
      show_coupon: false
    };
  },
  computed: {},
  created() {},
  methods: {
    show_get_coupon_page() {
      this.show_coupon = true;
    }
  },
  components: {
    detailCouponDialog
  }
};
</script>

<style lang='scss' scoped>
.detail-coupon {
  display: flex;
  align-items: center;
  height: 100%;
  background: url("/static/images/icon/cart/分类 copy@3x.png") no-repeat right
    center;
  background-size: auto 18px;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  padding: 20px 0;
  img {
    height: 20px;
    width: auto;
  }
  span {
    font-size: 14px;
    padding-left: 10px;
  }
}
</style>
