<template>
  <div class="cart-layout">
    <div class="scroll-lists"  v-if="req_data">
      <template v-if="req_data.goods.length">
        <cart-list @change="get_list_data"
          :goods-data="req_data.goods"></cart-list>
        <!-- <cart-expired></cart-expired> -->
      </template>
      <template v-else>
        <div class="no-cart-item">
          <img src="/static/images/icon/cart/cart-gray@3x.png"
            alt=""
            srcset="">
          <p>Your Cart Is Empty</p>
        </div>
      </template>
      <cart-guide v-if="req_data"
        :gui-data="req_data.like"></cart-guide>
    </div>
    <cart-footer v-if="req_data"
      :total-price="footer_data.total_data"
      :goods-data="req_data.goods"
      :total-data="footer_data.cart_lists_item"></cart-footer>
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
      show_coupon_dialog: false,
      footer_data: {
        cart_lists_item: [],
        total_data: {}
      }
    };
  },
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {},
  methods: {
    init_data() {
      // debugger
      CART.shopCartList().then(res => {
        // this.req_data = null;
        this.req_data = res.data;
      });
    },
    get_list_data(data) {
      this.$set(this.footer_data, "cart_lists_item", data.cart_lists_item);
      this.$set(this.footer_data, "total_data", data.total_data);
    },
    /* buy some goods */
    to_buy() {
      let router_params = {
        path: "/checkout",
        query: {}
      };
      this.$router.push(router_params);
    }
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
}
.scroll-lists {
  height: calc(100% - 90px);
  overflow: auto;
}
/*  */
.no-cart-item {
  background: #f3f3f3;
  display: flex;
  flex-direction: column;
  height: 300px;
  align-items: center;
  justify-content: center;
  img {
    width: 90px;
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
