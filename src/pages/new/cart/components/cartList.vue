<template>
  <div class="cart-list">
    <div class="total-cart-box">
      <h2>Cart (9)</h2>
      <van-checkbox v-model="checked_all"
        checked-color="#D70E19">
        <p class="total-select">
          Select All Available Items (9)
        </p>
      </van-checkbox>
    </div>
    <van-checkbox-group v-model="checked_store">
      <ul v-for="n in 3"
        :key="n"
        class="cart-lists">
        <li class="cart-lists-item">
          <div class="cart-lists-store">
            <van-checkbox :key="n"
              :name="n"
              checked-color="#D70E19">
              <p class="total-store">
                <img src="/static/images/icon/cart/store@3x.png"
                  alt=""
                  srcset="">
                <span>MEMORY</span>
              </p>
            </van-checkbox>
            <p class="to-store">
              <img src="/static/images/icon/cart/分类 copy@3x.png"
                alt="">
            </p>
          </div>
         <cart-item></cart-item>
        </li>
      </ul>
    </van-checkbox-group>
  </div>
</template>

<script>
import cartItem from "./cartItem"
export default {
  name: "",
  data() {
    return {
      checked_all: false,
      checked_store: []
    };
  },
  mounted() {},
  computed: {},
  methods: {},
  components: {
    cartItem
  }
};
</script>

<style lang='scss' scoped>
.total-cart-box {
  padding: 30px 20px 13px 20px;
  h2 {
    font-size: 26px;
    padding-bottom: 28px;
  }
  .total-select {
    font-size: 14px;
  }
}
.cart-lists {
  padding: 5px 20px;
  border-top: 10px solid #f3f3f3;
  .cart-lists-item {
    .cart-lists-store {
      padding: 15px 0;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #f3f3f3;
      .total-store {
        img {
          width: 18px;
          height: 18px;
          object-fit: contain;
          vertical-align: middle;
        }
        span {
          font-size: 14px;
          padding-left: 5px;
        }
      }
      .to-store {
        font-size: 0;
        display: flex;
        align-items: center;
        img {
          height: 24px;
          width: auto;
        }
      }
    }
  }
}
</style>
