<template>
  <div >
    <div class="form-content">
      <ul class="form-box">
        <li v-if="is_selected=='signIn'">
          <p>
            <label>
              <h5>Email Address</h5>
              <input type="text"
                placeholder="Email Address"
                v-model="login_data.email">
            </label>
          </p>
          <p>
            <label class="sign-in">
              <dl>
                <dt>Password</dt>
                <dd @click.stop="to_reset">Forgot password?</dd>
              </dl>
              <input type="password"
              placeholder="Password"
              v-model="login_data.password">
            </label>
          </p>
          <p class="link-btn"  @click="login">
           Sign In
          </p>
        </li>
        <li v-else>
          <form>
            <p class="display-name">
              <label>
                <h5>First Name</h5>
                <input type="text"
                       autocomplete="off"
                       class="first-name"
                       placeholder="First Name"
                       v-model="signup_data.first_name">
              </label>
              <label>
                <h5>Last Name</h5>
              <input type="text"
                class="last-name"
                autocomplete="off"
                placeholder="Last Name"
                v-model="signup_data.last_name">
              </label>
            </p>
            <p >
              <label>
                <h5>Email Address</h5>
              <input type="text"
                placeholder="Email Address"
                v-model="signup_data.email" autocomplete="rad">
              </label>
            </p>
            <p >
              <label>
                <h5>Password</h5>
              <input type="password"
                placeholder="Password"
                v-model="signup_data.password" autocomplete="rad">
              </label>
            </p>
          </form>
          <div class="privacy-box">
            <span>Your Password must contain </span>
            <ul>
              <li>· 8 characters minimum </li>
              <!-- <li>· At least one letter</li>
              <li>· At least one number</li> -->
            </ul>
            <div class="terms-box">
              <div class="agree-text">
                <span> By clicking Sign up, Continue with Facebook, or Continue with Google, you agree to our </span>
                <router-link to="/statement">
                  Privacy Policy & Terms of Use
                </router-link>
              </div>
            </div>
          </div>
          <p class="link-btn" @click="singup">
            Create Account
          </p>

        </li>
      </ul>
      <div class="other-login">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      is_checked: true,
      tab_title: ["SIGN IN", "SIGN UP"],
      login_data: {
        email: "",
        password: ""
      },
      signup_data: {
        email: "",
        password: "",
        first_name: "",
        last_name: ""
      }
    };
  },
  mounted() {},
  props: {
    is_selected: {
      default: 'signIn'
    }
  },
  computed: {},
  methods: {
    singup() {
      let data = {
        type: "signup",
        res: this.signup_data
      };
      this.$emit("submit-form", data);
    },
    login() {
      let data = {
        type: "login",
        res: this.login_data
      };
      this.$emit("submit-form", data);
    },
    to_policy() {
      this.$router.push({ name: "statement" });
    },
    to_reset() {
      let params = {
        path: "/login/reset-email"
      };
      this.$router.push(params);
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
$basecolor: #d70e19;

input {
  outline-color: invert;
  outline-style: none;
  outline-width: 0px;
  border: none;
  border-style: none;
  text-shadow: none;
  -webkit-appearance: none;
  -webkit-user-select: text;
  outline-color: transparent;
  box-shadow: none;
}
.form-content {
  width:100%;
  margin: 0 auto;
  padding: 15px;
  padding-top: 0px;
  background-color: #fff;
  border-radius: 7px;
  transform: rotateY(0);
  transition: all 0.8s;
}
.privacy-box {
  font-size: 10px;
  color: #9b9b9b;
  line-height: 1.5;
  padding: 10px 0 15px 0;
  .terms-box {
    padding-top: 20px;
    display: flex;
    align-items: center;
    .checked-icon {
      img {
        height: 16px;
        width: 16px;
        margin-right: 6px;
      }
    }
    .agree-text {

      a {
        display: inline-block;
        font-size: 10px;
        color: #444444;
        text-decoration-line: underline;
        margin-left: 4px;
      }
    }
  }
}
.agree-policy {
  display: flex;
  padding: 30px 0;
  justify-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    color: #fff;
    font-size: 12px;
    text-align: center;
    line-height: 18px;
  }
  .unline-text {
    text-decoration: underline;
  }
}
.form-content.change {
  // transform: rotateY(360deg);
}
/*  */
.form-box {
  p {
    margin-top: 20px;
    label {
      width: 100%;
      &.sign-in {
        dl {
          display: flex;
          justify-content: space-between;
          dt {
            font-size:14px;
            font-weight:bold;
            color:rgba(0,0,0,1);
            margin-bottom: 10px;
          }
          dd {
            text-decoration: underline;
            font-size:12px;
            font-weight:400;
            color:rgba(155,155,155,1);
          }
        }
      }
      h5 {
        font-size:14px;
        font-weight:bold;
        color:rgba(0,0,0,1);
        margin-bottom: 10px;
      }
    }
    input {
      height: 50px;
      width: 100%;
      background-color: #fff;
      border-radius:4px;
      border:1px solid rgba(225,225,225,1);
      outline: none;
      padding-left: 10px;
      font-size: 13px;
    }
  }

  .display-name {
    display: flex;
    justify-content: space-between;
    label {
      width: 48%;
      h5 {
        font-size:14px;
        font-weight:bold;
        color:rgba(0,0,0,1);
        margin-bottom: 10px;
      }
    }
  }
  .forget {
    text-align: right;
    height: 45px;
    span {
      font-size: 11px;
      font-weight: 600;

      line-height: 14px;
      text-decoration: underline;
    }
  }
  .link-btn {
    height: 46px;
    background:rgba(0,0,0,1);
    border-radius: 23px;
    text-align: center;
    line-height: 46px;
    font-size:14px;
    font-weight:bold;
    color:rgba(255,255,255,1);
    &:hover {
      opacity: 0.8;
    }

  }
}
.tab-btn {
  display: flex;
  margin-bottom: 20px;
  li {
    width: 50%;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 10px;
  }
  .active {
    border-bottom: 2px solid $basecolor;
  }
}
/*  */
.other-login {
  margin-top: 20px;
}
</style>
