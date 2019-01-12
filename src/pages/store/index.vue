<template>
  <div class="store-detail">
    <store-info v-if="store_info"
      :info-data="store_info"></store-info>
    <store-order v-if="store_info"
      :info-data="store_info"></store-order>
    <store-detail v-if="store_lists"
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
      store_lists: undefined
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
        this.store_lists = res.data;
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
  // width: 1020px
  // margin: 0 auto;
}
</style>
