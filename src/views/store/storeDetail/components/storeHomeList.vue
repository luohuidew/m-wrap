<template>
  <section class="home-tab-page"
    v-if="homeData">
    <div class="banner-scroll">
      <banner :bannerData="homeData.store_info.store_banner_list"
        class="banner" />
    </div>
    <p class="title">Trending</p>
    <div class="show-list">
      <ul>
        <li v-for="(item,index) in homeData.hot_sku"
          :key="index">
          <sale-list :card-data="item"
            class="sku-item"></sale-list>
        </li>
      </ul>
    </div>
    <p class="title">Daily WOW</p>
    <ul class="pick-lists">
      <li v-for="(item,index) in homeData.daily_wow"
        :key="index">
        <autoCard :cardData="item"></autoCard>
      </li>
    </ul>
  </section>
</template>

<script>
import banner from "@/components/banner";
import saleList from "@/components/card-column-scroll";
import autoCard from "@/components/card-column-auto";
export default {
  name: "",
  props: {
    homeData: {
      type: Object,
      default: undefined
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {},
  components: {
    banner,
    saleList,
    autoCard
  }
};
</script>

<style lang='scss' scoped>
.home-tab-page {
  // background-color: #f3f3f3;
   .title{
     font-size: 18px;
     font-weight: bold;
     padding: 20px;
   }
}
.banner-scroll {
  .banner {
    height: 188px;
  }
}
/*  */
.show-list {
  width: 100%;
  //   height: 175px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-left: 16px;
  ul {
    white-space: nowrap;
    display: inline-block;
    padding-right: 20px;
    li {
      // width: 170px;
      //   height: 175px;
      // background-color: blueviolet;
      display: inline-block;
      vertical-align: middle;
      padding-left: 16px;
      &:nth-child(1) {
        padding-left: 0;
      }
      img {
        width: 100%;
        height: 100%;
        //   object-fit: contain;
      }
      .sku-item {
        width: 150px;
      }
    }
  }
}
/*  */
.pick-lists {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
  & > li {
    width: calc(50% - 5px);
    margin-bottom: 10px;
    &:nth-child(2n-1) {
      // margin-right: 5px;
    }
    &:nth-child(2n) {
    }
  }
}
</style>
