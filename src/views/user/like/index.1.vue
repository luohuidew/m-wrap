<template>
  <div class="query-lists"
    v-scroll="get_more_data"
    v-if="sku_lists.length">
    <template v-for="(item,index) in sku_lists">
      <likeCard :skuData="item" :key="index"></likeCard>
    </template>
  </div>
</template>

<script>
import likeCard from "./components/likeCard"
import api from "@/api/product";
export default {
  name: "",
  data() {
    return {
      sku_lists: [],
      cur_lists_data: undefined
    };
  },
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {},
  methods: {
    init_data(params = this.$route.query) {
      // let params = this.$route.query;
      api.getLikeList(params).then(res => {
        this.cur_lists_data = res.data.extend;
        res.data.data.forEach(item => {
          this.sku_lists.push(item);
        });
      });
    },
    get_more_data(data) {
      console.log('hot caroll');
      let params =  this.$route.query;
      params.id = this.cur_lists_data.selectId;     
      this.init_data(params);
    }
  },
  components: {
    likeCard
  }
};
</script>

<style lang='scss' scoped>
.query-lists {
  height: 100%;
  overflow: auto;
  padding: 10px 0;
}
</style>
