<template>
 <div class='detail'>
    <detail-content></detail-content>
 </div>
</template>

<script>
import detailContent from "./detail-content";
export default {
  components: {
    detailContent,
  }
};
</script>

<style lang='scss' scoped>
  .detail {
    height:100%;
    display: flex;
    flex-direction: column;
  }
</style>
