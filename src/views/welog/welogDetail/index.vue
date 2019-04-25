<template>
  <div class="welog-detail"
    v-if="detailData">
    <coverTag :coverData="detailData" />
    <template v-for="(item,index) in detailData.sku_list">
      <goods-card :key="index"
        :sku="item"></goods-card>
    </template>
  </div>
</template>

<script>
import goodsCard from "@/components/card-list-row";
import coverTag from "./components/coverTag";
import api from "@/api/welog";
export default {
  name: "",
  props: {},
  data() {
    return {
      detailData: undefined
    };
  },
  computed: {},
  created() {
    this.initData();
  },
  methods: {
    initData() {
      let query_params = {
        welog_id: this.$route.query.welog_id
      };
      api
        .welogDetail(query_params)
        .then(res => {
          this.detailData = res.data;
        })
        .then(res => {
          console.log(res);
        });

      //  api.welogIndex().then(res=>{

      //  }).then(res=>{
      //    console.log(res);
      //  })
    }
  },
  components: {
    coverTag,
    goodsCard
  }
};
</script>

<style lang='scss' scoped>
</style>
