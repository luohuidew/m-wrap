<template>
  <div class="ac-chr-banner">
    <img src="/static/img/christmas/广告.png"
      alt=""
      @click="to_home">
  </div>
</template>

<script>
import api from "@/api/christmas";
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {
    to_home() {
      api.back_index().then(res => {
        console.log(res);
      });
      if (window.weget_mobile_type === "iOS") {
        let share_params = {
          type: 105,
          data: {}
        };
        window.webkit.messageHandlers.javaScriptToNative.postMessage(
          share_params
        );
      } else {
        this.$router.push("/");
      }
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.ac-chr-banner {
  margin-top: -40px;
  padding-bottom: 20px;
  img {
    width: 100%;
    height: auto;
  }
}
</style>
