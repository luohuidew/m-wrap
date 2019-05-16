<template>

  <ul class="weget-header">
    <li class="about">
      <router-link to="/about">
        <img src="/static/images/icon/header/H5-关于我们@3x.png"
          alt=""
          srcset="">
        <p>About Us</p>
      </router-link>
    </li>
    <li class="weget">
      <router-link to="/">
        <img src="/static/images/icon/header/big-logo.png">
      </router-link>
    </li>
    <li class="cart">
      <template v-if="user_info">
        <router-link to="">
          <img v-if="user_info"
            :src="user_info.photo"
            alt="">
          <p>{{user_info.user_name}}</p>
        </router-link>
      </template>
      <template v-else>
        <router-link to="/login">
          <img src="/static/images/icon/header/H5-登录@3x.png"
            alt=""
            srcset="">
          <p>Login</p>
        </router-link>
      </template>
      <router-link to="/cart">
        <div class="cart-box"
          :class="{'have-goods':storeCart.goods_num}">
          <img :class="{'animated bounceIn':!isStatic}" src="/static/images/icon/header/H5-购物车@3x.png"
            alt=""
            srcset="">
          <p>Cart</p>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
import api from "@/api/user";
import CART from "@/api/cart";
export default {
  name: "",
  data() {
    return {
      user_info: null,
      isStatic:true
    };
  },
  created() {
    this.init_user();
    // this.init_cart();
  },
  mounted() {},
  watch:{
    storeCart(){
      this.isStatic = false;
      setTimeout(()=>{
        this.isStatic = true;
      },1000)
    }
  },
  computed: {
    hove_token() {
      console.log(this.$store.state.token);
      return this.$store.state.token;
    },
    storeCart() {
      return this.$store.state.cart;
    }
  },
  methods: {
    init_user() {
      if (this.hove_token) {
        api.getUserHeaderInfo().then(res => {
          // console.log(res);
          this.user_info = res.data;
          // setToken(res.data.token);
        });
      }
    },
    init_cart() {
      CART.getCartNum().then(res => {
        this.$store.commit("SET_CATR", res.data.num);
      });
    },
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.weget-header {
  display: flex;
  justify-content: space-between;
  height: 55px;
  padding: 10px 10px;
  position: relative;
  box-shadow: 0px 2px 6px 0px #d0d0d0;
  li {
    font-size: 0;
    text-align: center;
    & >>> a {
      margin: 0 8px;
    }
  }
}
img {
  width: 20px;
  height: 20px;
}
p {
  font-size: 10px;
  font-weight: bold;
}
.weget {
  position: absolute;
  left: 50%;
  top: 10px;
  transform: translateX(-50%);
  img {
    width: auto;
    height: 36px;
  }
}
/*  */
.have-goods {
  &::before{
    position: absolute;
    top: 8px;
    right: 14px;
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #D70E19;
  }
}
</style>
