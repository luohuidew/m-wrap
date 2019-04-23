<template>
 <div class="welog-theme-page">   
   <div class="theme-content">
     <van-list v-model="loading"
      :finished="finished"
      :finished-text="''"
      :loading-text="'Loading...'"
      @load="get_more_data()">
      <ul 
        slot="default">
        <li v-for="(item,index) in goodsListsData"
          :key="index">
         <card :cardData="item"></card>
        </li>
      </ul>
    </van-list>    
   </div>
 </div>
</template>

<script>
import card from "@/views/welog/components/theme-card";
import api from "@/api/welog"
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
        id: this.selectId
      };
      api.welogTheme(params).then(res => {
        if (!res.data.data.length) {
          this.finished = true;
          this.loading = false;
        }
        res.data.data.forEach(item => {
          this.selectId = res.data.extend.select_id;
          this.loading = false;
          this.goodsListsData.push(item);
        });
      });
    }
  },
  components: {
    card
  }
};
</script>

<style lang='scss' scoped>

 
</style>
