<template>
  <div id="weget" v-if="homeData">
    <homeCate></homeCate>
    <banner :bannerData="homeData.home_banner" style="margin-top: 15px"></banner>
    <getApp></getApp>
    <themeOne  :listsData="homeData.theme1"></themeOne>
    <section class="theme2">
      <router-link :to="homeData.theme2.route" >
        <img :src="homeData.theme2.image_url" alt="">
      </router-link>
    </section>
    <sacleGood  :listsData="homeData.new_arrivals"></sacleGood>
    <themeOne  :listsData="homeData.theme3"></themeOne>
    <section class="theme4">
      <router-link :to="homeData.theme4.route" >
        <img :src="homeData.theme4.image_url" alt="">
      </router-link>
    </section>
    <shops  :listsData="homeData.recommend_store"></shops>
    <appleGoole></appleGoole>
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
import homeCate from "./components/homeCate";
import themeOne from "./components/newStore";
import sacleGood from "./components/sacleGood";
import shops from "./components/shops";
import api from "@/api/weget";
import appleGoole from "@/components/apple-google";

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
    homeCate,
    themeOne,
    sacleGood,
    shops,
    appleGoole
  }
};
</script>

<style lang='scss' scoped>
#weget {
  background-color: #fff;
  .theme2, .theme4{
    margin-top: 10px;
    height: 375px;
    width: 375px;
    a{
      display: block;
      height: 100%;
    }
    img {
      display: block;
      height: 100%;
      width: 100%;
    }
  }
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
