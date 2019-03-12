<template>
  <div class="coupon-item">
    <div class="coupon-desc">
      <h2>
        Save $6.00
      </h2>
      <p>Off Your Purcse Of $20 Or More</p>
      <p>Expires On 01/09/2019</p>
    </div>
    <div class="coupon-control-box">
      <a href="javascript:;"
        class="disable-get">
        Coupon Added
      </a>
      <a href="javascript:;"
        class="pending-get">
        Get It Now
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {},
  components: {}
};
</script>

<style lang='scss' scoped>
.coupon-item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 15px;
  margin-top: 15px;
  border: 1px solid #D8D8D8;
  border-radius: 8px;
  &::before,&::after {
    position: absolute;
    content: '';
    display: block;
    height: 10px;
    background-color: #fff;
    width: 10px;
    border-radius: 50%;
    // border-top: 1px solid #d8d8d8;
    // border-right: 1px solid #d8d8d8;
    // left: -5px;
    top: 50%;
    transform: translateY(-50%);
  };
  &::before{
    border-right: 1px solid #d8d8d8;
    left: -5px;
  }
  &::after{
    border-left: 1px solid #d8d8d8;
    right: -5px;
  }
}
/* desc */
.coupon-desc {
  flex:1;
  padding-right: 15px;
  h2 {
    color: #D70E19;
    font-weight: bold;  
    padding-bottom: 5px;  
  }
  p {
    color: #9B9B9B;
    font-size: 10px;
    line-height: 15px;
  }

}
/* anniuzu */
.coupon-control-box {
  a {
    display: block;
    width: 110px;
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    font-weight: bold;
    border-radius: 12px;
    text-align: center;
    // border-radius:
  }
  .disable-get {
    color: #898989;
    background-color: #f3f3f3;
  }
  .pending-get {
    color: #ffffff;
    background-color: #d70e19;
  }
}
</style>
