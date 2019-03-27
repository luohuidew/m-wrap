<template>
  <div class="content">
    <brand-list />
  </div>
</template>

<script>
import BrandList from "./brandList";
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
    BrandList
  }
};
</script>

<style lang='scss' scoped>
.content {
  height: calc(100% - 44px);
}
</style>
