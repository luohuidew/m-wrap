<template>
  <div class="login page">
    <div class="top-logo">
      <img src="@/assets/img/icon/logo.png"
        alt=""
        srcset="">
    </div>
    <div class="login-box">
      <!-- <login-in></login-in> -->
      <!-- <create></create> -->
      <keep-alive>
        <router-view>
        </router-view>
      </keep-alive>
      <!-- <div class="g-signin2"
        data-onsuccess="onSignIn"></div> -->
      <auth @change="get_user_info"></auth>
    </div>
    <div class="footer">
      <p>By joining, you agree to our</p>
      <p>Privacy Policy</p>
    </div>
  </div>
</template>

<script>
// function onSignIn(googleUser) {
//   var profile = googleUser.getBasicProfile();
//   console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
//   console.log("Name: " + profile.getName());
//   console.log("Image URL: " + profile.getImageUrl());
//   console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
// }
import loginIn from "./login.vue";
import create from "./create.vue";
// import auth from "@/components/Auth";
// import facebookIn from "./facebook-in";
// import googleIn from "./google-in";
import auth from "./auth";

export default {
  name: "login",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    get_user_info(data){
      console.log(data);
    }
  },
  components: {
    loginIn,
    create,
    auth
  }
};
</script>
<style lang="scss" scoped>
.top-logo {
  padding-top: 60px;
  padding-bottom: 30px;
  text-align: center;
}
.login {
  height: 100%;
  background-color: rgb(216, 15, 26);
}
.footer {
  padding-top: 113px;
  padding-bottom: 80px;
  font-size: 12px;
  text-align: center;
  p {
    color: #fff;
  }
}
</style>

