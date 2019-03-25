<template>
  <div class="brand-list">
    <aside-brand class="aside-box"/>
    <scroll-brand/>
  </div>
</template>

<script>
import asideBrand from "./components/asideBrand";
import scrollBrand from "./components/scrollBrand";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {},
  components: {
    asideBrand,
    scrollBrand
  }
};
</script>

<style lang='scss' scoped>
.brand-list {
  display: flex;
  height: 100%;
  .aside-box {
    flex: 1;
  }
}
</style>
