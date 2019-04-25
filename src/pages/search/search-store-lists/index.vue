<template>
  <div class="fixed-content">
    <noData v-if="finished">
      <span>It is empty here ...</span>
    </noData>
    <van-list v-model="loading"
      :finished="finished"
      :finished-text="''"
      :loading-text="'Loading...'"
      @load="get_more_data()">
      <ul class="pick-lists"
        slot="default">
        <li v-for="(item,index) in storeListsData"
          :key="index">
          <storeCard :storeData="item"></storeCard>
        </li>
      </ul>
    </van-list>
  </div>
</template>

<script>
import storeCard from "@/components/card-store";
import api from "@/api/store";
import noData from "@/components/noData"
export default {
  name: "",
  props: {},
  data() {
    return {
      loading: false,
      finished: false,
      selectId: undefined,
      showTips:false,
      storeListsData: []
    };
  },
  computed: {},
  created() {},
  methods: {
    get_more_data() {
      let params = {
        store_name: this.$route.query.title,
        id: this.selectId
      };
      api.search(params).then(res => {
        if (!res.data.data.length) {
          this.finished = true;
          this.loading = false;
        }
        res.data.data.forEach(item => {
          this.selectId = res.data.extend.select_id;
          this.loading = false;
          this.storeListsData.push(item);
        });
      });
    }
  },
  components: {
    storeCard,
    noData
  }
};
</script>

<style lang='scss' scoped>
/*  */
.fixed-content {
  height: 100%;
  background-color: #ffffff;
 
  // padding-top: 0;
}
.pick-lists {
   padding: 10px 15px;
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: space-between;
  // padding: 0 15px;
  // padding-top: 10px;  
  /* 保留高度 */
  // min-height:50vh;
  // & > li {
  //   width: calc(50% - 5px);
  //   margin-bottom: 10px;
  //   &:nth-child(2n-1) {
  //     // margin-right: 5px;
  //   }
  //   &:nth-child(2n) {
  //   }
  // }
}
</style>
