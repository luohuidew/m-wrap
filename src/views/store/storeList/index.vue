<template>
  <div class="store-list-page"
    v-if="listData">
    <van-list v-model="loading"
      :finished="finished"
      finished-text=""
      :loading-text="'Loading...'"
      @load="get_more_data">
      <listCard :sku="item"
        v-for="(item) in listData"
        :key="item.sku_id" />
    </van-list>
  </div>
</template>

<script>
import listCard from "@/components/card-list-row.vue";
import api from "@/api/store";
export default {
  name: "",
  props: {},
  data() {
    return {
      loading: false,
      finished: false,
      listData: undefined,
      selectId: undefined
    };
  },
  computed: {},
  created() {
    this.init_data();
  },
  methods: {
    init_data() {
      let query_params = {
        store_id: this.$route.query.store_id,
        cate_id: this.$route.query.cate_id
      };
      // debugger;
      api.getSkuListByCateId(query_params).then(res => {
        this.listData = res.data.data;
        this.selectId = res.data.selectId;
      });
    },
    get_more_data() {
      let query_params = {
        store_id: this.$route.query.store_id,
        cate_id: this.$route.query.cate_id,
        select_id: this.selectId
      };

      api.getSkuListByCateId(query_params).then(res => {
        this.loading = false;
        if (!res.data.length) {
          this.finished = true;
        };
        res.data.data.forEach(item => {
          this.listData.push(item);
        });
        this.selectId = res.data.selectId;
      });
    }
  },
  components: {
    listCard
  }
};
</script>

<style lang='scss' scoped>
</style>
