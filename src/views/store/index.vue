<template>
  <div class="store">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "store-app",
  props: {},
  data() {
    return {
      store_info:undefined
    };
  },
  computed: {},
  created() {},
  methods: {},
  components: {}
};
</script>

<style lang='scss' scoped>
</style>
