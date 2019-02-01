<template>
  <div class="article-detail">
    <ul>
      <li :class="item.type"
        v-for="(item,index) in item_data"
        :key="index">
        <div class="img-box"
          v-if="item.type==='desc'">
          <img :src="item.url"
            alt
            srcset
            :style="{'width:100%':index===0}">
        </div>
        <div class="img-box"
          v-else-if="item.type==='goods'"
          :class="{'two-img':item.url.length===2}">
          <img v-for="(goods,index) in item.url"
            :key="index"
            :src="goods.img_url"
            @click="to_detail(goods.sku_id)"
            alt
            srcset>
        </div>
        <div class="img-box store"
          v-else-if="item.type==='store'"
          :class="{'two-img':item.url.length===2}">
          <img v-for="(goods,index) in item.url"
            :key="index"
            :src="goods.img_url"
            @click="to_store(goods.store_id)"
            alt
            srcset>
        </div>
        <div v-else>
        </div>
      </li>
    </ul>
    <div class="footer">
      <div class="about_row1">
        <!-- <img class="bgimg" src="/static/img/about/icon bg@2x.png"> -->
        <p>
          <a href="javascript:;">
            <img src="/static/img/about/底部logo@2x.png">
          </a>
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
      <div class="about_row2">
        <img class="bgimg"
          src="/static/img/about/底部@2x.png">
      </div>
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
    to_detail(sku_id) {
      // if (sku_id) {
      //   let href_params = {
      //     type: 106,
      //     data: {
      //       route: "wemall://public/route?type=6&id=" + sku_id + ""
      //     }
      //   };
      //   let temp = this.$CM.weget_device_link(href_params);
      //   if (temp === "h5") {
      //     }
      // }
      this.$router.push({
        path: "/detail",
        query: {
          sku_id: sku_id
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
  background-color: #f1dcd7;
  font-size: 0;
  li {
    margin: 0 auto;
  }
  img {
    max-width: 100%;
    height: auto;
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
  background: #000;
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
    height: 80px;
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
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      a {
        margin: 0 15px;
        img {
          height: 22px;
        }
      }
    }
  }
}
</style>
