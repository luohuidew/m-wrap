<template>
  <div class="reset-pass-page">
    <div class="write-foem">
      <h3>Reset Password</h3>
      <p>To reset password, enter your email. We will send the verification code.</p>
      <div class="form-input">
        <ul class="uer-info">
          <li>
            <input type="text"
              class="email-input"
              v-model="form_data.email"
              placeholder="Registered email"><span class="send-btn" @click="send_email(form_data.email)">SEND</span>
          </li>
          <li>
            <input type="text"
              class="email-input"
              v-model="form_data.code"
              placeholder="Code">
          </li>
          <li>
            <input type="password"
              class="email-input"
              v-model="form_data.password"
              placeholder="New password">
          </li>
        </ul>
      </div>
    </div>
    <div class="done-btn">
      <a href="javascript:;" @click="reset_pass">Done</a>
    </div>
  </div>
</template>

<script>
import { sha256 } from "js-sha256";
import api from '@/api/user'
export default {
  name: "",
  data() {
    return {
      form_data: {
        email: "",
        code: "",
        password: '',
      }
    };
  },
  mounted() {},
  computed: {},
  methods: {
    send_email(email){
      api.send_email({email:email}).then(res=>{
        console.log(res);
      })
    },
    reset_pass(){
      let params = {
        email:this.form_data.email,
        email_code:this.form_data.code,
        password:sha256(this.form_data.password)
      };
      api.reset_pass(params).then(res=>{
        console.log(res);
        this.$router.push({
          path:'/login?autoshow=1'
        })
      })
    },
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.reset-pass-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f3f3f3;
  padding: 16px 0;
  color: #040404;
  h3 {
    padding: 10px 20px;
  }
  p {
    font-size: 14px;
    padding: 0 20px;
  }
  .write-foem {
    flex: 1;
  }
}
.uer-info {
  background-color: #fff;
  margin-top: 20px;
  padding: 0 20px;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    &:nth-last-child(1) {
      border-bottom: none;
    }
    input {
      flex: 1;
      border: none;
      outline: none;
      height: 60px;
      font-size: 14px;
    }
    .send-btn {
      background-color: #d70e19;
      color: #fff;
      height: 30px;
      border-radius: 15px;
      padding: 6px 10px;
    }
  }
}
.done-btn {
  padding: 10px 0 10px 0;
  // background-color: #fff;
  text-align: center;
  a {
    display: inline-block;
    width: 250px;
    height: 40px;
    background: #d70e19;
    -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    text-align: center;
    margin: 0 20px;
    line-height: 40px;
    color: #fff;
  }
}
</style>
