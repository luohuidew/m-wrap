<template>
  <div class="my-delivery">
    <h3>Select Delivery Meth</h3>
    <ul class="delivery-content">
      <li class="card"
        v-for="(item,index) in delivery_lists"
        :key="index"
        :class="is_selected===index?'active':''"
        @click="selected_shipping(item,index)">

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
        @click="go_back()">DONE</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      delivery_lists: undefined,
      is_selected: -1
    };
  },
  mounted() {
  },
  created() {
    this.init_data();
  },
  computed: {},
  methods: {
    init_data() {
      let lists = this.$store.state.info_lists.lists;
      let is_selected_shipping = this.$store.state.order_detail.is_selected_shipping;
      this.delivery_lists = lists;
      // 获取到上传选择的邮费方式
      let islecteArray = is_selected_shipping.filter((item) => {
        return item.store_id === this.$store.state.info_lists.store_id
      })
      if(islecteArray.length>0){
        this.is_selected = islecteArray[0].index;
      }
      // debugger;
    },
    selected_shipping(citem, index) {
      let order_detail = this.$store.state.order_detail;
      let store_id = this.$store.state.info_lists.store_id;
      let is_selected_shipping = order_detail.is_selected_shipping;

      let lockselect = false;
      is_selected_shipping.forEach((item) => {
        if(item.store_id === store_id) {
          item.index = index;
          lockselect = true;
        }
      })
      if (!lockselect) {
        is_selected_shipping.push({
          store_id: store_id,
          index: index
        })
      }
      this.is_selected =  index;  // 选勾
      let lock = false;
      order_detail.delivery.forEach((item) => {
        if (item.store_id === store_id) {
          item.item = citem;
          lock = true;
        }
      })
      if (!lock) {
        order_detail.delivery.push({
          item: citem,
          store_id: this.$store.state.info_lists.store_id
        })
      }
    },
    go_back() {
      this.$router.go(-1);
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
$color1: #d70e19;
$bgcolor: #f3f3f3;
$linecolor: #e9e9e9;
.my-delivery {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: $bgcolor;
  // padding-bottom: 120px;
  overflow: auto;
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
      background: #fff url("/static/img/icon/nochecked.png") no-repeat center
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
      background-image: url("/static/img/icon/havechecked.png");
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
    background: #d70e19;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    text-align: center;
    line-height: 40px;
    color: #fff;
  }
}
</style>
