<template>
  <div class="popballoons">
     <ac-top></ac-top>
    <div class="pop-logo"
      v-if="show_logo">
      <img src="/static/img/popballoons/icon/logo.png"
        alt="">
    </div>
    <div class="fixed-nav">
      <ac-fixed @open="is_rules_show=true"></ac-fixed>
    </div>
    <router-view></router-view>
    <ac-link></ac-link>
    <ac-rules v-if="is_rules_show"
      @close="is_rules_show=false"></ac-rules>
  </div>
</template>

<script>
import acLink from "./components/ac-link";
import acFixed from "./components/ac-fixed";
import acRules from "./components/dialog-rules";
import acTop from './components/ac-top'
export default {
  name: "",
  data() {
    return {
      is_rules_show: false
    };
  },
  computed: {
    show_logo() {
      let is_during = this.$route.fullPath.indexOf("popballoons-during") !== -1;
      let is_group = this.$route.fullPath.indexOf("popballoons-groupbuy") !== -1;
      return !(is_during || is_group);
    }
  },
  created() {},
  mounted() {
    // alert(window.webkit);
  },
  components: {
    acLink,
    acFixed,
    acRules,
    acTop
  }
};
</script>

<style lang='scss'>
.popballoons {
  position: relative;
  display: flex;
  flex-direction: column;
  background: url('/static/img/popballoons/background-all.png') repeat center center;
  background-size: 100%;
  font-size: 14px;
}
.pop-logo {
  // height: 35px;
  width: auto;
  padding: 14px 0 7px 0;
  text-align: center;
  img {
    height: 35px;
    width: auto;
  }
}
.fixed-nav {
  position: absolute;
  right: 0;
  top: 70px;
  z-index: 20;
}
</style>
