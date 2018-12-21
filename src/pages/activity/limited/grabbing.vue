<template>
 <div class="grabbing">
     <div class="grabbing-content" v-for="(item,index) in 2" :key="index">
    <time-box></time-box>
    <template v-for="(item,index) in 5" >
        <goods-card :key="index"></goods-card>
    </template>
     </div>
 </div>
</template>

<script>
import timeBox from "./grabbing/time-card.vue";
import goodsCard from "@/components/goodsCard-remind.vue";
export default {
  data() {
    return {};
  },
  components: {
    goodsCard,
    timeBox
  }
};
</script>

<style lang='scss' scoped>
.time-box {
  padding: 15px 0;
  margin-top: 2px;
  background-color: #000;
  color: #fff;
  p {
    text-align: center;
  }
}
.des-time {
  font-size: 24px;
  line-height: 36px;
}
.run-time {
  font-size: 16px;
  i {
    padding: 3px;
    background-color: #d80c18;
  }
}
</style>
