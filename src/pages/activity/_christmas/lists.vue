<template>
  <div class="goods-lists"
    v-if="show_home">
    <div class="lists-header">
      <img src="/static/img/christmas/主题.png">
    </div>
    <div class="all-activity">
      <ul>
        <li v-for="(item,index) in goods_lists"
          :key="index"
          @click="to_during(item.id)">
          <!-- <img :src="item.url" alt=""> -->
          <img :src="item.image">
        </li>
      </ul>
    </div>
    <btn-box v-show="show_btn_box"
      @close="close_href">
      <template>
        <p slot="dialog-desc"
          class="tips-text">You’re almost done.<br /> Share!
        </p>
        <span slot="btn-top"
          @click="share_type(1)"
          class="tips-btns">
          <img src="/static/img/christmas/矢量智能对象@2x_38.png"
            alt="Facebook">
        </span>
        <span slot="btn-buttom"
          @click="share_type(2)"
          class="tips-btns">
          <img src="/static/img/christmas/矢量智能对象@2x.png"
            alt="Messenger">
        </span>
      </template>
    </btn-box>
  </div>
</template>

<script>
import { getToken } from "@/utils/auth";
import api from "@/api/christmas";
import share from "@/api/share";
import btnBox from "./components/dialog-btn";
import shareBox from "./components/share-btn";
export default {
  name: "",
  data() {
    return {
      goods_lists: [],
      show_home: false,
      show_btn_box: false,
      share_info: {},
      share_params: {}
    };
  },
  created() {
    this.init_data();
  },
  computed: {},
  methods: {
    init_data() {
      if (getToken()) {
        api.init_status().then(res => {
          this.$set(this.share_params, "user_name", res.data.user_name);
          this.$set(this.share_params, "id", res.data.id);
          this.$set(this.share_params, "share_type", 5);
          if (res.data.status !== 0 && !this.$route.query.try) {
            this.$router.replace({ name: "christmas-during" });
          } else {
            this.show_home = true;
            // this.show_home = true;
          }
        });
      } else {
        this.show_home = true;
      }
      api.init_lists({ type: 2 }).then(res => {
        console.log(res);
        this.goods_lists = res.data;
      });
    },
    to_during(cid) {
      api
        .add_sku({ id: cid })
        .then(res => {
          // console.log(res);
          if (window.weget_mobile_type === "iOS") {
            this.show_btn_box = true;
          } else {
            this.$router.replace({ name: "christmas-during" });
          }
          return res;
        })
        .then(() => {
          share.getShareInfo(this.share_params).then(res => {
            console.log(res);
            this.share_info = res.data;
            // this.show_btn_box = true;
          });
        });
    },
    share_type(type) {
      let params;
      if (type === 1) {
        params = {
          type: 107,
          data: this.share_info
        };
      } else {
        params = {
          //108 分享内容到Messenger
          type: 108,
          data: this.share_info
        };
      }
      window.webkit.messageHandlers.javaScriptToNative.postMessage(params);
    },
    close_href() {
      let params = {
        path: "/activity/christmas-during",
        // query: this.share_params
      };
      this.$router.replace(params);
    }
  },
  components: {
    btnBox
  }
};
</script>

<style lang='scss' scoped>
.goods-lists {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 100%;
  // height: 920px;
  height: 100%;
  padding: 0 20px 30px 20px;
  overflow: auto;
  font-size: 0;
  background: url("/static/img/christmas/列表页背景.jpg") no-repeat top center;
  background-size: 100% 100%;
  img {
    width: 100%;
    height: auto;
  }
}
.lists-header {
  position: relative;
}
.all-activity {
  flex: 1;
  overflow: auto;
  img {
    width: 100%;
    height: auto;
  }
}
.tips-btns {
  margin: 10px auto;
  img {
    height: 40px;
    width: auto;
  }
}
</style>
