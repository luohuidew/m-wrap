<template>
  <div class="payment-dialog">
    <ul class="dialog-content">
      <li class="dialog-title">
        <img src="/static/img/icon/huise-close (2).png"
          alt=""
          srcset=""
          @click="close_dialog">
        <p>Payment Confirmation</p>
      </li>
      <li class="order-box">
        <p class="font-weight-bold">Order ID</p>
        <p class="order-no">{{orderData.order_no}}</p>
      </li>
      <li class="payment-choice-list">
        <p class="choice-list-title font-weight-bold">Payment Method</p>
        <ul>
          <li :class="{'active':is_select_pay===1}"
            @click="is_select_pay=1">
            <p>
              <span>
                Credit/Debit Card
              </span>
              <img src="/static/img/icon/pay/Visa-light.png"
                alt="">
              <img src="/static/img/icon/pay/MasterCard-light.png"
                alt="">
              <img src="/static/img/icon/pay/Maestro-light.png"
                alt="">
              <img src="/static/img/icon/pay/AmericanExpress-light.png"
                alt="">
            </p>
          </li>
          <li :class="{'active':is_select_pay===2}"
            @click="is_select_pay=2">
            <p>
              <span>
                PayPal
              </span>
              <img src="/static/img/icon/pay/Group 14.png"
                alt="">
            </p>
          </li>
        </ul>
      </li>
      <li class="total-info">
        <span class="font-weight-bold">
          Order Total
        </span>
        <span class="total-price">
          {{orderData.money_unit}}{{orderData.total_fee}}
        </span>
      </li>
    </ul>
    <div class="payment-button">
      <template v-if="is_https">
        <accept v-show="is_select_pay===1"
          :order="orderData.order_no"></accept>
        <paypal v-show="is_select_pay===2"
          :token="token"
          :env="environment"
          v-on:error="onError"
          v-on:authorized="onAuthorize"
          v-on:canceled="onCancel"></paypal>
      </template>
      <template v-else>
        <accept-test v-show="is_select_pay===1"
          :order="orderData.order_no"
          @pay="pay_callback"></accept-test>
        <paypal-test v-show="is_select_pay===2"
          :token="token"
          :env="environment"
          v-on:error="onError"
          v-on:authorized="onAuthorize"
          v-on:canceled="onCancel"></paypal-test>
      </template>
    </div>
  </div>
</template>

<script>
import api from "@/api/pay";
import paypal from "./components/paypal.vue";
import paypalTest from "./components/paypal-test.vue";
import accept from "./components/accept.vue";
import acceptTest from "./components/accept-test.vue";
export default {
  name: "",
  data() {
    return {
      is_select_pay: this.submitData.pay_type,
      environment: "sandbox",
      token: "sandbox_4pnsrcb4_psz4rkjwr3r3kqpp",
      // token: null,
      locale: "en_US"
    };
  },
  props: {
    orderData: {
      type: Object,
      default: null
    },
    submitData: {
      type: Object,
      default: null
    }
  },
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {
    is_https() {
      return window.location.protocol === "https:";
    }
  },
  methods: {
    init_data() {
      api.pay_key().then(res => {
        this.token = res.data;
      });
    },
    close_dialog() {
      this.$emit("close", null);
    },
    pay_callback(res){
      if(res.code===1000){
        let url_params={
          path:'/callback',
          query:{
            order_no:res.data.order_no
          }
        };
        this.$router.replace(url_params);
      }else {

      }
    },
    create_order(type) {
      console.log(type.pay_type);
    },
    onAuthorize(nonce) {
      console.log(nonce);
      let params = {
        nonce: nonce,
        order_no: this.orderData.order_no
      };
      api.pay_paypal(params).then(res => {
       this.pay_callback(res);
      }).catch(err=>{
       this.pay_callback(err);
      });
    },
    onCancel: () => {
      console.log("Cancelled");
    },
    onError: error => {
      console.error(error);
    }
  },
  components: {
    paypal,
    accept,
    acceptTest,
    paypalTest
  }
};
</script>

<style lang='scss' scoped>
.payment-dialog {
  padding: 16px 0px 40px 0px;
  font-size: 14px;
  .dialog-content {
    padding: 0 20px;
  }
}
.dialog-title {
  display: flex;
  padding-bottom: 40px;
  img {
    height: 16px;
    width: 16px;
    margin-right: 20px;
  }
  p {
    flex: 1;
    text-align: center;
    font-weight: bold;
  }
}
.order-box {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  margin-bottom: 30px;
  border-bottom: 1px solid #f3f3f3;
  order-no {
    color: #4a4a4a;
  }
}
.payment-choice-list {
  padding-bottom: 8px;
  margin-bottom: 20px;
  border-bottom: 1px solid #f3f3f3;
  .choice-list-title {
    padding-bottom: 30px;
  }
  li {
    padding: 11px 0;
    padding-left: 30px;
    // align-items: center;
    background: url("/static/img/icon/选择 灰@2x.png") no-repeat left center;
    background-size: 15px 15px;
    p {
      display: flex;
      align-items: center;
    }
  }
  .active {
    background: url("/static/img/icon/选择红@2x.png") no-repeat left center;
    background-size: 15px 15px;
  }
  img {
    height: 20px;
    width: 34px;
  }
}
.total-info {
  display: flex;
  justify-content: space-between;
  padding-bottom: 90px;
  .total-price {
    color: #d70e19;
  }
}
.payment-button {
  font-size: 16px;
  height: 60px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  border-top: 1px solid #f3f3f3;
}
</style>
