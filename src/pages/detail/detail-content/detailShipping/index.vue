<template>
  <div>
    <div class="detail-shipping"
      @click="show_detail_shipping">
      <p>{{default_data.key_name}}</p>
      <p class="remark">{{default_data.desc}}</p>
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
    allData:{
      type:Object,

    }
  },
  data() {
    return {
      show_dialog: false,
      default_data:this.allData.shipment[0]
    };
  },
  computed: {},
  created() {},
  methods: {
    show_detail_shipping(){
      this.$emit('toggle',true);
    }
  },
  components: {
    shippingDialog
  }
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
