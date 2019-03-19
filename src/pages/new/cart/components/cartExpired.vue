<template>
  <div class="cart-expired">
    <div class="expired-sku-title">
      <span class="">失效的商品</span>
      <span class="remove-btn">remove </span>
    </div>
    <ul class="expired-sku-lists">
      <li class="expired-sku-item" v-for="n in 2" :key="n">
        <div class="cover-img-box">
          <img src="/static/demo.png"
            alt=""
            srcset="">
        </div>
        <div class="title-box">
          <p class="goods-title text-line-clamp-2">
            SPACE F Space F PinkSPACE F Space F PinkSPACE F Space F PinkSPACE F Space F Pink
          </p>
          <p class="have-expired">
            该商品已下架
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {},
  components: {}
};
</script>

<style lang='scss' scoped>
.cart-expired {
  border-top: 10px solid #f3f3f3;
  padding: 0 20px;
}
.expired-sku-title {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f3f3f3;
  padding: 15px 0 11px 0;
}
.expired-sku-lists {
  padding-bottom: 20px;
  .expired-sku-item {
    display: flex;
    padding-top: 17px;
    .cover-img-box {
      height: 80px;
      width: 80px;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 6px;
      }
    }
  }
  .title-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 20px;
    .goods-title {
      font-size: 14px;      
      line-height: 18px;
    }
    .have-expired {
      background-color: #f3f3f3;
      height: 22px;
      font-size: 12px;
      line-height: 22px;
      padding-left: 10px;
    }
  }
}
</style>
