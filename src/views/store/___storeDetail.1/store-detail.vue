<template>
  <div class="store-lists">
    <h3>Daily WOW</h3>
    <div class="">
      <div class="list-box"
        v-if="goods_list">
        <sale-list v-for="(item,index) in goods_list"
          :sku="item"
          :key="index"></sale-list>
      </div>
    </div>
  </div>
</template>

<script>
import saleList from "@/components/card-list-row";
export default {
  name: "",
  data() {
    return {
      goods_list: this.listsData
    };
  },
  props: ["listsData"],
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {},
  methods: {
    init_data(params = { limit: 24, list_type: 2 }) {
      // let params = this.$route.query;
    }
  },
  components: {
    saleList
  }
};
</script>

<style lang='scss' scoped>
.store-lists {
  h3 {
    padding-left: 20px;
    // padding-bottom: 20px;
    padding-top: 30px;
  }
}
</style>
