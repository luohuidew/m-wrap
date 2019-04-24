<template>
  <div class="article-detail">
    <section>
      <p><img src="@/assets/img/418active/LOOK_01.jpg"/></p>
      <p @click="goPageActive('5557148210008098')"><img src="@/assets/img/418active/LOOK_02.jpg"/></p>
      <p @click="goPageActive('5557435769542243')"><img src="@/assets/img/418active/LOOK_03.jpg"/></p>
      <p @click="goPageActive('5557207069013871')"><img src="@/assets/img/418active/LOOK_04.jpg"/></p>
      <p @click="goPageActive('5557314087792880')"><img src="@/assets/img/418active/LOOK_05.jpg"/></p>
      <p><img src="@/assets/img/418active/LOOK_06.jpg"/></p>
    </section>
    <div class="footer">
      <div class="about_row1">
        <!-- <img class="bgimg" src="/static/img/about/icon bg@2x.png"> -->
        <p>
          <a href="https://www.facebook.com/wegetofficial">
            <img src="/static/img/about/iconF@2x.png">
          </a>
          <a href="https://www.instagram.com/shopweget">
            <img src="/static/img/about/iconO@2x.png">
          </a>
          <a href="https://www.youtube.com/channel/UCJ2SmCasimMk8TCHxloaMtA">
            <img src="/static/img/about/iconA@2x.png">
          </a>
        </p>
      </div>
      <!--<div class="about_row2">-->
        <!--<img class="bgimg"-->
          <!--src="/static/img/about/底部@2x.png">-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
import data from "./config";
export default {
  name: "",
  data() {
    return {
      item_data: data
    };
  },
  mounted() {},
  computed: {},
  methods: {
    goPageActive(sku_id) {
      this.$router.push({
        name: "detailAcive",
        query: {
          sku_id: sku_id,
          activeList: 1
        }
      });
    },
    to_store(store_id) {
      // if (store_id) {
      //   let href_params = {
      //     type: 106,
      //     data: {
      //       route: "wemall://public/route?type=11&id=" + store_id + ""
      //     }
      //   };
      //   let temp = this.$CM.weget_device_link(href_params);
      //   if (temp === "h5") {
      //     }
      // }
      this.$router.push({
        path: "/store",
        query: {
          store_id: store_id
        }
      });
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.article-detail {
  // max-width: 1440px;
  margin: 0 auto;
  background-color: #ffffff;
  font-size: 0;
  li {
    margin: 0 auto;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  section {
    p>img {
      width: 100%;
    }
  }
}
.header {
}
.two-img {
  img {
    font-size: 0;
    width: 50%;
    height: auto;
  }
}
.img-box {
  margin: 0 auto;
  font-size: 0;
}
.desc {
  img {
    width: 100%;
  }
}
.store {
  margin: 0 auto;
  cursor: pointer;
  img {
    width: 100%;
  }
}
.goods {
  margin: 0 auto;
  cursor: pointer;
}
.footer {
  background: #1f1f1f;
  width: 100%;
  display: flex;
  flex-direction: column;
  .bgimg {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  div.about_row1 {
    width: 100%;
    height: 60px;
    background: rgb(33, 33, 33);
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: relative;
    p {
      position: absolute;
      width: 80%;
      height: 22px;
      top: 50%;
      left: 10px;
      transform: translate(0%, -50%);
      text-align: center;
      a {
        float: left;
        margin: 0 15px;
        img {
          height: 20px;
        }
      }
    }
  }
}
</style>
