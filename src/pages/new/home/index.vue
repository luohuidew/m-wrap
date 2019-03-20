<template>
  <div id="weget"
    v-scroll="get_more_data">
    <!-- <home-header></home-header> -->
    <div class="fee-per"
      @click.stop="to_fee">
      <p>ONE TIME shipping fee PER day</p>
      <i></i>
    </div>
    <!--<img src="@/../static/img/log2.png">-->
    <!--<img src="/static/img/icon/Artboard%202.png">-->
    <banner :banner-data="nav_data.banner"></banner>
    <category :category-data="nav_data.categoryList"></category>
    <hot :hot-data="nav_data.newLeftRightData"></hot>
    <store :store-data="nav_data.storeList"></store>
    <theme :theme-data="nav_data.topicImage"></theme>
    <sale ref="lists"></sale>
    <share-app :token="share_token"></share-app>
  </div>
</template>

<script>
import shareApp from "@/components/dialog/share-app";
import banner from "@/components/banner";
import category from "./components/categoryList";
import hot from "./components/hotSale";
import store from "./components/newStore";
import theme from "./components/themeSale";
import sale from "./components/sale.vue";
import api from "@/api/weget";
export default {
  name: "",
  data() {
    return {
      c_selected: undefined,
      share_token: "",
      nav_data: {}
    };
  },
  created() {
    this.init_data();
  },
  methods: {
    get_more_data(data) {
      // console.log(this.$refs.lists);
      this.height_change = data;
      if (this.$route.meta.type === "list") {
        let c_lists = this.$refs.lists;
        if (c_lists.selectId) {
          this.c_selected = c_lists.selectId;
          let change_params = {
            id: c_lists.selectId,
            limit: 4
          };
          console.log(change_params);
          c_lists.init_data(change_params);
        }
      }
      // console.log(this.$children);
      console.log(data);
    },
    to_fee() {
      this.$router.push({ path: "/nopostal" });
    },
    init_data() {
      api.homeData().then(res => {
        this.nav_data = res.data;
      });
    }
  },
  components: {
    banner,
    category,
    hot,
    store,
    theme,
    sale,
    shareApp
  }
};
</script>

<style lang="scss" scope>
#weget {
  height: 100%;
  overflow: auto;
}
.weget-title {
  margin-bottom: 20px;
  margin-top: 20px;
}
.main-title {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  line-height: 42px;
}
.min-title {
  text-align: center;
  font-size: 14px;
  line-height: 20px;
}
.fee-per {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  height: 30px;
  background-color: #efefef;
  font-size: 12px;
  i {
    width: 50px;
    height: 100%;
    background: #efefef url("/static/img/icon/返回 小右.png") no-repeat center
      right;
    background-size: 14px auto;
  }
  p {
    padding-left: 30px;
    font-size: 12px;
    line-height: 30px;
    background: #efefef url("/static/img/icon/user_order_shipped_icon@2x.png")
      no-repeat center left;
    background-size: 18px auto;
  }
}
</style>
