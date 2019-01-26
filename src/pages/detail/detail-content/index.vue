<template>
  <div class="detail">
    <div class="detail-content"
      v-if="sku">
      <div class="content">
        <div class='goods-des'>
          <div class="img-box">
            <div class="mask-info"
              v-for="(mask_info,index) in sku.show_tag"
              :key="index">
              <div class="mask-icon"
                v-if="mask_info.mask_type===3"
                :style="{'background':'url('+mask_info.mask_bg_image+') no-repeat center center','background-size':'auto 100%'}">
              </div>
            </div>
            <van-swipe>
              <van-swipe-item v-for="(item,index) in sku.img_urls"
                :key="index">
                <img class="goods-img"
                  :src="item"
                  alt=""
                  srcset="">
              </van-swipe-item>
            </van-swipe>
          </div>
          <div class="price-box">
            <p class="price">
              <span class="cur-price">${{cur_goods.group_price}}</span>
              <span class="old-price">${{cur_goods.alone_price}}</span>
            </p>
            <p class="like-number">
              {{sku.bought_num}} bought
            </p>
          </div>
          <div class="icon-box">
            <template v-for="(mask_info,index) in sku.show_tag">
              <img :src="mask_info.mask_bg_image"
                alt=""
                srcset=""
                v-if="mask_info.mask_type!==3"
                :key="index">
            </template>
          </div>
          <div class="goods-info">
            {{sku.title}}
          </div>
        </div>
        <div class='group'
          v-if="group.total">
          <div class="title-box">
            <p class="tips">{{group.total}} open groups. Join!</p>
            <!-- <p class="more"></p> -->
          </div>
          <ul class="item-box">
            <li v-for=" (item,index) in group.data"
              :key="index">
              <div class="info-box">
                <img :src="item.photo"
                  alt=""
                  srcset="">
                <span class="user-name">{{item.username}}</span>
              </div>
              <div class="timer-box">
                <div class="text-des">
                  <p>Only <span class="red-color">{{item.left_num}}</span> more</p>
                  <p>Time left {{item.left_time | timeDiff}}</p>
                </div>
              </div>
              <div v-if="!no_join"
                class="group-box"
                @click="group_buy(item.group_id)">
                <p>JOIN</p>
                <p>GROUP</p>
              </div>
            </li>
          </ul>
        </div>
        <!-- <group v-if="group"
          :group="group"
          :goods="cur_goods"></group> -->
        <!-- <div class="store-box" v-if="store_info.store_id">
          <div class="store-title">
            <p>
              <img :src="store_info.logo"
                alt="">
            </p>
            <p class="store-desc">
              <span>{{store_info.name}}</span>
              <span class="desc-min">{{store_info.desc}}</span>
            </p>
            <p class="store-btn">
              <a href="javascript:;"
                @click="to_store(store_info.store_id)">STORE</a>
            </p>
          </div>
          <ul class="store-account">
            <li>
              <span>{{store_info.comment_rate}}</span>
              <span>Positive Feedback</span>
            </li>
            <li>
              <span>{{store_info.bought_count}}</span>
              <span>Bought</span>
            </li>
          </ul>
        </div> -->
        <detail-store :item="store_info"></detail-store>
        <detail-more v-if="sku"
          :sku="sku"></detail-more>
        <!-- <shipping></shipping> -->
        <review v-if="review"
          :review="review"></review>
        <!-- <detail-welog></detail-welog> -->
        <similar-cate v-if="same_category.data"
          :data-list="same_category.data"></similar-cate>
        <similar-brand v-if="same_brand.data"
          :data-list="same_brand.data"></similar-brand>
      </div>
    </div>
    <detail-pay-btn v-if="cur_goods"
      :group-main-user="group_main_info"
      :sku="sku"
      :goods="goods"
      :cur-goods="cur_goods"
      :attr-list="attr_list"
      :cur_group_id="cur_group_id"
      ref="change_btn"
      class="btn-detail"></detail-pay-btn>
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
import detailMore from "./detail-more.vue";
import detailStore from "./detail-store";
// import shipping from "./shipping.vue";
import review from "./review.vue";
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
    },
    no_join() {
      return this.act_type || this.router_group_id;
    }
  },
  methods: {
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
    to_store(cid) {
      let params = {
        path: "/store",
        query: {
          store_id: cid
        }
      };
      this.$router.push(params);
    },
    get_all_detail(params) {
      let share_params;
      api.detail(params).then(res => {
        console.log(res);
        document.title = res.data.sku.title;
        let temp_data = res.data;
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
    group_buy(cgroup) {
      // console.log(cgroup);
      this.cur_group_id = cgroup;
      // console.log(this.$refs['change_btn']);
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
    detailMore,
    detailStore,
    // shipping,
    review,
    // detailWelog,
    similarBrand,
    similarCate,
    detailPayBtn,
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
  // position: relative;
  flex: 1;
  overflow: auto;
  background-color: #e9e9e9;
  & > div {
    background-color: #fff;
  }
}

.btn-detail {
  margin-top: 30px;
}
.group {
  padding: 20px 20px 30px 20px;
  font-size: 14px;
  // border-bottom: 1px solid #ccc;
}
.info-box {
  display: flex;
  align-items: center;
  width: 40%;
  padding: 0;
  img {
    height: 34px;
    width: 34px;
    border-radius: 50%;
    margin-right: 8px;
  }
  .user-name {
    font-size: 12px;
    width: 65px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.title-box {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 17px;
  padding-bottom: 19px;
  border-bottom: 1px solid #e9e9e9;
  .tips {
    font-weight: bold;
  }
  .more {
    padding-right: 24px;
    background: url(../../../assets/img/icon/right_icon.png) no-repeat right
      center;
  }
}
.item-box {
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e9e9e9;
    padding: 10px 0;
    span,
    img {
      vertical-align: middle;
    }
  }
}
.timer-box {
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  position: relative;
  flex: 1;
  .red-color {
    color: #d70e19;
  }
  .text-des {
    font-size: 12px;
    line-height: 15px;
    flex: 1;
    display: flex;
    text-align: right;
    flex-direction: column;
    justify-content: center;
    p {
      text-align: right;
    }
    // span {
    //   vertical-align: middle;
    // }
  }
}
.group-box {
  font-size: 10px;
  line-height: 12px;
  padding: 3px 10px;
  text-align: center;
  background-color: #d70e19;
  color: #fff;
  font-size: 10px;
  line-height: 14px;
  border-radius: 20px;
  margin-left: 10px;
}
.goods-des {
  background-color: #fff;
   border-bottom: 10px solid #f8f8f8;
   padding-bottom: 16px;
  & > div {
    padding: 0 20px;
  }
  .img-box {
    position: relative;
    .mask-info {
      position: absolute;
      right: 10px;
      bottom: 10px;
      width: 80px;
      height: 80px;
      z-index: 10;
      // border-radius: 50%;
      // overflow: hidden;
      .mask-icon {
        height: 100%;
        width: 100%;
        // background: url('') no-repeat center center;
        background-size: auto 100%;
        border-radius: 50%;
        overflow: hidden;
        font-size: 12px;
        line-height: 13px;
        color: #fff;
        text-align: center;
        .hot {
          margin: 22px auto;
        }
        .new {
          margin: 15px auto;
        }
        .off {
          margin: 8px auto;
        }
        .mask-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
.goods-img {
  width: 100%;
  height: 364px;
  object-fit: cover;
}
.icon-box {
  font-size: 0;
  cursor: pointer;
  height: 18px;
  // margin-bottom: 18px;
  overflow: hidden;
  margin: 15px 0;
  padding: 0;
  img {
    margin-right: 10px;
    height: 18px;
    width: auto;
  }
}
.goods-info {  
  font-size: 16px;
  line-height: 20px;
  color: #4a4a4a;
}
.price-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0;
  margin-top: 15px;
  .cur-price {
    color: #000000;
    font-size: 26px;
    font-weight: bold;
  }
  .old-price {
    color: #898989;
    font-size: 14px;
    text-decoration-line: line-through;
    padding-left: 16px;
  }
  .like-number {
    font-size: 14px;
    color: #9b9b9b;
  }
}
.tag-box {
  font-size: 0;
  p {
    font-size: 14px;
    line-height: 20px;
  }
  li {
    font-size: 12px;
    display: inline-block;
    padding: 7px 15px;
    border: 1px solid #979797;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .active {
    border: 2px solid #000;
  }
}
</style>
