<template>
  <div class="dialog-page">
    <ul class="dialog-item">
      <li class="shipping-close">
        <img src="/static/images/icon/normal/huise-close (2).png"
          alt=""
          @click="close_dialog">
      </li>
      <li class="shipping-title">
        Shipping
      </li>
      <li class="shipping-lists">
        <ul>
          <li v-for="(item,index) in shipping_lists"
            :key="index"
            class="shipping-lists-item">
            <div class="shipping-desc">
              <p>{{item.key_name}}</p>
              <p class="remark">{{item.desc}}</p>
            </div>
            <div class="shipping-price">
              <!-- <span v-if="index===0"
                class="color-red">{{item.price}}</span> -->
              <span>{{item.price_show}}</span>
            </div>
          </li>
        </ul>
      </li>
      <li class="shipping-rules">
        <h2>Shipping & Returns</h2>
        <p>Free shipping returns and exchanges are available for damaged and defective products within 30 days of delivery. No other returns allowed.</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    shippingData:{
      type:Array,
      default:[]
    }
  },
  data() {
    return {
      shipping_lists: this.shippingData
    };
  },
  computed: {},
  created() {},
  methods: {
    close_dialog(){
      this.$emit('close',null)
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.dialog-page {
  font-size: 14px;
  .dialog-item {
    & > li {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
/* guanbi */
.shipping-close {
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  img {
    height: 17px;
    width: auto;
  }
}
/* biaoti */
.shipping-title {
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 30px;
}
/* liebiao */
// .shipping-lists {
// }
.shipping-lists-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  line-height: 16px;
  height: 70px;
  border-bottom: 1px solid #e9e9e9;
  &:nth-last-child(1) {
    border: none;
  }
  .shipping-desc {
    width: 214px;
  }
  .shipping-price {
    width: 80px;
    text-align: right;
  }
}
/* rules */
.shipping-rules {
  padding: 0;
  padding-bottom: 40px;
  border-top: 10px solid #e9e9e9;
  h2 {
    font-size: 18px;
    padding: 20px 0;
  }
}
</style>
