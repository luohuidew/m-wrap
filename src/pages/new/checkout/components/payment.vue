<template>
  <div class="payment-box">
    <h3>Payment Method</h3>
    <ul>
      <li :class="{'active':is_select_pay===1}"
        @click="is_select_method(1)">
        <p class="pay-type">
          <span>Credit/Debit Card</span>
          <img src="/static/img/icon/pay/Visa-light.png"
            alt="">
          <img src="/static/img/icon/pay/MasterCard-light.png"
            alt="">
          <img src="/static/img/icon/pay/Maestro-light.png"
            alt="">
          <img src="/static/img/icon/pay/AmericanExpress-light.png"
            alt="">
        </p>
      </li>
      <li :class="{'active':is_select_pay===2}"
        @click="is_select_method(2)">
        <p class="pay-type">
          <span>PayPal</span>
          <img src="/static/img/icon/pay/Group 14.png"
            alt="">
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      is_select_pay: 1
    };
  },
  computed: {},
  created() {},
  methods: {
    is_select_method(val) {
      this.is_select_pay = val;
      this.$emit('changeSelectPay', val);
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.payment-box {
  padding: 15px;
  h3 {
    font-size:18px;
    font-weight:400;
    color:rgba(0,0,0,1);
    line-height: 20px;
    margin-bottom: 10px;
  }
  ul {
    border-radius:4px;
    padding: 10px;
    border:1px solid rgba(225,225,225,1);
  }
  li {
    border-bottom: 1px solid rgba(225,225,225,1);
    &:last-child{
      border-bottom: none
    }
    padding: 10px 0;
    p {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      /*background: url("/static/img/icon/选择 灰@2x.png") no-repeat right center;*/
      background-size: 15px;
    }
    span {
      margin-right: 20px;
    }
    img {
      height: 20px;
      width: 34px;
    }
  }
  /*.active {*/
    /*p {*/
      /*background: url("/static/img/icon/选择红@2x.png") no-repeat right center;*/
      /*background-size: 15px 15px;*/
    /*}*/
  /*}*/
}
</style>
