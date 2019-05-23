<template>
  <div class="home-cate" v-if="cateData">
    <h1>STYLISH ONLINE FASHION <br>MARKETPLACE</h1>
    <div style="height: 30px;border:1px solid red"></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    listsData: {
      type: Array,
      default: undefined
    }
  },
  data() {
    return {
      cateData: this.listsData
    };
  },
  computed: {},
  created() {},
  methods: {},
  components: {}
};
</script>

<style lang='scss' scoped>
.home-cate {
  background: #fff;
  h1 {
    font-size:20px;
    font-weight:800;
    color:rgba(0,0,0,1);
    text-align: center;
    padding-top: 18px;
    line-height: 28px;
  }
}
</style>
