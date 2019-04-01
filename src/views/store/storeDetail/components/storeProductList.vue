<template>
  <div class="store-all-product-page">
    <van-list v-model="loading"
      :finished="finished"
      finished-text="No More data"
      loading-text="Loading..."
      :offset="150"
      @load="get_more_data">
      <!-- <van-cell v-for="item in list"
        :key="item"
        :title="item" /> -->
      <ul class="pick-lists">
        <li v-for="(item,index) in store_lists"
          :key="index">
          <autoCard :cardData="item"></autoCard>
        </li>
      </ul>
    </van-list>
  </div>
</template>

<script>
import autoCard from "@/components/card-column-auto";
import api from "@/api/store";
export default {
  name: "",
  props: {},
  data() {
    return {
      cur_lists: undefined,
      store_lists: [],
      list: [],
      error: false,
      loading: false,
      finished: false
    };
  },
  computed: {},
  created() {
    this.init_data();
  },
  methods: {
    init_data() {
      let params = {
        store_id: this.$route.query.store_id
      };
      // api.get_store_detail().then(res => {});
      api.goods_lists(params).then(res => {
        this.cur_lists = res.data.extend;
        res.data.data.forEach(item => {
          this.store_lists.push(item);
        });
      });
    },
    get_more_data(data) {
      console.log(data);
      if (!this.cur_lists.selectId) {
        this.finished = true;
      }
      let params = {
        id: this.cur_lists.selectId,
        limit: 10,
        store_id: this.$route.query.store_id
      };
      api.goods_lists(params).then(res => {
        // debugger;
        this.cur_lists = res.data.extend;
        res.data.data.forEach(item => {
          this.store_lists.push(item);
        });
        this.loading = false;
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
  padding: 10px;
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
