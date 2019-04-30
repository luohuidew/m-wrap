<template>
  <div>
  <router-view></router-view>
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
        this.$router.replace({path:url}) ;
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
