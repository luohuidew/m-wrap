<template>

  <ul class="checkout-box">
    <li class="checkout-item" v-for="(item, index) in goods_data"
      :key="index">
      <div class="cover-img-box">
        <img :src="item.cover_img"
          alt=""
          srcset="">
      </div>
      <div class="title-box">
        <p class="goods-title text-line-clamp-1">
           {{item.title}}
        </p>
        <div class="attr-select">
          <span> {{item.attr_str}}</span>
          <!-- <span> {{item.attr_str}}</span> -->
        </div>
        <div class="card-count">
          <span class="price">{{item.price}}</span>
          <!-- <span class="price">${{item.goods_price}}</span> -->
          <span class="account-change">
            x {{item.num}}
          </span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "",
  props: {
    goods_data: {
      type: Array,
      default: function () {
        return []
      }
    },
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
.checkout-box {
  padding-bottom: 10px;
  border-bottom: 1px solid #f3f3f3;
}
.checkout-item {
  display: flex;
  padding: 10px 0;
}
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
  .attr-select {
    color: #9b9b9b;
    font-size: 14px;
    span {
      padding-right: 30px;
      /*background: url("/static/images/icon/cart/分类 copy 2.png") no-repeat*/
        /*center right;*/
      background-size: 18px auto;
    }
  }
  .card-count {
    display: flex;
    justify-content: space-between;
    .price {
      font-size: 14px;
      font-weight: bold;
      color: #000000;
    }
    .account-change {
      display: flex;
      align-items: center;
      font-size: 14px;
    }
  }
}
</style>
