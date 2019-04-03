<template>
  <section class="header-box">
    <swiper :datas='bannerData'>
      <template slot="default"
        slot-scope="{item}">
        <div style="height:157px"
          class="item-content">
          <!-- <div class="img-box">
            <img :src="item.store_info.mobile_background_url"
              alt=""
              srcset="">
          </div> -->
          <div class="store-box">
            <div class="store-header">
              <div class="store-info">
                <img :src="item.image_url"
                  alt=""
                  srcset="">
                <span>{{item.name}}</span>
              </div>
              <router-link class="visit-btn"
                :to="item.route">
                Visit Store
              </router-link>
            </div>
            <ul class="sku-lists">
              <li v-for="(goods) in item.product"
                :key="goods.sku_id"
                @click="to_sku_detail(goods.sku_id)">
                <img :src="goods.cover_img"
                  alt=""
                  srcset="">
                <p>{{goods.money_unit}}{{goods.alone_price}}</p>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </swiper>
  </section>
</template>

<script>
import swiper from "@/components/Swiper";
export default {
  name: "",
  props: {
    bannerData: {
      type: Array,
      default: undefined
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {
    to_store(store_id) {
      let href_params = {
        path: "/store",
        query: {
          store_id: store_id
        }
      };
      this.$router.push(href_params);
    },
    to_sku_detail(sku_id) {
      let href_params = {
        path: "/detail",
        query: {
          sku_id: sku_id
        }
      };
      this.$router.push(href_params);
    }
  },
  components: {
    swiper
  }
};
</script>

<style lang='scss' scoped>
.item-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .img-box {
    img {
      height: 130px;
      width: 100%;
    }
  }
  .store-box {
    flex: 1;
    .store-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 10px;
      .store-info {
        display: flex;
        align-items: center;
        img {
          height: 30px;
          width: 30px;
          margin-right: 10px;
          border-radius: 50%;
        }
        span {
          font-size: 14px;
          font-weight: bold;
        }
      }
      .visit-btn {
        height: 20px;
        line-height: 20px;
        font-size: 10px;
        border: 1px solid #4a4a4a;
        border-radius: 10px;
        padding: 0 10px;
      }
    }
    /*  */
    .sku-lists {
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      li {
        font-size: 12px;
        img {
          height: 70px;
          width: 70px;
        }
        p {
          text-align: left;
          line-height: 18px;
        }
      }
    }
  }
}
</style>
