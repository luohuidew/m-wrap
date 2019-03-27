<template>
  <div class="options-box">
    <div class="logo-box">
      <img src="/static/images/icon/header/big-logo.png"
        alt=""
        srcset="">
    </div>
    <div class="scroll-lists">
      <ul class="scroll-lists-items">
        <li v-for="(item,index) in asideLists"
          :key="index">
          <router-link :to={path:item.path}
            class="app-router-link">
            <img :src="item.icon"
              alt="">
            <span> {{item.title}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      asideLists: [
        {
          icon: "/static/images/icon/normal/导航-account@2x.png",
          title: "HOME",
          path: "/"
        },
        {
          icon: "/static/images/icon/normal/导航-account@2x.png",
          title: "HOME",
          path: "/"
        },
        {
          icon: "/static/images/icon/normal/导航-account@2x.png",
          title: "HOME",
          path: "/"
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
.options-box {
  height: 100vh;
  width: 280px;
  background-color: #fff;
}
.logo-box {
  height: 44px;
  text-align: center;
  font-size: 0;
  padding-top: 14px;
  img {
    height: 100%;
    width: auto;
  }
}
.scroll-lists {
  height: calc(100% - 44px);
  padding-top: 20px;
  overflow: auto;
  .scroll-lists-items {
    .app-router-link {
      height: 48px;
      padding-left: 30px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #e9e9e9;
      img {
        height: 22px;
        width: 22px;
        margin-right: 15px;
      }
      span {
        font-size: 12px;
        font-weight: bold;
      }
    }
  }
}
</style>
