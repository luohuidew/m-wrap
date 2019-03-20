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
        <p class="total-store">
          <img src="/static/images/icon/cart/store@3x.png"
            alt=""
            srcset="">
          <span>{{all_data.store_name}}</span>
        </p>
      </div>
      <p class="to-store">
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
              <img v-if="checked_all_only.indexOf(item.only)===-1"
                @click="check_only(item)"
                src="/static/images/icon/cart/多选 未选中@3x.png"
                alt=""
                srcset="">
              <img v-else
                @click="no_check_only(item)"
                src="/static/images/icon/cart/多选 选中@3x.png"
                alt=""
                srcset="">
            </div>
          </div>
          <div class="cover-img-box">
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

  </div>
</template>

<script>
import CART from "@/api/cart";
export default {
  name: "",
  data() {
    return {
      all_data: this.listsData,
      cur_lists: this.listsData.goods_list,
      checked_all_only: [],
      checked_all_item: []
    };
  },
  props: {
    listsData: {
      type: Object,
      default: []
    },
    checkoutData: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    checked_store() {
      return this.cur_lists.length === this.checked_all_only.length;
    }
  },
  mounted() {
    console.log(this.$store);
  },
  watch: {
    checked_all_item: {
      handler(cur, old) {
        // if(cur.length){
        //   }
        let temp_emit = {
          checked_store: this.checked_store,
          checked_all_only: this.checked_all_only,
          checked_all_item: this.checked_all_item,
          cur_lists: this.cur_lists
        };
        this.$emit("checkout", temp_emit);
      },
      deep: true
    },
    parent_checkout: {
      handler(cur, old) {
        console.log(cur, old);
        if (cur !== old) {
          if (cur) {
          } else {
            // this.checked_all_only = [];
            // this.checked_all_item = [];
          }
        }
      },
      deep: true
    }
  },
  methods: {
    del_cur_cart_item(only_id, index) {
      let params = {
        only: [only_id]
      };
      console.log(this.$store);

      CART.delShopCartGood(params).then(res => {
        this.cur_lists.splice(index, 1);
      });
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
    },
    check_only(item) {
      /* jubu */
      this.checked_all_only.push(item.only);
      /* quanju */
      this.checked_all_item.push(item);
      let cur_total = Number(
        (Number(item.goods_price) * (item.count - 0)).toFixed(2)
      );
      // this.$parent.total_data.total += cur_total;
      this.$parent.total_data.cart_ids.push(item.only);
    },
    no_check_only(item) {
      let index = this.checked_all_only.indexOf(item.only);
      this.checked_all_only.splice(index, 1);
      this.checked_all_item.splice(index, 1);
      let cur_total = Number(
        (Number(item.goods_price) * (item.count - 0)).toFixed(2)
      );
      // debugger;
      // this.$parent.total_data.total  -=  cur_total;
      this.$parent.total_data.cart_ids.pop(item.only);
      // debugger
    },
    toggle_checked(cur_checked = this.checked_store) {
      let temp_lists = this.cur_lists;
      temp_lists.forEach(item => {
        if (!cur_checked) {
          if (this.checked_all_only.indexOf(item.only) == -1) {
            this.check_only(item);
          }
        } else {
          this.no_check_only(item);
        }
      });
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
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
    img {
      width: 18px;
      height: 18px;
      object-fit: contain;
      vertical-align: middle;
    }
    span {
      font-size: 14px;
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
      background: url("/static/images/icon/cart/分类 copy 2.png") no-repeat
        center right;
      background-size: 18px auto;
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
</style>
