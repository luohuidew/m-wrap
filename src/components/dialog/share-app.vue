<template>
  <div v-if="show_share">
    <a class="downLoad"
      :href="to_app"
      target="_blank">Open In App</a>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      show_share:true,
      to_app: "/"
    };
  },
  props: ["token"],
  created() {},
  mounted() {
    this.init_data();
  },
  computed: {
    // share_token_href() {
    //   return this.token
    //     ? "https://www.weget.com/route?share_token=" + this.token
    //     : "https://itunes.apple.com/us/app/weget-mall/id1439887303?mt=8";
    // }
  },
  methods: {
    init_data() {
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
      let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      let isWeget = localStorage.getItem('device');
      if(isWeget){
        this.show_share = false;
      }
      // debugger;
      if (isiOS) {
        // debugger;
        console.log(this.token);
        if (this.token) {
          this.to_app = "https://www.weget.com/route?share_token=" + this.token;
        } else {
          this.to_app =
            "https://itunes.apple.com/us/app/weget-mall/id1439887303?mt=8";
        }
      } else {
        this.to_app = "/";
      }
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.downLoad {
  position: fixed;
  right: 0;
  top: 32px;
  // transform: translateY(-50px);
  display: block;
  height: 32px;
  line-height: 32px;
  // width: 89px;
  padding: 0px 16px 0px 9px;
  z-index: 100;
  text-align: center;
  font-size: 14px;
  // line-height: 50px;
  color: #fff;
  background: rgba(215, 14, 25, 0.6) url("/static/img/icon/get now大@2x.png")
    no-repeat right center;
  background-size: 14px 14px;
  border-radius: 15px 0 0 15px;
}
</style>

