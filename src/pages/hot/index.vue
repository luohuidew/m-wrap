<template>
  <div class="query-lists"
    v-scroll="get_more_data"
    v-if="sku_lists.length">
    <template v-for="(item,index) in sku_lists">
      <goods-card :key="index"
        :sku="item"></goods-card>
    </template>
  </div>
</template>

<script>
import api from "@/api/goods";
import goodsCard from "@/components/goodsCard.vue";
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
      api.get_lists(params).then(res => {
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
    goodsCard
  }
};
</script>

<style lang='scss' scoped>
.query-lists {
  height: 100%;
  overflow: auto;
  padding: 10px;
}
</style>
