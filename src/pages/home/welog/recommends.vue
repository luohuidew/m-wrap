<template>
 <div class="recommends">
    <div class="public-log clearfix" v-for="n in 20" :key="n">
      <log-list></log-list>
    </div>  
  </div>
</template>

<script>
import logList from '@/components/logCard.vue';
export default {
  data() {
    return {};
  },
  components: {logList}
};
</script>

<style lang="scss" scoped>
.recommends {
  width: 100%;
  font-size: 0;
  padding-left:10px;
}
.public-log {
  font-size: 16px;
  float: left;
  width: 50%;
  padding: 10px;
  padding-left:0;
  &:nth-child(2n-2) {
    float: right;
  }  
}
</style>
