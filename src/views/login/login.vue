<template>
  <div class="facebook-login-box">
    <div class="header" v-show="is_selected === 'signUp'">
      <img src="./img/top.jpg"  width="100%"/>
    </div>
    <div class="login-wrap">
      <div class="title">
        <h2 v-show="is_selected === 'signIn'">Sign in</h2>
        <p v-show="is_selected === 'signIn'">New to WeGet?
          <span @click="is_selected = 'signUp'">Sign up</span>
        </p>
        <h2 v-show="is_selected === 'signUp'">Sign up</h2>
        <p v-show="is_selected === 'signUp'">Already have an account?
          <span @click="is_selected = 'signIn'">Sign in</span>
        </p>
      </div>
      <template v-if="!ua.no_facebook">
        <fb class="other-btn" @login="getUserFb" v-if="!is_ins" ></fb>
        <google v-if="!is_facebook" class="other-btn" @login="getUserGoogle"></google>
        <instagram  @login="getUserIns" class="other-btn"></instagram>
        <div class="lins">
          <span>or continue with email</span>
        </div>
      </template>
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
    <login-serve @submit-form="to_home" :is_selected = 'is_selected'></login-serve>
    <div class="footer">
      <div class="who-we-are" v-if="is_selected === 'signIn'">
         <div class="title">
           WHO WE ARE
         </div>
         <section>
           We are a global platform that doesn’t sleep. We’re 24/7 and always bringing something new with thousands of independent fashion designers and influencers. We believe in a world where you have the total freedom to be you, without judgement, and to be brave and grab life as the extraordinary adventure it is. We make sure everyone can express themselves and find a fashion leader that is on the same channel as you. We exist
         </section>
         <router-link to="/about" class="btn">
             <span> See all </span><img src="./img/arrow.png" height="13"/>
         </router-link>
       </div>
      <div v-else>
        <img src="./img/content.jpg" width="100%"/>
      </div>
      <div class="store">
        <a target="_blank" href = "https://itunes.apple.com/us/app/weget-fashion-marketplace/id1439887303?mt=8">
          <img src="./img/appStroe.png"  />
        </a>
        <a  target="_blank" href = "https://play.google.com/store/apps/details?id=com.weget.www">
          <img src="./img/Google Play Badge US Copy@3x.png" />
        </a>
      </div>
      <br>
      <div class="about_row1">
        <p class="bold">Follow us</p>
        <p>
          <a href="https://www.facebook.com/wegetofficial">
            <img src="./img/f@3x.png">
          </a>
          <a href="https://www.instagram.com/shopweget">
            <img src="./img/ins@3x.png">
          </a>
          <a href="https://www.youtube.com/channel/UCJ2SmCasimMk8TCHxloaMtA">
            <img src="./img/Shape@3x.png">
          </a>
        </p>
        <br>
        <p class="bold">ABOUT</p>
        <p>
          <router-link to="/about" class="btn" tag="p">
            About Us
          </router-link>
        </p>
        <router-link to="/statement" tag="p">
          Privacy Policy
        </router-link>
        <p><img src="./img/question.png" height="15" /> Need help？Visit the <a class="email" href="mailto:service@weget.com">help center</a></p>
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
import apiBase from "@/api/base";
import { getToken, setUserShareId } from "@/utils/auth";
import { sha256 } from "js-sha256";
export default {
  name: "login",
  data() {
    return {
      is_facebook: false,
      is_ins: false,
      userNew: false,
      show_dialog: false,
      is_selected: this.$route.query.type || 'signIn',
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
    this.is_facebook = this.$CM.is_ins() || this.$CM.is_facebook() || this.$CM.is_messenger()
    this.is_ins = this.$CM.is_ins()
    // this.shareReturn()
    // this.login_pass = this.$route.query.autoshow == "1" ? true : false;
  },
  beforeRouteEnter (to, from, next) {
    if (getToken()) {
        if (to.query.redirect) {
          window.location.replace(to.query.redirect);
        } else {
          window.location.replace(window.origin + "/home");
        }
    } else {
      next()
    }

  },
  mounted() {
  },
  computed: {},
  methods: {
    shareReturn() {
      if (getToken()) {
        if (this.userNew) {
          this.$dialog.alert({
            message: 'Thanks for signing up, a $15 coupon has been added to your WeGet Account.',
            confirmButtonText: 'Shop Now',
            confirmButtonColor: '#000'
          }).then(()=> {
            this.toPage()
          });
        } else {
          this.toPage()
          // this.$dialog.alert({
          //   message: 'Welcome back, we are ready to shop with you today!',
          //   confirmButtonText: 'Shop Now',
          //   confirmButtonColor: '#000'
          // }).then(()=>{
          //   this.toPage()
          // });
        }
      }
    },
    toPage() {
      if (this.$route.query.redirect) {
        const param = {
          path: this.$route.query.redirect,
        }
        this.$router.replace(param)
      } else {
        const param = {
          path: '/home'
        }
        this.$router.replace(param)
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
      api.preLogin(per_params).then(res => {
          return res;
        }).then(res => {
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
          // console.log(res);
          this.set_token(res.data.token);
          apiBase.visitSaveLog({eventName: 'signinSuccess'}).then(()=>{})
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
      margin-top: 10px;
      margin-bottom: 20px;
      img {
        margin-bottom: 15px;
      }
      .title {
        text-align: center;
        h2{
          font-size:26px;
          font-weight:bold;
          color:rgba(0,0,0,1);
        }
        p {
          font-size:14px;
          font-weight:400;
          color:rgba(155,155,155,1);
          line-height:25px;
          span {
            color: #D70E19;
            text-decoration: underline;
          }
          margin-bottom: 10px;
        }
      }
      .lins {
        position: relative;
        border-top: 1px solid #9B9B9B;
        margin-top: 5px;
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
        margin-bottom: 10px;
      }
    }

  }
  .footer {
    padding: 15px;
    background:rgba(248,248,248,1);
    .who-we-are {
      .title {
        text-align: center;
        font-size:16px;
        font-weight:800;
        color:rgba(0,0,0,1);
      }
      section{
        height: 80px;
        overflow: hidden;
        font-size: 12px;
        line-height: 20px;
        position: relative;
        margin-top: 10px;
        &:after{
          position: absolute;
          content: '';
          width: 100%;
          left: 0px;
          top:0px;
          height: 100%;
          background:linear-gradient(0deg,rgba(248,248,248,1) 0%,rgba(248,248,248,0.6) 50%, rgba(248,248,248,0) 100%);        }
      }
      .btn {
        display: block;
        height:36px;
        border-radius:23px;
        width: 80%;
        line-height: 36px;
        font-size:14px;
        font-weight:bold;
        color:rgba(0,0,0,1);
        text-align: center;
        border:1px solid rgba(0,0,0,1);
        margin: 10px auto;
        span {
          display: inline-block;
        }
        img {
          display: inline-block;
          margin-left: 20px;
          transform: translateY(-2px);
        }
      }
    }
    .store {
      padding: 5px 5px;
      display: flex;
      margin-top: 20px;
      justify-content: space-around;
      a{
        width: 40%;
        display: inline-block;
        height: 40px;
        img {
          width: 100%;
        }
      }

    }
    div.about_row1 {
      padding-bottom: 30px;
      p {
        text-align: center;
        margin-top: 15px;
        font-size:12px;
        font-weight:400;
        color:rgba(0,0,0,1);
        &.bold{
          font-size:16px;
          font-weight:800;
          color:rgba(0,0,0,1);
        }
        a.email {
          margin: 0px;
          font-weight:800;
          text-decoration: underline;
        }
        a {
          display: inline-block;
          margin: 0 15px;
          img {
            width: auto;
            height: 20px;
          }
        }
      }
    }

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

