<template>
  <div class="test">
    app获取token
    <a href="javascript:;"
      @click="get_token">点击获取</a>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {
    get_token() {
      if (this.$CM.is_weget()) {
      }
      let href_params = {
        type: 103,
        data: {}
      };
      let temp = this.$CM.weget_device_link(href_params);
      alert(temp);
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
</style>
