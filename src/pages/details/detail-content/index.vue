<template>
  <div class="detail">
    <div class="detail-content"
      v-if="sku">
      <div class="content">
        <detail-store :item="store_info"></detail-store>

        <detail-cover :storeData="store_info" :sku-data="sku"
          :goods-data="cur_goods"></detail-cover>
        <section class="select-box">
          <detail-coupon v-if="all_data.is_show_coupon===1"
            @toggle="show_coupon=true"></detail-coupon>
          <detail-shipping @toggle="show_shipping=true"
            :all-data="all_data"></detail-shipping>
          <detail-attr v-if="cur_goods"
            :sku="sku"
            :goods="goods"
            v-on:show_dialog_show='show_dialog = true'
            :cur-goods="cur_goods"
            :attr-list="attr_list"></detail-attr>
        </section>

        <detailaddCart
          v-if="cur_goods" @carting="to_cart"
          :group-main-user="group_main_info"
          :sku="sku"
          :goods="goods"
          :cur-goods="cur_goods"
          :attr-list="attr_list"
          :cur_group_id="cur_group_id"
          ref="change_btn"
          v-on:show_dialog_show='show_dialog = true'></detailaddCart>

        <detail-more v-if="sku"
          :sku="sku"></detail-more>

        <details-shop :item="store_info" v-if="store_recommend.data"
                      :data-list="store_recommend.data"></details-shop>

        <div class="pay">
          <span class="name">Payments</span>
          <div class="top">
            <img src="/static/images/icon/detail/锁复制@2x.png" alt="">
            <span>Secure options</span>
          </div>
          <div class="paylist">
            <img src="/static/images/icon/detail/paypal@2x.png" alt="">
            <img src="/static/images/icon/detail/visa@2x.png" alt="">
            <img src="/static/images/icon/detail/mastercard@2x.png" alt="">
            <img src="/static/images/icon/detail/american@2x.png" alt="">
            <img src="/static/images/icon/detail/discover@2x.png" alt="">
          </div>
          <span class="payInfo">WeGet keeps your payment information secure. WeGet shops never receive your credit card information.</span>
          <span v-if="payisInfo" class="payInfos">I accept credit cards, debit/bank cards.</span>
          <span v-if="payisInfo"  class="payInfos">Please note that New Jersey orders will be charged sales tax (7%)</span>
          <span class="more" @click="more">{{payisInfo==false?'+ More':'- Less'}}</span>
        </div>
        <!--<detailsShop></detailsShop>-->

        <review v-if="review"
          :review="review"></review>
        <similar-cate v-if="weget_recommend.data"
          :data-list="weget_recommend.data"></similar-cate>

        <div class="footer">
          <img src="/static/images/icon/detail/wegets.jpg" alt="">
          <div class="store">
            <a target="_blank" href = "https://itunes.apple.com/us/app/weget-fashion-marketplace/id1439887303?mt=8">
              <img src="/static/images/icon/detail/编组@2x.png"  />
            </a>
            <a  target="_blank" href = "https://play.google.com/store/apps/details?id=com.weget.www">
              <img src="/static/images/icon/detail/Google Play Badge US Copy@2x.png" />
            </a>
          </div>
          <br>
          <div class="about_row1">
            <p class="bold">Follow us</p>
            <p>
              <a href="https://www.facebook.com/wegetofficial">
                <img src="/static/images/icon/detail/f@3x.png">
              </a>
              <a href="https://www.instagram.com/shopweget">
                <img src="/static/images/icon/detail/ins@3x.png">
              </a>
              <a href="https://www.youtube.com/channel/UCJ2SmCasimMk8TCHxloaMtA">
                <img src="/static/images/icon/detail/Shape@3x.png">
              </a>
            </p>
            <br>
            <p class="bold">ABOUT</p>
            <p>
              <router-link to="/about" class="btn" tag="p">
                About Us
              </router-link>
            </p>
            <router-link to="/statement" tag="p">
              Privacy Policy
            </router-link>
            <p><img class="question" src="/static/images/icon/detail/question.png" height="15" /> Need help？Visit the <a class="email" href="mailto:service@weget.com">help center</a></p>
          </div>
        </div>
      </div>
    </div>

    <!-- <detail-cover :sku-data="sku" :goods-data="cur_goods"></detail-cover> -->
    <detail-pay-btn :cartAnimate="cartAnimate" v-if="cur_goods" @carting="to_cart"
      :group-main-user="group_main_info"
      :sku="sku"
      :goods="goods"
      :cur-goods="cur_goods"
      :attr-list="attr_list"
      :cur_group_id="cur_group_id"
      ref="change_btn"
      v-on:show_dialog_show='show_dialog = true'
      class="btn-detail"></detail-pay-btn>

    <attr-dialog v-if="show_dialog" @carting="to_cart"
      @close="close_emity"
      :sku="sku"
      :goods="goods"
      :attr-list="attr_list"
      :cur-goods="cur_goods">
    </attr-dialog>
    <!--<share-app :token="share_token"-->
      <!--v-if="share_token"></share-app>-->
    <van-popup v-model="show_coupon"
      position="bottom"
      :overlay="true">
      <detail-coupon-dialog @close="show_coupon=false"></detail-coupon-dialog>
    </van-popup>
    <van-popup v-model="show_shipping"
      position="bottom"
      :overlay="true">
      <shipping-dialog v-if="all_data"
        :shipping-data="all_data.shipment"
        @close="show_shipping=false"></shipping-dialog>
    </van-popup>
  </div>
</template>

<script>

import shareApp from "@/components/dialog/share-app";
import detailAttr from "./detailAttr";
import detailaddCart from "./detail-addCart";
import detailCoupon from "./detailCoupon";
import detailShipping from "./detailShipping";
import detailCover from "./detail-cover";
import detailMore from "./detail-more.vue";
import detailStore from "./detail-store";
import detailsShop from "./detail-shop";
import review from "./review.vue";
import addcartAntion from "@/components/addcart-antion";
/* jianjiagouweuche de zujian  */
import attrDialog from "@/components/dialog/attr-dialog";
import detailCouponDialog from "./detailCoupon/components/detailCouponDialog";
import shippingDialog from "./detailShipping/components/shippingDialog";
// import detailWelog from "./detail-welog.vue";
import similarCate from "./similar-cate";
import detailPayBtn from "../detail-pay-btn.vue";
import addPayBtn from "../detail-pay-btn.vue";
import api from "@/api/product";
import share from "@/api/share";
import pay from "@/api/pay";

export default {
  name: "detail",
  // metaInfo() {
  //   return {
  //     meta: [
  //       { property: "og:title", content: "weget" },
  //       { property: "og:title", content: this.meta_info.title },
  //       { property: "og:description", content: this.meta_info.description },
  //       { property: "og:url", content: this.meta_info.share_url },
  //       { property: "og:image", content: this.meta_info.image_url }
  //     ]
  //   };
  // },
  data() {
    return {
      show_dialog: false,
      show_shipping: false,
      show_coupon: false,
      all_data: undefined,
      goods: undefined,
      group: undefined,
      review: undefined,
      sku: undefined,
      attr_list: undefined,
      cur_goods: undefined,
      pay_number: 1,
      cur_type: 1,
      cur_group_id: undefined,
      store_info: undefined,
      group_main_info: undefined,
      meta_info: {
        title: "",
        description: "",
        share_url: "",
        image_url: ""
      },
      same_brand: undefined,
      same_category: undefined,
      router_group_id: undefined,
      share_token: "",
      act_type: this.$route.query.act_type,
      cartAnimate:'',
      payisInfo:false,
      moreName:['- Less','+ More']
    };
  },
  beforeRouteLeave(to, from, next) {
    let title = "Weget.com | stylish online fashion marketplace";
    document.title = title;
    next();
  },
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {
    submit_info() {
      let params = {
        goods_id: this.cur_goods.goods_id,
        num: this.pay_number,
        purchase_type: this.cur_type,
        group_id: this.cur_group_id
          ? this.cur_group_id
          : this.this.router_group_id
      };
      return params;
    }
    // no_join() {
    //   return this.act_type || this.router_group_id;
    // }
  },
  methods: {
    //支付更多
    more(){
      this.payisInfo=!this.payisInfo
    },
    to_cart(e){
      this.cartAnimate=e
    },
    close_emity(e) {
      this.show_dialog = false;
    },
    init_data() {
      /* you hsare-tomken进这里 */
      let share_token = this.$route.query.share_token;
      this.router_group_id = this.$route.query.group_id;
      if (share_token) {
        let params = {
          device_type: "wap",
          share_token: share_token
        };
        this.$store.state.share_token = share_token;
        share.transform(params).then(res => {
          this.get_all_detail({ sku_id: res.data.sku_id });
        });
      } else {
        /* 没有sharetoken进这里 */
        let params = {
          // sku_id: 3942747914864272
          sku_id: this.$route.query.sku_id,
          group_id: this.router_group_id
        };
        this.get_all_detail(params);
      }
    },
    // to_store(cid) {
    //   let params = {
    //     path: "/store",
    //     query: {
    //       store_id: cid
    //     }
    //   };
    //   this.$router.push(params);
    // },
    get_all_detail(params) {
      let share_params;

      api.detail(params).then(res => {
        document.title = res.data.sku.title;
        if(res.data.user.photo){
          sessionStorage.setItem('photo',res.data.user.photo)
        }
        // this.$route.query.page_label = res.data.sku.title;
        let temp_data = res.data;
        this.all_data = res.data;
        for (let key in temp_data) {
          this[key] = temp_data[key];
        }
        this.cur_goods = res.data.goods[0];
        share_params = {
          sku_id: res.data.sku.sku_id,
          share_type: 2
        };
        let that = this;

        share.getShareInfo(share_params).then(res => {
          let share_token = res.data.share_token;
          // this.$store.state.share_token = share_token;
          this.$store.commit("set_share_token", share_token);
          console.log(this.$store.state.share_token);
          this.share_token = share_token;
          for (var key in res.data) {
            // debugger;
            that.meta_info[key] = res.data[key];
          }
        });
      });
    },
    go_pay(type, group_id) {
      this.cur_type = type;
      this.cur_group_id = group_id;
      let query = {};

      for (var key in this.submit_info) {
        query[key] = this.submit_info[key];
      }
      // debugger;
      pay.create_order(this.submit_info).then(res => {});
      let params = {
        path: "/pay",
        query: query
      };
      if (params.query.num) {
        this.$router.push(params);
      }
    },
    join_group(cgroup) {
      this.cur_group_id = cgroup;
      this.$refs["change_btn"].close_tips(2, cgroup);
    },
    get_cur_goods(data) {
      this.cur_goods = data;
    },
    get_number(data) {
      this.pay_number = data;
    }
  },
  components: {
    // "vant-swipe": vantSwipe,
    // "vant-swipe-item": vantSwipeItem,
    // goodsDes,
    // group,
    detailCover,
    detailAttr,
    detailCoupon,
    detailShipping,
    detailMore,
    detailStore,
    review,
    // detailWelog,
    similarCate,
    detailPayBtn,
    attrDialog,
    detailCouponDialog,
    shippingDialog,
    shareApp,
    detailaddCart,
    addcartAntion,
    detailsShop,
    addPayBtn
  }
};
</script>

<style lang='scss' scoped>
.detail {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.detail-content {
  flex: 1;
  overflow: auto;
}
.select-box {
  padding: 0 20px;
}
  .pay{
    border-bottom: 8px solid #f8f8f8;
    padding: 15px;
    .name{
      font-weight: bold;
      font-size:  16px;
      color: #000;
      margin-bottom: 10px;
      display: block;
    }
    .top{
      img{
        width: 14px;
        height: 14px;
        vertical-align: middle;
      }
      span{
        font-size: 12px;
        font-weight: bold;
        vertical-align: middle;
        margin-left: 5px;
      }
      margin-bottom: 15px;
    }
    .paylist{
      img{
        display: inline-block;
        margin-right: 9px;
        width: 46px;
        height: 31px;
      }
    }
    .payInfo,.payInfos{
      font-size: 12px;
      color: #000;
      line-height: 20px;
      display: block;
      margin-top: 10px;
    }
    .payInfos{
      margin-top: 20px;
    }
    .more{
      display: block;
      font-size: 16px;
      font-weight: bold;
      margin-top: 13px;
      text-decoration: underline;
    }
  }
  .footer{
    background: #f8f8f8;
    .question{
      width: 15px;
      height: 15px;
      display: inline;
    }
    img{
      width: 100%;
      display: block;
    }
    .store {
      padding: 5px 5px;
      display: flex;
      margin-top: 20px;
      justify-content: space-around;
      a{
        width: 40%;
        display: inline-block;
        height: 40px;
        img {
          width: 100%;
        }
      }

    }
    div.about_row1 {
      padding-bottom: 30px;
      p {
        text-align: center;
        margin-top: 15px;
        font-size:12px;
        font-weight:400;
        color:rgba(0,0,0,1);
        &.bold{
          font-size:16px;
          font-weight:800;
          color:rgba(0,0,0,1);
        }
        a.email {
          margin: 0px;
          font-weight:800;
          text-decoration: underline;
        }
        a {
          display: inline-block;
          margin: 0 15px;
          img {
            width: auto;
            height: 20px;
          }
        }
      }
    }
  }
</style>
