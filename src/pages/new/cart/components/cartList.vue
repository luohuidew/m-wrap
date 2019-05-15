<template>
  <div class="cart-list"
    v-if="goodsData.length">
    <div class="total-cart-box">
      <div class="title">Cart</div>
      <!--<div class="head-select">-->
        <!--<div class="select-box">-->
          <!--<div class="icon-box"-->
            <!--@click="toggle_checked_all(all_store_is_select)">-->
            <!--<img v-if="all_store_is_select"-->
              <!--src="/static/images/icon/cart/多选 选中@3x.png"-->
              <!--alt=""-->
              <!--srcset="">-->
            <!--<img v-else-->
              <!--src="/static/images/icon/cart/多选 未选中@3x.png"-->
              <!--alt=""-->
              <!--srcset="">-->
          <!--</div>-->
          <!--<p class="total-select">-->
            <!--Select All Available Items <span>({{$store.state.cart.goods_num}})</span>-->
          <!--</p>-->
        <!--</div>-->
        <!--<p class="remove"-->
          <!--@click="remove_cart_items(total_data.cart_ids)">-->
          <!--<img src="/static/images/icon/cart/H5 删除 grey@3x.png"-->
            <!--alt=""-->
            <!--srcset="">-->
        <!--</p>-->
      <!--</div>-->
    </div>
    <ul v-for="(item,index) in goodsData"
      :key="index"
      class="cart-lists">
      <li class="cart-lists-item">
        <cart-item @deleteCartGood="deleteCartGood" @showVantShipping = "showVantShipping" :shippSelectObj="shippSelectObj" @checkout="get_item_checkout" :lists-data="item" ref="StoreRef"></cart-item>
      </li>
    </ul>
    <!--<div class="coupon" @click="showVantCouponMethod">-->
      <!--<img src="" alt="">-->
      <!--<span>Save $4.00 优惠券的名字</span>-->
    <!--</div>-->
    <!--<van-popup v-model="showVantCoupon" position="bottom" >-->
      <!--<Coupon @closeVant = 'closeshowVantCoupon' :couponData="coupon_list"></Coupon>-->
    <!--</van-popup>-->
  </div>
</template>

<script>
import cartItem from "./cartItem";
import Coupon from "@/components/coupon";
import CART from "@/api/cart";
import coupon from "@/api/coupon";

export default {
  name: "",
  data() {
    return {
      selectStoreGoods: [],
      all_store_is_select: false,
      user_coupon_id: undefined,
      showVantCoupon: false,
      coupon_list: [],
    };
  },
  props: {
    shippSelectObj: {
      type: Object,
      default: {
      }
    },
    goodsData: {
      type: Array,
      default: []
    },
    isAllSelected: {
      type: Object,
      default: {
        val: false
      }
    }
  },
  created() {

  },
  watch: {
    isAllSelected: {
      handler(curobj){
        this.toggle_checked_all(!curobj.val)
      },
      deep:true
    }
  },
  mounted() {},
  computed: {
  },
  methods: {
    selectStoreGoodsDelete(cart_id) {
      this.selectStoreGoods.forEach((store) => {
        store.goods.forEach((good, index) => {
          if(good.cart_id === cart_id) {
            store.goods.splice(index, 1)
          }
        })
      })
    },
    deleteCartGood(obj) {
      this.$emit('deleteCartGood',obj)
    },
    showVantShipping(obj) {
      this.$emit('showVantShipping',obj)
    },
    getCoupon() {
      coupon.coupon({ status: 2 }).then(res => {
        this.coupon_list = res.data;
      });
    },
    showVantCouponMethod() {
      this.showVantCoupon = true
    },
    closeshowVantCoupon(obj) {
      this.user_coupon_id = obj.id
      this.showVantCoupon = false
      this.$emit("change", this.selectStoreGoods, this.user_coupon_id);
    },
    get_item_checkout(obj) {
      // this.selectStoreGoods = this.selectStoreGoods.filter((store) => {
      //   let clock = false
      //   this.goodsData.forEach((item)=> {
      //     if (store.store_id === item.store_id) {
      //       clock = true
      //     }
      //   })
      //   return clock
      // })
      let clock = false
      this.selectStoreGoods.forEach((item,index) => {
        if (item.store_id === obj.store_id) {
          clock = true
          this.selectStoreGoods[index] = obj
        }
      })
      if (!clock) {
        this.selectStoreGoods.push(obj)
      }
      this.$emit("change", this.selectStoreGoods, this.user_coupon_id);
      // this.findAllSelectStore()
    },
    // findAllSelectStore() {
    //   console.log(this.selectStoreGoods, 5)
    //  const selectedStore =  this.selectStoreGoods.filter(item=> {
    //     return item.checkted_store === true
    //   })
    //   this.all_store_is_select = selectedStore.length === this.goodsData.length
    // },
    toggle_checked_all(val) {
      this.$refs.StoreRef.forEach(item => {
        item.toggle_checked(val);
      });
    },
    remove_cart_items(cartIds = []) {
      let params = {
        only: cartIds
      };
      if (!cartIds.length) {
        return false;
      }
      CART.delShopCartGood(params)
        .then(res => {
          window.location.reload();
        })
        .then(() => {
          CART.getCartNum().then(res => {
            this.$store.commit("SET_CATR", res.data.num);
          });
        });
    }
  },
  components: {
    cartItem,
    Coupon
  }
};
</script>

<style lang='scss' scoped>
  .cart-list{

  }
  .total-cart-box {
  padding: 20px 20px 13px 20px;
  .title {
    font-size:26px;
    font-weight:900;
    color:rgba(0,0,0,1);
  }
  h2 {
    font-size: 26px;
    padding-bottom: 28px;
  }
  .total-select {
    font-size: 14px;
  }
}
/*  */
.head-select {
  display: flex;
  justify-content: space-between;
  .select-box {
    display: flex;
  }
  .remove {
    align-self: flex-end;
    img {
      height: 18px;
      width: 18px;
    }
  }
}
.cart-lists {
  padding: 5px 15px;
  border-bottom: 10px solid #f3f3f3;
}
</style>
