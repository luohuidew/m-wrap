<template>
  <div class="cart-item"
    v-if="cur_lists.length">
    <div class="cart-lists-store">
      <div class="store-box">
        <div class="icon-box"
          @click="toggle_checked(checked_store)">
          <img v-if="checked_store"
            src="/static/images/icon/cart/多选 选中@3x.png"
            alt=""
            srcset="">
          <img v-else
            src="/static/images/icon/cart/多选 未选中@3x.png"
            alt=""
            srcset="">
        </div>
        <p class="total-store"
          @click="to_store(all_data.store_id)">
          <img src="/static/images/icon/cart/store@3x.png"
            alt=""
            srcset="">
          <span class="text-line-clamp-1">{{all_data.store_name}}</span>
        </p>
      </div>
      <p class="to-store"
        @click="to_store(all_data.store_id)">
        <img src="/static/images/icon/cart/分类 copy@3x.png"
          alt="">
      </p>
    </div>
    <ul>
      <li class="cart-card"
        v-for="(item,index) in cur_lists"
        :key="item.only">
        <div class="card-item">
          <div class="store-box">
            <div class="icon-box">

              <img v-if="item.checkted"
                @click="no_check_only(item)"
                src="/static/images/icon/cart/多选 选中@3x.png"
                alt=""
                srcset="">
              <img v-else
                   @click="check_only(item)"
                   src="/static/images/icon/cart/多选 未选中@3x.png"
                   alt=""
                   srcset="">
            </div>
          </div>
          <div class="cover-img-box"
            @click="to_detail(item.sku_id)">
            <img :src="item.goods_img"
              alt=""
              srcset="">
          </div>
          <div class="title-box">
            <p class="goods-title text-line-clamp-1">
              {{item.goods_title}}
            </p>
            <div class="attr-select">
              <span> {{item.attr_str}}</span>
            </div>
            <div class="card-count">
              <span class="price">${{item.goods_price}}</span>
              <span class="account-change">
                <i @click="account(-1,index)">
                  <img src="/static/images/icon/cart/减@3x.png"
                    alt=""
                    srcset="">
                </i>
                <span>{{item.count}}</span>
                <i @click="account(1,index)">
                  <img src="/static/images/icon/cart/加好@3x.png"
                    alt=""
                    srcset="">
                </i>
              </span>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="code">
      <div class="content">
        <input type="text" placeholder="Apply shop coupon code" />
        <div class="commit"></div>
      </div>
      <div class="error"></div>
    </div>
    <div class="shipping" @click="showVantShippingMethod">
      <h2>Free shipping over $69.00</h2>
      <h3>Ready to ship in 5-12 business days</h3>
    </div>
    <van-popup v-model="showVantShipping" position="bottom" >
      <Shipping @closeVant = 'closeVantShipping'></Shipping>
    </van-popup>
  </div>
</template>

<script>
  import Shipping from "./shipping";

  export default {
  name: "",
  data() {
    return {
      all_data: this.listsData,
      cur_lists: this.listsData.goods_list,
      checked_store: false,
      showVantShipping: false
    };
  },
  props: {
    listsData: {
      type: Object,
      default: []
    },
  },
  computed: {

  },

  mounted() {

  },
  watch: {
  },
  methods: {
    closeVantShipping() {
      this.showVantShipping = false
    },
    showVantShippingMethod() {
      this.showVantShipping = true
    },
    account(num, index) {
      // debugger
      let cur_item = this.cur_lists[index];
      let temp_number = Number(cur_item.count);
      temp_number += num;
      if (temp_number == 0) {
        temp_number = 1;
      }
      if (temp_number == 11) {
        temp_number = 10;
      }
      cur_item.count = temp_number;
      this.emitPrant()
    },
    findSelectAll() {
      const selctArray = this.cur_lists.filter(item => {
        return item.checkted
      })
      this.checked_store = selctArray.length === this.cur_lists.length
    },
    emitPrant() {
      const goods = []
      this.cur_lists.forEach(item=> {
        if (item.checkted) {
          goods.push({
            only: item.only,
            count: item.count,
            checkted: item.checkted
          })
        }
      })
        const obj = {
          checkted_store: this.checked_store,
          store_id: this.all_data.store_id,
          goods: goods
        }
        console.log(obj)
      this.$emit("checkout", obj);
    },
    check_only(item) {
      item.checkted = true
      this.findSelectAll()
      this.emitPrant()
    },
    no_check_only(item) {
      item.checkted = false
      this.findSelectAll()
      this.emitPrant()
    },
    toggle_checked(cur_checked) {
      this.cur_lists.forEach(item => {
        if (!cur_checked) {
          item.checkted = true
        } else {
          item.checkted = false
        }
      });
      this.findSelectAll()
      this.emitPrant()
    },
    to_store(store_id) {
      let params = {
        path: "/store",
        query: {
          store_id: store_id
        }
      };
      this.$router.push(params);
    },
    to_detail(sku_id) {
      let params = {
        path: "/detail",
        query: {
          sku_id: sku_id
        }
      };
      this.$router.push(params);
    }
  },
  components: {
    Shipping
  },
};
</script>

<style lang='scss' scoped>
  .cart-item {
    padding-bottom: 20px;
  }
.cart-card {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
}
/*  */
.store-box {
  display: flex;
}
.cart-lists-store {
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f3f3f3;

  .total-store {
    display: flex;
    align-items: center;
    img {
      width: 18px;
      height: 18px;
      object-fit: contain;
      vertical-align: middle;
    }
    span {
      display: inline-block;
      font-size: 14px;
      width: 180px;
      padding-left: 5px;
    }
  }
  .to-store {
    font-size: 0;
    display: flex;
    align-items: center;
    img {
      height: 24px;
      width: auto;
    }
  }
}
.card-item {
  flex: 1;
  display: flex;
  padding-top: 17px;
  // padding-left: 10px;
}
.cover-img-box {
  height: 80px;
  width: 80px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 6px;
  }
}
.title-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;
  .goods-title {
    font-size: 14px;
    line-height: 18px;
  }
  .attr-select {
    color: #9b9b9b;
    font-size: 14px;
    span {
      padding-right: 30px;
      // background: url("/static/images/icon/cart/分类 copy 2.png") no-repeat
      //   center right;
      // background-size: 18px auto;
    }
  }
  .card-count {
    display: flex;
    justify-content: space-between;
    .price {
      font-size: 14px;
      color: #000000;
    }
    .account-change {
      display: flex;
      align-items: center;
      i {
      }
      img {
        height: 10px;
        width: 10px;
        margin: 0 8px;
      }
      span {
        height: 24px;
        width: 60px;
        text-align: center;
        border: 1px solid #c9caca;
      }
    }
  }
}
.code {
  .content {
    display: flex;
    justify-content: space-between;
    input {
      width:250px;
      height:45px;
      background:rgba(255,255,255,1);
      border-radius:4px;
      border:1px solid rgba(225,225,225,1);
      line-height: 45px;
      font-size:14px;
      font-weight:400;
      color:rgba(74,74,74,1);
      padding-left: 10px;
    }
    .commit {
      width:80px;
      height:45px;
      background:rgba(199,199,199,1);
      border-radius:4px;
    }
  }
}
.shipping {
  height:45px;
  background-color:rgba(255,255,255,1);
  border-radius:4px;
  border:1px solid rgba(225,225,225,1);
  box-sizing: border-box;
  padding: 5px 10px;
  margin-top:10px ;
  line-height: 18px;
  background: url(/static/img/icon/right.png) no-repeat center right 13px;
  h2 {
    font-size:12px;
    font-weight:400;
    color:rgba(0,0,0,1);
  }
  h3 {
    font-size:10px;
    font-weight:400;
    color:rgba(155,155,155,1);
  }
}
</style>
