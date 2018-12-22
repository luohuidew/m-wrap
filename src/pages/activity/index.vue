<template>
  <div class="activity">
    <div class="page-content">
      <act-scroll></act-scroll>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import actScroll from './components/act-scroll'
export default {
  data() {
    return {
      
    };
  },
  
  components: {
    actScroll
  }
};
</script>

<style lang='scss' scoped>
.activity {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.page-content {
  width: 100%;
  flex: 1;
  overflow: auto;
  // overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  & > div {
    width: 100%;
    /* 用来进行scroll-view 的触发不至于撑不开元素 */
    min-height: 101%;
    // overflow-x: hidden;
  }
}
</style>
