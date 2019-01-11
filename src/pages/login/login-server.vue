<template>
  <div class="login-server"
    @click.stop="keep_open">
    <div class="logo-box">
      <img src="/static/img/icon/logo 白大.png"
        alt="">
    </div>
    <div class="form-content"
      :class="{'change':is_selected===1}">
      <ul class="tab-btn">
        <li v-for="(item,index) in tab_title"
          @click="toggle_form(index)"
          :class="{'active':index===is_selected}"
          :key="index">{{item}}</li>
      </ul>
      <ul class="form-box">
        <li v-if="is_selected===1">
          <p class="email"><input type="text"
              placeholder="Email Address"
              v-model="login_data.email"></p>
          <p class="password"><input type="password"
              placeholder="Password"
              v-model="login_data.password"></p>
          <p class="forget"><span @click.stop="to_reset">Forgot Password？</span></p>
          <p class="link-btn">
            <a href="javascript:;"
              @click="login">Login</a>
          </p>
        </li>
        <li v-else>
          <p class="email"><input type="text"
              placeholder="Email Address"
              v-model="signup_data.email"></p>
          <p class="password"><input type="password"
              placeholder="Password"
              v-model="signup_data.password"></p>
          <p class="display-name">
            <input type="text"
              class="first-name"
              placeholder="First Name"
              v-model="signup_data.first_name">
            <input type="text"
              class="last-name"
              placeholder="Last Name"
              v-model="signup_data.last_name">
          </p>
          <p class="link-btn">
            <a href="javascript:;"
              @click="singup">Sign Up</a>
          </p>
        </li>
      </ul>
    </div>
    <div class="agree-policy">
      <p>By joining, you agree to our</p>
      <p class="unline-text"><span @click.stop="to_policy"> Privacy Policy</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      is_selected: 0,
      tab_title: ["SIGN UP", "SIGN IN"],
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
      this.$router.push({ name: "reset-pass" });
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
$basecolor: #d70e19;
.login-server {
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
}
.logo-box {
  padding: 36px 0 20px 0;
  text-align: center;
  img {
    // height:
  }
}
.form-content {
  width: 266px;
  margin: 0 auto;
  padding: 25px 20px 22px 20px;
  background-color: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  transform: rotateY(0);
  transition: all 0.8s;
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
.form-box {
  p {
    width: 100%;
    padding-top: 9px;
    input {
      height: 36px;
      width: 100%;
      background-color: #efefef;
      border: none;
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
      color: rgba(137, 137, 137, 1);
      line-height: 14px;
      text-decoration: underline;
    }
  }
  .link-btn {
    height: 36px;
    background: rgba(215, 14, 25, 1);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    border-radius: 18px;
    margin-top: 30px;
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
</style>
