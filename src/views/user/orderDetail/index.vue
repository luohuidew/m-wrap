<template>
  <section class="order-detail"
    v-if="orderData">
    <div class="detail-header">
      <p>{{orderData.status_desc}}</p>
    </div>
    <div class="order-packge">
      <ul>
        <li v-for="(item,index) in orderData.logistics"
          :key="index">
          <div class="package-box">
            Package {{index+1}}
          </div>
          <div class="tracking-no">
            Tracking Number: {{item.name}}{{item.tracking_no}}
          </div>
          <div class="cover-img-lists">
            <img v-for="(imgs,index) in item.cover_imgs"
              :key="index"
              :src="imgs"
              alt=""
              srcset="">
          </div>
        </li>
      </ul>
    </div>
    <div class="order-address">
      <li v-if="orderData">
        <p class="font-weight-bold"><span>{{orderData.address_info.first_name}}</span>&nbsp;<span>{{orderData.address_info.last_name}}</span></p>
        <p><span> {{orderData.address_info.address1}} </span>
          <span> {{orderData.address_info.city}} </span>
          <span> {{orderData.address_info.state}} </span>
          <span> {{orderData.address_info.zipcode}} </span><br />
          <span> {{orderData.address_info.zipcode}} </span>
          <span> {{orderData.address_info.tel}} </span></p>
      </li>
    </div>
    <!--  -->
    <div class="store-info">
      <div class="store-box">
        <img src="/static/images/icon/cart/store@3x.png"
          alt=""
          srcset="">
        <span>{{orderData.store_name}}</span>
      </div>
      <orderGoodsLists :orderDataLists="orderData.store_items" />
      <ul class="global-box">
        <li>
          <p>Subtotal: </p>
          <p>{{orderData.sub_total}}</p>
        </li>
        <li>
          <p>Shipping:</p>
          <p>{{orderData.post_fee}}</p>
        </li>
        <li>
          <p>Promo Code:</p>
          <p>{{orderData.code_discount}}</p>
        </li>
        <li>
          <p>Weget Coupon: </p>
          <p>{{orderData.coupon_discount}}</p>
        </li>
        <li>
          <p>Total Before Tax: </p>
          <p>{{orderData.sub_total}}</p>
        </li>
        <li>
          <p>Tax:</p>
          <p>{{orderData.tax}}</p>
        </li>
        <li>
          <p>All Total:</p>
          <p>{{orderData.all_total}}</p>
        </li>
      </ul>
    </div>
    <div class="order-info">
      <ul>
        <li>Order Number: {{orderData.order_no}}</li>
        <li v-if="orderData.pay_type">Payment Method:{{orderData.pay_type}}</li>
        <li>Shipping Method: {{orderData.ship_method}}</li>
      </ul>
      <ul>
        <li v-for="(item,index) in orderData.time_list"
          :key="index"><span>{{item.name}}: </span><span>{{item.time | dateServerEnglishYMD}}</span></li>
      </ul>
    </div>
    <btnGroup :orderData="orderData" />
  </section>
</template>

<script>
import ORDER from "@/api/order";
import orderGoodsLists from "@/views/user/components/orderGoodsLists";
import btnGroup from "@/views/user/components/orderStatusBtn";

export default {
  name: "",
  props: {},
  data() {
    return {
      orderData: undefined
    };
  },
  computed: {},
  created() {
    this.init_data();
  },
  methods: {
    init_data() {
      let params = {
        order_no: this.$route.query.order_no
      };
      ORDER.read(params).then(res => {
        this.orderData = res.data;
      });
    }
  },
  components: {
    orderGoodsLists,
    btnGroup
  }
};
</script>

<style lang='scss' scoped>
.detail-header {
  font-size: 14px;
}
/*  */
.detail-header {
  display: flex;
  align-items: center;
  height: 90px;
  font-size: 14px;
  font-weight: bold;
  background-color: #f3f3f3;
  padding: 20px;
}
/*  */
.order-address {
  padding: 20px;
  font-size: 13px;
  line-height: 1.5;
}
/*  */
.store-info {
  padding: 0 20px;
  border-top: 10px solid #f3f3f3;
  .store-box {
    display: flex;
    height: 54px;
    align-items: center;
    border-bottom: 1px solid #f3f3f3;
    font-size: 14px;
    margin-bottom: 15px;
    img {
      width: 20px;
      height: 20px;
    }
    span {
      margin-left: 10px;
    }
  }
  .global-box {
    font-size: 12px;
    padding-bottom: 12px;
    li {
      display: flex;
      justify-content: space-between;
      line-height: 2;
      color: #9b9b9b;
      &:nth-last-child(1) {
        color: #000000;
      }
    }
  }
}
/*  */
.order-info {
  padding: 20px;
  font-size: 12px;
  line-height: 2;
  border-top: 10px solid #f3f3f3;
  border-bottom: 40px solid #f3f3f3;
}
</style>
