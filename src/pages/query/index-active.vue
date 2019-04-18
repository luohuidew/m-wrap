<template>
  <div class="query-lists" v-if="sku_lists.length">
    <ul v-if="activeList == '1'" >
      <saleListActive v-for="(item,index) in sku_lists"
                      :sku="item"
                      :key="index"></saleListActive>
    </ul>
    <ul v-else>
      <saleList v-for="(item,index) in sku_lists"
                 :sku="item"
                 :key="index"></saleList>
    </ul>
  </div>
</template>

<script>
import saleListActive from "@/components/card-list-row-active";
import saleList from "@/components/card-list-row";

export default {
  name: "",
  data() {
    return {
      activeList: this.$route.query.activeList,
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
    saleList,
    saleListActive
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
