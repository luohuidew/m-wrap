<template>
  <div class='page'>
    <div class="title-box"
         @click="to_similar(item.store_id)">
      <p class="tips">More from the shop <span>{{item.name}}</span></p>
    </div>
    <div class="store-title"
         @click.stop="to_store(item.store_id)">
      <p>
        <img class="logo" :src="item.logo"
             alt="">
      </p>
      <p class="store-desc">

        <span class="desc-min"
              v-if="item.info_store_tag[0]">
          <img :src="item.info_store_tag[0].tag_url"
               alt="">
        </span>
        <span class="store-name text-line-clamp-1">
          <span class="desc">{{item.total_num}} products | On WeGet since {{item.open_time}}</span>
        </span>
      </p>
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
  </div>
</template>

<script>
  import goodsCardColumn from "@/components/card-column-scroll-nobor.vue";
  export default {
    name: "",
    data() {
      return {};
    },
    props: ["dataList","item"],
    methods: {
      to_similar(id) {
        let params = {
          path: "/store",
          query: {
            store_id: id
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
     border-bottom: 8px solid #f8f8f8;
  }
  .title-box {
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 17px;
    //   border-bottom: 1px solid #e9e9e9;
    .tips {
      font-size: 14px;
      font-weight: bold;
      span{
        text-decoration:underline;
      }
    }
    .more {
      padding-right: 18px;
      background: url(../../../assets/img/icon/right_icon.png) no-repeat right
      center;
    }
  }
  .logo{
    align-items: center;
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
  .store-title {
    display: flex;
    padding: 10px 0;
    & > p {
      display: flex;
      align-items: flex-end;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .store-desc {
      flex: 1;
      overflow: hidden;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      justify-content: center;
      font-size: 18px;
      /*font-weight: bold;*/
      padding: 0 40px 0 10px;
      .desc-min {
        padding-top: 10px;
        height: 26px;
        // display: -webkit-box;
        font-size: 12px;
        color: #9b9b9b;
        overflow: hidden;
        text-overflow: ellipsis;
        img {
          border-radius: 0!important;
          height: 10px;
          width: auto;
        }
      }
      .store-name {
        font-size: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .desc{
          /*font-weight: bold;*/
        }
        span{
          display: block;
        }
      }
    }
    .store-btn {
      display: flex;
      span{
        color: #9B9B9B;
        font-size: 12px;
      }
      img{
        width: 18px;
        height: 18px;
        margin-right: 3px;
      }
      a {
        width: 100%;
        font-size: 12px;
        color: #ffffff;
        text-align: center;
        height: 26px;
        padding: 0 14px;
        line-height: 26px;
        background-color: #d70e19;
        // padding: 8px 0;
        border-radius: 13px;
      }
    }
  }
</style>
