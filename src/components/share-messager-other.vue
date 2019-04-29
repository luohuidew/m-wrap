<template>
  <div class="fb-share-button"
    :data-href="changeUrl"
    data-layout="button"
    data-size="small"
    data-mobile-iframe="true">
      <a target="_blank"
        @click="share"
      class="fb-xfbml-parse-ignore">
      <slot name="icon">

      </slot>
    </a></div>
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
  },
  created() {
  },
  mounted() {},
  computed: {},
  methods: {
      share() {
           const url = 'fb-messenger://share?link=' + encodeURIComponent(this.changeUrl) + '&app_id=' + encodeURIComponent(884670545062683)
          location.href= url
      }
  },
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
