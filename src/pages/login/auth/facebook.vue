<template>
  <div class="auth-in">
    <!-- 884670545062683 weget-app-->
    <!-- 2372409919453080  weget-mall -->
    <facebook-login class="button"
      appId="884670545062683"
      @login="getUserData"
      @logout="onLogout"
      @get-initial-status="getUserData_auto">
    </facebook-login>

  </div>
</template>

<script>
import facebookLogin from "./facebook-login/index.js";
// var firebase = require('firebase');
// var firebaseui = require('firebaseui');
// import * as firebaseui from 'firebaseui'
import api from "@/api/login";
import { setToken, getToken } from "@/utils/auth";
export default {
  name: "",
  data() {
    return {
      other_form: {}
    };
  },
  mounted() {},
  computed: {},
  methods: {
    getUserData_auto(data){
      console.log('auto login');
    },
    __getUserData_auto(data) {
      console.log("zidong");
      console.log(data);
      if (data.status == "connected") {
        let flag = sessionStorage.getItem("have_open");
        if (flag !== "yes") {
          sessionStorage.setItem("have_open", "yes");
          let res = data.authResponse;
          let _this = this;
          FB.api(
            "/" + res.userID + "/",
            { fields: "last_name,first_name,name,email,picture" },
            function(response) {
              if (response && !response.error) {
                /* handle the result */
                console.log(response);
                let params = {
                  user_name: response.name,
                  last_name: response.last_name,
                  first_name: response.first_name,
                  email: response.email,
                  // tel: user.phoneNumber ? user.phoneNumber : undefined,
                  bind_id: response.id,
                  type: 2,
                  photo: response.picture.data.url
                };
                // _this.$emit('login',response);
                api.thirdLogin(params).then(res => {
                  let data = res.data;
                  // _this.$store.state.token = data.token;
                  _this.$store.commit('set_token',data.token);
                  setToken(data.token);
                  console.log(_this.$store);
                  // window.location.reload();
                });
              }
            }
          );
        }
      }
    },
    getUserData(data) {
      console.log("dianji");
      console.log(data);
      let res = data.response.authResponse;
      if (data.response.status == "connected") {
        let _this = this;
        FB.api(
          "/" + res.userID + "/",
          { fields: "last_name,first_name,name,email,picture" },
          function(response) {
            if (response && !response.error) {
              /* handle the result */
              console.log(response);
              _this.$emit("login", response);
            }
          }
        );
      }
    },
    onLogout(data) {
      console.log(data);
    }
    // getUserData(data){
    //   console.log(data)
    // },
  },
  components: {
    facebookLogin
  }
};
</script>

<style lang='scss' scoped>
.button {
  & > button {
  }
}
.facebook-btn {
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  border-radius: 27px;
}
</style>
