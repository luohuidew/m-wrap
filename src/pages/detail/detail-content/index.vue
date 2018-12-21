<template>
  <div class="detail">
    <div class="detail-content"
      v-if="sku">
      <div class="content">
        <div class='goods-des'>
          <div class="img-box">
            <!-- <div class="mask-info">
              <div class="mask-icon"
                v-if="sku.mask_info.mask_title"
                :style="{'background':'url('+sku.mask_info.mask_bg_image+') no-repeat center center','background-size':'auto 100%'}">
                <div :class="{'hot':sku.mask_info.mask_type===1,'new':sku.mask_info.mask_type===2,'off':sku.mask_info.mask_type===3}">
                  <p v-html="discount_text"></p>
                </div>
              </div>
            </div> -->
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
          <div class="goods-info">
            {{sku.title}}
          </div>
          <div class="price-box">
            <p class="price">
              <span class="cur-price">${{cur_goods.alone_price}}</span>
              <span class="old-price">${{cur_goods.market_price}}</span>
            </p>
            <p class="like-number">
              {{sku.bought_num}} bought
            </p>
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
              <div v-if="!router_group_id"
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
        <detail-more v-if="sku"
          :sku="sku"></detail-more>
        <!-- <shipping></shipping> -->
        <review v-if="review"
          :review="review"></review>
        <!-- <detail-welog></detail-welog> -->
        <!-- <similar ></similar> -->
      </div>
    </div>
    <detail-pay-btn v-if="cur_goods"
      :group-main-user="group_main_info"
      :sku="sku"
      :goods="goods"
      :cur-goods="cur_goods"
      :attr-list="attr_list"
      :cur_group_id="cur_group_id"
      ref="change_btn"></detail-pay-btn>
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
// import shipping from "./shipping.vue";
import review from "./review.vue";
// import detailWelog from "./detail-welog.vue";
// import similar from "./similar.vue";
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
      group_main_info: undefined,
      meta_info: {
        title: "",
        description: "",
        share_url: "",
        image_url: ""
      },
      router_group_id: undefined,
      share_token: ""
    };
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
    get_all_detail(params) {
      let share_params;
      api.detail(params).then(res => {
        console.log(res);
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
    // shipping,
    review,
    // detailWelog,
    // similar,
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

.group {
  padding: 20px 20px 30px 20px;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
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
  margin-bottom: 10px;
  & > div {
    padding: 10px 20px 0 20px;
  }
  .img-box {
    padding: 0;
    .mask-icon {
      height: 100%;
      width: 100%;
      // background: url('') no-repeat center center;
      background-size: auto 100%;
      border-radius: 50%;
      overflow: hidden;
      font-size: 12px;
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
    }
  }
}
.goods-img {
  width: 100%;
  height: 364px;
  object-fit: cover;
}
.goods-info {
  // max-width: 85%;
  //   max-height: 65px;
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
}
.price-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0;
  .cur-price {
    color: #d80c18;
    font-size: 26px;
    font-weight: bold;
  }
  .old-price {
    color: #9b9b9b;
    font-size: 16px;
    text-decoration-line: line-through;
    padding-left: 10px;
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
