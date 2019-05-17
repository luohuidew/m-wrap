<template>
  <div class="shipping-box">
    <div class="icon-box">
      <img src="/static/images/icon/detail/detaildui.png"
        alt=""
        srcset="">
    </div>
    <div class="detail-shipping"
      @click="show_detail_shipping">
      <p class="font-weight-bold">{{default_data.desc}}</p>
      <p class="remark">Ready to ship in 5-12 business days</p>
    </div>
    <!-- <van-popup v-model="show_dialog"
      position="bottom"
      :overlay="true">
      <shipping-dialog :shipping-data="allData.shipment" @close="show_dialog=false"></shipping-dialog>
    </van-popup> -->
  </div>
</template>

<script>
import shippingDialog from "./components/shippingDialog";
export default {
  name: "",
  props: {
    allData: {
      type: Object
    }
  },
  data() {
    return {
      show_dialog: false,
      default_data: this.allData.shipment[0]
    };
  },
  computed: {},
  created() {},
  methods: {
    show_detail_shipping() {
      this.$emit("toggle", true);
    }
  },
  components: {
    shippingDialog
  }
};
</script>

<style lang='scss' scoped>
.shipping-box {
  display: flex;
  align-items: center;
  .icon-box {
    padding-right: 10px;
    img {
      height: 18px;
      width: 18px;
    }
  }
}
.detail-shipping {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url("/static/images/icon/cart/分类 copy@3x.png") no-repeat right
    center;
  background-size: auto 18px;
  border-bottom: 1px solid #e9e9e9;
  padding: 17px 0;
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
