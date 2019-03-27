<template>
  <div class="category">
    <div class="header-title">
      <img src="/static/images/icon/normal/返回 大@2x.png"
        alt=""
        srcset="" @click="go_back">
      <span>
        Category
      </span>
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
    go_back(){
      this.$router.go(-1);
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.category {
  height: 100%;
}
.header-title {
  height: 44px;
  display: flex;
  padding: 10px 20px;
  align-items: center;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
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
