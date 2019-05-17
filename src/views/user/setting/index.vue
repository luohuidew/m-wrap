<template>
  <div class="setting-page">
    <div class="router-lists-box">
      <ul>
        <li class="lists-item"
          v-for="(item,index) in menuList"
          :key="index">
          <router-link :to="{path:item.path}">
            <img :src="item.icon"
              alt="">
            <span>
              {{item.label}}
            </span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="sing-out-box">
      <button @click="logout">SIGN OUT</button>
    </div>
  </div>
</template>

<script>
import { getToken } from "@/utils/auth";
export default {
  name: "",
  props: {},
  data() {
    return {
      menuList: [
        {
          label: "Profile",
          path: "/user/profile",
          icon: "/static/images/icon/user/user_setting_profile_icon@3x.png"
        },
        {
          label: "Privacy Policy",
          path: "/statement",
          icon: "/static/images/icon/user/user_setting_privacy_icon@3x.png"
        },
        {
          label: "About Us",
          path: "/about",
          icon: "/static/images/icon/user/user_setting_us_icon@3x.png"
        }
      ]
    };
  },
  computed: {},
  created() {},
  methods: {
    logout(){
      if(getToken()){
        this.$store.dispatch('logOut').then(()=> {
          this.$router.replace('/login');
        })
      }
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.setting-page {
  font-size: 16px;
}
.router-lists-box {
  padding: 0 30px;
  a {
    display: flex;
    height: 47px;
    border-bottom: 1px solid #e9e9e9;
    align-items: center;
    background: url("/static/images/icon/user/user_right_gary_arrow@3x.png")
      no-repeat center right;
    background-size: 12px;
    img {
      height: 24px;
      width: 24px;
      margin-right: 10px;
    }
  }
}
/*  */
.sing-out-box {
  text-align: center;
  padding: 60px 0;
  button {
    height: 40px;
    width: 250px;
    background-color: #c9caca;
    color: #ffffff;
    border-radius: 20px;
  }
}
</style>
