<template>
  <div class="container">
    <button class="facebook-btn"
      @click="buttonClicked"
      :style="fb_style" >
      <img src="/static/img/icon/login_facebook.png" 
      :class="{'active':showFacebook}" @click="showFacebook = !showFacebook"
      class="face_login">
      <!-- <img src="/static/img/icon/login_facebook.png" 
      v-show="showFacebook" @click="showFacebook = !showFacebook"
      class="face_login"> -->
    </button>
  </div>
</template>
<script>
import { loadFbSdk, getLoginStatus, fbLogout, fbLogin } from "./helpers.js";
import icon from "./icon.png";
export default {
  name: "facebook-login",
  data() {
    return {
      showFacebook : false,
      isWorking: false,
      isConnected: false,
      icon,
      fb_style: {
        // "max-width": "284px"
      }
    };
  },
  computed: {
    getButtonText() {
      switch (this.isConnected) {
        case true:
          return this.loginLabel;
        case false:
          return this.loginLabel;
        default:
          return "this is default";
      }
    }
  },
  methods: {
    initData() {
      this.isWorking = true;
      loadFbSdk(this.appId, this.version)
        .then(loadingResult => {})
        .then(() => getLoginStatus())
        .then(response => {
          if (response.status === "connected") {
            this.isConnected = true;
          }
          this.isWorking = false;
          /** get-initial-status to be depcreated on next major version */
          this.$emit("get-initial-status", response.response);
          this.$emit("sdk-loaded", {
            isConnected: this.isConnected,
            FB: window.FB
          });
        });
    },
    buttonClicked() {
      this.$emit("click");
      if (this.isConnected) {
        // this.logout();
        this.login();
      } else {
        this.login();
      }
    },
    logout() {
      this.isWorking = true;
      fbLogout().then(response => {
        this.isWorking = false;
        this.isConnected = false;
        this.$emit("logout", response);
      });
    },
    login() {
      // debugger;
      this.isWorking = true;
      fbLogin(this.loginOptions).then(response => {
        if (response.status === "connected") {
          this.isConnected = true;
        } else {
          this.isConnected = false;
        }
        this.isWorking = false;
        this.$emit("login", {
          response,
          FB: window.FB
        });
      });
    }
  },
  props: {
    appId: {
      type: String,
      required: true
    },
    version: {
      type: String,
      default: "v3.2"
    },
    logoutLabel: {
      type: String,
      default: "Log out from Facebook"
    },
    loginLabel: {
      type: String,
      default: "Continue with Facebook"
    },
    loginOptions: {
      type: Object,
      default: function() {
        return {
          scope: "email"
        };
      }
    }
  },
  mounted() {
    this.initData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container,.auth-in{
  overflow: hidden;
}
button {
  position: relative;
  /* padding: 0 15px 0px 46px;
  border: none;
  line-height: 34px;
  font-size: 16px;
  color: #fff;
  min-width: 225px;
  /* background-image: linear-gradient(#4c69ba, #3b55a0); */
  height: auto;
  width: 100%;
  background: transparent;
  border: 0;
  /* background:rgb(64,103,185);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  border-radius: 27px; */ 
}
.face_login{
  width: 100%;
}
.face_login.active {
  opacity: 0.9;
}


.spinner {
  box-sizing: border-box;
  width: 30px;
  height: 90%;
  border-radius: 50%;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  animation: spin 2s linear infinite;
  position: absolute;
  left: 5px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
