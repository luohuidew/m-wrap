<template>
  <div class="article-detail">
    <section class="wrap">
      <Item v-for="item in itemDdata" :cardData = "item" ></Item>
    </section>
    <van-popup v-model="show" class="popup-warp" :overlay="false">
      <!--<img class="close" @click="closePopup" src="@/assets/img/conponActive/X.png"/>-->
      <div class="main">
        <img  src="@/assets/img/conponActive/bg.png" @click="closePopup" width="100%"/>
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
      itemDdata: data.listData12
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
      sessionStorage.setItem('conpon-first', true)
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
    transform: translate3d(-50%,91%,0);
    background-color: rgba(1,1,1,0);
    width: 100%;
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
