<template>
  <div class="article-detail">
    <ul>
      <li v-for="(item,index) in item_data" :key="index">
        <div class="img-box" v-if="item.type==='desc'">
          <img :src="item.url" alt srcset>
        </div>
        <div class="img-box" v-if="item.type==='goods'" :class="{'two-img':item.url.length===2}">
          <img
            v-for="(goods,index) in item.url"
            :key="index"
            :src="goods.img_url"
            @click="to_detail(goods.sku_id)"
            alt
            srcset
          >
        </div>
      </li>
    </ul>
    <footer>
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
        <img class="bgimg" src="/static/img/about/底部@2x.png">
      </div>
    </footer>
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
      if (sku_id) {
        if (window.weget_mobile_type === "iOS") {
          let params = {
            type: 106,
            data: {
              route: "wemall://public/route?type=6&id=" + sku_id + ""
            }
          };
          window.webkit.messageHandlers.javaScriptToNative.postMessage(params);
          // alert('to login');
        } else {
          this.$router.push({ path: "/detail", query: { sku_id: sku_id } });
        }
      }
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.article-detail {
  font-size: 0;
  img {
    max-width: 100%;
    height: auto;
  }
}
.two-img {
  img {
    font-size: 0;
    width: 50%;
    height: auto;
  }
}
footer {
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
