<template>
  <div class="facebook-login-box">
    <div class="facebook-box">
      <!-- <google @login="getUserGoogle"></google> -->
      <template v-if="!ua.no_facebook">
        <fb @login="getUser"></fb>
        <p class="chang-other">— OR USE YOUR EMAIL —</p>
      </template>
      <div class="login-server-btn"
        @click="show_box_login">
        <img src="../../../static/img/icon/login_email.png"
          class="face_login">
      </div>
    </div>
    <temp-dialog v-if="show_dialog"
      @close="show_dialog=false">
      <div slot="tips"
        class="email-box"
        @click.stop="show_dialog=true">
        <!-- <bind-mail></bind-mail> -->
        <div class="logo-box">
          <img src="/static/img/icon/logo 白大.png"
            alt="">
        </div>
        <div class="form-content">
          <p class="tips-title">Link with email address. <br />Get coupons and more.</p>
          <p>
            <input type="text"
              v-model="other_form.email"
              placeholder="Email Address">
          </p>
          <p class="link-btn">
            <a href="javascript:;"
              @click="link_email(other_form.email)">Link Email Address</a>
          </p>
        </div>
      </div>
    </temp-dialog>
    <temp-dialog v-if="login_pass"
      @close="login_pass=false">
      <div class="pass-box"
        slot="tips">
        <login-server @submit-form="to_home"
          @open="login_pass=true"></login-server>
      </div>
    </temp-dialog>
  </div>
</template>

<script>
// import tempdialog from '@/components/dialog/temp-dialog';
import fb from "./auth/facebook";
import google from "./auth/google.vue";
import loginServer from "./login-server";
import tempdialog from "@/components/dialog/temp-dialog";
// import "./css/base.scss";
import api from "@/api/login";
import { setToken, getToken } from "@/utils/auth";
import { sha256 } from "js-sha256";
export default {
  name: "login",
  data() {
    return {
      show_dialog: false,
      login_pass: false,
      bind_email: "",
      other_form: {},
      ua: {
        no_facebook: this.$CM.is_ins() || this.$CM.is_weixin() || this.$CM.is_snapchat()
      }
    };
  },
  created() {
    this.login_pass = this.$route.query.autoshow == "1" ? true : false;
  },
  mounted() {
    // this.init_data();
  },
  computed: {},
  methods: {
    // init_data() {
    //   let temp_href = sessionStorage.getItem("history_href");
    //   let token = sessionStorage.getItem("token");
    //   if (token) {
    //     // this.show_dialog = true;
    //     api.checkUser({ token: token }).then(res => {
    //       if (temp_href) {
    //         if (temp_href.indexOf("login") != -1) {
    //           // window.location.replace(location.origin);
    //           window.location.href = window.location.origin;
    //         } else {
    //           window.location.href = temp_href;
    //         }
    //       }
    //     });
    //   }
    // },
    check_pre_login(per_params, params) {
      let that = this;
      // alert(JSON.stringify(per_params));
      api
        .preLogin(per_params)
        .then(res => {
          console.log(res);
          return res;
        })
        .then(res => {
          if (res.data.is_signUp == 1) {
            this.show_dialog = true;
            this.$set(this.other_form, "referer", this.$route.query.redirect);
          } else {
            api.thirdLogin(params).then(res => {
              let data = res.data;
              that.set_token(data.token);
            });
          }
          // console.log(res, "第二个res");
        });
    },
    getUserGoogle(data) {
      console.log(data);
      let params = {
        user_name: data.getName,
        last_name: data.getFamilyName,
        first_name: data.getGivenName,
        email: data.getEmail,
        // tel: user.phoneNumber ? user.phoneNumber : undefined,
        bind_id: data.getId,
        type: 1,
        photo: data.getImageUrl
      };
      // this.bind_email = data.email;
      for (let key in params) {
        this.other_form[key] = params[key];
      }
      // if (!getToken()) {
      // alert(JSON.stringify(params));
      let per_params = {
        bind_id: params.bind_id,
        type: params.type
      };
      this.bind_email = params.email;
      this.check_pre_login(per_params, params);
    },
    getUser(data) {
      let params = {
        user_name: data.name,
        last_name: data.last_name,
        first_name: data.first_name,
        email: data.email,
        // tel: user.phoneNumber ? user.phoneNumber : undefined,
        bind_id: data.id,
        type: 2,
        photo: data.picture.data.url
      };
      // this.bind_email = data.email;
      for (let key in params) {
        this.other_form[key] = params[key];
      }
      // if (!getToken()) {
      // alert(JSON.stringify(params));
      let per_params = {
        bind_id: params.bind_id,
        type: params.type
      };
      let that = this;
      // alert(JSON.stringify(per_params));
      api
        .preLogin(per_params)
        .then(res => {
          console.log(res);
          return res;
        })
        .then(res => {
          if (res.data.is_signUp == 1) {
            this.show_dialog = true;
            this.$set(this.other_form, "referer", this.$route.query.redirect);
          } else {
            api.thirdLogin(params).then(res => {
              let data = res.data;
              that.set_token(data.token);
            });
          }
          // console.log(res, "第二个res");
        });
    },
    link_email(email) {
      if (email) {
        let params = this.other_form;
        api.thirdLogin(params).then(res => {
          let data = res.data;
          this.set_token(data.token);
        });
      }
    },
    to_home(data) {
      console.log(data);
      if (data.type === "signup") {
        let params = {
          email: data.res.email,
          password: sha256(data.res.password),
          first_name: data.res.first_name,
          last_name: data.res.last_name,
          referer: this.$route.query.redirect
        };
        api.sign_up(params).then(res => {
          console.log(res);
          this.set_token(res.data.token);
        });
      } else {
        let params = {
          email: data.res.email,
          password: sha256(data.res.password)
        };
        api.loginByUsername(params).then(res => {
          // console.log(res);
          console.log(res.data.token);
          this.set_token(res.data.token);
        });
      }
    },
    set_token(token) {
      setToken(token);
      if (this.$route.query.redirect) {
        window.location.replace(this.$route.query.redirect);
      } else {
        window.location.replace(window.origin + "/home");
      }
    },
    show_box_login() {
      this.login_pass = true;
    }
  },
  components: {
    fb,
    google,
    loginServer,
    "temp-dialog": tempdialog
  }
};
</script>

<style lang='scss'>
.facebook-login-box {
  position: relative;
  height: 100%;
  background: #fff url("/static/img/elements/user_login_bg1.jpg") no-repeat top
    left;
  background-size: 100% auto;
  overflow: auto;
}
.facebook-box {
  // padding: 10px;
  width: 75%;
  height: auto;

  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);
  button {
    .spinner {
      box-sizing: border-box;
      width: 40px;
      height: 74%;
      left: 18px;
      top: 8px;
    }
  }
}
.pass-box {
  position: relative;
  height: 100%;
  overflow: auto;
}
.chang-other {
  font-size: 15px;
  color: rgba(0, 0, 0, 1);
  padding: 20px 0;
  text-align: center;
}
.login-server-btn {
  width: 100%;
  height: auto;
  border-radius: 27px;
  font-size: 14px;
  font-weight: bold;
  .face_login {
    width: 100%;
  }
}
.logo-box {
  padding: 36px 0 20px 0;
  text-align: center;
}
.email-box {
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
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
  .tips-title {
    font-size: 18px;
    font-weight: normal;
    padding: 30px 10px;
    color: rgba(155, 155, 155, 1);
    line-height: 30px;
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
</style>

