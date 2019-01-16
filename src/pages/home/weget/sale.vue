<template>
  <div class='sale'>
    <div class="weget-title">
      <p class="main-title">Exclusive Beauty Deals</p>
      <!-- <p class="min-title">Exclusive Beauty Deals</p> -->
    </div>
    <div class="list-box">
      <template v-for="(item,index) in sku_lists">
        <goods-card :key="index"
          :sku="item"></goods-card>
      </template>
    </div>
  </div>
</template>

<script>
import goodsCard from "@/components/goodsCard.vue";
import api from "@/api/goods";
export default {
  name: "",
  data() {
    return {
      sku_lists: [],
      selectId: ""
    };
  },
  created() {
    this.init_data({limit:12});
  },
  methods: {
    init_data(change_params) {
      api.get_lists(change_params).then(res => {
        //  console.log(res);

        res.data.data.forEach(item => {
          this.sku_lists.push(item);
        });
        this.selectId = res.data.extend.selectId;        
      });
    }
  },
  components: {
    goodsCard
  }
};
</script>

<style lang='scss' scoped>
.sale {
  padding: 10px 10px;
}
.main-title {
  font-size: 22px;
}
</style>
