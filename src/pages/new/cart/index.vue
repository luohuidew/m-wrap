<template>
  <div class="cart">
    <router-view></router-view>
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
  methods: {},
  components: {}
};
</script>

<style lang='scss'>
.cart {
  height: 100%;
  overflow: auto;
  .icon-box {
    display: flex;
    align-items: center;
    cursor: pointer;
    min-width: 30px;
    img {
      height: 20px;
      width: 20px;
      margin-right: 10px;
    }
  }
}
</style>
