
<template>
  <div class="app-wrap">
    <span>GET THE APP:</span>
    <a v-if="$CM.is_ipone()" href="https://itunes.apple.com/us/app/weget-mall/id1439887303?mt=8">
      <img src="../img/Icon@3x.png" />
    </a>
    <a v-else href="https://play.google.com/store/apps/details?id=com.weget.www">
      <img src="../img/Clip 2@3x.png" />

    </a>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  created() {
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.app-wrap {
  width:345px;
  height:46px;
  background:rgba(243,243,243,1);
  border-radius:28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  margin-top: 15px;
  span{
    font-size:16px;
    font-weight:800;
    color:rgba(0,0,0,1);
  }
  img {
    height: 22px;
    margin-left: 15px;
  }
}


</style>
