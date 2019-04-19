<template>
  <div class="reset-pass-page">
    <form class="reset-box">
      <label for="pass1">New password</label>
      <input id="pass1"
        type="text"
        v-model="pass1"
        placeholder="new passwords">
      <div class="lists-desc">
        <span>Your Password must contain </span>
        <ul>
          <li>· 8 characters minimum </li>
          <!-- <li>· At least one letter</li>
          <li>· At least one number</li> -->
        </ul>
      </div>
      <label for="pass2">Confirm new password</label>
      <input id="pass2"
        type="text"
        v-model="pass2"
        placeholder="checked passwords">
    </form>
    <div class="done-btn">
      <a href="javascript:;"
        @click="reset_pass">Done</a>
    </div>
  </div>
</template>

<script>
import { sha256 } from "js-sha256";
import api from "@/api/user";
export default {
  name: "",
  data() {
    return {
      pass1: "",
      pass2: ""
    };
  },
  mounted() {},
  computed: {
    form_data() {
      // debugger
      if (this.pass1 == this.pass2) {
        return {
          email: this.$route.query.email,
          password: this.pass2
        };
      }
    }
  },
  methods: {
    // send_email(email) {
    //   api.send_email({ email: email }).then(res => {
    //     console.log(res);
    //   });
    // },
    reset_pass() {
      if (this.form_data.password < 8) {
        this.$toast("password format is incorrect.");
        return false;
      } else {
        let params = {
          email: this.form_data.email,
          password: sha256(this.form_data.password)
        };
        api.updateForgetPassword(params).then(res => {
          console.log(res);
          this.$router.push({
            path: "/login"
          });
        });
      }
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.reset-pass-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px 0;
  color: #040404;
}
/*  */
.reset-box {
  padding: 80px 25px 20px 25px;
  label {
    display: block;
    font-size: 18px;
    font-weight: bold;
    padding: 10px 0;
    padding-left: 10px;
  }
  input {
    width: 300px;
    height: 40px;
    padding-left: 10px;
    background-color: #efefef;
  }
}
/*  */
.lists-desc {
  font-size: 12px;
  color: #9b9b9b;
  padding: 10px 0;
}
/*  */
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
