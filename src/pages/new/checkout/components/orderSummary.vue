<template>
  <div class="order-summary-box">
    <h2>Order Summary ({{total_summary.good_nums}} items)</h2>
    <div class="select-coupon" @click="to_coupon">
      <img src="/static/images/icon/cart/搜索 copy 2@3x.png"
        alt=""
        srcset="">
      <span v-if="coupon.name">{{coupon.name}}</span>
      <span v-else class="no-select">Select Coupon</span>
    </div>
    <ul class="all-total-lists">
      <li>
        <span>
          Total:
        </span>
        <span>
          {{total_summary.total}}
        </span>
      </li>
      <li v-if="total_summary.coupon_discount !== '$0.00'">
        <span>
          Weget Coupon:
        </span>
        <span class="color-red">
          -{{total_summary.coupon_discount}}
        </span>
      </li>
      <li>
        <span>
          Total Before Tax:
        </span>
        <span>
          {{total_summary.total_before_tax}}
        </span>
      </li>
      <li>
        <span>
          Tax:
        </span>
        <span>
          {{total_summary.tax_total}}
        </span>
      </li>
      <li>
        <span>
          Tax All Total:
        </span>
        <span>
          {{total_summary.all_total}}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    total_summary: {
      type: Object,
      default: function () {
        return {}
      }
    },
    address_item: {
      type: Object
    }
  },
  data() {
    return {
      coupon: {}
    };
  },
  computed: {},
  created() {
    this.coupon = this.$store.state.order_detail.coupon;
  },
  methods: {
    to_coupon() {
      let num = Object.keys(this.address_item).length
      if (num === 0) {
        this.$toast('Please add shipping address');
        return
      }
      let params = {
        path: "/coupon"
      };
      this.$router.push(params);
    },
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.order-summary-box {
  h2 {
    padding: 20px 0;
  }
  .no-select {
    color: #d70e19;
    float:right;
  }
}
.select-coupon {
  display: flex;
  align-items: center;
  font-size: 16px;
  // padding-right: 20px;
  padding: 20px 20px 20px 0;
  background: url("/static/img/icon/right.png") no-repeat right center;
  border-top: 1px solid #f3f3f3;
  span {
    font-size: 12px;
    color: #9b9b9b;
  }
  img {
    height: 20px;
    width: auto;
    vertical-align: middle;
    margin-right: 10px;
  }
}
/* jiagelibiao */
.all-total-lists {
  border-top: 1px solid #f3f3f3;
  padding: 20px 0 40px 0;
}
/* zongjianjisuan  */
.all-total-lists {
  li {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 2;
  }
}
</style>
