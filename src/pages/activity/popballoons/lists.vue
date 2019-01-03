<template>
  <div class="goods-lists"
    v-if="show_home">
    <div class="lists-header">
      <img src="/static/img/popballoons/ChooseYourFavorite.png">
      <!-- <div class="rules-tips-box">
        <ac-rules @open="is_rules_show=true"></ac-rules>
      </div> -->
    </div>
    <div class="all-activity">
      <ul>
        <li v-for="(item,index) in goods_lists"
          :key="index"
          @click="to_detail(item.id)">
          <p class="balloons-num-title">
            {{item.lamp_num}} balloons = $0
          </p>
          <img :src="item.image">
          <div class="price-box">
            <p>REG</p>
            <p>${{item.price}}</p>
          </div>
        </li>
      </ul>
    </div>
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
import api from "@/api/newyear";
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
      show_repeat: false
    };
  },
  created() {
    this.init_data();
  },
  filters:{
    change_num(val){
      return Math.ceil(val);
    }
  },
  computed: {},
  methods: {
    init_data() {
      this.login_load = Toast.loading({
        mask: true,
        loadingType: "spinner",
        message: "Loading"
      });
      api
        .init_status()
        .then(res => {
          if (
            res.data.status === 5 ||
            sessionStorage.getItem("temp_status") === "5"
          ) {
            /* 未开始或者不在进行中 */
            this.show_home = true;
          } else if (res.data.status === 4) {
            /* 已经结束所有的活动资格 */
            this.show_repeat = true;
          } else {
            let params = {
              path: "/activity/popballoons/popballoons-during"
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
        path: "/activity/popballoons/popballoons-detail",
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
  // background: url("/static/img/christmas/列表页背景.jpg") no-repeat top center;
  // background-size: 100% 100%;
  img {
    width: 100%;
    height: auto;
  }
}
.lists-header {
  position: relative;
  margin-bottom: 26px;
  text-align: center;
  img {
    height: 72px;
    width: auto;
  }
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
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      position: relative;
      width: 50%;
      margin-top: 30px;
      padding-bottom: 10px;
      height: 210px;
      background: url("/static/img/popballoons/EA-ribbonbow-78.png") no-repeat
        center bottom;
      background-size: 90% auto;
      .balloons-num-title {
        width: 100%;
        height: 43px;
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        line-height: 43px;
        color: #2c2c2c;
        font-size: 14px;
        border-radius: 4px;
        // height: 43px;
        background: url("/static/img/popballoons/pop-list-title.png") no-repeat
          center center;
        background-size: 90% 100%;
      }
      .price-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 7%;
        right: 12%;
        height: 44px;
        width: 44px;
        border-radius: 50%;
        font-size: 12px;
        background-color: #000;
        color: #E3C388;
        p {
          text-align: center;
        }
      }
      img {
        position: absolute;
        left: 50%;
        bottom: 12%;
        transform: translateX(-50%);
        height: 100px;
        width: auto;
      }
    }
  }
  // img {
  //   width: 100%;
  //   height: auto;
  // }
}
.tips-btns {
  margin: 10px auto;
  img {
    height: 40px;
    width: auto;
  }
}
</style>
