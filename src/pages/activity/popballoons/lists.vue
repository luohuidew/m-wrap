<template>
  <div class="goods-lists"
    v-if="show_home">
    <div class="lists-header">
      <img src="/static/img/christmas/icon/主题@2x_fav.png">
      <div class="rules-tips-box">
        <ac-rules @open="is_rules_show=true"></ac-rules>
      </div>
    </div>
    <div class="all-activity">
      <ul>
        <li v-for="(item,index) in goods_lists"
          :key="index"
          @click="to_detail(item.id)">
          <!-- <img :src="item.url" alt=""> -->
          <img :src="item.image">
        </li>
      </ul>
    </div>
    <!-- <btn-box v-show="show_btn_box"
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
    </btn-box> -->
    <rules v-if="is_rules_show"
      @close="is_rules_show=false"></rules>
    <no-repeat v-if="show_repeat"></no-repeat>
  </div>
</template>

<script>
import acRules from "./components/ac-rules";
import noRepeat from "./components/no-repeat";
import rules from "./components/dialog-rules";
import { getToken } from "@/utils/auth";
import api from "@/api/christmas";
import share from "@/api/share";
// import btnBox from "./components/dialog-btn";
import shareBox from "./components/share-btn";
import { Toast } from "vant";
export default {
  name: "",
  data() {
    return {
      goods_lists: [],
      show_home: true,
      show_btn_box: false,
      share_info: {},
      share_params: {},
      login_load: undefined,
      is_rules_show: false,
      show_repeat:false
    };
  },
  created() {
    this.init_data();
  },
  computed: {},
  methods: {
    init_data() {
      this.login_load = Toast.loading({
        mask: true,
        loadingType: "spinner",
        message: "Loading"
      });
      api.init_status().then(res => {
          if (res.data.status === 5 || sessionStorage.getItem("temp_status") === "5") {
            /* 未开始或者不在进行中 */
            this.show_home = true;
          } else if (res.data.status === 4) {
            /* 已经结束所有的活动资格 */
            this.show_repeat = true;
          } else {
            let params = {
              path: "/activity/christmas-during"
            };
            this.$router.replace(params);
          }
          this.login_load.clear();
          return res;
        })
        .then(res => {
          console.log(res);
          let params = {
            id: res.data.id,
            share_type: 5,
            user_name: res.data.user_name
          };
          share.getShareInfo(params).then(res => {
            console.log(res);
            this.$store.commit("set_christmas_share_info", res.data);
          });
        });   
      api.init_lists({ type: 2 }).then(res => {
        console.log(res);
        this.goods_lists = res.data;
      });
    },
    to_detail(cid) {
      this.$router.push({
        path: "/activity/christmas-detail",
        query: { id: cid }
      });
    }  
  },
  components: {
    acRules,
    noRepeat,
    rules
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
  margin-bottom: 55px;
}
.rules-tips-box {
  position: absolute;
  bottom: 50px;
  right: 2px;
  transform: translateY(100%);
  z-index: 99;
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
