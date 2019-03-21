<template>
  <div>
    <div class="footer-buy">
      <ul>
        <li class="get-coupon"
          @click="show_coupon_dialog=true">
          <div class="content">
            <img src="/static/images/icon/cart/搜索 copy 2@3x.png"
              alt="">
            <span>Get Weget Coupon</span>
          </div>
        </li>
        <li class="to-buy">
          <div class="total-box">
            <p class="total-desc">Total:</p>
            <p class="total-price">
              <span class="color-red">${{total_price.toFixed(2)}}</span>
            </p>
          </div>
          <div class="buy-btn"
            @click="to_pay">
            Buy ({{update_count.length}})
          </div>
        </li>
      </ul>
    </div>
    <div class="hidden-box">
      <van-popup v-model="show_coupon_dialog"
        position="bottom"
        :overlay="true">
        <detail-coupon-dialog @close="show_coupon_dialog=false"></detail-coupon-dialog>
      </van-popup>
    </div>
  </div>
</template>

<script>
import CART from "@/api/cart";
import detailCouponDialog from "@/pages/detail/detail-content/detailCoupon/components/detailCouponDialog";
export default {
  name: "",
  props: {
    totalData: {
      type: Array,
      default: []
    },
    goodsData: {
      type: Array,
      default: []
    },
    totalPrice: {
      type: Object,
      default: {
        total: 0
      }
    }
  },
  data() {
    return {
      show_coupon_dialog:false,
      update_count: [],
      total_price: 0
    };
  },
  watch: {
    totalData: {
      handler(cur, old) {
        let init_number = 0;
        this.update_count = [];
        cur.forEach(item => {
          item.checked_all_item.forEach(item1 => {
            this.update_count.push({
              only: item1.only,
              count: item1.count
            });
            init_number += Number(item1.count) * Number(item1.goods_price);
          });
        });
        this.total_price = init_number;
      },
      deep: true
    }
  },
  computed: {
    // all_store_is_select() {
    //   let temp_boolean = false;
    //   let equal =
    //     this.totalData.length === this.goodsData.length &&
    //     this.totalData.length > 0;
    //   if (equal) {
    //     temp_boolean = this.totalData.every(item => {
    //       return item.checked_store === true;
    //     });
    //   }
    //   return temp_boolean;
    // }
  },
  created() {},
  methods: {
    to_pay() {
      let params = {
        data: this.update_count
      };
      // let params = JSON.parse(JSON.stringify(this.update_count));
      CART.updateCount(params)
        .then(res => {
          let path_params = {
            path: "/checkout",
            query: {
              cart_ids: this.totalPrice.cart_ids.toString()
            }
          };
          if (this.totalPrice.cart_ids.toString()) {
            // this.$router.push(path_params);
            window.location.href = `${window.location.origin}/checkout?cart_ids=${path_params.query.cart_ids}`;
          }
        })
        .catch(res => {
          // debugger;
        });
    },
    toggle_checked(cur_checked) {
      // let temp_lists = this.cur_lists;
      // temp_lists.forEach(item => {
      //   if (!cur_checked) {
      //     this.check_only(item);
      //   } else {
      //     this.no_check_only(item);
      //   }
      // });
    },
    remove_group(ids) {
      let params = {
        only: ids
      };
      CART.delShopCartGood(params).then(res => {
        this.$parent.$parent.init_data();
      });
    }
  },
  components: {
    detailCouponDialog
  }
};
</script>

<style lang='scss' scoped>
/* 优惠券领取入口 */
.footer-buy {
  height: 90px;
  .get-coupon {
    height: 40px;
    border-top: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
    padding-left: 20px;
    padding-right: 20px;
    vertical-align: middle;
    img {
      height: 18px;
      width: auto;
    }
    span {
      font-size: 14px;
      padding-left: 10px;
    }
    .content {
      display: flex;
      align-items: center;
      height: 100%;
      background: url("/static/images/icon/cart/分类 copy@3x.png") no-repeat
        right center;
      background-size: auto 18px;
    }
  }
}
/* 计算总价 */
.to-buy {
  display: flex;
  justify-content: space-between;
  height: 50px;
  .total-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    .total-desc {
      font-size: 12px;
    }
    .total-price {
      font-size: 18px;
      font-weight: bold;
    }
  }
  .buy-btn {
    width: 140px;
    font-size: 16px;
    color: #ffffff;
    background-color: #d70e19;
    line-height: 50px;
    text-align: center;
  }
}
</style>
