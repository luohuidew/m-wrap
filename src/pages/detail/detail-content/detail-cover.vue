<template>
  <div class=""
    v-if="sku">
    <div class='goods-des'>
      <div class="img-box">
        <div class="mask-info"
          v-for="(mask_info,index) in sku.show_tag"
          :key="index">
          <div class="mask-icon"
            v-if="mask_info.mask_type===3"
            :style="{'background':'url('+mask_info.mask_bg_image+') no-repeat center center','background-size':'auto 100%'}">
          </div>
        </div>
        <van-swipe>
          <van-swipe-item v-for="(item,index) in sku.img_urls"
            :key="index">
            <img class="goods-img"
              :src="item"
              alt=""
              srcset="">
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="price-box">
        <p class="price"
          v-if="cur_goods">
          <span class="cur-price">${{cur_goods.alone_price}}</span>
          <span class="old-price"
            v-if="cur_goods.crossed_price">${{cur_goods.crossed_price}}</span>
        </p>
      </div>
      <div class="icon-box">
        <template v-for="(mask_info,index) in sku.show_tag">
          <img :src="mask_info.mask_bg_image"
            alt=""
            srcset=""
            v-if="mask_info.mask_type!==3"
            :key="index">
        </template>
      </div>
      <div class="goods-info">
        {{sku.title}}
      </div>
      <p class="like-number">
        <span>
          {{sku.bought_num}} bought
        </span>
        <span>
          {{storeData.location}}
        </span>
        
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    skuData: {
      type: Object,
      default: null
    },
    goodsData: {
      type: Object,
      default: null
    },
    storeData:{
      type:Object,
      default:undefined
    }
  },
  data() {
    return {};
  },
  computed: {
    cur_goods() {
      return this.goodsData;
    },
    sku() {
      return this.skuData;
    }
  },
  created() {},
  methods: {},
  components: {}
};
</script>

<style lang='scss' scoped>
.goods-des {
  background-color: #fff;
  border-bottom: 10px solid #f8f8f8;
  padding-bottom: 16px;
  & > div {
    padding: 0 20px;
  }
  .img-box {
    position: relative;
    padding: 0;
    .mask-info {
      position: absolute;
      right: 10px;
      bottom: 10px;
      width: 80px;
      height: 80px;
      z-index: 10;
      // border-radius: 50%;
      // overflow: hidden;
      .mask-icon {
        height: 100%;
        width: 100%;
        // background: url('') no-repeat center center;
        background-size: auto 100%;
        border-radius: 50%;
        overflow: hidden;
        font-size: 12px;
        line-height: 13px;
        color: #fff;
        text-align: center;
        .hot {
          margin: 22px auto;
        }
        .new {
          margin: 15px auto;
        }
        .off {
          margin: 8px auto;
        }
        .mask-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
.goods-img {
  width: 100%;
  height: 364px;
  object-fit: cover;
}
.price-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0;
  margin-top: 15px;
  .cur-price {
    color: #000000;
    font-size: 26px;
    font-weight: bold;
  }
  .old-price {
    color: #898989;
    font-size: 14px;
    text-decoration-line: line-through;
    padding-left: 16px;
  }
}
.like-number {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px 0 20px;
  align-items: center;
  font-size: 14px;
  color: #9b9b9b;
  span {
  }
}
.icon-box {
  font-size: 0;
  cursor: pointer;
  height: 18px;
  // margin-bottom: 18px;
  overflow: hidden;
  margin: 15px 0;
  padding: 0;
  img {
    margin-right: 10px;
    height: 18px;
    width: auto;
  }
}
.goods-info {
  font-size: 16px;
  line-height: 20px;
  color: #4a4a4a;
}
</style>
