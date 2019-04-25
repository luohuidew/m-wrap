<template>
  <div class="article-detail">
    <section class="wrap">
      <Item v-for="item in itemDdata" :cardData = "item" :activeFixed="true"></Item>
    </section>
    <van-popup v-model="show" class="popup-warp">
      <img class="close" @click="closePopup" src="@/assets/img/conponActive/X.png"/>
      <div class="main">
        <img class="bg" src="@/assets/img/conponActive/bg.png" />
        <img  v-if="isLogin" class="btn" @click="goConpon" src="@/assets/img/conponActive/use@2x.png" />
        <img  v-if="!isLogin"  class="btn" @click="goLogin" src="@/assets/img/conponActive/Signup@2x.png" />
        <p v-if="isLogin">Congratulations! Now you have $30 in your account. Use it NOW! </p>
        <p v-if="!isLogin">Hello new friend,we have 30 for you,sign up and get it now!</p>
      </div>
    </van-popup>
  </div>
</template>

<script>
import data from "@/utils/active";
import Item from "@/components/card-column-auto";
import { getToken } from "@/utils/auth";
export default {
  name: "",
  data() {
    return {
      isLogin: getToken(),
      show: true,
      itemDdata: data.listData
    };
  },
  created() {
    if (sessionStorage.getItem('conpon-first')) {
      this.show = false; // 只有第一次展示
    }
  },
  mounted() {},
  computed: {},
  methods: {
    goConpon() {
      this.show = false
      sessionStorage.setItem('conpon-first', true)
    },
    goLogin() {
      this.$router.push({
        path: "/login",
        query: {
          redirect: this.$route.fullPath
        }
      });
    },
    goPageActive(sku_id) {
      this.$router.push({
        name: "detailAcive",
        query: {
          sku_id: sku_id,
          activeList: 1
        }
      });
    },
    closePopup() {
      this.show = false
    }
  },
  components: {
    Item
  }
};
</script>

<style lang='scss' scoped>
.article-detail {
  section {
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px
  }
  .popup-warp {
    background-color: rgba(1,1,1,0);
    width: 60%;
    img.close{
      width: 20px;
      display: block;
      margin: 0px auto;
    }
    .main {
      position: relative;
      width: 100%;
      img.bg {
        width: 100%;
        margin-top: 10px;
      }
      img.btn{
        position: absolute;
        bottom: 50px;
        width: 100px;
        left: 50%;
        height: auto;
        z-index: 20;
        transform: translateX(-50%);
      }
      p{
        position: absolute;
        left: 10px;
        right: 10px;
        top: 80px;
        text-align: center;
        line-height: 30px;
        font-weight: bold;
        bottom: 10px;
      }
    }

  }
}


</style>
