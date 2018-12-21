<template>
  <div class="feedback-group">
    <p class="success-tips">GROUP SUCCESS</p>
    <p class="time-tips">Shipping within 24 h</p>
    <p class="avator">
      <img src="https://avatars1.githubusercontent.com/u/8121621?v=4"
        alt=""
        srcset="">
      <img src="https://avatars1.githubusercontent.com/u/8121621?v=4"
        alt=""
        srcset="">
    </p>
    <p class="cor-btn">
      <a href="https://yideluo.com/route/3975649350606046/">
        DownLoad APP
      </a>
    </p>
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
.feedback-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  p,
  li {
    text-align: center;
  }
}
.avator {
  padding-bottom:40px;
  img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin: 0 10px;
  }
}
.cor-btn {
  padding: 10px 0 30px 0;
  background-color: #fff;
  text-align: center;
  border-top:6px solid #f3f3f3;
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
.success-tips {
  font-size: 16px;
  padding: 20px 0 10px 0;
  font-weight: bold;
  color: #d70e19;
}
.time-tips {
  font-size: 12px;
  padding-bottom: 20px;
  color: #d70e19;
}
</style>
