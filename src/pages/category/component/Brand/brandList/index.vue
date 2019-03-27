<template>
  <div class="brand-list">
    <aside-brand @select_change="select_data" class="aside-box"/>
    <scroll-brand :SelectId="curSelectId"/>
  </div>
</template>

<script>
import asideBrand from "./components/asideBrand";
import scrollBrand from "./components/scrollBrand";
export default {
  name: "",
  props: {},
  data() {
    return {
      curSelectId:undefined
    };
  },
  computed: {},
  created() {},
  methods: {
    select_data(data){
      this.curSelectId = data;
    }
  },
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
