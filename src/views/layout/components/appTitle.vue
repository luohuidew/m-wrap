<template>
  <div class="header-title">
    <img src="/static/images/icon/normal/返回 大@2x.png"
      alt=""
      srcset=""
      @click="go_back">
    <span>
      {{$route.meta.title}}
    </span>
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
    go_back() {
      this.$router.go(-1);
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.header-title {
  height: 100%;
  display: flex;
  padding: 10px 20px;
  align-items: center;
  border-bottom: 1px solid #f3f3f3;
  img {
    height: 24px;
    width: 24px;
  }
  span {
    flex: 1;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }
}
</style>
