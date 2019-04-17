<template>
  <div class="article-detail">
    <ul v-for="(item,index) in item_data"
      :key="index"
      class="theme-page-block">
      <li class="img-box">
        <img :src="item.img_url"
          alt=""
          srcset="">
      </li>
      <li class="sku-box"
        v-for="sku in item.sku_lists"
        :key="sku.sku_id"
        :class="'sku-'+sku.sku_id"
        @click="to_detail(sku.sku_id)">
      </li>
    </ul>
    <!-- <div class="footer">
      <div class="about_row1">
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
    </div> -->
  </div>
</template>

<script>
import data from "./config";
export default {
  name: "ac-12",
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
        let href_params = {
          type: 106,
          data: {
            route: "wemall://public/route?type=6&id=" + sku_id + ""
          }
        };
        let temp = this.$CM.weget_device_link(href_params);
        if (temp === "h5") {
          this.$router.push({
            path: "/detail",
            query: {
              sku_id: sku_id
            }
          });
        }
      }
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
.theme-page-block {
  position: relative;
  font-size: 0;
  img {
    width: 100%;
    height: auto;
  }
  .sku-box {
    position: absolute;
    width: 76px;
    height: 16px;
  }
  .sku-5247149551417195 {
    left: 313px;
    top: 168px;
  }
  .sku-5471171920733542 {
    left: 284px;
    top: 362px;
  }
  .sku-5376477507792450 {
    left: 226px;
    top: 227px;
  }
  .sku-5264068769756269 {
    left: 178px;
    top: 377px;
  }
  .sku-5350429730702945 {
    left: 107px;
    top: 164px;
  }
  .sku-5264198894441395 {
    left: 26px;
    top: 195px;
  }
  .sku-5488893601843993 {
    left: 20px;
    top: 408px;
  }
  /* 2 */
  .sku-5472245016547129 {
    left: 296px;
    top: 347px;
  }
  .sku-5486207839336027 {
    left: 175px;
    top: 385px;
  }
  .sku-5385218861951447 {
    left: 146px;
    top: 292px;
  }
  .sku-5418481513368300 {
    left: 43px;
    top: 191px;
  }
  .sku-5384022624346841 {
    left: 91px;
    top: 313px;
  }
  .sku-5417774145753140 {
    left: 98px;
    top: 407px;
  }
  /* 3 */
  .sku-5366996661771585 {
    left: 225px;
    top: 166px;
  }
  .sku-5411399427387604 {
    left: 160px;
    top: 253px;
  }
  .sku-5411665026135715 {
    left: 216px;
    top: 408px;
  }
  .sku-4941954967644968 {
    left: 76px;
    top: 259px;
  }
  .sku-5383212721791454 {
    left: 95px;
    top: 381px;
  }
  .sku-5505003119776885 {
    left: 16px;
    top: 169px;
  }
  /* 4 */
  .sku-4867254926698259 {
    left: 111px;
    top: 123px;
  }
  .sku-5027167889273242 {
    left: 47px;
    top: 172px;
  }
  .sku-5496658985189357 {
    left: 103px;
    top: 297px;
  }
  .sku-5132339416469270 {
    left: 97px;
    top: 387px;
  }
  .sku-5446435530893409 {
    height: 25px;
    width: 46px;
    left: 317px;
    top: 181px;
  }
  .sku-5393847339386639 {
    width: 49px;
    height: 26px;
    left: 324px;
    top: 308px;
  }
}
</style>
