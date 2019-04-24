<template>
  <div class='detail'>
    <detail-content></detail-content>
    <van-popup v-model="show" class="popup-warp">
      <img class="close" @click="closePopup" src="@/assets/img/conponActive/X.png"/>
      <div class="main">
        <img class="bg" src="@/assets/img/conponActive/bg.png" />
        <img  v-if="isLogin" class="btn" @click="goConpon" src="@/assets/img/conponActive/use@2x.png" />
        <img  v-if="!isLogin"  class="btn" @click="goLogin" src="@/assets/img/conponActive/Signup@2x.png" />
        <p v-if="isLogin">Congratulations! Now you have $30 in your account. Use it NOW! </p>
        <p v-if="!isLogin">Hello new friend,we have 30 for you,sign up and get it now!</p>
      </div>
    </van-popup>
  </div>
</template>

<script>
import CART from "@/api/cart";
import detailContent from "./active-content";
import { getToken } from "@/utils/auth";

export default {
  // beforeRouteEnter(to, from, next) {
  //   // 在渲染该组件的对应路由被 confirm 前调用
  //   // 不！能！获取组件实例 `this`
  //   // 因为当守卫执行前，组件实例还没被创建
  //   console.log('jinru',to,from,next);
  //   next();
  // },
  // beforeRouteUpdate(to, from, next) {
  //   // 在当前路由改变，但是该组件被复用时调用
  //   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  //   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  //   // 可以访问组件实例 `this`
  //   console.log('fuyong',to,from);
  //   next();
  // },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    // debugger;
     document.title = " Weget.com | stylish online fashion marketplace ";
    setTimeout(()=>{
      next();
    },0)
  },
  data() {
    return {
      activeList: this.$route.query.activeList,
      show: true,
      isLogin: getToken(),
    }
  },
  created() {

    if (this.activeList == '1' || sessionStorage.getItem('conpon-detail-first')) {
      this.show = false; // 只有第一次展示
    }
    if (this.$route.query.type === "keep") {
    // debugger;
    if (this.$store.state.token) {
      this.autoAddCart();
    } else {
      this.clearParams();
    }
    }
  },
  methods: {
    goConpon() {
      this.show = false
      sessionStorage.setItem('conpon-detail-first', true)
    },
    goLogin() {
      this.$router.push({
        path: "/login",
        query: {
          redirect: this.$route.fullPath
        }
      });
    },
    closePopup() {
      this.show = false
    },
    autoAddCart() {
      let auto_params = {
        goods_id: this.$route.query.goods_id,
        store_id: this.$route.query.store_id,
        count: this.$route.query.count
      };
      CART.addToCart(auto_params).then(res => {
        // this.$emit("close", null);
        // this.init_cart();
        this.init_cart();
      }, 0);
    },
    init_cart() {
      CART.getCartNum().then(res => {
        this.$store.commit("SET_CATR", res.data.num);
      });
        this.clearParams();
    },
    clearParams() {
      let sku_id = this.$route.query.sku_id;
      this.$router.push({
        path: "/detailAcive",
        query: {
          sku_id: sku_id
        }
      });
    }
  },
  components: {
    detailContent
  }
};
</script>

<style lang='scss' scoped>
.detail {
  height: 100%;
  display: flex;
  flex-direction: column;
  .popup-warp {
    background-color: rgba(1,1,1,0);
    width: 60%;
    img.close{
      width: 20px;
      display: block;
      margin: 0px auto;
    }
    .main {
      position: relative;
      width: 100%;
      img.bg {
        width: 100%;
        margin-top: 10px;
      }
      img.btn{
        position: absolute;
        bottom: 50px;
        width: 100px;
        left: 50%;
        height: auto;
        z-index: 20;
        transform: translateX(-50%);
      }
      p{
        position: absolute;
        left: 10px;
        right: 10px;
        top: 80px;
        text-align: center;
        line-height: 30px;
        font-weight: bold;
        bottom: 10px;
      }
    }

  }

}
</style>
