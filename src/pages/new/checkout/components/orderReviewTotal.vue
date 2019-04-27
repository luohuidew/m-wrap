<template>
  <ul class="coupon-code-box">
    <li class="select-shipping"
      @click="to_shipping()">
      <div>
        <p class="shipping-title">{{dain_ship_method.key_name}}</p>
        <p>
          <span>{{dain_ship_method.desc}}</span>
          <span>{{dain_ship_method.price_show}}</span>
        </p>
      </div>
    </li>
    <li class="select-code">
      <div>
        <input type="text"
          v-model="codes"
          @change="applyCode"
          placeholder="Enter Promo Code">
        <button :class="{'no-select':!codes}">Apply</button>
      </div>
    </li>
    <li class="code-tips-box">
      <p v-if="store_updata_price.store_code_info.type === 2">{{store_updata_price.store_code_info.error_msg}}</p>
      <p v-if="store_updata_price.store_code_info.type === 1">{{store_updata_price.store_code_info.price_desc}}</p>
    </li>
    <li class="checkout-summary">
      <ul>
        <li>
          <span>Subtotal: </span>
          <span>{{defaulttotalPrice.sub_total}}</span>
        </li>
        <li>
          <span>Shipping: </span>
          <span>{{defaulttotalPrice.ship}}</span>
        </li>
        <li>
          <span>Total: </span>
          <span class="all-total">{{defaulttotalPrice.total}}</span>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: "",
  props: {
    address_item: {
      type: Object,
    },
    totalPrice: {
      type: Object,
      default: function() {
        return {};
      }
    },
    store_updata_price: {
      type: Object,
      default: function() {
        return {
          store_code_info: {}
        };
      }
    }
  },
  data() {
    return {
      defaulttotalPrice: this.totalPrice,
      codes: "",
      dain_ship_method: {}
    };
  },
  computed: {},
  watch: {
    store_updata_price: {
      handler: function(cur) {
        this.codes = cur.store_code_info.code_number;
        this.defaulttotalPrice.sub_total = cur.sub_total;
        this.defaulttotalPrice.ship = cur.ship;
        this.defaulttotalPrice.total = cur.total;
      },
      deep: true
    }
  },
  created() {
    let default_key = this.defaulttotalPrice.ship_method.default;
    let list = this.defaulttotalPrice.ship_method.list;
    if (list.length === 0) return;
    let defult_select = list.filter(item => {
      return item.key === default_key;
    });
    this.dain_ship_method = defult_select[0]; // 默认的快递方式
    let delivery = this.$store.state.order_detail.delivery;
    delivery.forEach(item => {
      if (item.store_id === this.defaulttotalPrice.store_id) {
        this.dain_ship_method = item.item;
      }
    });
  },
  methods: {
    applyCode() {
      let num = Object.keys(this.address_item).length
      if (num === 0) {
        this.$toast('Please add shipping address');
        return
      }
      let val = this.codes
      if (!val) {
        val = undefined
      }
      let clock = true;
      let applyCode = this.$store.state.order_detail.applyCode;
      applyCode.forEach(item => {
        if (item.store_id === this.defaulttotalPrice.store_id) {
          item.code_number = val
          clock = false;
        }
      });
      if (clock) {
        applyCode.push({
          store_id: this.defaulttotalPrice.store_id,
          code_number: val
        });
      }
      this.$emit("applyCode");
    },
    to_shipping() {
      this.$store.state.info_lists.lists = this.defaulttotalPrice.ship_method.list;
      this.$store.state.info_lists.store_id = this.defaulttotalPrice.store_id;
      let params = {
        path: "/delivery"
      };
      this.$router.push(params);
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
$border_1px: 1px solid #f3f3f3;
.select-shipping,
.select-code {
  border-bottom: $border_1px;
  & > div {
    font-size: 16px;
    // padding-right: 20px;
    padding: 20px 20px 20px 0;
    background: url("/static/img/icon/right.png") no-repeat right center;
  }
}
.select-code {
  div {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding: 20px 0;

    input {
      color: #b6b6b6;
      border: 0;
    }
    button {
      width: 80px;
      height: 24px;
      font-size: 12px;
      line-height: 24px;
      background: #d70e19;
      border: 0;
      color: #fff;
      border-radius: 12px;
    }
    .no-select {
       background: #f3f3f3;
       color: #9b9b9b;
    }
  }
}
.code-tips-box {
  padding: 10px 0;
  color: #d70e19;
  font-size: 12px;
}
.checkout-summary {
  padding-bottom: 10px;
  ul {
  }
  li {
    display: flex;
    justify-content: space-between;
    color: #9b9b9b;
    font-size: 14px;
    line-height: 28px;
    .all-total {
      color: #000000;
      font-weight: bold;
    }
  }
}
</style>
