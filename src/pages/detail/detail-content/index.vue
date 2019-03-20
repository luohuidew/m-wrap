<template>
  <div class="detail">
    <div class="detail-content"
      v-if="sku">
      <div class="content">
        <detail-cover :sku-data="sku"
          :goods-data="cur_goods"></detail-cover>
        <!-- <detail-group :group-data="group"
          @change="join_group"></detail-group> -->
        <section class="select-box">
          <detail-coupon></detail-coupon>
          <detail-shipping :all-data="all_data"></detail-shipping>
          <detail-attr v-if="cur_goods"
            :sku="sku"
            :goods="goods"
            v-on:show_dialog_show = 'show_dialog = true'
            :cur-goods="cur_goods"
            :attr-list="attr_list"></detail-attr>
        </section>
        <detail-store :item="store_info"></detail-store>
        <detail-more v-if="sku"
          :sku="sku"></detail-more>
        <shipping :sku-data="sku"></shipping>
        <review v-if="review"
          :review="review"></review>
        <!-- <similar-brand v-if="same_brand.data"
          :data-list="same_brand.data"></similar-brand> -->
        <similar-cate v-if="same_category.data"
          :data-list="same_category.data"></similar-cate>
      </div>
    </div>

    <!-- <detail-cover :sku-data="sku" :goods-data="cur_goods"></detail-cover> -->
    <detail-pay-btn v-if="cur_goods"
      :group-main-user="group_main_info"
      :sku="sku"
      :goods="goods"
      :cur-goods="cur_goods"
      :attr-list="attr_list"
      :cur_group_id="cur_group_id"
      ref="change_btn"
       v-on:show_dialog_show = 'show_dialog = true'
      class="btn-detail"></detail-pay-btn>
    <attr-dialog v-if="show_dialog"
                 @close="close_emity"
                 :sku="sku"
                 :goods="goods"
                 :attr-list="attr_list"
                 :cur-goods="cur_goods">
    </attr-dialog>
    <!-- <attr-dialog v-if="show_dialog"
      @close="close_emity"
      :sku="sku"
      :goods="goods"
      :attr-list="attrList"
      :cur-goods="curGoods"></attr-dialog> -->
    <share-app :token="share_token"
      v-if="share_token"></share-app>
    <!-- <share-app v-else></share-app> -->
  </div>
</template>

<script>
// import { vantSwipe, vantSwipeItem } from "vant";
import shareApp from "@/components/dialog/share-app";
// import goodsDes from "./goods-des.vue";
// import group from "./group.vue";
import detailAttr from "./detailAttr";
import detailCoupon from "./detailCoupon";
import detailShipping from "./detailShipping";
import detailGroup from "./detail-group";
import detailCover from "./detail-cover";
import detailMore from "./detail-more.vue";
import detailStore from "./detail-store";
import shipping from "./shipping.vue";
import review from "./review.vue";
/* jianjiagouweuche de zujian  */
import attrDialog from "@/components/dialog/attr-dialog";
// import detailWelog from "./detail-welog.vue";
import similarBrand from "./similar-brand";
import similarCate from "./similar-cate";
import detailPayBtn from "../detail-pay-btn.vue";
import api from "@/api/product";
import share from "@/api/share";
import pay from "@/api/pay";
export default {
  name: "detail",
  metaInfo() {
    return {
      meta: [
        { property: "og:title", content: "weget" },
        { property: "og:title", content: this.meta_info.title },
        { property: "og:description", content: this.meta_info.description },
        { property: "og:url", content: this.meta_info.share_url },
        { property: "og:image", content: this.meta_info.image_url }
      ]
    };
  },
  data() {
    return {
      show_dialog: false,
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
      act_type: this.$route.query.act_type
    };
  },
  beforeRouteLeave(to, from, next) {
    let title =
      "Weget.com | Beauty & fashion at group discount prices everyday";
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
    close_emity() {
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
          // console.log(res);
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
        console.log(res);
        document.title = res.data.sku.title;
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
      console.log(cgroup);
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
    detailGroup,
    shipping,
    review,
    // detailWelog,
    similarBrand,
    similarCate,
    detailPayBtn,
    attrDialog,
    shareApp
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
</style>
