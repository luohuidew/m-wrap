<template>
  <ul class="router-lists-box">
    <li v-for="(item,index) in routerLists"
      :key="index">
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
export default {
  name: "",
  props: {},
  data() {
    return {
      routerLists: [
        {
          defaultIcon: "/static/images/icon/footer/weget-black@3x.png",
          activeIcon: "/static/images/icon/footer/weget-red@3x.png",
          title: "WEGET",
          path: "/home/index"
        },
        // {
        //   defaultIcon:'',
        //   activeIcon:'',
        //   title:'WELOG'
        // },
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
  computed: {},
  created() {},
  methods: {},
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
}
</style>
