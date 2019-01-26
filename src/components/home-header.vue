<template>
  <div class="home-header"
    v-if="show_header">
    <img class="home-logo"
      @click="to_home"
      src="/static/img/icon/big-logo.png"
      alt="">
    <p class="weget-header-title">
      <span class="to-login"
        @click="to_login"
        v-if="!hove_token">
        Login
      </span>
      <span class="to-user"
        v-else>
        <img :src="user_info.photo"
          alt=""
          srcset="">{{user_info.user_name}}
      </span>
      <span class="to-about"
        @click="to_about">
        About Us
      </span>
    </p>
  </div>
</template>

<script>
import api from "@/api/user";
export default {
  name: "",
  data() {
    return {
      user_info: {}
    };
  },
  watch:{
    $route:{
      handler(){
        
      }
    }
  },
  created() {
    this.init_user();
  },
  mounted() {},
  computed: {
    show_header() {
      return !(
        localStorage.getItem("device") === "ios" ||
        localStorage.getItem("device") === "android"
      );
    },
    hove_token() {
      console.log(this.$store.state.token);
      return this.$store.state.token;
    },
    
  },
  methods: {
    to_about() {
      this.$router.push({
        path: "/about"
      });
    },
    to_login() {
      this.$router.push({
        path: "/login",
        query: {}
      });
    },
    to_home() {
      this.$router.push({
        path: "/"
      });
    },
    init_user() {
      if (this.hove_token) {
        api.PersonalCenter({}).then(res => {
          console.log(res);
          this.$store.state.user = res.data.user_info;
          this.user_info = res.data.user_info;
          // setToken(res.data.token);
        });
      }
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.home-header {
  position: relative;
  background-color: #fff;
  .home-logo {
    position: absolute;
    left: 20px;
    top: 10px;
    height: 70%;
    // img {
    //   height: 70%;
    // }
  }
}
.weget-header-title {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  // background: url("/static/img/icon/big-logo.png") no-repeat 30px center;
  // background-size: auto 70%;
  font-size: 14px;
  box-shadow: 2px 0px 2px #ccc;
}
.to-login {
  padding: 0 10px 0 20px;
  // border-radius: 8px;
  // background-color: #d80c18;
  // color: #fff;
  background: url("/static/img/icon/me_b.png") no-repeat left center;
  background-size: auto 100%;
  // border-right: 1px solid #000;
}
.to-user {
  display: flex;
  align-items: center;
  font-size: 16px;
  padding: 0 10px 0 20px;
  // border-right: 1px solid #000;
  img {
    height: 30px;
    width: 30px;
    object-fit: contain;
    margin: 0 10px;
  }
}
.to-about {
  padding: 0 10px;
  border-left: 1px solid #000;
  // text-decoration: underline;
}
</style>
