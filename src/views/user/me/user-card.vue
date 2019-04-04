<template>
  <div class="user-card">
    <div class="my-nickname-box"
      :style="{ backgroundImage : `url()`} ">
      <div class="nickname">
        <div class="nickname-info">
          <div class="img-box">
            <img v-if="user_info.photo"
              :src="user_info.photo"
              alt=""
              srcset="">
            <img v-else
              src="/static/img/elements/sandy@2x.png"
              alt=""
              srcset="">
          </div>
          <p class="avator"></p>
          <div class="nick-box">
            <p class="weight-nickname">{{user_info.user_name}}</p>
            <!-- <p class="lv-nickname">Silver Membership</p> -->
          </div>
          <div class="setting-box">
            <!-- <img src="/static/img/icon/setting.png" alt="" srcset=""> -->
          </div>
        </div>
        <div class="nickname-des">
          <ul>
            <li>
              <p class="number">{{user_info.like_num}}</p>
              <p class="des">Like</p>
            </li>
            <li>
              <p class="number">{{user_info.follow_num}}</p>
              <p class="des">Follow</p>
            </li>
            <li>
              <p class="number">$ {{user_info.coupons}}</p>
              <p class="des">Coupons</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="my-order-box">
      <div class="title-box">
        <p class="tips">My Orders</p>
        <!-- <p class="more"
          @click="to_order(0)">All</p> -->
      </div>
      <div class="check-list">
        <ul>
          <li v-for="(item) in menu_list"
            :key="item.id"
            @click="to_order(item.id)"
            class="list-item">
            <span>
              {{item.label}}
            </span>
            <span class="more"></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/user";
export default {
  data() {
    return {
      dialogFormVisible: false,
      // user_info:,
      edit_form: {
        img_url: "",
        first_name: "",
        last_name: "",
        user_name: ""
      },
      menu_list: [
        {
          id: 0,
          label: "All Orders"
        },
        {
          id: 1,
          label: "pending"
        },
        {
          id: 2,
          label: "Processing"
        },
        {
          id: 3,
          label: "Shipped"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  computed: {
    user_info() {
      return this.$store.state.user;
    }
  },
  methods: {
    up_user() {
      let params = {
        first_name: this.edit_form.first_name,
        last_name: this.edit_form.last_name,
        photo: this.edit_form.img_url
      };
      api.updateUserInfo(params).then(res => {
        this.$store.state.user.first_name = res.data.first_name;
        this.$store.state.user.last_name = res.data.last_name;
        this.$store.state.user.photo = res.data.photo;
        this.dialogFormVisible = false;
      });
    },
    edit_user() {
      this.dialogFormVisible = true;
      this.edit_form.img_url = this.user_info.photo;
      this.edit_form.first_name = this.user_info.first_name;
      this.edit_form.last_name = this.user_info.last_name;
    },
    get_img(data) {
      this.edit_form.img_url = data.url[data.url.length - 1];
      // console.log(data);
      // console.log(this.edit_form.img_url);
    },
    to_order(cid) {
      let params = {
        path: "/user/orders",
        query: {
          label: cid
        }
      };
      this.$router.push(params);
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.my-nickname-box {
  width: 100%;
  height: 211px;
  position: relative;
  background: #f3f3f3 url("/static/img/log1.png") no-repeat center center;
  background-size: 100% auto;
  padding: 20px;
  box-sizing: border-box;
  z-index: 1;
}
.my-nickname-box:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: inherit;
  filter: blur(2px);
  z-index: 2;
}
.nickname {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -40%);
  width: 335px;
  //   height: 147px;
  padding: 15px 15px 17px 25px;
  text-align: center;
  background-color: #fff;
  z-index: 11;
  .nickname-info {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nick-box {
    padding-left: 20px;
    font-size: 12px;
    font-weight: bold;
    .weight-nickname {
      font-size: 18px;
      line-height: 22px;
    }
    .lv-nickname {
      line-height: 15px;
    }
  }
  .img-box {
    position: absolute;
    transform: translateY(-20%);
    height: 80px;
    width: 80px;
    font-size: 0;
    // padding:10px;
    img {
      border-radius: 50%;
      border: 2px solid #fff;
      height: 100%;
      width: 100%;
    }
  }
  .nickname-des {
    // height: 50px;
    ul {
      //   height: 100%;
      font-size: 0;
      padding-top: 20px;
    }
    li {
      display: inline-block;
      width: 33.33%;
      line-height: 24px;
      border-left: 1px solid #ccc;
      &:nth-child(1) {
        border: none;
      }
    }
    .number {
      font-size: 16px;
      font-weight: bold;
    }
    .des {
      font-size: 12px;
    }
  }
}
.my-order-box {
}
.check-list {
  ul {
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    font-size: 0;
    // text-align: center;
    padding: 0 20px 27px 20px;
  }
  li {
    // display: inline-block;
    // width: 33.33%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    align-items: center;
    padding-left: 50px;
    background: url() no-repeat left center;
    border-top: 1px solid #f3f3f3;
    &:nth-child(1) {
      background-image: url(../../../assets/img/icon/pending.png);
    }
    &:nth-child(2) {
      background-image: url(../../../assets/img/icon/share_other.png);
    }
    &:nth-child(3) {
      background-image: url(../../../assets/img/icon/proceed.png);
    }
    &:nth-child(4) {
      background-image: url(../../../assets/img/icon/ship.png);
    }
    &:nth-child(5) {
      background-image: url(../../../assets/img/icon/review.png);
    }
  }
}
.title-box {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 17px;
  padding: 19px 23px 27px 20px;
  //   border-bottom: 1px solid #e9e9e9;
  .tips {
    font-size: 20px;
    font-weight: bold;
  }
}
.more {
  height: 20px;
  width: 20px;
  background: url(../../../assets/img/icon/right_icon.png) no-repeat right
    center;
}
</style>
