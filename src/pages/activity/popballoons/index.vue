<template>
  <div class="popballoons">
    <img src="/static/img/popballons/WeGetLOGO.png"
      alt=""
      class="pop-logo">
   <router-view></router-view>  
    <ac-link></ac-link>
  </div>
</template>

<script>
import acLink from './components/ac-link'
export default {
  name: "",
  data() {
    return {
    };
  },
  created() {
  },
  mounted() {
    // alert(window.webkit);
  },
  computed: {},
  components: {   
    acLink
  }
};
</script>

<style lang='scss'>
.popballoons {
  background-color: #2B2B2B;
}
.pop-logo {
    height: 35px;
    width: auto;
    margin: 18px 0 8px 0;
  }
</style>
