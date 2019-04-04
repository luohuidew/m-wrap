<template>
  <div class="pay-box"
    v-if="orderData.status===1">
    <button class="cancel">
      Cancel
    </button>
    <button @click="show_pay_methods=true"
      class="pay-now">
      Pay Now
    </button>
    <van-popup v-model="show_pay_methods"
      position="bottom"
      :overlay="true">
      <payment-dialog :order-data="orderData"
        @close="payClose"></payment-dialog>
    </van-popup>
  </div>
</template>

<script>
import paymentDialog from "@/pages/new/checkout/payment-dialog";
export default {
  name: "",
  props: {
    orderData: {
      type: Object,
      default: undefined
    }
  },
  data() {
    return {
      show_pay_methods: false
    };
  },
  computed: {},
  created() {
    if(!this.orderData.real_total_price){
      this.orderData.real_total_price = this.orderData.all_total;
    }
  },
  methods: {
    payClose() {
      this.show_pay_methods = false;
      this.$router.replace({
        path: "/callback",
        query: {
          // error: 'Paymentcancellation',
          pay_id: this.orderData.pay_id
        }
      });
    }
  },
  components: {
    paymentDialog
  }
};
</script>

<style lang='scss' scoped>
$base_color: #d70e19;
.pay-box {
  font-size: 12px;
  text-align: right;
  padding: 12px 0;
  button {
    width: 90px;
    height: 28px;
    line-height: 28px;
    border-radius: 14px;
    margin-left: 15px;
  }
  .cancel {
    border: 1px solid $base_color;
    color: $base_color;
  }
  .pay-now {
    color: #ffffff;
    background-color: $base_color;
    border: 1px solid $base_color;
  }
}
</style>
