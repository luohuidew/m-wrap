<template>
  <div class="cart-item"
    v-if="cur_lists.length">
    <van-checkbox-group v-model="checked_all">
      <ul>
        <li class="cart-card"
          v-for="(item,index) in cur_lists"
          :key="index">
          <van-checkbox :key="item.goods_id"
            :name="item.goods_id"
            checked-color="#D70E19">
          </van-checkbox>
          <div class="card-item">
            <div class="cover-img-box">
              <img :src="item.goods_img"
                alt=""
                srcset="">
            </div>
            <div class="title-box">
              <p class="goods-title text-line-clamp-1">
                {{item.goods_title}}
              </p>
              <div class="attr-select">
                <span> {{item.attr_str}}</span>
              </div>
              <div class="card-count">
                <span class="price">${{item.goods_price}}</span>
                <span class="account-change">
                  <i>-</i>
                  <span>1</span>
                  <i>+</i>
                </span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </van-checkbox-group>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      checked_all: [],
      cur_lists: this.listsData
    };
  },
  props: {
    listsData: {
      type: Array,
      default: []
    }
  },
  mounted() {},
  computed: {},
  methods: {},
  components: {}
};
</script>

<style lang='scss' scoped>
.cart-card {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
}
.card-item {
  flex: 1;
  display: flex;
  padding-top: 17px;
  padding-left: 10px;
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
      background: url("/static/images/icon/cart/分类 copy 2.png") no-repeat
        center right;
      background-size: 18px auto;
    }
  }
  .card-count {
    display: flex;
    justify-content: space-between;
    .price {
      font-size: 14px;
      color: #000000;
    }
    .account-change {
      display: flex;
      align-items: center;
      i {
      }
      span {
        height: 24px;
        width: 60px;
        text-align: center;
        border: 1px solid #c9caca;
      }
    }
  }
}
</style>
