<template>
  <div class='page'>
    <div class="title-box"
      @click="to_similar">
      <p class="tips">{{title}}</p>
      <p class="more"></p>
    </div>
    <div class="show-list">
      <ul>
        <li v-for="(item,index) in dataList"
          :key="index">
          <goods-card-column :card-data="item" :activeList = 'activeList'
            class="sku-item"></goods-card-column>
        </li>
      </ul>
      <!-- <van-swipe :autoplay="3000" :show-indicators="false">
        </van-swipe> -->
    </div>
  </div>
</template>

<script>
import goodsCardColumn from "@/components/card-column-scroll.vue";
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    dataList: {
      default: []
    },
    activeList: {
      default: '0' // 1的话是跳转到新详情
    },
    title: {
      type: String
    },
  },
  created() {
    // alert(this.activeList)
  },
  mounted() {
  },
  methods: {
    to_similar() {
      if(this.dataList.length > 0) {
        window.sessionStorage.activeData = JSON.stringify(this.dataList)
      }
      let params = {
        path: "/queryActive", // 跳到列表
        query: {
          sku_id: this.$route.query.sku_id,
          type: 5,
          activeList: this.activeList
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
  padding: 20px 0 10px 20px;
  font-size: 14px;
  // border-bottom: 10px solid #f8f8f8;
}
.title-box {
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 17px;
  padding-bottom: 19px;
  //   border-bottom: 1px solid #e9e9e9;
  .tips {
    font-size: 24px;
    // font-weight: bold;
  }
  .more {
    padding-right: 18px;
    background: url(../../../assets/img/icon/right_icon.png) no-repeat right
      center;
  }
}

.show-list {
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
</style>
