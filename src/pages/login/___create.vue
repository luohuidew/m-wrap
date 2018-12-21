<template>
  <div class="create">
    <p class="title">Create Account</p>
    <div class="username">
      <input type="text"
        class="user-input"
        placeholder="Email Address"
        v-model="singup.username_up">
    </div>
    <div class="userpassword">
      <input type="password"
        class="user-input"
        placeholder="Create Password"
        v-model="singup.passwords_up">
    </div>
    <p class="agree-text">
      <span :class="singup.checked?'active':''" @click="singup.checked=!singup.checked">I agree to the</span><a href="javascript:;">Privacy Policy</a>
    </p>
    <a class="login-btn"
      href="javascript:;"
      @click="sign_up_user">Create Account</a>
    <p class="slice-line">— OR CREAT ACCOUNT —</p>
    <div class="login-other">
      <slot name="auth"></slot>  
    </div>
    <!-- <p class="create-des">New to WeGet？Create Account</p> -->
  </div>
</template>

<script>
import "./css/base.scss";
import api from "@/api/login";
import { setToken, getToken } from "@/utils/auth";
import { sha256 } from "js-sha256";
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
      }
    };
  },
  //  beforeRouteEnter (to, from, next) {
  //   // 在渲染该组件的对应路由被 confirm 前调用
  //   // 不！能！获取组件实例 `this`
  //   // 因为当守卫执行前，组件实例还没被创建
  //   if(getToken()){
  //     next(vm=>{
  //       console.log(vm);
  //     })
  //   }
  // },
  mounted() {
    this.init_data();
  },
  watch: {},
  computed: {
    // activeName() {
    //   return this.$route.query.type === "signup" ? "second" : "first";
    // }
  },
  methods: {
    init_data() {},
    send_email() {
      // this.send_time = "";
      // console.log(999);
      this.button_dis = true;
      let countdown = 60;
      let settime = () => {
        if (countdown == 0) {
          this.button_dis = false;
          this.send_time = "Get Code";
          countdown = 60;
          return;
        } else {
          this.send_time = "resend(" + countdown + ")";
          countdown--;
        }
        setTimeout(function() {
          settime();
          // console.log(999);
        }, 1000);
      };
      settime();
    },
    handleClick(a, b) {
      console.log(a, b);
    },
    go_home(token) {
      // location.replace('/');
      location.href="/";
      // let params = {
      //   token : token
      // }
      // console.log(params.token)
      // api.getUserInfo(params).then(res => {
      //   console.log(res);
      //   this.$store.state.user = res.data;
      //   console.log(this.$store.state.user);
      //   this.$router.push({ path: "/mall/home" });
      // });
    },
    reset_password() {
      this.dialogFormVisible = true;
    },
    sign_up_user() {
      if (this.singup.checked) {
        let params = {
          email: this.singup.username_up,
          password: sha256(this.singup.passwords_up)
        };
        if (
          params.email.search(
            /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
          ) != -1
        ) {
          api.sign_up(params).then(res => {
            console.log(res);
            this.set_token(res.data.token);
          });
        } else {
          // this.$alert("Error Email!");
        }
      }
    },
    set_token(token) {
      this.$store.state.token = token;
      console.log(this.$store.state.token);
      setToken(token);
      console.log(getToken());
      if (getToken()) {
        this.go_home(token);
      }
    },
    login() {
      let params = {
        email: this.username_login,
        password: this.passwords_login
      };
      console.log(params);
      if (
        params.email.search(
          /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
        ) != -1
      ) {
        api.loginByUsername(params).then(res => {
          console.log(res);
          console.log(res.data.token);
          this.set_token(res.data.token);
        });
      } else {
        this.$alert("Error Email!");
        return flase;
      }
    }
  },
  components: {}
};
</script>


<style lang="scss">
</style>
