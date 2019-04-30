<template>
  <div class="login-server"
    @click.stop="keep_open">
    <div class="form-content"
      :class="{'change':is_selected===1}">
      <ul class="tab-btn">
        <li v-for="(item,index) in tab_title"
          @click="toggle_form(index)"
          :class="{'active':index===is_selected}"
          :key="index">{{item}}</li>
      </ul>
      <ul class="form-box">
        <li v-if="is_selected===0">
          <p class="email"><input type="text"
              placeholder="Email Address"
              v-model="login_data.email"></p>
          <p class="password"><input type="password"
              placeholder="Password"
              v-model="login_data.password"></p>
          <p class="forget"></p>
          <p class="link-btn">
            <a href="javascript:;"
              @click="login">Log In</a>
          </p>
        </li>
        <li v-else>
          <form>
            <p class="display-name">
              <input type="text"
                autocomplete="off"
                class="first-name"
                placeholder="First Name"
                v-model="signup_data.first_name">
              <input type="text"
                class="last-name"
                autocomplete="off"
                placeholder="Last Name"
                v-model="signup_data.last_name">
            </p>
            <p class="email"><input type="text"
                placeholder="Email Address"
                v-model="signup_data.email" autocomplete="rad"></p>
            <p class="password"><input type="password"
                placeholder="Password"
                v-model="signup_data.password" autocomplete="rad"></p>
          </form>
          <div class="privacy-box">
            <span>Your Password must contain </span>
            <ul>
              <li>· 8 characters minimum </li>
              <!-- <li>· At least one letter</li>
              <li>· At least one number</li> -->
            </ul>
            <div class="terms-box">
              <span class="checked-icon"
                @click="is_checked=!is_checked">
                <img v-if="is_checked"
                  src="/static/images/icon/login/选择红@2x.png"
                  alt="">
                <img v-else
                  src="/static/images/icon/login/选择 灰@2x.png"
                  alt="">
              </span>
              <div class="agree-text">
                <span>I agree to the</span>
                <router-link to="/statement">Privacy Policy
                </router-link>
              </div>
            </div>
          </div>
          <p class="link-btn">
            <a href="javascript:;"
              @click="singup">Create Account</a>
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
      is_selected: 0,
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
  computed: {},
  methods: {
    toggle_form(index) {
      this.is_selected = index;
    },
    keep_open() {
      this.$emit("open", 1);
    },
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

.form-content {
  width:100%;
  margin: 0 auto;
  padding: 15px;
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
      display: flex;
      a {
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
    width: 100%;
    padding-top: 9px;
    input {
      height: 36px;
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
    input {
      width: 49%;
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
    height: 36px;
    background: rgba(215, 14, 25, 1);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    border-radius: 18px;
    &:hover {
      opacity: 0.8;
    }
    a {
      display: block;
      height: 100%;
      font-size: 14px;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      // line-height: 18px;
      text-align: center;
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
