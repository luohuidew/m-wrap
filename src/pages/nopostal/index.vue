<template>
  <div class="nopostal_page">
    <div class="text-content">
      <h3>ONE TIME shipping fee PER day</h3>
      <p>When you choose the free shipping deal:</p>
      <p>1. We offer this deal to those who use the same shipping address for the orders.</p>
      <p>2. All of the orders using the free shipping deal will be mailed together.</p>
      <p>3. The free shipping deal starts from your first purchases shipping level and the free shipping is offered on the same level on the rest of the day's purchases.</p>
      <p>4. You can use shipping coupons and get this free shipping deal at the same time.</p>
    </div>
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

<style lang='scss' scoped>
.nopostal_page {
  height: 100%;
  overflow: auto;
  border-top: 1px solid #e9e9e9;
  h3 {
    font-size: 17px;
    padding-bottom:10px;
  }
  p {
    font-size: 15px;
    line-height: 25px;
  }
  img {
    width: 100%;
    height: auto;
  }
  .text-content {
    padding: 20px 35px;
  }
}
</style>
