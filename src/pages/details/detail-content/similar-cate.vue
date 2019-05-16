<template>
  <div class='page'>
    <div class="title-box"
      @click="to_similar">
      <p class="tips">Similar items on WeGet</p>
      <!--<p class="more"></p>-->
    </div>
    <div class="show-list">
      <ul>
        <li v-for="(item,index) in dataList"
          :key="index">
          <goods-card-column :card-data="item"
            class="sku-item"></goods-card-column>
        </li>
      </ul>
      <!-- <van-swipe :autoplay="3000" :show-indicators="false">
        </van-swipe> -->
    </div>
    <div class="shop-more" @click="to_similar">
      Shop more similar items <span class="right">→</span>
      <img src="/static/images/icon/question.png" alt="">
    </div>
  </div>
</template>

<script>
import goodsCardColumn from "@/components/card-column-scroll-nobor.vue";
export default {
  name: "",
  data() {
    return {};
  },
  props: ["dataList"],
  methods: {
    to_similar() {
      let params = {
        path: "/query",
        query: {
          sku_id: this.$route.query.sku_id,
          type: 7
        }
      };
      this.$router.push(params);
    }
  },
  components: {
    goodsCardColumn
  }
};
</script>

<style lang='scss' scoped>
.page {
  padding: 15px 0 10px 0px;
  font-size: 14px;
  // border-bottom: 10px solid #f8f8f8;
}
.title-box {
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 17px;
  padding-bottom: 19px;
  //   border-bottom: 1px solid #e9e9e9;
  .tips {
    font-size: 16px;
    font-weight: bold;
  }
  .more {
    padding-right: 18px;
    background: url(../../../assets/img/icon/right_icon.png) no-repeat right
      center;
  }
}

.show-list {
  padding-left: 20px;
  width: 100%;
  //   height: 175px;
  overflow-x: auto;
  overflow-y: hidden;
  ul {
    white-space: nowrap;
    display: inline-block;
    li {
      width: 150px;
      //   height: 175px;
      // background-color: blueviolet;
      display: inline-block;
      vertical-align: middle;
      margin-right: 15px;
      &:nth-child(1) {
        padding-left: 0;
      }
      img {
        width: 100%;
        height: 100%;
        //   object-fit: contain;
      }
    }
  }
}
.shop-more{
  margin: 0 auto;
  margin-top: 21px;
  margin-bottom: 5px;
  color: #fff;
  font-size: 14px;
  width:230px;
  height:36px;
  background:rgba(0,0,0,1);
  border-radius:23px;
  text-align: center;
  line-height: 36px;

}
</style>
