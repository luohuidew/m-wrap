<template>
  <div class='detail'>
    <detail-content></detail-content>
  </div>
</template>

<script>
import CART from "@/api/cart";
import detailContent from "./detail-content";
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
  created() {    
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
      CART.shopCartList().then(res => {
        let temp_num = 0;
        res.data.goods.forEach(item => {
          temp_num += item.goods_list.length;
        });
        this.$store.commit("SET_CATR", temp_num);
        // debugger;
        this.clearParams();
      });
    },
    clearParams() {
      let sku_id = this.$route.query.sku_id;
      this.$router.push({
        path: "/detail",
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
}
</style>
