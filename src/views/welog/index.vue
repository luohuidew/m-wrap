<template>
  <div class="welog-page">
    <!-- 路由的嵌套 -->
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
  methods: {},
  components: {}
};
</script>

<style lang='scss' scoped>
.welog-page {
  height: 100%;
  overflow: auto;
}
</style>
