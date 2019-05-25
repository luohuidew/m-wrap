<template>
  <div class="home-cate" >
    <h1>A STYLISH ONLINE FASHION <br>MARKETPLACE</h1>
    <ScrollHead></ScrollHead>
  </div>
</template>

<script>
  import ScrollHead from "../homeClassify/components/classifyHead";

  export default {
  name: "",
  props: {
    // listsData: {
    //   type: Array,
    //   default: undefined
    // }
  },
  data() {
    return {
    };
  },
  computed: {},
  created() {},
  methods: {},
  components: {
    ScrollHead
  }
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
