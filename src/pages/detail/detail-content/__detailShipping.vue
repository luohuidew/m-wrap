<template>
  <div>
    <div class="detail-shipping"
      @click="show_dialog=true">
      <p>Free Shipping Until April 23</p>
      <p class="remark">Estimated Delivery On 5-7days</p>
    </div>
    <van-popup v-model="show_dialog"
      position="bottom"
      :overlay="true">
      <!-- <detail-coupon-dialog @close="show_dialog=false"></detail-coupon-dialog> -->
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      show_dialog:true
    };
  },
  computed: {},
  created() {},
  methods: {},
  components: {}
};
</script>

<style lang='scss' scoped>
.detail-shipping {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url("/static/images/icon/cart/分类 copy@3x.png") no-repeat right
    center;
  background-size: auto 18px;
  border-bottom: 1px solid #e9e9e9;
  padding: 20px 0;
  img {
    height: 18px;
    width: auto;
  }
  p {
    font-size: 14px;
  }
  .remark {
    font-size: 12px;
    line-height: 16px;
    color: #9b9b9b;
  }
  span {
    font-size: 12px;
    color: #9b9b9b;
  }
}
</style>
