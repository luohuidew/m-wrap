<template>
  <div class="store-detail"
    v-scroll="get_more_data">
    <store-info v-if="store_info"
      :info-data="store_info"></store-info>
    <store-order v-if="store_info"
      :info-data="store_info"></store-order>
    <store-detail v-if="store_lists.length"
      :lists-data="store_lists"></store-detail>
  </div>
</template>

<script>
import api from "@/api/store";
import storeInfo from "./store-info";
import storeOrder from "./store-order";
import storeDetail from "./store-detail";
export default {
  name: "",
  data() {
    return {
      store_info: undefined,
      cur_lists: undefined,
      store_lists: []
    };
  },
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {},
  methods: {
    init_data() {
      let params = {
        store_id: this.$route.query.store_id
      };
      api.store_info(params).then(res => {
        this.store_info = res.data;
        // if(res.data.store_id){
        // }
      });
      // api.get_store_detail().then(res => {});
      api.goods_lists(params).then(res => {
        this.cur_lists = res.data.extend;
        res.data.data.forEach(item => {
          this.store_lists.push(item);
        });
      });
    },
    get_more_data(data) {
      let params = {
        id: this.cur_lists.selectId,
        limit: 4,
        store_id: this.$route.query.store_id
      };
      api.goods_lists(params).then(res => {
        this.cur_lists = res.data.extend;
        res.data.data.forEach(item => {
          this.store_lists.push(item);
        });
      });
    }
  },
  components: {
    storeInfo,
    storeOrder,
    storeDetail
  }
};
</script>

<style lang='scss' scoped>
.store-detail {
  height: 100%;
  overflow: auto;
  // width: 1020px
  // margin: 0 auto;
}
</style>
