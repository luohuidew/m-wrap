<template>
  <div class="cart-layout">
    <div class="scroll-lists"  v-if="req_data">
      <template v-if="req_data.goods.length">
        <cart-list @change="get_list_data"
          :goods-data="req_data.goods" :isAllSelected = 'prop_all_goods_is_select'></cart-list>
      </template>
      <template v-else>
        <div class="no-cart-item">
          <img src="/static/images/icon/cart/cart-gray@3x.png"
            alt=""
            srcset="">
          <p>Your Cart Is Empty</p>
        </div>
      </template>
      <!--<cart-guide v-if="req_data"-->
        <!--:gui-data="req_data.like"></cart-guide>-->
    </div>
    <footer>
      <div class="price">
        <div class="selct">
          <img v-if="all_goods_is_select" @click="noAllgoodSelect"
               src="/static/images/icon/cart/多选 选中@3x.png"
               alt=""
               srcset="">
          <img v-else @click="AllgoodSelect"
               src="/static/images/icon/cart/多选 未选中@3x.png"
               alt=""
               srcset="">
         <span> Select items({{selectedNumber}})</span>
        </div>
        <div class="pr">
          All Total: <span>$122.99</span>
        </div>
      </div>
      <div class="pay">
        <div class="paypal">paypal</div>
        <div class="paypal checkout" @click="toCheckout">Secure checkout</div>
      </div>
    </footer>
    <!--<cart-footer v-if="req_data"-->
      <!--:total-price="totalPrice"-->
      <!--:selectAll = 'selectAll'-->
      <!--&gt;-->
    <!--</cart-footer>-->
  </div>
</template>

<script>
import CART from "@/api/cart";
import cartList from "./components/cartList";
import cartGuide from "./components/cartGuide";
import cartExpired from "./components/cartExpired";
import cartFooter from "./components/cartFooter";
import detailCouponDialog from "@/pages/detail/detail-content/detailCoupon/components/detailCouponDialog";
export default {
  name: "",
  data() {
    return {
      req_data: null,
      all_goods_is_select: false,
      prop_all_goods_is_select: {},
      selectedNumber: 0,
    };
  },

  created() {
    this.init_data();
  },
  mounted() {},
  computed: {},
  methods: {
    toCheckout(){
      const arra = ["42945637938178183271","42945637698810961302","65905591720429661943","53705593665106044093","53705599114555242198"]
      let path_params = {
        path: "/checkout",
        query: {
          cart_ids: arra.toString()
        }
      };
      if (arra.toString()) {
        this.$router.push(path_params);
      }
    },
    init_data() {
      CART.shopCartList().then(res => {
        const data = res.data;
        data.goods.forEach(good=> {
          good.goods_list.forEach(item => {
            item.checkted = false
          })
        })
        this.req_data = data

      });
    },
    get_list_data(data) {
      // this.$set(this.footer_data, "cart_lists_item", data.cart_lists_item);
      // this.$set(this.footer_data, "total_data", data.total_data);
      let num = 0
      data.forEach(stroe => {      // data // 获取已选定的商品信息，按店铺分组
        stroe.goods.forEach(good=> {
          num += Number(good.count)
        })
      })
      this.selectedNumber = num
      this.findAllSelectGood(data)
    },
    findAllSelectGood(data) {
      const selectedStore =  data.filter(item=> {
        return item.checkted_store === true
      })
      this.all_goods_is_select = selectedStore.length === this.req_data.goods.length
    },
    /* buy some goods */
    to_buy() {
      let router_params = {
        path: "/checkout",
        query: {}
      };
      this.$router.push(router_params);
    },
    noAllgoodSelect() {
      this.all_goods_is_select = false
      this.prop_all_goods_is_select = {
        val : false,
        n: Date.now()
      }
    },
    AllgoodSelect() {
      this.all_goods_is_select = true
      this.prop_all_goods_is_select = {
        val : true,
        n: Date.now()
      }
    },
  },
  components: {
    cartList,
    cartGuide,
    cartExpired,
    detailCouponDialog,
    cartFooter
  }
};
</script>

<style lang='scss' scoped>
.cart-layout {
  height: 100%;
  footer {
    position: relative;
    z-index: 1000;
    height: 100px;
    font-size:14px;
    font-weight:400;
    color:rgba(0,0,0,1);
    .price {
      box-shadow: 0px -1px 2px #c1c1c1;
      padding: 0px 15px;
      height: 54px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .selct {

        img {
          width: 20px;
        }
        span {
          font-weight: 400;
          font-size:14px;
          vertical-align: middle;
        }
      }
      span {
        font-weight: bold;
        font-size:18px;
      }
    }
    .pay {
      height: 46px;
      .paypal {
        width: 50%;
        background:rgba(255,196,56,1);
        display: inline-block;
        text-align: center;
        line-height: 46px;
        &.checkout {
          color: #fff;
          background:rgba(0,0,0,1);
        }
      }
    }
  }
}
.scroll-lists {
  height: calc(100% - 100px);
  overflow: auto;
}
/*  */
.no-cart-item {
  background: #f3f3f3;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  img {
    width: 40px;
    height: auto;
  }
  p {
    padding-top: 20px;
    font-size: 16px;
    color: #9b9b9b;
  }
}

/* 优惠券领取入口 */
.footer-buy {
  height: 90px;
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
