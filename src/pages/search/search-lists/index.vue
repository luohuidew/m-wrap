<template>
  <div class="query-lists"  ref="list">
    <noData v-if="finished && sku_lists.length === 0 ">
      <span>No Product in this category</span>
    </noData>
      <van-list v-model="loading"
                :immediate-check="false"
                :finished="finished"
                :finished-text="''"
                :loading-text="'Loading...'"
                @load="get_more_data">
        <ul class="pick-lists"
            ref="scoorl"
            slot="default">
          <li v-for="(item,index) in sku_lists"
              :key="index">
            <goods-card :key="index"
                        :cardData="item"></goods-card>
          </li>
        </ul>
      </van-list>

  </div>
</template>

<script>
import api from "@/api/goods";
import noData from "@/components/noData";
import goodsCard from "@/components/card-column-auto";
export default {
  name: "",
  data() {
    return {
      loading: false,
      finished: false,
      selectId: undefined,
      goodsListsData: [],
      sku_lists: [],
      cur_lists_data: undefined,
      sctop:0
    };
  },
  created() {
    this.init_data();
  },
  mounted() {
  },
  beforeRouteLeave(to, from, next){
    localStorage.setItem('scroolTop',this.$refs.list.scrollTop );
    next()
  },
  activated () {
    this.$nextTick(function(){
      let scroolTop = localStorage.getItem('scroolTop');
      this.$refs.list.scrollTop=scroolTop;
      localStorage.setItem('scroolTop','')
    })
  },
  computed: {},
  beforRouteLeave (to, from, next) {
    localStorage.setItem('scroolTop',this.$refs.list.scrollTop);
    next()
  },
  methods: {
    init_data(params = this.$route.query) {
      // let params = this.$route.query;
      let route_path = this.$route.query.label;
      // if(route_path){
      //   debugger
      //    this.$route.meta.title = route_path;
      // }
      params.label = undefined;
      params.id = this.selectId;
      api.get_lists(params).then(res => {
        this.cur_lists_data = res.data.extend;
        if (!res.data.data.length) {
          this.finished = true;
          this.loading = false;
        }else{
          res.data.data.forEach(item => {
            this.selectId = res.data.extend.selectId;
            this.loading = false;
            this.sku_lists.push(item);
          });
        }
      });
    },
    get_more_data(data) {
      // console.log('hot caroll');
      let params = this.$route.query;
      params.id = this.cur_lists_data?this.cur_lists_data.selectId:undefined;
      this.init_data(params);
    }
  },
  components: {
    goodsCard,
    noData
  }
};
</script>

<style lang='scss' scoped>
.query-lists {
  height: 100%;
  overflow: auto;
}
.pick-lists {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px 15px;
  // padding-top: 10px;
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
