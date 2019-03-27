<template>
  <ul class="router-lists-box">
    <li v-for="(item,index) in routerLists"
      :key="index">
      <router-link :to="{path:item.path}">
        <div class="default-link">
          <img src=""
            alt="">
          <span>{{}}</span>
        </div>
        <div class="active-link">
          <img src=""
            alt="">
          <span>{{}}</span>

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
          defaultIcon: "/static/images/cicon/footer/weget-black@3x.png",
          activeIcon: "",
          title: "WEGET",
          path: "/home/index"
        },
        // {
        //   defaultIcon:'',
        //   activeIcon:'',
        //   title:'WELOG'
        // },
        {
          defaultIcon: "",
          activeIcon: "",
          title: "CART",
          path: "/cart"
        },
        {
          defaultIcon: "",
          activeIcon: "",
          title: "ME",
          path: "/me"
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
  a {
    .default-link {
      display: block;
    }
    .active-link {
      display: none;
    }
  }
  .active-route {
     .default-link {
      display: none;
    }
    .active-link {
      display: block;
    }
  }
}
</style>
