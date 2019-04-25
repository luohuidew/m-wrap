<template>
  <div class="fixed-content">
    <van-list v-model="loading"
      :finished="finished"
      :finished-text="''"
      :loading-text="'Loading...'"
      @load="get_more_data()">
      <ul class="pick-lists"
        slot="default">
        <li v-for="(item,index) in likeListsData"
          :key="index">
          <likeCard @updata="deleteCurGoods(index,$event)"
            :skuData="item"></likeCard>
        </li>
      </ul>
    </van-list>
  </div>
</template>

<script>
import likeCard from "./components/likeCard";
import api from "@/api/product";
export default {
  name: "",
  data() {
    return {
      loading: false,
      finished: false,
      selectId: undefined,
      likeListsData: []
    };
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    get_more_data() {
      let params = {
        // cat_id: this.curCateId,
        id: this.selectId
      };
      api.getLikeList(params).then(res => {
        if (!res.data.data.length) {
          this.finished = true;
          this.loading = false;
        }
        res.data.data.forEach(item => {
          this.selectId = res.data.extend.select_id;
          this.loading = false;
          this.likeListsData.push(item);
        });
      });
    },
    deleteCurGoods(index) {
      this.likeListsData.splice(index, 1);
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
