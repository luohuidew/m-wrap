<template>
  <div class="popballoons">
    <div class="pop-logo"
      v-if="show_logo">
      <img src="/static/img/popballoons/WeGetLOGO.png"
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
    acRules
  }
};
</script>

<style lang='scss'>
.popballoons {
  position: relative;
  background-color: #2b2b2b;
  font-size: 14px;
}
.pop-logo {
  // height: 35px;
  width: auto;
  padding: 14px 0 14px 0;
  text-align: center;
  img {
    height: 35px;
    width: auto;
  }
}
.fixed-nav {
  position: absolute;
  right: 0;
  top: 114px;
  z-index: 20;
}
</style>
