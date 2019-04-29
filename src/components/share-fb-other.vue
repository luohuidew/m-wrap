<template>
  <div class="fb-share-button"
    :data-href="changeUrl"
    data-layout="button"
    data-size="small"
    data-mobile-iframe="true"><a target="_blank"
      :href="'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(changeUrl)+'&amp;src=sdkpreparse'"
      class="fb-xfbml-parse-ignore">
      <slot name="icon">

      </slot>
    </a></div>
    <!-- <div class="fb-share-button" data-href="https://m.weget.com/pay?goods_id=4371946329551596&amp;num=1&amp;purchase_type=2" data-layout="button_count" data-size="small" data-mobile-iframe="true"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fm.weget.com%2Fpay%3Fgoods_id%3D4371946329551596%26num%3D1%26purchase_type%3D2&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div> -->
</template>

<script>
export default {
  name: "",
  data() {
    return {
      cur_location: this.changeUrl
    };
  },
  props: ["changeUrl"],
  watch: {
    $route: {
      handler() {
        // let base_url = "https://m.weget.com";
        // if (window.location.origin.indexOf("https") === -1) {
        //   base_url = "http://wap.middleware.weget.com";
        // }
        // this.cur_location = base_url + this.changeUrl;
      },
      immediate: true
    }
  },
  created() {
    // let base_url = "https://m.weget.com";
    // if (window.location.origin.indexOf("https") === -1) {
    //   base_url = "http://wap.middleware.weget.com";
    // }
    // this.cur_location = decodeURI(base_url + this.changeUrl);
    // console.log(window.location.href);
    // console.log(this.cur_location);
  },
  mounted() {},
  computed: {},
  methods: {},
  components: {}
};
</script>

<style lang='scss' scoped>
.fb-share-button {
    display: inline-block;
  a {
    color: #2c2c2c;
  }
}
</style>
