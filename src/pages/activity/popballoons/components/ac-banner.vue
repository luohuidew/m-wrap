<template>
  <div class="ac-chr-banner">
    <h3><span></span><span class="pop-text-banner-title">TITLE</span><span></span></h3>
    <ul class="product-lists">
      <li v-for="(item,index) in similar_lists"
        :key="index">
        <div class="img-box">
          <img :src="item.cover_img"
            alt=""
            srcset="">
        </div>
        <div class="banner-sku-desc">
          <p class="sku-desc">{{item.title}}</p>
          <p class="price-box">
            <span class="cur-price">${{item.group_price}}</span>
            <span class="old-price">${{item.market_price}}</span>
          </p>
        </div>
      </li>
    </ul>
    
  </div>
</template>

<script>
import api from "@/api/newyear";
export default {
  name: "",
  data() {
    return {
      similar_lists: []
    };
  },
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {},
  methods: {
    init_data() {
      api.get_similar_product({ sku_id: 4418074150966099 }).then(res => {
        console.log(res);
        this.similar_lists = res.data;
      });
    },
    to_home() {
      // api.back_index().then(res => {
      //   console.log(res);
      // });
      // if (window.weget_mobile_type === "iOS") {
      //   let share_params = {
      //     type: 105,
      //     data: {}
      //   };
      //   window.webkit.messageHandlers.javaScriptToNative.postMessage(
      //     share_params
      //   );
      // } else {
      //   this.$router.push("/");
      // }
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.ac-chr-banner {
  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    padding: 20px;
    span {
      height: 1px;
      width: 70px;
      background-color: #eccfa0;
    }
    .pop-text-banner-title {
      height: auto;
      background-color: transparent;
      color: #eccfa0;
      text-align: center;
    }
  }
}
.product-lists {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 14px;
  li {
    width: 31%;
    padding-bottom: 10px;
    .img-box {
      background: #fff;
      font-size: 0;
      img {
        width: 100px;
        height: 100px;
      }
    }
    .banner-sku-desc {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 70px;
      background-color: rgb(244, 232, 222);
      text-align: center;
      font-size: 12px;
      .sku-desc {
        flex: 1;
        padding: 8px 8px 0 8px;
        font-size: 13px;
        line-height: 18px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .price-box {
        padding: 10px 0 4px 0;
        .cur-price {
          color: #f30;
        }
        .old-price {
          margin-left: 6px;
          text-decoration: line-through;
        }
      }
    }
  }
}
</style>
