<template>
  <div class="fixed-content" ref="fixed_content" >
    <van-list v-model="loading"
      :finished="finished"
      finished-text="No more data"
       :immediate-check="false"
      :loading-text="'Loading...'"
      @load="get_more_data()">
      <ul class="pick-lists"
        slot="default">
        <li v-for="(item,index) in goodsListsData"
          :key="index">
          <autoCard :cardData="item"></autoCard>
        </li>
      </ul>
    </van-list>
  </div>
</template>

<script>
import autoCard from "@/components/card-column-auto";
import GOODS from "@/api/goods";
export default {
  name: "",
  props: {
    curCateId: {
      type: Number | String,
      default: undefined
    }
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
  created() {
    this.get_more_data()
  },
  mounted() {
  },
  methods: {
    get_more_data() {
      let params = {
        cat_id: this.curCateId,
        id: this.selectId
      };
      GOODS.get_lists(params).then(res => {
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
