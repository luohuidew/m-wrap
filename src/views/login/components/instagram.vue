<template>
  <div class="ins-login-box"
    @click="to_open_ins">

  </div>
</template>

<script>
import api from "@/api/base";
export default {
  name: "",
  props: {},
  data() {
    return {
      base_url: "https://api.instagram.com/oauth/authorize/",
      client_id: "466859d97e514d1881b535b69338bd94",
      // redirect_uri:
      //   "https://m.weget.com/login/index?redirect=https%3A%2F%2Fm.weget.com%2Fdetail%3Fsku_id%3D5582860556791138%26type%3Dkeep%26goods_id%3D5582860016774841%26store_id%3D8666%26count%3D1"
      redirect_uri: window.location.href
    };
  },
  computed: {},
  created() {
    this.initIns();
  },
  methods: {
    to_open_ins() {
      let open_url = `${this.base_url}?client_id=${
        this.client_id
      }&redirect_uri=${encodeURIComponent(
        this.redirect_uri
      )}&response_type=token`;
      // debugger;
      window.location.href = open_url;
    },
    initIns() {
      let hash_str = window.location.hash;
      if (hash_str) {
        // debugger;
        let access_token = hash_str.split("=")[hash_str.split("=").length - 1];
        let params = {
          access_token: access_token
        };
        api.ins_info(params).then(res => {
          this.$emit("login", res.data.data);
        });
      }
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.ins-login-box {
  display: inline-block;
  height: 30px;
  width: 30px;
  border-radius: 3px;
  background: #fff url("/static/images/icon/login/Instagram@3x.png") no-repeat
    center center;
  background-size: 30px 30px;
  cursor: pointer;
}
</style>
