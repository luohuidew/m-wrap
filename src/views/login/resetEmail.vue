<template>
  <div class="resend-email-box">
    <div class="box-title">
      <img @click="$router.go(-1)"
        src="/static/images/icon/login/返回 大@2x.png"
        alt="">
      <span>Reset Password</span>
    </div>
    <div class="box-desc">
      To reset password, enter your email. We will send the verification code.
    </div>
    <form>
      <input class="box-input"
        type="text"
        placeholder="Registered Email"
        v-model="resetEmail">
    </form>
    <div class="send-email-box">
      <button @click="to_tips(resetEmail)">Send</button>
    </div>
  </div>
</template>

<script>
import api from "@/api/user";
export default {
  name: "",
  props: {},
  data() {
    return {
      resetEmail: ""
    };
  },
  computed: {},
  created() {},
  methods: {
    to_tips(email) {
      let params = {
        path: "/login/reset-success",
        query: {
          email: email
        }
      };
      if (email) {
        api
          .forgetPassword({ email: email })
          .then(res => {
            this.$router.push(params);
          })
          .catch(err => {
            console.log(err);
            // debugger;
          });
      }
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.resend-email-box {
  width: 300px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px 25px 48px 25px;
}
.box-title {
  display: flex;
  align-content: center;
  padding-bottom: 35px;
  img {
    height: 24px;
    width: 24px;
  }
  span {
    flex: 1;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }
}
.box-desc {
  font-size: 14px;
  color: #4a4a4a;
  padding-bottom: 20px;
}
.box-input {
  height: 40px;
  width: 100%;
  font-size: 14px;
  padding-left: 10px;
  background-color: #efefef;
}
/*  */
.send-email-box {
  text-align: center;
  button {
    display: inline-block;
    height: 40px;
    width: 250px;
    text-align: center;
    color: #ffffff;
    font-size: 16px;
    line-height: 40px;
    background-color: #d70e19;
    margin-top: 40px;
    border-radius: 20px;
  }
}
</style>
