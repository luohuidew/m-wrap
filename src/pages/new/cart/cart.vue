<template>
  <div class="cart-layout">
    <div class="scroll-lists" :class="{'has-coupon': coupon_list.length>0, 'no-good': req_data.store_goods && req_data.store_goods.length ===0}" v-if="req_data">
      <template v-if="req_data.store_goods && req_data.store_goods.length>0">
        <cart-list @deleteCartGood="deleteCartGood" @change="get_list_data" :shippSelectObj="shippSelectObj" @showVantShipping = "showVantShipping"
          :goods-data="req_data.store_goods" :isAllSelected = 'prop_all_goods_is_select' ref="CarListRef"></cart-list>
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
    <footer v-if="req_data.store_goods && req_data.store_goods.length>0">
      <div class="coupon" @click="showVantCouponMethod" v-if="coupon_list.length>0">
        <img src="/static/images/icon/cart/youhuij.png" alt="">
        <span>{{couponText}}</span>
      </div>
      <div class="price">
        <div class="selct">
          <img v-if="all_goods_is_select" @click="noAllgoodSelect"
               src="/static/images/icon/cart/duoxuana.png"
               alt=""
               srcset="">
          <img v-else @click="AllgoodSelect"
               src="/static/images/icon/cart/duoxuann.png"
               alt=""
               srcset="">
         <span> Select items({{selectedNumber}})</span>
        </div>
        <div class="pr">
          All Total: <span>{{allTotal}}</span>
        </div>
      </div>
      <div class="pay">
        <!--<div class="paypal">paypal</div>-->
        <div class="paypal "  @click="toCheckout" v-if="isLoading" ><span>Secure checkout </span> <span class="load"> <van-loading size="20px" /></span></div>
        <div class="paypals" v-else @click="toCheckout">
          <img src="/static/images/icon/cart/paypal.png" alt="">
        </div>
      </div>
    </footer>
    <van-popup v-model="showVantShippingPopu" position="bottom" >
      <Shipping @closeVant = 'closeVantShipping' :VantShippingStore="VantShippingStore"></Shipping>
    </van-popup>
    <van-popup v-model="showVantCouponPopu" position="bottom" >
      <Coupon @closeVant = 'closeshowVantCoupon' :couponData="coupon_list"></Coupon>
    </van-popup>
  </div>
</template>

<script>
import CART from "@/api/cart";
import couponApi from "@/api/coupon";
import cartList from "./components/cartList";
import cartGuide from "./components/cartGuide";
import cartExpired from "./components/cartExpired";
import cartFooter from "./components/cartFooter";
import Shipping from "./components/shipping";
import Coupon from "@/components/coupon";

import detailCouponDialog from "@/pages/detail/detail-content/detailCoupon/components/detailCouponDialog";
export default {
  name: "",
  data() {
    return {
      couponText: 'Select Coupon',
      user_coupon_id: undefined,
      showVantCouponPopu: false,
      coupon_list: [],
      shippingCatch: [],
      VantShippingStore: {},
      showVantShippingPopu: false,
      shippSelectObj:{},
      req_data: {},
      all_goods_is_select: false,
      prop_all_goods_is_select: {},
      selectedNumber: 0,
      allTotal: '$0.00',
      isLoading: false,
    };
  },

  created() {
    this.ZANCUN_DDTA = []
    this.ZANCUN_Coupon = undefined
    this.init_data();
    this.getCoupon() //获取优惠券
  },
  mounted() {},
  computed: {},
  methods: {
    deleteCartGood(obj) {
      const param = {
        only : [obj.cart_id]
      }
      CART.delShopCartGood(param).then(()=>{
        CART.getCartNum().then(res => { // 更新购物车
          this.$store.commit("SET_CATR", res.data.num);
        });
        this.req_data.store_goods.forEach((store,storeIndex) => { // 删除商品
           store.goods_data.forEach((good, index) => {
             if(good.cart_id === obj.cart_id) {
               store.goods_data.splice(index, 1)
               if(store.goods_data.length === 0){
                 this.req_data.store_goods.splice(storeIndex,1)
               }
             }
           })
        })
        this.$refs.CarListRef.selectStoreGoodsDelete(obj.cart_id)
        this.ZANCUN_DDTA.forEach((store) => {
          store.goods.forEach((good, index) => {
            if(good.cart_id === obj.cart_id) {
              store.goods.splice(index, 1)
            }
          })
        })
        if (this.ZANCUN_DDTA.length > 0) {
          this.totalPrices(this.ZANCUN_DDTA, this.ZANCUN_Coupon)
        }
      })
    },
    closeshowVantCoupon(obj) {
      this.user_coupon_id = obj.id
      this.couponText = obj.name
      this.showVantCouponPopu = false
      if (this.ZANCUN_DDTA.length > 0) {
        this.totalPrices(this.ZANCUN_DDTA, this.ZANCUN_Coupon)
      }
    },
    showVantCouponMethod() {
      this.showVantCouponPopu = true
    },
    getCoupon() {
      couponApi.coupon({ status: 2 }).then(res => {
        this.coupon_list = res.data;
      });
    },
    showVantShipping(obj) {
      const store_id = obj.store_id
      const shipStore = this.req_data.store_goods.filter(store=>{
        return store.store_id === store_id
      })
      this.VantShippingStore = shipStore[0]
      this.showVantShippingPopu = true
    },
    closeVantShipping(obj) {
      this.shippSelectObj = obj
      let clock = false
      this.shippingCatch.forEach((item, index) => {
        if (item.storeId === obj.storeId) {
          this.shippingCatch[index] = obj
          clock = true
        }
      })
      if (!clock) {
        this.shippingCatch.push(obj)
      }
      if (this.ZANCUN_DDTA.length > 0) {
        this.totalPrices(this.ZANCUN_DDTA, this.ZANCUN_Coupon)
      }
      this.showVantShippingPopu = false
    },
    toCheckout(){
      if (this.selectedNumber === 0) {
        return
      }
      this.isLoading = true
      CART.orderConfirm(this.cachePrams, true).then(res => {
        // this.isLoading = false
        const StringParams = JSON.stringify(this.cachePrams)
        sessionStorage.cartParams = StringParams
         let path_params = {
          path: "/checkout",
        };
        this.$router.push(path_params);
      }).catch(()=>{
        this.isLoading = false
      });

      //  let path_params = {
      //   path: "/checkout",
      //   query: {
      //     cart_ids: arra.toString()
      //   }
      // };
      // this.$router.push(path_params);
    },
    init_data() {
      CART.cartcheckoutConfirm().then(res => {
        const data = res.data;
        this.allTotal = data.all_total
        data.store_goods.forEach(store=> {
          store.goods_data.forEach(item => {
            item.checkted = false
          })
          store.store_code_info = {}
        })
        this.req_data = data
      });
    },
    get_list_data(data,couponId ) { // 数据更新出发
      let count = 0
      clearTimeout(this.times)
      data.forEach(stroe => {      // data // 获取已选定的商品信息，按店铺分组
        stroe.goods.forEach(good=> {
          count += Number(good.num)
        })
      })
      this.selectedNumber = count  // 计算一共选中几个商品
      this.findAllSelectGood(data) // 判断是否全选
      if (count === 0) {
        this.allTotal = '$0.00'
        this.ZANCUN_DDTA = []
        this.ZANCUN_Coupon = undefined
        return
      }
      this.times = setTimeout(()=>{ // 防止同时提交多个请求
        this.totalPrices(data, couponId)
      },100)
    },
    totalPrices(data, couponId) {
      this.ZANCUN_DDTA = data
      this.ZANCUN_Coupon = couponId
      const params={
        store_code: [],
        store_ship_method: [],
        cart_goods: [],
        user_coupon_id: this.user_coupon_id
      }
      data.forEach(item=>{
        params.store_code.push({
          code_number:item.code_number,
          store_id: item.store_id,
        })
        let ships = {
          ship_method:item.shipp_key,
          store_id: item.store_id,
        }
        this.shippingCatch.forEach(shipobj=>{
          if (shipobj.storeId  === item.store_id) {
            ships.ship_method = shipobj.shippingKey
          }
        })
        params.store_ship_method.push(ships)
        item.goods.forEach((good)=>{
          params.cart_goods.push({
            cart_id:good.cart_id,
            num: good.num,
          })
        })
      })
      if (params.cart_goods.length === 0) {
        this.selectedNumber = 0
        this.allTotal = '$0.00'
        return
      }
      CART.totalPrice(params).then(res => {
        CART.getCartNum().then(res => { // 更新购物车
          this.$store.commit("SET_CATR", res.data.num);
        });
        this.cachePrams = res.data.params
        this.allTotal = res.data.all_total
        const datas= res.data.sub_order_info
        this.req_data.store_goods.forEach((store)=> {
          datas.forEach((price_store)=> {
            if (store.store_id === price_store.store_id) {
              store.store_code_info = price_store.store_code_info
              store.ship_method = price_store.ship_method
            }
          })
        })
      })

    },
    findAllSelectGood(data) {
      const selectedStore =  data.filter(item=> {
        return item.checkted_store === true
      })
      this.all_goods_is_select = selectedStore.length === this.req_data.store_goods.length
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
    cartFooter,
    Shipping,
    Coupon
  }
};
</script>

<style lang='scss' scoped>
.cart-layout {
  height: 100%;
  footer {
    margin-bottom: 10px;
    position: relative;
    z-index: 1000;
    height: 150px;
    font-size:14px;
    font-weight:400;
    color:rgba(0,0,0,1);
    .price {
      padding: 0px 15px;
      height: 54px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .selct {
        img {
          width: 18px;
        }
        span {
          margin-left: 10px;
          color: #000;
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
      overflow: hidden;
      .paypal {
        text-align: center;
        height: 46px;
        overflow: hidden;
        line-height: 46px;
        color: #fff;
        background:rgba(0,0,0,1);
        width: 345px;
        margin: 0 auto;
        display: block;
        border-radius: 30px;
        font-weight: bold;
        span{
          display: inline-block;
          vertical-align: middle;
          color: #aab2bd;
          &.load{
            margin-left: 8px;
          }
        }
      }
      .paypals {
        text-align: center;
        height: 46px;
        overflow: hidden;
        line-height: 46px;
        background:rgba(255,196,56,1);
        width: 345px;
        margin: 0 auto;
        display: block;
        border-radius: 30px;
        font-weight: bold;
        img{
          width: 78px;
          display: inline-block;
          &.load{
            margin-left: 8px;
          }
        }
      }
    }
  }
}
.scroll-lists {
  height: calc(100% - 100px);
  overflow: auto;
  &.has-coupon {
    /*height: calc(100% - 150px);*/
  }
  &.no-good{
    height: 100%
  }
}
.coupon {
  padding-left: 15px;
  height: 50px;
  display: flex;
  align-items: center;
  background:rgba(255,174,147,0.1);
  img {
    display: inline-block;
    width: 19px;
    height: 18px;
    margin-right: 10px;
  }
  span {
    margin-top: 2px;
    display: inline-block;
    line-height: 20px;
    font-size:12px;
    font-weight:bold;
    color:#000;
  }
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


</style>
