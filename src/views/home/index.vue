<template>
  <div id="weget"
    v-if="homeData">
    <banner :bannerData="homeData.home_banner"></banner>
    <category :listsData="homeData.recommend_category"></category>
    <store :bannerData="homeData.store_banner"
      :listsData="homeData.recommend_store"></store>
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
import category from "./components/homeCate";
import store from "./components/homeStore";
import pick from "./components/homePick";
import topic from "./components/homeTopic";
import scrollCate from "./components/scrollCate"
import api from "@/api/weget";
export default {
  name: "",
  props: {},
  data() {
    return {
      show: true,
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
          // const _this = this
          // var newImg = new Image()
          // newImg.src = res.data.image_url
          // newImg.onload = function () {
          //   _this.popupObj = res.data;
          // };
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
  & /deep/ .van-popup{
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
  background-color: #f3f3f3;
}
h1{
  margin: 50px;
}

</style>
