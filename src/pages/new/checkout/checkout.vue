<template>
  <div class="checkout-layout">
    <div class="scroll-lists" ref="scroll-lists">
      <h2>Checkout</h2>
      <ul class="content-lists">
        <li @click="to_address()">
          <user-address :address_item = 'address_item'></user-address>
        </li>
        <li>
          <payment @changeSelectPay = changeSelectPay></payment>
        </li>
        <li>
          <order-review :store_goods = store_goods @applyCode = 'total_price' :store_total_price = store_total_price></order-review>
        </li>
        <li>
          <order-summary :total_summary = total_summary></order-summary>
        </li>
      </ul>
    </div>
    <div class="footer-buy">
      <ul>
        <li class="to-buy">
          <div class="total-box">
            <p class="total-desc">All Total</p>
            <p class="total-price">{{all_total}}</p>
          </div>
          <div class="buy-btn"
            @click="to_pay">
            Checkout
          </div>
        </li>
      </ul>
    </div>
    <van-popup v-model="show_pay_methods"
               position="bottom"
               :overlay="true">
      <payment-dialog :order-data = "res_create_data" :is_select_pay = change_select_pay
                      @close="payClose" ></payment-dialog>
    </van-popup>
  </div>
</template>

<script>
import api from "@/api/pay";
import userAddress from "./components/userAddress";
import payment from "./components/payment";
import orderReview from "./components/orderReview";
import orderSummary from "./components/orderSummary";
import paymentDialog from "./payment-dialog";

export default {
  name: "",
  data() {
     return {
       change_select_pay: 1,
       res_create_data: {},
       show_pay_methods: false,
        req_data: null,
        shipping_mothods_index: '',  //选的运费
        coupon: '',
        address_item: {},
        show_coupon_dialog: false,
        store_goods: [],
        total_summary:{},
         all_total: '',
         store_total_price:[]
     };
  },
  created() {
    this.cart_ids = this.$route.query.cart_ids.split(',');

    this.init_data();

    this.fristRender = true;
  },
  mounted() {
  },
  computed: {

  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    sessionStorage.checkoutScroll = this.$refs['scroll-lists'].scrollTop;
    console.log(sessionStorage.checkoutScroll)
    next();
  },
  methods: {
    payClose() {
      this.show_pay_methods = false;
      this.$router.replace({
        path: "/callback",
        query: {
          error: 'Payment cancellation',
          pay_id: this.res_create_data.order_summary_id
        }
      });

    },
    changeSelectPay(val) {
      this.change_select_pay = val;
    },
    init_data() {
        // let obj = {
        //   cart_ids: ['24694873236595142052', '95564537746833116239', '95564546260833361230']
        // }
        let obj = {
          cart_ids: this.cart_ids
        }
        api.confirm_order(obj).then(res => {
            let data = res.data;
            this.address_item = data.address;
            this.store_goods = data.store_goods;
            let good_nums = 0;
            data.store_goods.forEach((item) => {
                good_nums += item.goods_data.length;
            })
            this.total_summary = {
                total: data.total,
                coupon_discount: data.coupon_discount,
                total_before_tax: data.total_before_tax,
                tax_total: data.tax_total,
                all_total: data.all_total,
                good_nums: good_nums,
            }
            this.all_total = data.all_total;
            this.init_select_info();

        }).catch(res => {
          if (res.code === 2209) {
            this.$router.go(-1);
          }
        });
    },
    init_select_info() {
      /* 通过store获取的数据在下，优先级别高 */
      let order_detail = this.$store.state.order_detail;
      // console.log(order_detail);
        console.log(this.$store.state.order_detail, 323232);
      if (order_detail.address.id) {
        this.address_item = order_detail.address;
      }
      this.total_price();
    },
   total_price() {
       let order_detail = this.$store.state.order_detail;
       let store_ship_method = [];
       this.store_goods.forEach((store)=> {
           store_ship_method.push({
               ship_method: store.ship_method.default,
               store_id: store.store_id,
           })
       })
       if(order_detail.delivery.length > 0) {
           order_detail.delivery.forEach(item => {
               store_ship_method.forEach((defalt) => {
                   if (item.store_id === defalt.store_id) {
                       defalt.ship_method = item.item.key
                   }
               })
           })
        }
        let address_id = this.address_item.id;
       if (order_detail.address.id) {
           address_id = order_detail.address.id;
       }
       let coupon_id = undefined;
       if (order_detail.coupon.id) {
           coupon_id = order_detail.coupon.id;
       }

       let store_code = undefined;
       if(order_detail.applyCode.length > 0) {
           store_code = order_detail.applyCode
       }
       let param = {
           cart_ids: this.cart_ids,
           store_code : store_code,
           store_ship_method: store_ship_method,
           address_id: address_id,
           user_coupon_id: coupon_id,
       }
       this.totalPrice = param; //存起来复用
       api.total_price(param).then(res => {
           let data = res.data;
           this.store_total_price = data.sub_order_info;
           let good_nums = this.total_summary.good_nums;

           this.total_summary = {
               total: data.total,
               coupon_discount: data.coupon_discount,
               total_before_tax: data.total_before_tax,
               tax_total: data.tax_total,
               all_total: data.all_total,
               good_nums
           }
           this.all_total = data.all_total;
           // let temp = res.data;
           // for (var key in temp) {
           //     this.order_form[key] = temp[key];
           // }
           // if (res.data.ship_method) {
           //     this.$store.state.info_lists = res.data.ship_method.list;
           //     this.ship_method = res.data.ship_method.list[0];
           //     this.$store.state.order_detail.delivery = undefined;
           //     this.init_select_info(this.address_item);
           // }

         if(this.fristRender) {
           this.fristRender = false;
           this.$nextTick(()=>{
             this.$refs['scroll-lists'].scrollTop = sessionStorage.checkoutScroll || 0;
           })
         }

       });
   },
    to_address() {
      let params = {
        path: "/address"
      };
      this.$router.push(params);
    },
    /* buy some goods */
    to_pay() {
      let params = this.totalPrice;
      api.create_order(params).then(res => {
        this.res_create_data = res.data;
        if (res.data.free === 1) {
          this.$router.replace({
            path: "/callback",
            query: {
              pay_id: res.data.order_summary_id
            }
          });
        } else {
          this.show_pay_methods = true;
        }
      });
      // let router_params = {
      //   path: "/pay",
      //   query: {}
      // };
      // this.$router.push(router_params);
    }
  },
  components: {
    userAddress,
    payment,
    orderReview,
    orderSummary,
    paymentDialog
  }
};
</script>

<style lang='scss' scoped>
.checkout-layout {
  height: 100%;
}
.scroll-lists {
  height: calc(100% - 50px);
  overflow: auto;
  h2 {
    font-size: 24px;
    font-weight: bold;
    padding: 30px 20px;
  }
  .content-lists {
    li {
      border-bottom: 10px solid #f3f3f3;
      padding: 0 20px;
    }
  }
}
/* 优惠券领取入口 */
.footer-buy {
  height: 50px;
  border-top: 1px solid #e9e9e9;
  .get-coupon {
    height: 40px;
    border-top: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
    padding-left: 20px;
    padding-right: 20px;
    vertical-align: middle;
    img {
      height: 18px;
      width: auto;
    }
    span {
      font-size: 14px;
      padding-left: 10px;
    }
    .content {
      display: flex;
      align-items: center;
      height: 100%;
      background: url("/static/images/icon/cart/分类 copy@3x.png") no-repeat
        right center;
      background-size: auto 18px;
    }
  }
}
/* 计算总价 */
.to-buy {
  display: flex;
  justify-content: space-between;
  height: 50px;
  .total-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    .total-desc {
      font-size: 12px;
    }
    .total-price {
      font-size: 18px;
      font-weight: bold;
    }
  }
  .buy-btn {
    width: 140px;
    font-size: 16px;
    color: #ffffff;
    background-color: #d70e19;
    line-height: 50px;
    text-align: center;
  }
}
</style>
