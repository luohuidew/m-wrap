<template>
  <div class="order-detail"
    v-if="order_form">
    <div class="shiping item-box">
      <div class="tips-for-group"
        v-if="$route.query.purchase_type!=='1'">
        <p>A complete group recieves products, an incomplete group recieves full refunds.</p>
      </div>
      <h3>SHIPPING</h3>
      <ul>
        <li @click="to_address()">
          <p>
            <!-- <span> Add shipping Address</span> -->
            <template v-if="address_item.zipcode">
              <span style="fontWeight:bold;">{{address_item.first_name}}</span>&nbsp;
              <span style="fontWeight:bold;">{{address_item.last_name}}</span><br />
              <span> {{address_item.address1}} </span>
              <span> {{address_item.city}} </span>
              <span> {{address_item.state}} </span>
              <span> {{address_item.zipcode}} </span><br />
              <span style="fontWeight:bold;"> {{address_item.zipcode}} </span>
              <span style="fontWeight:bold;"> {{address_item.tel}} </span>
            </template>
            <template v-else>
              <span :style="{color:'#d70e19'}">Add Shipping Address</span>
            </template>
          </p>
        </li>
        <li class="standard"
          @click="to_shipping()">
          <p>
            <span class="desc">
              <span>{{ship_method.key_name}}</span>
              <span class="second-title">{{ship_method.desc}} </span>
            </span>
            <span v-if="(ship_method.price-0)>0">${{ship_method.price}}</span>
            <span v-else>{{ship_method.price}}</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="payment item-box">
      <h3>PAYMENT METHOD</h3>
      <ul>
        <li :class="{'active':is_select_pay===1}"
          @click="is_select_pay=1">
          <p class="pay-type">
            <span>Credit/Debit Card</span>
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
          <p class="pay-type">
            <span>PayPal</span>
            <img src="/static/img/icon/pay/Group 14.png"
              alt="">
          </p>
        </li>
      </ul>
    </div>
    <div class="coupon-box item-box"
      id="promocoded">
      <h3>PROMO</h3>
      <ul>
        <li class="standard"
          @click="to_coupon()">
          <p :class="{'no_select':!can_select_coupon}">
            <span>Coupon</span>
            <span class="font-color"
              v-if="coupon">{{coupon.name?coupon.name:'Select Coupon'}}</span>
            <span class="font-color"
              v-else>Select Coupon</span>
          </p>
        </li>
        <li class="borderor">
          <div class="orleft"></div><span class="gray">OR</span>
          <div class="orright"></div>
        </li>
        <li>
          <div class="enter-code">
            <input type="text"
              class="code-gray"
              v-model="cur_code"
              placeholder="Enter Pormo Code">
            <button @click="check_code(cur_code)">APPLY</button>
          </div>

        </li>
      </ul>
    </div>
    <div class="code-tips"
      v-show="code_tips">
      {{code_tips}}
    </div>
    <div class="item">
      <h3>Summary</h3>
      <ul v-if="order_form">
        <li>
          <img :src="order_form.item.cover_img"
            alt=""
            srcset="">
        </li>
        <li class="goods-card">
          <p>{{order_form.item.title}}</p>
          <p class="attr">{{order_form.item.attr}}</p>
        </li>
        <li>
          <p> ${{order_form.item.price}} </p>
          <p> X {{order_form.item.num}} </p>
        </li>
      </ul>
    </div>
    <div class="total">
      <h3></h3>
      <ul v-if="order_form">
        <li>
          <p>
            <span>Subtotal</span>
            <span>{{order_form.money_unit}}{{order_form.item_total}}</span>
          </p>
          <p>
            <span>Shipping</span>
            <span v-if="order_form.ship">{{order_form.money_unit}}{{order_form.ship}}</span>
            <span v-else>Free</span>
          </p>
          <p>
            <span>Discount</span>
            <span class="font-color">- {{order_form.money_unit}}{{order_form.discount}}</span>
            <!-- <span class="font-color">FREE</span> -->
          </p>
          <p>
            <span>Total Before Tax</span>
            <span>{{order_form.money_unit}}{{order_form.total_before_tax}}</span>
          </p>
          <p>
            <span>Tax</span>
            <span>{{order_form.money_unit}}{{order_form.tax}}</span>
          </p>
          <!-- <p>
            <span>Order Total</span>
            <span class="font-big"> {{order_form.money_unit}}{{order_form.order_total}}</span>
          </p> -->
        </li>
        <li class="total-num">
          <p>
            <span>Order Total {{order_form.money_unit}}{{order_form.order_total}}</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="pay-now">
      <!-- <a v-if="is_click"
        class="waiting"
        href="javascript:;">Waiting</a> -->
      <a href="javascript:;"
        @click="to_accept">Checkout</a>
    </div>
    <van-popup v-model="show_pay_methods"
      position="bottom"
      :overlay="true">
      <payment-dialog :order-data="res_create_data"
        :submit-data="submit_form" @close="show_pay_methods=false"></payment-dialog>
    </van-popup>
  </div>
</template>

<script>
import api from "@/api/pay";
import code from "@/api/code";
import paymentDialog from "./payment-dialog";
export default {
  name: "",
  data() {
    return {
      show_pay_methods: false,
      is_selected_address: undefined,
      shipping_mothods_index: undefined,
      coupon: undefined,
      address_item: undefined,
      order_form: undefined,
      ship_method: undefined,
      is_click: false,
      address_change: undefined,
      can_select_coupon: true,
      code_tips: "",
      cur_code: "",
      right_code: undefined,
      res_create_data: null,
      is_select_pay: 1
    };
  },
  computed: {
    // ship_method(){
    //   return this.order_form.list[0];
    // },
    submit_form() {
      return {
        address_id: this.is_selected_address,
        ship_method: this.shipping_mothods_index,
        goods_id: this.$route.query.goods_id,
        num: this.$route.query.num,
        purchase_type: this.$route.query.purchase_type,
        group_id: this.$route.query.group_id
          ? this.$route.query.group_id
          : undefined,
        user_coupon_id: this.coupon ? this.coupon.id : undefined,
        address_change: this.address_change,
        code_number: this.right_code,
        pay_type:this.is_select_pay
      };
    }
  },
  watch: {
    submit_form: {
      handler: function(cur, old) {
        api.total_price(cur).then(res => {
          let temp = res.data;
          for (var key in temp) {
            this.order_form[key] = temp[key];
          }
          if (res.data.ship_method) {
            this.$store.state.info_lists = res.data.ship_method.list;
            this.ship_method = res.data.ship_method.list[0];
            this.$store.state.order_detail.delivery = undefined;
            this.init_select_info(this.address_item);
          }
        });
      },
      deep: true
    }
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this.init_data();
    }, 100);
  },
  methods: {
    init_data() {
      let params = this.submit_form;
      // console.log(this.submit_form);
      // console.log(params, "创建订单");
      api
        .confirm_order(params)
        .then(res => {
          // console.log(res,999999);
          // alert(JSON.stringify(res));
          this.order_form = res.data;
          this.order_item = res.data.item;
          this.address_item = res.data.address;
          this.coupon = res.data.coupon_data;
          if (res.data.coupon_data.name) {
            this.can_select_coupon = false;
          }
          this.ship_method = res.data.ship_method.list[0];
          this.$store.state.info_lists = res.data.ship_method.list;
          this.shipping_mothods_index = this.ship_method.key;
          this.is_selected_address = this.order_form.address.id;
          this.init_select_info(res.data.address);
          // debugger
        })
        .catch(res => {
          console.log(res, "join self error");
          if (res.code === 2209) {
            // alert(res.message);
            this.$router.go(-1);
          }
        });
    },
    check_code(code_num) {
      if (!code_num) {
        return false;
      }
      let params = {
        code_number: code_num,
        sku_id: this.order_form.item.sku_id
      };
      code.checkCode(params).then(res => {
        this.code_tips = res.data.message;
        setTimeout(() => {
          this.code_tips = "";
        }, 5000);
        if (res.data.type === 1) {
          this.right_code = this.cur_code;
          this.coupon = undefined;
          // this.$forceUpdate();
        } else {
          this.right_code = undefined;
        }
      });
    },
    // computed_select(){
    //    let order_detail = this.$store.state.order_detail;
    // },
    init_select_info(default_address) {
      /* 通过store获取的数据在下，优先级别高 */
      let order_detail = this.$store.state.order_detail;
      // console.log(order_detail);
      if (order_detail.address) {
        this.address_item = order_detail.address;
        this.is_selected_address = this.address_item.id;
        if (order_detail.change_address) {
          this.address_change = 1;
          this.$store.state.order_detail.change_address = false;
        }
        // if(this.address_item.id!==default_address.id){
        //   this.address_change = 1;
        // }
      }
      // debugger;
      if (order_detail.delivery) {
        this.ship_method = order_detail.delivery;
        this.shipping_mothods_index = this.ship_method.key;
      }
      if (order_detail.coupon) {
        this.coupon = order_detail.coupon;
      }
    },
    to_address() {
      let params = {
        path: "/address"
      };
      this.$router.push(params);
    },
    to_shipping() {
      let params = {
        path: "/delivery"
      };
      this.$router.push(params);
    },
    to_coupon() {
      let params = {
        path: "/coupon"
      };
      if (this.can_select_coupon) {
        this.right_code = undefined;
        this.cur_code = undefined;
        this.$router.push(params);
      }
    },
    to_accept() {
      this.is_click = true;
      let params = this.submit_form;
      // console.log(params,66666)
      api.create_order(params).then(res => {
        // console.log(res);
        // let query = {
        //   path: "/accept",
        //   query: {
        //     order_no: res.order_no
        //   }
        // };
        // debugger;
        //  this.is_click = true;
        this.res_create_data = res.data;
        if (res.data.free === 1) {
          this.$router.replace({
            path: "/callback",
            query: {
              order_no: res.data.order_no
            }
          });
        } else {
          // let accpet_params = {
          //   path: "/accept",
          //   query: {
          //     goods_id: this.$route.query.goods_id,
          //     num: this.$route.query.num,
          //     purchase_type: this.$route.query.purchase_type,
          //     order_no: res.data.order_no,
          //     total: res.data.total_fee
          //     // total: this.order_form.order_total
          //   }
          // };
          // this.$router.replace(accpet_params);
          this.show_pay_methods = true;
        }
        // this.$router.replace({path:'/accept',query:{order_no:res.data.order_no,total:this.order_form.order_total}});
      });
    }
  },
  components: {
    paymentDialog
  }
};
</script>

<style lang='scss' scoped>
$color1: #d70e19;
$bgcolor: #f3f3f3;
$linecolor: #e9e9e9;
.font-color {
  color: $color1;
}
.tips-for-group {
  padding: 15px 30px;
  background-color: #ffffff;
  color: #000000;
  p {
    background: url("/static/img/icon/mine_notifi_nav_icon@2x.png") no-repeat
      left center;
    background-size: auto 28px;
    padding-left: 38px;
    font-size: 13px;
  }
}
.order-detail {
  font-size: 16px;
  // padding: 24px 0;
  background-color: $bgcolor;
  .item-box {
    h3 {
      // font-size: 18px;
      padding: 20px 0 10px 20px;
      font-weight: bold;
    }
    ul {
      background-color: #fff;
      padding: 0 0 0 20px;
    }
    li {
      &:nth-last-child(1) {
        border: none;
      }
      border-bottom: 1px solid $linecolor;
      padding-right: 20px;
      & > p {
        font-size: 16px;
        // padding-right: 20px;
        padding: 20px 20px 20px 0;
        background: url("/static/img/icon/right.png") no-repeat right center;
      }
      .no_select {
        background: none;
      }
    }
    .standard {
      p {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .desc {
          span {
            display: block;
          }
          .second-title {
            color: #b6b6b6;
            padding-top: 6px;
          }
        }
      }
    }
  }
  .payment {
    li {
      p {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background: url("/static/img/icon/选择 灰@2x.png") no-repeat right
          center;
        background-size: 15px;
      }
      span {
        margin-right: 20px;
      }
      img {
        height: 20px;
        width: 34px;        
      }
    }
    .active {
      p {
        background: url("/static/img/icon/选择红@2x.png") no-repeat right center;
        background-size: 15px 15px;
      }
    }
  }
  .item {
    margin-bottom: 12px;
    h3 {
      // font-size: 18px;
      padding: 20px 0 10px 20px;
      font-weight: bold;
      background-color: #f3f3f3;
    }
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      background-color: #fff;
      li {
        height: 100%;
        p {
          font-size: 14px;
          background-image: none;
        }
      }
    }
    img {
      height: 80px;
      width: 80px;
    }
    .goods-card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 250px;
      padding: 0 10px;
      .attr {
        padding-top: 10px;
        color: #b6b6b6;
      }
    }
  }
  .total {
    background-color: #fff;
    // padding:20px;
    font-size: 16px;

    li {
      border-bottom: 1px solid $linecolor;
      padding: 20px 0;
    }
    p {
      display: flex;
      justify-content: space-between;
      padding: 4px 20px;
    }
    .total-num {
      p {
        display: block;
        text-align: right;
        span {
          font-weight: bold;
        }
      }
    }
  }
  .pay-now {
    margin-top: 40px;
    padding: 10px 0 30px 0;
    background-color: #fff;
    text-align: center;
    a {
      display: inline-block;
      width: 250px;
      height: 40px;
      background: rgba(215, 14, 25, 1);
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
      border-radius: 20px;
      text-align: center;
      line-height: 40px;
      color: #fff;
      &:hover {
        opacity: 0.8;
      }
    }
    .waiting {
      background: #f3f3f3;
      color: #c9caca;
    }
  }
}
.code-tips {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  // height: 40px;
  background-color: #f3f3f3;
  color: #d70e19;
  transition: all 0.8s;
}
#promocoded {
  ul {
    padding: 0;
  }
  li {
    padding-left: 20px;
    border: 0;
    p {
      padding-top: 15px;
      padding-bottom: 15px;
    }
  }

  .borderor {
    padding-left: 0;
    padding-right: 0;
    height: 10px;
    font-size: 12px;
    line-height: 10px;
    position: relative;
    div {
      border-top: 1px solid #b6b6b6;
      width: 46%;
      height: 1px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
    }
    div.orright {
      right: 0;
      left: auto;
    }
    span {
      color: #b6b6b6;
      position: absolute;
      width: 8%;
      text-align: center;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .enter-code {
    font-size: 14px;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    .code-gray {
      color: #b6b6b6;
      border: 0;
    }
    button {
      width: 80px;
      height: 30px;
      line-height: 30px;
      background: #d70e19;
      border: 0;
      color: #fff;
      border-radius: 20px;
    }
  }
}
</style>
