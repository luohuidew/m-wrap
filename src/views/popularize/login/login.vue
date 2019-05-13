<template>
  <div class="facebook-login-box">
    <div class="header">
      <img src="./img/top.jpg"  width="100%"/>
    </div>
    <div class="login-wrap">
      <template v-if="!ua.no_facebook">
        <fb class="other-btn"
            @login="getUserFb"></fb>
        <google class="other-btn" @login="getUserGoogle"></google>
        <instagram @login="getUserIns" class="other-btn"></instagram>
      </template>
      <div class="lins">
        <span>or continue with email</span>
      </div>
    </div>
    <temp-dialog v-if="show_dialog"
      @close="show_dialog=false">
      <div slot="tips"
        class="email-box"
        @click.stop="show_dialog=true">
        <div class="bind-email-box">
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
    <login-serve @submit-form="to_home"
      @open="login_pass=true">

    </login-serve>
    <div class="footer">
      <img src="./img/content.jpg"  width="100%"/>
      <div class="store">
        <a  target="_blank" href = "https://play.google.com/store/apps/details?id=com.weget.www">
          <img src="./img/Google Play Badge US Copy@3x.png" />
        </a>
        <a target="_blank" href = "https://itunes.apple.com/us/app/weget-fashion-marketplace/id1439887303?mt=8">
          <img src="./img/appStroe.png"  />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// import tempdialog from '@/components/dialog/temp-dialog';
import fb from "./components/facebook";
import google from "./components/google";
import instagram from "./components/instagram";
import loginServe from "./components/loginServe";
import tempdialog from "@/components/dialog/temp-dialog";
// import "./css/base.scss";
import api from "@/api/login";
import getShareUserApi from "@/api/trial";
import apiBase from "@/api/base";
import { getToken, setUserShareId, getUserShareId } from "@/utils/auth";
import { sha256 } from "js-sha256";
export default {
  name: "login",
  data() {
    return {
      userNew: false,
      share_user_id: this.$route.query.share_user_id,
      show_dialog: false,
      login_pass: false,
      bind_email: "",
      other_form: {},
      ua: {
        no_facebook: this.$CM.is_weixin() || this.$CM.is_snapchat()
        // this.$CM.is_ins() || this.$CM.is_weixin() || this.$CM.is_snapchat()
      }
    };
  },
  created() {
    this.TOAST = undefined //全局加载弹框
    this.shareReturn()
    this.login_pass = this.$route.query.autoshow == "1" ? true : false;
  },
  beforeRouteEnter (to, from, next) {
    if (getToken()) {
      const share_user_id = to.query.share_user_id;
      if (share_user_id) { // 判断是否是分享的页面
        if(!getUserShareId()) {
          getShareUserApi.getUserInfo().then(res => { // 获取UserShareId
            const id = res.data.id
            setUserShareId(id)
            if (id === share_user_id) {
              // 已登录同一个用户
              const urls = window.origin + '/popularize/popu-1?selefUser=true'
              window.location.replace(urls);
            }else {
              // 已登录不是同一个用户 老用户
              const urls = window.origin + '/popularize/popu-1?UserIsOld=true'
              window.location.replace(urls);
            }
          });
        } else{
          if(getUserShareId() === share_user_id) {
            // 已登录同一个用户
            const urls = window.origin + '/popularize/popu-1?selefUser=true'
            window.location.replace(urls);
          } else { // 已登录不是同一个用户
            const urls = window.origin +  '/popularize/popu-1?UserIsOld=true'
            window.location.replace(urls);
          }
        }
      } else { // 普通登陆页面跳转
        if (to.query.redirect) {
          window.location.replace(to.query.redirect);
        } else {
          window.location.replace(window.origin + "/home");
        }
      }
    } else {
      next()
    }

  },
  mounted() {
    // this.init_data();
  },
  computed: {},
  methods: {
    shareReturn() {
      if (getToken()) {
        if (this.share_user_id) { // 判断是否是分享的页面
          if(!getUserShareId()) {
            getShareUserApi.getUserInfo().then(res => { // 获取UserShareId
              const id = res.data.id
              setUserShareId(id)
              if (id === this.share_user_id) {
                  // 已登录同一个用户
                // const param = {
                //   path:'/popularize/popu-1',
                //   jquery: {
                //     selefUser: true
                //   }
                // }
                // this.$router.push(param)
                const urls = window.origin + '/popularize/popu-1?selefUser=true'
                window.location.replace(urls);
              }else {
                // 已登录不是同一个用户 老用户
                // const param = {
                //   path:'/popularize/popu-1',
                //   jquery: {
                //     selefUser: false
                //   }
                // }
                // this.$router.push(param)
                const urls = window.origin + '/popularize/popu-1?UserIsOld=true'
                window.location.replace(urls);
              }
            });
          } else{
            if(getUserShareId() === this.share_user_id) {
              // 已登录同一个用户
              // const param = {
              //   path:'/popularize/popu-1',
              //   jquery: {
              //     selefUser: true
              //   }
              // }
              // this.$router.push(param)
              const urls = window.origin + '/popularize/popu-1?selefUser=true'
              window.location.replace(urls);
            } else { // 已登录不是同一个用户
              if(this.userNew) { // 新用户
                // const param = {
                //   path:'/popularize/popu-1',
                //   jquery: {
                //     selefUser: false,
                //     UserIsNew: true
                //   }
                // }
                // this.$router.push(param)
                const urls = window.origin + '/popularize/popu-1?UserIsNew=true'
                window.location.replace(urls);
              } else { // 老用户
                // const param = {
                //   path:'/popularize/popu-1',
                //   jquery: {
                //     selefUser: false
                //   }
                // }
                // this.$router.push(param)
                const urls = window.origin +  '/popularize/popu-1?UserIsOld=true'
                window.location.replace(urls);
              }
            }
          }
        } else { // 普通登陆页面跳转
          if (this.$route.query.redirect) {
            window.location.replace(this.$route.query.redirect);
          } else {
            window.location.replace(window.origin + "/home");
          }
        }
      }
    },
    check_pre_login(per_params, params) {
      let that = this;
      this.TOAST = this.$toast.loading({
        mask: true,
        forbidClick:true,
        loadingType: "spinner",
        message: 'Loading',
      });
      api
        .preLogin(per_params)
        .then(res => {
          console.log(res);
          return res;
        })
        .then(res => {
          if (res.data.is_signUp == 1) {
            this.TOAST.clear();
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
      // console.log(data);
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
    getUserIns(data) {
      // console.log(data);
      // debugger
      let full_name = data.full_name.split(" ");
      let params = {
        user_name: data.username,
        last_name: full_name[full_name.length-1],
        first_name: full_name[0],
        email: data.email,
        // tel: user.phoneNumber ? user.phoneNumber : undefined,
        bind_id: data.id,
        type: 3,
        photo: data.profile_picture
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
    getUserFb(data) {
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
      this.check_pre_login(per_params, params);
      // let that = this;
      // api
      //   .preLogin(per_params)
      //   .then(res => {
      //     console.log(res);
      //     return res;
      //   })
      //   .then(res => {
      //     if (res.data.is_signUp == 1) {
      //       // this.show_dialog = true;
      //       this.$set(this.other_form, "referer", this.$route.query.redirect);
      //     } else {
      //     }
      //     api.thirdLogin(params).then(res => {
      //       let data = res.data;
      //       that.set_token(data.token);
      //     });
      //     // console.log(res, "第二个res");
      //   });
    },
    link_email(email) {
      if (email) {
        let params = this.other_form;
        params.share_user_id = this.share_user_id
        this.TOAST = this.$toast.loading({
          mask: true,
          forbidClick:true,
          loadingType: "spinner",
          message: 'Loading',
        });
        api.thirdLogin(params).then(res => {
          let data = res.data;
          this.userNew = true;
          this.set_token(data.token);
        });
      }
    },
    to_home(data) {
      console.log(data);
      if (data.type === "signup") { // 注册
        if (data.res.password.trim().length < 8) {
          this.$toast("password format is incorrect.");
          return false;
        } else {
          this.TOAST = this.$toast.loading({
            mask: true,
            forbidClick:true,
            loadingType: "spinner",
            message: 'Loading',
          });
          let params = {
            email: data.res.email,
            password: sha256(data.res.password),
            first_name: data.res.first_name,
            last_name: data.res.last_name,
            referer: this.$route.query.redirect,
            share_user_id:this.share_user_id
          };
          api.sign_up(params).then(res => {
            console.log(res);
            this.userNew = true;
            this.set_token(res.data.token);
            apiBase.visitSaveLog({eventName: 'signupSuccess'}).then(()=>{})

            // debugger;
          });
          apiBase.visitSaveLog({eventName: 'signup'}).then(()=>{})

        }
      } else { // 登陆
        let params = {
          email: data.res.email,
          password: sha256(data.res.password)
        };
        this.TOAST = this.$toast.loading({
          mask: true,
          forbidClick:true,
          loadingType: "spinner",
          message: 'Loading',
        });
        api.loginByUsername(params).then(res => {
          apiBase.visitSaveLog({eventName: 'signinSuccess'}).then(()=>{})
          this.set_token(res.data.token);
        });
        apiBase.visitSaveLog({eventName: 'signin'}).then(()=>{})
      }
    },
    set_token(token) { // 登陆注册第三方登录成功后调用方法
      this.$store.dispatch('SetToken', token).then((suerInfo)=> {
        setUserShareId(suerInfo.uid)
        this.TOAST.clear();
        this.shareReturn()
      })
    },
    setShareUId() {
      getShareUserApi.getUserInfo().then(res => { // 获取UserShareId
        setUserShareId(res.data.id)
        this.shareReturn()
      });
    },
    show_box_login() {
      this.login_pass = true;
    }
  },
  components: {
    fb,
    instagram,
    google,
    loginServe,
    "temp-dialog": tempdialog
  }
};
</script>

<style lang='scss' scoped>
.facebook-login-box {
  background-color: #fff;

  .header{

  }
  .login-wrap {
    padding: 0px 15px;
    margin-bottom: 20px;
    img {
      margin-bottom: 15px;
    }
    .lins {
      position: relative;
      border-top: 1px solid #9B9B9B;
      width: 100%;
      height: 1px;
      span {
        position: absolute;
        left: 50%;
        padding: 0px 10px;
        background-color: #fff;
        transform: translate(-50%, -50%);
        height: 20px;
        line-height: 20px;
        color: #9B9B9B ;
        font-size: 12px;
      }
    }
    .other-btn {
      margin-bottom: 20px;
    }
  }

}
.footer {
  .store {
    padding: 20px 20px;
    display: flex;
    justify-content: space-between;
    a{
      width: 40%;
      display: inline-block;
      height: 40px;
      img {
        width: 100%;
      }
    }

  }
}
.pass-box {
  position: relative;
  height: 100%;
  overflow: auto;
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
  background-color: #fff;
}
.bind-email-box {
  width: 300px;
  margin: 0 auto;
  padding: 25px 20px 22px 20px;
  background-color: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  transform: rotateY(0);
  transition: all 0.8s;
  p {
    width: 100%;
    // padding-top: 9px;
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
    margin-top: 20px;
    &:hover {
      opacity: 0.8;
    }
    a {
      display: block;
      height: 100%;
      font-size: 14px;
      line-height: 36px;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      // line-height: 18px;
      text-align: center;
    }
  }
}
</style>

