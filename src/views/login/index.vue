<template>
  <div class="login-page">
    <div class="back-box">
      <img src="/static/images/icon/login/关闭 白@2x.png"
        alt=""
        srcset=""
        @click.stop="go_origin($route.query.redirect)">
    </div>
    <div class="logo-box">
      <router-link :to="{path:'/'}">
        <img src="/static/images/icon/login/logo 白大@2x.png"
          alt=""
          srcset="">
      </router-link>
    </div>
    <div class="user-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {
    go_origin(url) {
      if (url) {
        window.location.href = url;
      } else {
        window.location.href = "/";
      }
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.login-page {
  position: relative;
  height: 100%;
  background: #f23f3f;
  background: linear-gradient(
    360deg,
    rgba(242, 63, 63, 1) 0%,
    rgba(215, 14, 25, 1) 100%
  );
}
.back-box {
  padding-top: 20px;
  padding-left: 20px;
  img {
    width: 24px;
    height: 24px;
  }
}
.logo-box {
  text-align: center;
  padding-top: 20px;
  padding-bottom: 30px;
  img {
    height: 60px;
  }
}
</style>
