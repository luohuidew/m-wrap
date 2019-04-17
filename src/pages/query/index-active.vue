<template>
  <div class="query-lists" v-if="sku_lists.length">
    <ul>
      <sale-list v-for="(item,index) in sku_lists"
                 :sku="item"
                 :key="index"></sale-list>
    </ul>
  </div>
</template>

<script>
import saleList from "@/components/card-list-row";

export default {
  name: "",
  data() {
    return {
      sku_lists: [],
      cur_lists: undefined
    };
  },
  created() {
    const lists = JSON.parse(window.sessionStorage.activeData)
    if (lists.length > 0) {
      this.sku_lists = lists
    }
  },
  mounted() {},
  computed: {

  },
  methods: {

  },
  components: {
    saleList
  }
};
</script>

<style lang='scss' scoped>
.query-lists {
  height: 100%;
  overflow: auto;
  padding: 10px 0;
}
  ul {
    width: 100%;


  }
</style>
