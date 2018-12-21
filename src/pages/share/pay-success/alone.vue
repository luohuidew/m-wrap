<template>
  <div class="success-feedback">
    <p class="bgc"></p>
    <ul class="heart-success">
      <li class="heart-img">
        <img src="/static/img/icon/heart-success.png" alt="">
      </li>
      <li class="heart-img">
        <span class="red-text">PAYMENT SUCCESS</span>
      </li>
      <li class="order-no">
        <p>Order # <span id="order"></span></p>
      <p>Order Total <span id="total"></span> </p>
      </li>
    </ul>
    <p class="share-title">
      <span class="red-text"> 1 Person </span>
      <span> Needed</span>
      <br>
      <span>Share to Friends</span>
    </p>
    <ul class="share-box">
      <li>
        <img src="/static/img/icon/messager.png"
          alt=""
          srcset="">
        <p>Messager</p>
      </li>
      <li>
        <img src="/static/img/icon/facebook.png"
          alt=""
          srcset="">
        <p>Facebook</p>
      </li>
      <li>

        <img src="/static/img/icon/ins.png"
          alt=""
          srcset="">
        <p>Instagram</p>
      </li>
    </ul>
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
.success-feedback {
  // padding:30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  p,
  li {
    text-align: center;
  }
}
.bgc {
  height:30px;
  background-color: #f3f3f3;
}
.heart-img {
    background-color: #f3f3f3;
    padding-bottom:30px;
    span {
      font-weight: bold;
    }
}
.order-no {
  padding:20px;
  border-bottom: 1px solid #e9e9e9;
  p{
  text-align: left;
  padding:5px;
  }
}
.cor-btn {
  padding: 10px 0 30px 0;
  background-color: #fff;
  text-align: center;
  a {
    display: inline-block;
    width: 250px;
    height: 40px;
    background: rgba(215, 14, 25, 1);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    &:hover {
      opacity: 0.8;
    }
  }
}
.group-tips {
  font-size: 12px;
  padding: 10px 0;
  span {
    color: #d70e19;
  }
}
.share-title {
  color: #898989;
  padding: 30px 0 30px 0;
  font-weight: bold;
}
.share-box {
  display: flex;
  justify-content: center;
  padding-bottom: 58px;
  li {
    padding-right: 16px;
  }
  img {
    height: 34px;
    width: 34px;
  }
}
</style>
