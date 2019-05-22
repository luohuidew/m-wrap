<template>
  <div id="weget" v-if="homeData">
    <category :listsData="homeData.recommend_category"></category>
    <banner :bannerData="homeData.home_banner"></banner>
    <getApp></getApp>
    <store  :listsData="homeData.recommend_store"></store>
    <pick :listsData="homeData.influence_pick"></pick>
    <topic :listsData="homeData.topic_data"></topic>
    <scrollCate :listData="homeData.category_row"></scrollCate>
    <van-popup v-model="show" class="popu">
      <div class="wrap">
        <van-icon name="close" @click="closePopu" class="icons"/>
        <img :src="popupObj.image_url" @click="goPage(popupObj.route)" alt="">
      </div>
    </van-popup>
  </div>
</template>

<script>
import banner from "./components/banner";
import getApp from "./components/getApp";
import category from "./components/homeCate";
import store from "./components/newStore";
import pick from "./components/homePick";
import topic from "./components/homeTopic";
import scrollCate from "./components/scrollCate"
import api from "@/api/weget";
export default {
  name: "",
  props: {},
  data() {
    return {
      show: false,
      homeData: undefined,
      popupObj: {}
    };
  },
  computed: {},
  created() {
    this.init_data();
  },
  methods: {
    goPage(url) {
      this.$router.push({path: url})
    },
    init_data() {
      api.homeData().then(res => {
        this.homeData = res.data;
      });
      if(sessionStorage.getItem('home-pop-first')){
        this.show = false
      } else {
        api.fetActive().then(res => {
          this.popupObj = res.data;
          if(this.popupObj.image_url) {
            this.show = true
          }
        });
      }
    },
    closePopu() {
      sessionStorage.setItem('home-pop-first', true)
      this.show = false
    }
  },
  components: {
    banner,
    getApp,
    category,
    store,
    pick,
    topic,
    scrollCate
  }
};
</script>

<style lang='scss' scoped>
#weget {
  background-color: #fff;
  & >>> .van-popup{
    border-radius: 5px;
    width: 60%;
    min-height: 40px;
    .wrap {
      position: relative;
      img {
        width: 100%;
      }
      .icons {
        position: absolute;
        right: 10px;
        top: 10px;
        color: #333;
        cursor: pointer;
        font-size: 25px;
      }
    }
  }
}
h1{
  margin: 50px;
}

</style>
