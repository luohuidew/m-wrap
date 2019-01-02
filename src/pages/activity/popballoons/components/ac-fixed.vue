<template>
  <div class="pop-nav" v-show="show_fixed">
    <ul>
      <li>
        <img src="/static/img/popballoons/yinle.png"
          alt="music"
          srcset="">
      </li>
      <li @click="show_rules">
        <img src="/static/img/popballoons/Rules.png"
          alt="rules"
          srcset="">
      </li>
      <li @click="to_history">
        <img src="/static/img/popballoons/Records.png"
          alt="recode"
          srcset="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {},
  computed: {
    show_fixed(){
      let temp = this.$route.fullPath.indexOf('popballoons-gift')==-1;
      // console.log(this.$route.fullPath.indexOf('popballoons-gift'));
      return temp
    }
  },
  methods: {
    show_rules(){
      this.$emit('open','open')
    },
    to_history() {
      let params = {
        name: "popballoons-gift"
      };
      this.$router.push(params);
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.pop-nav {
  text-align: right;
}
li {
  img {
    height: 60px;
    width: auto;
    margin: 2px 0;
  }
  &:nth-child(2) {
    img {
      height: 45px;
    }
  }
}
</style>
