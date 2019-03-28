<template>
  <div class="profile-page">
    <ul v-if="profileData"
      class="base-data">
      <li class="photo">
        <span class="label">
          <img :src="profileData.photo"
            alt=""
            srcset="">
          <span>My Photo</span>
        </span>
        <span class="right-arrow">
          <img src="/static/images/icon/user/user_right_gary_arrow@3x.png"
            alt=""
            srcset="">
        </span>
      </li>
      <li class="account">
        <span class="label">Login Account</span>
        <span class="right-arrow">
          <span>{{profileData.account}}</span>
         
        </span>
      </li>
      <li class="contact-name">
        <span class="label">Contact Name</span>
        <span class="right-arrow">
          <span>{{profileData.user_name}}</span>
          <img src="/static/images/icon/user/user_right_gary_arrow@3x.png"
            alt=""
            srcset="">
        </span>
      </li>
      <li class="email">
        <span class="label">Email</span>
        <span class="right-arrow">
          <span>{{profileData.email}}</span>
          <img src="/static/images/icon/user/user_right_gary_arrow@3x.png"
            alt=""
            srcset="">
        </span>
      </li>
      <li class="birthday">
        <span class="label">Birthday</span>
        <span class="right-arrow">
          <span>{{profileData.birthday}}</span>
          <img src="/static/images/icon/user/user_right_gary_arrow@3x.png"
            alt=""
            srcset="">
        </span>
      </li>
      <li class="gender">
        <span class="label">Gender</span>
        <span class="right-arrow">
          <span>{{profileData.gender}}</span>
          <img src="/static/images/icon/user/user_right_gary_arrow@3x.png"
            alt=""
            srcset="">
        </span>
      </li>
      <li class="password">
        <span class="label">Password</span>
        <span class="right-arrow">
          <span>{{profileData.gender}}</span>
          <img src="/static/images/icon/user/user_right_gary_arrow@3x.png"
            alt=""
            srcset="">
        </span>
      </li>
    </ul>
    <ul class="mall-info-box">
      <li class="address">
        <span class="label">Password</span>
        <span class="right-arrow">
          <span>{{profileData.gender}}</span>
          <img src="/static/images/icon/user/user_right_gary_arrow@3x.png"
            alt=""
            srcset="">
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import USER from "@/api/user";
export default {
  name: "",
  props: {},
  data() {
    return {
      profileData: undefined
    };
  },
  computed: {},
  created() {
    this.init_data();
  },
  methods: {
    init_data() {
      USER.getInfoByToken().then(res => {
        this.profileData = res.data;
      });
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.profile-page {
  font-size: 14px;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f3f3f3;
    padding: 14px 20px 14px 30px;
    .label {
      font-size: 16px;
      img {
        height: 60px;
        width: 60px;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 16px;
      }
    }
    .right-arrow {
      span {
        color: #898989;
      }
      img {
        height: 16px;
        width: auto;
        margin-left: 6px;
      }
    }
  }
}
/*  */
.mall-info-box {
  border-top: 10px solid #f3f3f3;
}
</style>
