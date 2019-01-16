<template>
  <div class="article-detail">
    <ul>
      <li v-for="(item,index) in item_data"
        :key="index">
        <div class="img-box"
          v-if="item.type==='desc'">
          <img :src="item.url"
            alt=""
            srcset="">
        </div>
        <div class="img-box"
          v-if="item.type==='goods'"
          :class="{'two-img':item.url.length===2}">
          <img v-for="(goods,index) in item.url"
            :key="index"
            :src="goods.img_url"
            @click="to_detail(goods.sku_id)"
            alt=""
            srcset="">
        </div>
      </li>
    </ul>

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
      if(sku_id){
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
  img {
    max-width: 100%;
    height: auto;
  }
  video {
    max-width: 100%;
    height: auto;
  }
  ul {
    li {
      // display: flex;
      // justify-content: space-between;
      // img {
      //   flex: 1;
      // }
    }
  }
}
.two-img {
  img {
    font-size: 0;
    width: 50%;
    height: auto;
  }
}
</style>
