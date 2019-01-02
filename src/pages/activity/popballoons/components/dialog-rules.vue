<template>
  <div class="rules-content">
    <div class="bg-wrapper">
      <div class="bg-img">
        <!-- <img class="box-bg" src="/static/img/christmas/矢量智能对象@2x_39.png" alt=""> -->
        <div class="btn-group">
          <div class="rules-content">
            <ul>
              <li>1.The user starts the balloon game and invites friends to pop the balloons.</li>

              <li>2.An invited user opens the invitation link and when the new account is created, a balloon is popped. Each person has only one chance to help pop another’s balloon per day.</li>

              <li>3.Completely pop all the balloons within 48 hours and receive a coupon.</li>

              <li>4.After your balloon game ends you may start another balloon game, but you can only receive three coupons during the event.</li>

              <li>5.You can check your balloon game’s progress by checking the activity section of the APP, or using the link sent to you through email when the activity is started.</li>

              <li>6.The gifts will update regularly. Offer available while suppies last during each round.</li>

              <li>7.The event will start on January 1st at 12:00 AM and will be completed at 11:59 PM on January 31th. The balloon game can only be started and completed during the event.</li>

              <li>8.The coupon will be valid online for 30 days after completing the tree. Shipping and handling may apply.</li>

              <li>9.All types of cheating are prohibited. User accounts suspected of cheating will have the identity verified by email and eligibility for the reward may be terminated.</li>
              <li class="gray-font">* Weget Group Inc. reserves all rights for final explanation.</li>

            </ul>
          </div>
          <!-- <img src="/static/img/christmas/icon/christmas_rules.png" alt> -->
          <span class="close-icon"
            @click="close_dialog">
            <img src="/static/img/popballoons/X.png"
              alt=""></span>
        </div>
      </div>
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
  methods: {
    close_dialog() {
      this.$emit("close", "close");
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.rules-content {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
}
.bg-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
.bg-img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  // background: url("/static/img/christmas/规则明细-你看用哪个.png") no-repeat
  //   center center;
  // background-size: 100% 100%;
  .box-bg {
    width: 100%;
    height: auto;
  }
  .btn-group {
    position: absolute;
    top: 55%;
    transform: translateY(-50%);
    left: 0;
    height: 90vh;
    width: 100%;
    text-align: center;
    .rules-content {
      height: 100%;
      background: url("/static/img/popballoons/eventrules.png") no-repeat top
        center;
      font-size: 12px;
      background-size: auto 100%;
      padding: 26% 16% 14% 16%;
      ul {
        height: 100%;
        overflow: auto;
        li {
          padding-bottom: 14px;
          text-align: left;
        }
        .gray-font {
          color: #ccc;
        }
      }
    }
    img {
      height: 80vh;
    }
    .close-icon {
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, -45px);
      img {
        height: 28px;
        width: 28px;
      }
    }
  }
  .tips-text {
    position: absolute;
    top: 70px;
    left: 12px;
    width: 140px;
    height: 70px;
  }
}
</style>
