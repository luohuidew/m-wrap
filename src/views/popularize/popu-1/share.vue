<template>
    <div class="warp">
     <img src="img/text.png"  width="100%"/>

    </div>
</template>

<script>

import clipboard from 'clipboard';

export default {
  data() {
    return {
      link: 'https://m.weget.com/popularize/login/index?share_user_id='
    };
  },
  created() {
      if (window.location.origin.indexOf("https") === -1) {
          this.link = "wap.middleware.weget.com/popularize/login/index?share_user_id=";
      }
  },
  mounted() {
  },
  computed: {},
  methods: {
    copyLink() {
          let coyd = new clipboard('.copy');
          coyd.on('success', ()=> {
              this.$toast('Copy Success');
              coyd.destroy()
          });
      },
  },
  components: {
  }
};
</script>

<style lang='scss' scoped>
.warp {
    background: url("./img/bg.jpg");
}
</style>
