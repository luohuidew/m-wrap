<template>
  <div class="pop-apply-coupon">
    <div class="apply-header">
      <p>
        Congrats!<br />
        You Got It!<br />
        Use your coupon NOW!
      </p>
    </div>
    <ul class="apply-coupon">
      <li class="apply-title">
        <img src="/static/img/popballoons/icon/coupon_apply.png"
          alt=""
          srcset="">
        <img src="/static/img/popballoons/btn/btn-6apply@2x.png"
          alt=""
          srcset="">
      </li>
      <li class="apply-end-time">
        <p>Yves Saint laurent LIP STAIN 101 Chrome Red Clash</p>
        <p>Expires on 20/12/2108</p>
      </li>
    </ul>
    <div class="apply-desc">
      <img src="/static/img/popballoons/background/googlecopy@3x.png"
        alt=""
        srcset="">
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {},
  components: {}
};
</script>

<style lang='scss' scoped>
.pop-apply-coupon {
  padding: 0 20px 0 15px;
}
.apply-header {
  width: 100%;
  height: 180px;
  background: url("/static/img/popballoons/background/coupon_box.png") no-repeat
    center center;
  background-size: 100% auto;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 24px;
    text-align: center;
  }
}
.apply-coupon {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 180px;
  margin: 30px 0;
  background: url("/static/img/popballoons/background/background_scroll.png")
    no-repeat center center;
  background-size: 100% auto;
  padding: 40px 35px;
  .apply-title {
    display: flex;
    justify-content: space-between;
    img {
      height: 25px;
      width: auto;
    }
  }
  .apply-end-time {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 14px;
    padding: 10px 0;
    color: #2c2c2c;
  }
}
.apply-desc {
  width: 100%;
  img {
    width: 100%;
  }
}
</style>
