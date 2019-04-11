<template>
  <ul class="router-lists-box">
    <li v-for="(item,index) in routerLists"
      :key="index"
      :class="{'have-goods':storeCart.goods_num && item.title=='CART'}">
      <router-link :to="{path:item.path}">
        <div class="default-link">
          <img :src="item.defaultIcon"
            alt="">
          <span>{{item.title}}</span>
        </div>
        <div class="active-link">
          <img :src="item.activeIcon"
            alt="">
          <span>{{item.title}}</span>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
import CART from "@/api/cart";
export default {
  name: "",
  props: {},
  data() {
    return {
      isStatic: true,
      routerLists: [
        {
          defaultIcon: "/static/images/icon/footer/weget-black@3x.png",
          activeIcon: "/static/images/icon/footer/weget-red@3x.png",
          title: "WEGET",
          path: "/home/index"
        },
        {
          defaultIcon:'/static/images/icon/footer/welog-black@3x.png',
          activeIcon:'/static/images/icon/footer/welog-red@3x.png',
          title:'WELOG',
          path:'/welog/index',
        },
        {
          defaultIcon: "/static/images/icon/footer/cart-black@3x.png",
          activeIcon: "/static/images/icon/footer/cart-red@3x.png",
          title: "CART",
          path: "/cart/index"
        },
        {
          defaultIcon: "/static/images/icon/footer/me-black@3x.png",
          activeIcon: "/static/images/icon/footer/me-red@3x.png",
          title: "ME",
          path: "/user/index"
        }
      ]
    };
  },
  watch: {},
  computed: {
    storeCart() {
      console.log(this.$store.state);
      return this.$store.state.cart;
    }
  },
  created() {
    this.init_cart();
  },
  methods: {
    init_cart() {
      CART.shopCartList().then(res => {
        let temp_num = 0;
        res.data.goods.forEach(item => {
          temp_num += item.goods_list.length;
        });
        this.$store.commit("SET_CATR", temp_num);
      });
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.router-lists-box {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  border-top: 1px solid #f3f3f3;
  a {
    .default-link {
      display: flex;
    }
    .active-link {
      display: none;
    }
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    img {
      height: 24px;
      width: 24px;
    }
    span {
      font-size: 10px;
      line-height: 1.5;
    }
  }
  .active-route {
    .default-link {
      display: none;
    }
    .active-link {
      display: flex;
    }
    span {
      color: #d70e19;
    }
  }
  /*  */
  .have-goods {
    position: relative;
    &::before {
      position: absolute;
      top: 0px;
      right: 0px;
      content: "";
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #d70e19;
    }
  }
}
</style>
