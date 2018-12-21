<template>
  <div class="share-page"
    v-if="order">
    <div class="share-page-content">
      <div class="header-banner">
        <img v-if="is_join"
          src="/static/img/elements/group-wait.jpg"
          alt="">
        <img v-else
          src="/static/img/elements/group-success.jpg"
          alt="">
      </div>
      <card :order="order"></card>
      <div class="group-box"
        v-if="sku.cur_goods">
        <template v-if="order">
          <wait :order="order"
            v-if="is_join"
            @change="alert_group"></wait>
          <success v-else
            :order="order"
            :recommended-group="recommended_group"
            @change="alert_group"></success>
          <p class="cor-btn">
            <a href="javascript:;"
              @click="show_share">
              SHARE
            </a>
          </p>
        </template>
      </div>
      <rules></rules>
      <premium v-if="!is_join"
        :goods-info="similar"></premium>
      <div class="footer-banner">
        <img src="https://we-get.s3.us-west-1.amazonaws.com/7828141095bc874ab133e8.gif"
          alt=""
          srcset="">
      </div>
      <temp-dialog v-if="show_temp"
        @close="close_temp">
        <div class="share-tips"
          slot="tips">
          <div class="tips-img">
            <img src="/static/img/elements/Artboard 2@2x.png"
              alt="">
          </div>
          <div class="tips-content">
            <p v-if="show_catch.flag">{{show_catch.content}}</p>
            <template v-if="is_success_back==='true'">
              <p>Final Step</p>
              <p class="min-height">Invite your friends to join group</p>
            </template>           
          </div>
        </div>
      </temp-dialog>
      <!-- <temp-dialog v-if="show_catch.flag">
      <p slot="tips">{{show_catch.content}}</p>
    </temp-dialog> -->
    </div>
    <div class="attr-position">
      <attr-dialog v-if="show_attr"
        :goods="sku.goods"
        :attr-list="sku.attrList"
        :cur-goods="sku.cur_goods"
        :sku="sku.sku_detail"
        @close="close_dialog"></attr-dialog>
    </div>
    <share-app></share-app>
  </div>
</template>

<script>
import shareApp from '@/components/dialog/share-app'
import { getToken } from "@/utils/auth";
import tempdialog from "@/components/dialog/temp-dialog";
import attrdialog from "@/components/dialog/attr-dialog";
import premium from "@/components/premium";
import card from "./goods-card";
import rules from "./rules";
import wait from "./wait";
import success from "./success";
import api from "@/api/share";
import sku from "@/api/product";
export default {
  name: "",
  metaInfo() {
    return {
      meta: [
        { property: "og:title", content: "weget" },
        { property: "og:title", content: this.title },
        { property: "og:description", content: this.description },
        { property: "og:url", content: this.share_url },
        { property: "og:image", content: this.image_url }
      ]
    };
  },
  // metaInfo: {
  //   // title will be injected into parent titleTemplate
  //   title: "About Us",
  //   meta: [
  //     { charset: 'utf-8' },
  //     { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  //   ]
  // },
  data() {
    return {
      order: undefined,
      recommended_group: undefined,
      share: undefined,
      group_user: [],
      pageName: "",
      show_temp: false,
      show_attr: false,
      sku: {},
      submit_data: {
        purchase_type: 2,
        group_id: undefined
      },
      show_catch: {
        flag: false,
        content: ""
      },
      similar: undefined
    };
  },
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {
    is_success_back() {
      return sessionStorage.getItem("success_back");
    },
    is_join() {
      return this.order.group_buy.status === 1 ? true : false;
    }
  },
  methods: {
    get_detail() {},
    init_data(parmas) {
      if (this.$route.query.share_token) {
        let share_token = this.$route.query.share_token;
        let params = {
          device_type: "wap",
          share_token: share_token
        };
        this.$store.state.share_token = share_token;
        api.transform(params).then(res => {
          console.log(res);
          let params = { order_no: res.data.order_no };
          this.get_group_info(params);
        });
      } else {
        let params = { order_no: this.$route.query.order_no };
        this.get_group_info(params);
      }
      // this.$CM.share_data(share);
    },
    get_group_info(params) {
      api.group(params).then(res => {
        this.order = res.data.order;
        this.group_user = res.data.order.group_user;
        this.recommended_group = res.data.recommended_group;
        let share = res.share_info;
        for (var key in share) {
          this[key] = share[key];
        }

        let sku_params = { sku_id: res.data.order.sku_id };
        this.get_sku_info(sku_params);
        // this.pageName = "hello";
        if (this.is_success_back === "true") {
          this.show_temp = true;
        }
        let share_meta = {
          share_type: 1,
          order_no: res.data.order.order_no
        };
        // api.getShareInfo(share_meta).then(res => {
        //   console.log(res);
        // });
      });
    },
    get_sku_info(params) {
      sku.detail(params).then(res => {
        console.log(res);
        this.$set(this.sku, "sku_detail", res.data.sku);
        this.$set(this.sku, "goods", res.data.goods);
        this.$set(this.sku, "attrList", res.data.attr_list);
        this.$set(this.sku, "cur_goods", res.data.goods[0]);
      });
      sku.get_similar(params).then(res => {
        console.log(res);
        this.similar = res.data;
      });
    },
    close_temp() {
      console.log(666);
      this.show_temp = false;
      this.show_catch.flag = false;
    },
    show_share() {
      this.show_temp = true;
    },
    close_dialog(data) {
      this.show_attr = false;
      if (data.code === 2209) {
        this.show_temp = true;
        this.show_catch.flag = true;
        this.show_catch.content = data.message;
      }
    },
    alert_group(data) {
      if (getToken()) {
        this.submit_data.group_id = data.group_id;
        this.show_attr = true;
        console.log(data);
      } else {
        let redirect_params = {
          path: "/login",
          query: {
            redirect: window.location.href
          }
        };
        this.$router.push(redirect_params);
      }
    }
  },
  components: {
    card,
    rules,
    wait,
    success,
    "temp-dialog": tempdialog,
    "attr-dialog": attrdialog,
    premium,
    shareApp
  }
};
</script>

<style lang='scss' scoped>
.share-page {
  display: flex;
  flex-direction: column;
  .share-page-content {
    height: 100%;
    width: 100%;
    overflow: auto;
  }
  .attr-position{
    flex:1;
    position: relative;
  }

}
.group-box {
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    p,
    li {
      text-align: center;
    }
  }
}
.cor-btn {
  padding: 10px 0 10px 0;
  background-color: #fff;
  text-align: center;
  a {
    display: inline-block;
    width: 60%;
    height: 40px;
    background: rgb(0, 0, 0);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    &:hover {
      opacity: 0.8;
    }
  }
}
.share-tips {
  text-align: right;
  padding-top: 42px;
  padding-right: 24px;
  .tips-img {
    text-align: right;
    img {
      // display: block;
      // width: 74px;
      width: auto;
      height: 58px;
    }
  }
  .tips-content {
    padding: 12px 20px;
    text-align: left;
  }
  p {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    padding-top: 10px;
  }
  .min-height {
    padding-top: 4px;
  }
}
.header-banner,
.footer-banner {
  img {
    width: 100%;
    height: auto;
  }
}
</style>
