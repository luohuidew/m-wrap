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
import api from "@/api/product";
import goodsCard from "@/components/card-list-row";
export default {
  name: "",
  data() {
    return {
      sku_lists: [],
      cur_lists: undefined,
      is_more:false
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
      api.query_lists(params).then(res => {
        this.cur_lists = res.data.extend;
        this.is_more=res.data.length==0?false:true
        res.data.data.forEach(item => {
          this.sku_lists.push(item);
        });
      });
    },
    get_more_data(data) {
      if(!this.is_more){
        return
      }
      let params = {
        last_id: this.cur_lists.select_id,
        limit: 4,
        sku_id: this.$route.query.sku_id,
        type: 7
      };
      this.init_data(params);
      // console.log(data);
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
  padding: 10px 0;
}
</style>
