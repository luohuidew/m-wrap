<template>
  <!--一个店铺-->
  <div class="cart-item"
    v-if="cur_lists.length>0">
    <div class="cart-lists-store">
      <div class="store-box">
        <div class="icon-box"
          @click="toggle_checked(checked_store)">
          <img v-if="checked_store"
            src="/static/images/icon/cart/selected.png"
            alt=""
            srcset="">

          <img v-else
            src="/static/images/icon/cart/noSelected.png"
            alt=""
            srcset="">
        </div>
        <p class="total-store"
          @click="to_store(all_data.store_id)">
          <img :src="all_data.logo"
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
                src="/static/images/icon/cart/selected.png"
                alt=""
                srcset="">
              <img v-else
                   @click="check_only(item)"
                   src="/static/images/icon/cart/noSelected.png"
                   alt=""
                   srcset="">
            </div>
          </div>
          <div class="cover-img-box"
            @click="to_detail(item.store_sku_id)">
            <img :src="item.cover_img"
              alt=""
              srcset="">
          </div>
          <div class="title-box">
            <p class="goods-title text-line-clamp-1">
              {{item.title}}
            </p>
            <div class="attr-select">
              <span> {{item.attr_str}}</span>
            </div>
            <div class="card-count">
              <span class="price">{{item.price}}</span>
              <span class="account-change">
                <i @click="account(-1,index)">
                  <img src="/static/images/icon/cart/减@3x.png"
                    alt=""
                    srcset="">
                </i>
                <span>{{item.num}}</span>
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
        <input :class="{error: all_data.store_code_info.error_msg}" @blur="passBlur" type="text" v-model="code" @input="codeInput" placeholder="Apply shop coupon code"  />
        <div class="commit" :class="{ actived: codeActived }" @click="codeChange"></div>
      </div>
      <div class="error">
        {{all_data.store_code_info.error_msg}}
        {{all_data.store_code_info.price_desc}}
      </div>
    </div>
    <div class="shipping" @click="showVantShippingMethod">
      <h2>{{shippingName}} {{shippingPrice}}</h2>
      <h3>{{shippingDesc}}</h3>
    </div>

  </div>
</template>

<script>
  import Shipping from "./shipping";

  export default {
  name: "",
  data() {
    return {
      checked_store: false,
      showVantShipping: false,
      code: '',
      codeActived: false,
      selectShippingKey: 0,
      shippingName: '',
      shippingDesc: '',
      shippingPrice: '0.00',
    };
  },
  props: {
    listsData: {
      type: Object,
      default: {
        goods_data: []
      },
    },
    shippSelectObj: {
      type: Object,
      default: {
      }
    },
  },
  computed: {
    defaultShippingKey() {
      const defaultkey = this.listsData.ship_method.default
      return defaultkey
    },
    all_data() {
      return this.listsData
    },
    cur_lists() {
      return this.listsData.goods_data
    },
  },

  mounted() {
  },
  watch: {
    shippSelectObj: {
      handler(newVal) {
        if(this.all_data.store_id === newVal.storeId) {
          const select = this.listsData.ship_method.list.filter(ship=>{
            return ship.key === newVal.shippingKey
          })
          this.shippingName = select[0].key_name
          this.shippingDesc = select[0].desc
          this.shippingPrice = select[0].price_show

        }

      },
      deep:true
    },
    defaultShippingKey:{
      handler(newVal) {
        const select = this.listsData.ship_method.list.filter(ship=>{
          return ship.key === newVal
        })
        this.shippingName = select[0].key_name
        this.shippingDesc = select[0].desc
        this.shippingPrice = select[0].price_show
      },
      immediate: true,
    }
  },
  methods: {
    passBlur() {
      document.activeElement.scrollIntoViewIfNeeded(true);
    },
    codeInput() {
      if(this.code) {
        this.codeActived = true
      } else {
        this.codeActived = false
      }
    },
    codeChange() {
      this.codeActived && this.emitPrant()
    },
    closeVantShipping(obj) {
      this.selectShippingKey = obj.shippingKey
      this.showVantShipping = false
      this.emitPrant()
    },
    showVantShippingMethod() {
      this.$emit('showVantShipping',{store_id:this.all_data.store_id})

      this.showVantShipping = true
    },
    account(num, index) {
      // debugger
      let cur_item = this.cur_lists[index];
      let temp_number = Number(cur_item.num);
      temp_number += num;
      if (temp_number == 0) {
        this.$emit('deleteCartGood',{
          cart_id: cur_item.cart_id,
          store_id: this.all_data.store_id
        })
        // this.$dialog.confirm({
        //   message: 'Delete merchandise',
        //   cancelButtonText: 'Cancel',
        //   confirmButtonText: 'Confirm'
        // }).then(() => {
        //   this.$emit('deleteCartGood',{
        //     cart_id: cur_item.cart_id,
        //     store_id: this.all_data.store_id
        //   })
        // }).catch(() => {
        //   temp_number = 1;
        //   cur_item.num = temp_number;
        // });
      } else {
        if (temp_number == 11) {
          temp_number = 10;
        }
        cur_item.num = temp_number;
        this.emitPrant()
      }

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
            cart_id: item.cart_id,
            num: item.num,
            checkted: item.checkted
          })
        }
      })
        const obj = {
          checkted_store: this.checked_store,
          store_id: this.all_data.store_id,
          goods: goods,
          shipp_key: this.selectShippingKey,
          code_number: this.code
        }
        console.log(obj,4)
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
  .icon-box{
    img {
      width: 18px;
      height: 18px;
    }
  }
}
.cart-lists-store {
  padding: 15px 0;
  display: flex;
  justify-content: space-between;

  .total-store {
    display: flex;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
      object-fit: contain;
      border-radius: 50%
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
      height: 18px;
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
    font-size: 12px;
    line-height: 18px;
    color:rgba(155,155,155,1);
  }
  .attr-select {
    color:rgba(0,0,0,1);
    font-size:12px;
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
  .error {
    color: #D70E19;
    font-size: 12px;
    line-height: 20px;
    padding-left: 2px;
  }
  .content {
    display: flex;
    height:45px;
align-items: center;
    justify-content: space-between;
    input {
      width:250px;
      height:45px;
      background:rgba(255,255,255,1);
      border-radius:4px;
      border:1px solid rgba(225,225,225,1);
      line-height: 18px;
      font-size:14px;
      font-weight:400;
      color:rgba(74,74,74,1);
      padding-left: 10px;
      &.error{
        border:1px solid #D70E19;
      }
    }
    .commit {
      transition: 0.3s;
      width:80px;
      height:45px;
      background-color:rgba(199,199,199,1);
      border-radius:4px;
      background-image: url("~@/assets/img/icon/arrow.png");
      background-size: 20px;
      background-repeat: no-repeat;
      background-position: center;
      &.actived {
        background-color: black;
      }
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
  background: url('/static/images/icon/cart/分类 copy@3x.png') no-repeat center right 13px;
  background-size: 18px;
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
