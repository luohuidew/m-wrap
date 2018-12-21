<template>
  <div class="auth-in">
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import firebaseui from "firebaseui";
import api from "@/api/login";
export default {
  name: "",
  data() {
    return {};
  },
  created() {
    // this.init_data();
  },
  mounted() {},
  computed: {},
  methods: {
    init_config() {},
    init_data() {
      var config = {
        apiKey: "AIzaSyDceOCSAmzQDQVWMwswdeXAtAEjFfSKZuU",
        authDomain: "weget-98471.firebaseapp.com",
        databaseURL: "https://weget-98471.firebaseio.com",
        projectId: "weget-98471",
        storageBucket: "weget-98471.appspot.com",
        messagingSenderId: "310472356440"
      };
      firebase.initializeApp(config);

      // Google OAuth Client ID, needed to support One-tap sign-up.
      // Set to null if One-tap sign-up is not supported.
      // var CLIENT_ID =
      //   "265939374336-cj26lol6s990fq9fp4s0ri86si3rj86n.apps.googleusercontent.com";
      var uiConfig = {
        signInSuccessUrl: "/load",
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          {
            provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID
            // recaptchaParameters: {
            //   size: "invisible",
            //   badge: "bottomright" //' bottomright' or 'inline' applies to invisible.
            // },
            // defaultCountry: "AR",
            // loginHint: "+54"
          },
          {
            provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
            // recaptchaParameters: {
            //   size: "invisible",
            //   badge: "bottomleft" //' bottomright' or 'inline' applies to invisible.
            // },
            // defaultCountry: "AR",
            // loginHint: "+54"
          }
          // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          // firebase.auth.GithubAuthProvider.PROVIDER_ID,
          // firebase.auth.EmailAuthProvider.PROVIDER_ID,
          // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
        ]
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        // Terms of service url/callback.
        // tosUrl: "https://www.google.com",
        // Privacy policy url/callback.
        // privacyPolicyUrl: function() {
        //   window.location.assign("http://localhost:8080/home/me");
        // }
        // privacyPolicyUrl:"http://www.baidu.com"
      };

      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start("#firebaseui-auth-container", uiConfig);

      firebase.auth().onAuthStateChanged(function(user) {
        console.log(user);
        let params = {
          user_name: "",
          last_name: "",
          first_name: "",
          email: "",
          tel: "",
          bind_id: "",
          type: "",
          photo: ""
        };
        api.thirdLogin();
        if (user && !user.emailVerified) {
          var actionCodeSettings = {
            url: "/",
            handleCodeInApp: true
          };
          user
            .sendEmailVerification()
            .then(function() {
              // Email sent.
            })
            .catch(function(error) {
              // An error happened.
            });
        }
      });
      this.init_config();
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
</style>
