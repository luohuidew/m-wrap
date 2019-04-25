<template>
  <div class="facebook-login-box">
    <div class="facebook-box">
      <fb @login="getUser"></fb>
    </div>
   
  </div>
</template>

<script>
// import tempdialog from '@/components/dialog/temp-dialog';
import fb from "./auth/facebook";
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
      other_form: {}
    };
  },
  mounted() {
    // this.init_data();
  },
  computed: {},
  methods: {
    init_data() {
      let temp_href = sessionStorage.getItem("history_href");
      let token = sessionStorage.getItem("token");
      if (token) {
        // this.show_dialog = true;
        api.checkUser({ token: token }).then(res => {
          if (temp_href) {
            if (temp_href.indexOf("login") != -1) {
              // window.location.replace(location.origin);
              window.location.href = window.location.origin;
            } else {
              window.location.href = temp_href;
            }
          }
        });
      }
    },
    getUser(){

    },
    __getUser(data) {
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
      if(email){
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
          last_name: data.res.last_name
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
      // alert(token);
      this.$store.state.token = token;
      // console.log(this.$store.state.token);
      // sessionStorage.setItem("token", token);
      setToken(token);
      // console.log(getToken());
      // window.location.href = this.$route.query.redirect;
      // if (
      //   sessionStorage.getItem("token") &&
      //   sessionStorage.getItem("history_href")
      // ) {
      //   setTimeout(() => {
      //     window.location.href = sessionStorage.getItem("history_href");
      //     // location.reload();
      //   }, 300);
        // this.go_home(token);
        // debugger
       window.location.href = this.$route.query.redirect;
    },
    show_box_login() {
      this.login_pass = true;
    },
  },
  components: {
    fb,
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

  position: absolute;
  left: 50%;
  top: 457px;
  transform: translateX(-50%);
  button {
    width: 284px;
    height: 54px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    background-color: #3b55a0;
    border-radius: 27px;
    background-image: none !important;
    .spinner {
      box-sizing: border-box;
      width: 40px;
      height: 74%;
      left: 18px;
      top: 8px;
    }
    img {
      top: 10px !important;
      left: 16px;
    }
  }
}

.chang-other {
  font-size: 11px;
  color: rgba(0, 0, 0, 1);
  line-height: 14px;
  padding: 20px 0 10px 0;
  text-align: center;
}
.login-server-btn {
  height: 54px;
  border-radius: 27px;
  border: 1px solid;
  text-align: center;
  line-height: 54px;
  font-size: 14px;
  font-weight: bold;
}
.logo-box {
  padding: 36px 0 20px 0;
  text-align: center;
  img {
    // height:
  }
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

