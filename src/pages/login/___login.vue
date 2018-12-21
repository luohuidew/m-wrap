<template>
  <div class="login-in">
    <p class="title">Log In</p>
    <input type="text"
      class="user-input"
      placeholder="Email Address"
      v-model="username_login">
    <input type="password"
      class="user-input"
      placeholder="Password"
      v-model="passwords_login">
    <p class="forget">
      <!-- <a href="javascript:;">Forgot Password ?</a> -->
    </p>
    <a class="login-btn"
      href="javascript:;"
      @click="login()">Log In</a>
    <p class="create-des"
      @click="to_create">New to WeGet？Create Account</p>
    <p class="slice-line">— OR CREAT ACCOUNT —</p>
    <div class="login-other">
    </div>
    <temp-dialog v-if="show_dialog">
      <van-loading slot="tips"
        class="loading-box"
        color="white" />
    </temp-dialog>
  </div>
</template>

<script>
import tempdialog from "@/components/dialog/temp-dialog";
import "./css/base.scss";
import api from "@/api/login";
import { setToken, getToken } from "@/utils/auth";
import { sha256 } from "js-sha256";
// import auth from "./auth";
export default {
  name: "",
  data() {
    return {
      username_login: "",
      passwords_login: "",
      singup: {
        username_up: "",
        passwords_up: "",
        checked: false
      },
      show_dialog: false
    };
  },
  mounted() {
    this.init_data();
  },
  watch: {},
  computed: {},
  methods: {
    init_data() {
      let temp_href = sessionStorage.getItem("history_href");
      let token = sessionStorage.getItem("token");
      if (token) {
        // this.show_dialog = true;
        api.checkUser({ token: token }).then(res => {
          if (temp_href) {
            if (temp_href.indexOf("load") != -1) {
              // location.replace(location.origin);
              location.href=location.origin;
            } else {
              location.href = temp_href;
            }
          }
        });
      }
    },
    set_token(token) {
      this.$store.state.token = token;
      console.log(this.$store.state.token);
      sessionStorage.setItem("token", token);
      setToken(token);
      console.log(getToken());
      if (
        sessionStorage.getItem("token") &&
        sessionStorage.getItem("history_href")
      ) {
        setTimeout(() => {
          location.reload();
        }, 300);
        // this.go_home(token);
      }
    },
    to_create() {
      this.$router.push({ path: "/load/create" });
    },
    login() {
      let params = {
        email: this.username_login,
        password: sha256(this.passwords_login)
      };
      console.log(params);
      if (
        params.email.search(
          /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
        ) != -1
      ) {
        this.show_dialog = true;
        api.loginByUsername(params).then(res => {
          console.log(res);
          console.log(res.data.token);
          this.set_token(res.data.token);
          if (res.code !== 1000) {
            this.show_dialog = false;
          }
        });
      } else {
        // this.$alert("Error Email!");
        return flase;
      }
    }
  },
  components: {
    "temp-dialog": tempdialog
  }
};
</script>

<style lang="scss">
.loading-box {
  position: absolute;
  left: 50%;
  top: 43%;
  transform: translateX(-50%);
}
</style>
