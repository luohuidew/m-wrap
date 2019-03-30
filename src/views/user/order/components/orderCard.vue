<template>
  <section class="card-page">
    <div class="card-title">
      <div class="store-box">
        <img src="/static/images/icon/cart/store@3x.png"
          alt=""
          srcset="">
        <span>{{orderData.store_name}}</span>
      </div>
      <div class="order-status">
        {{orderData.status_desc}}
      </div>
    </div>
    <div @click="to_detail(orderData.order_no)">
      <orderGoodsLists :orderDataLists="orderData.store_items" />
    </div>
    <div class="total-box">
      Total {{orderData.real_total_price}} for {{orderData.store_items.length}} items
    </div>
    <div class="pay-box">
      <button class="cancel">
        Cancel
      </button>
      <button class="pay-now">
        Pay Now
      </button>
    </div>
  </section>
</template>

<script>
import orderGoodsLists from "@/views/user/components/orderGoodsLists";
export default {
  name: "",
  props: {
    data: {
      type: Object,
      default: undefined
    }
  },
  data() {
    return {
      orderData: this.data
    };
  },
  computed: {},
  created() {},
  methods: {
    to_detail(order_no) {
      let path_params = {
        path: "/user/orders/detail",
        query: {
          order_no: order_no
        }
      };
      this.$router.push(path_params);
    }
  },
  components: {
    orderGoodsLists
  }
};
</script>

<style lang='scss' scoped>
$base_color: #d70e19;
.card-page {
  padding: 0 20px;
  border-top: 10px solid #f3f3f3;
}
/*  */
.card-title {
  display: flex;
  height: 54px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f3f3f3;
  font-size: 14px;
  margin-bottom: 15px;
  .store-box {
    display: flex;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
    }
    span {
      margin-left: 10px;
    }
  }
  .order-status {
    font-weight: bold;
  }
}
/*  */
.order-goods-lists {
  li {
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
  }
  .cover-img-box {
    height: 80px;
    width: 80px;
    margin-right: 20px;
    img {
      height: 100%;
      width: 100%;
      border-radius: 6px;
    }
  }
  .goods-desc-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    font-size: 12px;

    .title {
    }
    .attr {
      color: #9b9b9b;
    }
    .price {
      display: flex;
      justify-content: space-between;
    }
  }
}
/*  */
.total-box {
  height: 33px;
  line-height: 33px;
  text-align: right;
  font-size: 14px;
  border-top: 1px solid #f3f3f3;
  border-bottom: 1px solid #f3f3f3;
}
/*  */
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
