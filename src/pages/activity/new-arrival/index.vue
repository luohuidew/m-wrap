<template>
 <div>
  <banner></banner>
  <div class="filter-box">
    <span class="sort">sort</span>
    <span class="filter">filter</span>
  </div>
  <div class="goods-card-box">
    <template v-for="n in 10">
      <goods-card :key="n"></goods-card>
    </template>
  </div>
 </div>
</template>

<script>
import banner from "@/components/banner.vue";
import goodsCard from "@/components/goodsCard.vue";
export default {
  data() {
    return {};
  },
  components: {
    banner,
    goodsCard
  }
};
</script>

<style lang='scss' scoped>
.filter-box {
  font-size: 14px;
  text-align: right;
  border-bottom: 1px solid #e9e9e9;
  span {
    margin: 12px 0;
    padding: 0 17px;
    display: inline-block;
  }
  .filter {
    border-left: 1px solid #ccc;
  }
}
.goods-card-box {
  padding:10px 10px 0 10px;
}
</style>
