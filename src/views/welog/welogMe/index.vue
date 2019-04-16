<template>
  <div class="my-fixed-content">
    <van-list v-model="loading"
      :finished="finished"
      :finished-text="''"
      :loading-text="'Loading...'"
      @load="get_more_data()">
      <ul class="pick-lists"
        slot="default">
        <li v-for="(item,index) in goodsListsData"
          :key="index">
          <autoCard :datas="item"></autoCard>
        </li>
      </ul>
    </van-list>
  </div>
</template>

<script>
import autoCard from "@/views/welog/components/welog-card";
import api from "@/api/welog";
export default {
  name: "",
  props: {
   
  },
  data() {
    return {
      loading: false,
      finished: false,
      selectId: undefined,
      goodsListsData: []
    };
  },
  computed: {},
  created() {},
  methods: {
    get_more_data() {
      let params = {
        // cat_id: this.curCateId,
        id: this.selectId,
        type:2
      };
      api.welogIndex(params).then(res => {
        if (!res.data.data.length) {
          this.finished = true;
          this.loading = false;
        }
        res.data.data.forEach(item => {
          this.selectId = res.data.extend.selectId;
          this.loading = false;
          this.goodsListsData.push(item);
        });
      });
    }
  },
  components: {
    autoCard
  }
};
</script>

<style lang='scss' scoped>
/*  */
.pick-lists {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 15px;
  padding-top: 10px;
  /* 保留高度 */
  // min-height:50vh;
  & > li {
    width: calc(50% - 5px);
    margin-bottom: 10px;
    &:nth-child(2n-1) {
      // margin-right: 5px;
    }
    &:nth-child(2n) {
    }
  }
}
</style>
