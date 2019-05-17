<template>
  <div class="my-delivery">
    <h3>Select Delivery Meth</h3>
    <ul class="delivery-content">
      <li class="card"
        v-for="(item,index) in VantShippingStore.ship_method.list"
        :key="index"
        :class="is_selected===item.key ? 'active':''"
        @click="selected_shipping(item)">
        <div class="shipping-item">
          <p>
            <span class="shipping-label">
              {{item.key_name}}
            </span>
            <span class="shipping-time">
              {{item.desc}}
            </span>
          </p>
          <p v-if="(item.price-0)>0" class="shipping-price">
            ${{item.price}}
          </p>
          <p v-else class="shipping-price">
            {{item.price}}
          </p>

          <i></i>
        </div>
      </li>
    </ul>
    <div class="done-btn">
      <a href="javascript:;"
        @click="go_back">DONE</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shipping",
  data() {
    return {
      is_selected: 0,
      is_selectedItem: {}
    };
  },
  computed:{
    default_selected(){
      const defaultkey = this.VantShippingStore.ship_method.default
      return defaultkey
    }
  },
  watch: {
    default_selected:{
      handler(newVal) {
        this.is_selected = newVal
        const de = this.VantShippingStore.ship_method.list.filter(item=>{
         return item.key === newVal
        })
        this.is_selectedItem = de[0]
      },
      immediate: true,
    }
  },
  mounted() {

  },
  props: {
    VantShippingStore: {
      type: Object,
      default() {
        return {
          ship_method: {}
        }
      }
    }
  },
  created() {
  },
  methods: {
    selected_shipping(item) {
      this.is_selectedItem = item
      this.is_selected = item.key
    },
    go_back() {
      const obj = {
        shippingKey: this.is_selectedItem.key,
        storeId: this.VantShippingStore.store_id
      }
      this.$emit('closeVant', obj)
    },
  },
  components: {}
};
</script>

<style lang='scss' scoped>
$color1: #d70e19;
$bgcolor: #f3f3f3;
$linecolor: #e9e9e9;
.my-delivery {
  h3 {
    padding: 30px 0 10px 20px;
  }
}
.delivery-content {
  flex: 1;
  overflow: auto;
  li {
    display: flex;
    align-items: center;
    // justify-content: space-between;
    font-size: 14px;
    // height:24px;
    background-color: #fff;
    cursor: pointer;
    i {
      width: 16px;
      height: 16px;
      background: #fff url("/static/images/icon/cart/noSelected.png") no-repeat center
        center;
      background-size: 15px;
    }
    span {
      padding: 0 12px;
    }
    img {
      height: 24px;
      margin-right: 10px;
    }
  }
  .active {
    i {
      background-image: url("/static/images/icon/cart/selected.png");
      background-size: 15px;
    }
  }
  .shipping-item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px 10px 10px;
    // padding-left: 10px;
    border-bottom: 1px solid $linecolor;
    p {
      span {
        display: block;
      }
      .shipping-label {
        font-size: 16px;
        line-height: 20px;
      }
      .shipping-time {
        color: $linecolor;
      }
    }
    .shipping-price {
      font-size: 18px;
      font-weight: bold;
    }
  }
}
.done-btn {
  text-align: center;
  background-color: #fff;
  padding: 10px 0;
  a {
    display: inline-block;
    width: 250px;
    height: 40px;
    background: #000;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    text-align: center;
    line-height: 40px;
    color: #fff;
  }
}
</style>
