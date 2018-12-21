<template lang="html">
  <div id="firebaseui-auth-container"></div>
</template>

<script>
import { firebase, authUi, authUiConfig } from "../firebase";
import { setToken, getToken } from "@/utils/auth";
import api from "@/api/login";
export default {
  name: "auth",
  mounted() {
    this.init_data();
  },
  methods: {
    init_data() {
      authUi.start("#firebaseui-auth-container", authUiConfig);
      let that = this;
      firebase.auth().onAuthStateChanged(function(user) {
        console.log(user);
        // let nickname = user.displayName.split(" ");
        // console.log(nickname);
        let params = {
          // user_name: user.displayName,
          // last_name: nickname[0],
          // first_name: nickname[nickname.length - 1],
          email: user.email,
          tel: user.phoneNumber ? user.phoneNumber : undefined,
          bind_id: user.uid,
          type: 1,
          photo: user.photoURL
        };
        if (!getToken()) {
          api.thirdLogin(params).then(res => {
            let data = res.data;
            console.log(data);
            that.$emit("change", data);
            that.set_token(data.token);
          });
        }
      });
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
    }
  }
};
</script>
