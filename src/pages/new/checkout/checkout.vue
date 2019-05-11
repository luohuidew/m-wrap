<template>
  <div class="checkout-layout">
      <orderSummary :resSummary=resSummary></orderSummary>
      <addAddress v-if="!curtAddress.first_name" @addNewAddress="addNewAddress"></addAddress>
      <ul class="content-lists" v-if="curtAddress.first_name">
        <li @click="to_address()" >
          <user-address :address_item='curtAddress'></user-address>
        </li>
        <li>
          <payment></payment>
        </li>
        <li>
          <div class="footer">
            <div class="total-des">
              <p>
                <span>Subtotal</span>
                <span class="price">{{ resSummary.all_total }}</span>
              </p>
              <p>
                <span class="">Tax</span>
                <span class="price">{{ resSummary.tax_total }}</span>
              </p>
              <div class="all-total">
                Total: <span> {{ resSummary.last_total }}</span>
              </div>
            </div>
            <div class="pay-but" @click="createOrder">
              Place your order
            </div>
            <div class="Policy">
              <router-link to="/statement">
                Privacy Policy & Terms of Use
              </router-link>
            </div>
          </div>
        </li>
      </ul>
    <van-popup v-model="show_pay_methods"
               position="bottom"
               :overlay="true">
      <payment-dialog :order-data="res_create_data"
                      :isSelectPay="change_select_pay"
                      @close="payClose">
      </payment-dialog>
    </van-popup>
  </div>
</template>

<script>
import apiPay from "@/api/pay";
import CART from "@/api/cart";
import addAddress from "./components/addAddress";
import userAddress from "./components/userAddress";
import paymentDialog from "./payment-dialog";
import payment from "./components/payment";
import orderSummary from "./components/orderSummary";

export default {
  name: "",
  data() {
    return {
      curtAddress: {},
      resSummary: {},
      show_pay_methods: false,
      res_create_data: {},
      change_select_pay: 1
    };
  },
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {},
  methods: {
    payClose() {
      this.show_pay_methods = false;
      this.$router.replace({
        path: "/callback",
        query: {
          pay_id: this.res_create_data.pay_id
        }
      });
    },
    init_data(NewAddressId) {
      const Store_address = this.$store.state.order_detail.address;
      const params = JSON.parse(sessionStorage.cartParams)
      if (Store_address.id) { // 用户切换地址触发
        params.address_id = Store_address.id;
        this.$store.state.order_detail.address = {}
        console.log(this.$store.state.order_detail.address, 'address-stroe')
      }
      if (NewAddressId) {  // 用户第一次添加地址触发
        params.address_id = NewAddressId.id;
      }
      CART.orderConfirm(params).then(res => {
        this.cachePrams = {...params}
        const data = res.data
        this.cachePrams.address_id = data.address.id
        this.curtAddress = data.address
        this.resSummary = data
      });

    },
    addNewAddress(NewAddressId) {
      this.init_data(NewAddressId)
    },
    init_select_info() {
      /* 通过store获取的数据在下，优先级别高 */

      this.total_price();
    },
    to_address() {
      let params = {
        path: "/address",
        query: { id: this.curtAddress.id }
      };
      this.$router.push(params);
    },
    createOrder() {
      apiPay.create_order(this.cachePrams).then((res) => {
        this.res_create_data = res.data
        if (res.data.free === 1) {
          this.$router.replace({
            path: "/callback",
            query: {
              pay_id: res.data.pay_id
            }
          });
        } else {
          CART.getCartNum().then(res => {
            this.$store.commit("SET_CATR", res.data.num);
          });
          // 老版支付
          this.show_pay_methods = true;
          // 新版支付
          //   this.$router.replace({
            //     path: '/checkout/pay',
            //     query: {
            //       pay_id: res.data.pay_id
            //     }
            //   })
          }
      })

    },
  },
  components: {
    payment,
    orderSummary,
    addAddress,
    userAddress,
    paymentDialog
  }
};
</script>

<style lang='scss' scoped>
.checkout-layout {
  height: 100%;
  overflow: auto;
}
.content-lists {
  .footer {
    padding: 15px;
    .total-des {
      margin-top: 10px;
      p {
        display: flex;
        justify-content: space-between;
        font-size:12px;
        font-weight:400;
        color:rgba(74,74,74,1);
        margin-bottom: 12px;
      }
      .all-total {
        margin-top: 20px;
        text-align: right;
        font-size:14px;
        font-weight:400;
        color:rgba(0,0,0,1);
        line-height:14px;
        span {
          font-size:18px;
          font-weight:bold;
        }
      }
    }
.pay-but{
  height:45px;
  background:rgba(0,0,0,1);
  border-radius:30px;
  line-height: 45px;
  text-align: center;
  font-size:14px;
  margin-top: 20px;
  font-weight:bold;
  color:rgba(255,255,255,1);
}
    .Policy{
      border-top: 1px solid #E1E1E1;
      margin: 20px -15px;
      height: 40px;
      padding-left: 15px;
      line-height: 40px;
      font-size:12px;
      font-weight:400;
      color:rgba(0,0,0,1);
    }
  }
}

</style>
