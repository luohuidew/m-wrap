<template>
  <g-signin-button :params="googleSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Google
  </g-signin-button>
</template>

<script>
// import GSignInButton from 'vue-google-signin-button'
// import Vue from 'vue';
import GSignInButton from "./google-login/index.vue";
// Vue.use(GSignInButton)
export default {
  data() {
    return {
      /**
       * The Auth2 parameters, as seen on
       * https://developers.google.com/identity/sign-in/web/reference#gapiauth2initparams.
       * As the very least, a valid client_id must present.
       * @type {Object}
       */
      googleSignInParams: {
        // client_id: '310472356440-jk2gehdlb0pt7h6hutluv1sghuncecg0.apps.googleusercontent.com'
        client_id:"310472356440-jk2gehdlb0pt7h6hutluv1sghuncecg0.apps.googleusercontent.com",
        // client_id:"78478575148-qdf2rmc478g9jqdfghopvjb2ck9p8dnf.apps.googleusercontent.com"
      }
    };
  },
  methods: {
    onSignInSuccess(googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile(); // etc etc
      const getId = profile.getId();
      const getName = profile.getName();
      const getGivenName = profile.getGivenName();
      const getFamilyName = profile.getFamilyName();
      const getImageUrl = profile.getImageUrl();
      const getEmail = profile.getEmail();
      const userInfo = {
        getId,
        getName,
        getGivenName,
        getFamilyName,
        getImageUrl,
        getEmail
      };
      console.log(profile);
      console.log(userInfo);
      this.$emit("login", userInfo);
    },
    onSignInError(error) {
      // `error` contains any error occurred.
      console.log("OH NOES", error);
    }
  },
  components: {
    "g-signin-button": GSignInButton
  }
};
</script>

<style>
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  width: 100%;
  height: 50px;
  border-radius: 3px;
  background: #fff url("../img/googelBtn.png") no-repeat center center;
  background-size: cover;
  cursor: pointer;
}
</style>
