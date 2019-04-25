<template>
  <div class="store-box-item">
    <div class="store-info">
      <div class="store-title">
        <img :src="storeData.logo"
          alt=""
          srcset="">
        <p class="store-name-tag">
          <span class="text-line-clamp-1">{{storeData.store_name}}</span>
          <img :src="storeData.store_tag.tag_url"
            alt=""
            srcset="">
        </p>
      </div>
      <div class="store-btn">
        <router-link :to="{path:'/store',query:{store_id:storeData.store_id}}">
          Visit Store
        </router-link>
      </div>
    </div>
    <!--  -->
    <div class="store-goods">
      <p>Products: {{storeData.product_total}}</p>
      <ul>
        <li class="product-items"
          v-for="(item) in storeData.product_list"
          :key="item.sku_id">
          <img :src="item.cover_img"
            alt=""
            srcset="">
          <span>{{item.market_price}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    storeData: {
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
  components: {}
};
</script>

<style lang='scss' scoped>
.store-box-item {
  margin-bottom: 20px;
  border: 1px solid #f3f3f3;
  border-radius: 6px;
  overflow: hidden;
}
/*  */
.store-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f3f3f3;
  padding: 10px; 
  .store-title {
    display: flex;
    flex:1;
    & > img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      margin-right: 10px;
    }
    .store-name-tag {
      // display: flex;
      // justify-content: center;
      // flex-direction: column;
      span {
        width:140px;
        font-size: 12px;
        font-weight: bold;
        margin-bottom:6px;
      }
      img {
        display: block;
        height: 10px;
        width: auto;
        // margin-top: 10px;        
      }
    }
  }
  /*  */
  .store-btn {
    width: 77px;
    height: 24px;
    text-align: center;
    background-color: #fff; 
    line-height: 24px;
    font-size: 12px;
    border-radius: 12px;
    border: 1px solid #cccccc;
  }
}
/*  */
.store-goods {
  padding: 15px;
  background-color: #fff;
  & > p {
    font-size: 12px;
    padding-bottom: 15px;
  }
  ul {
    display: flex;
    overflow: hidden;
  }
  li {
    width: 25%;    
    padding-left: 4px;
    img {
      width: 68px;
      height: 68px;
      border-radius: 6px;
    }
    span {
      display: block;
      font-size: 10px;
      color: #9b9b9b;
      margin-top: 5px;
    }
  }
}
</style>
