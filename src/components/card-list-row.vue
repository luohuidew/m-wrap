<template>
  <div class='goods-card'
    @click="to_detail(sku.sku_id)" v-if="sku">
    <div class="goods-img">
      <img
        alt=""
        :src="sku.cover_img"
        srcset="">
      <!--<img-->
              <!--alt=""-->
              <!--v-lazyload="{src: sku.cover_img, parent: parent}"-->
              <!--srcset="">-->
      <div class="mask-info"
        v-for="(mask_info,index) in sku.show_tag"
        :key="index">
        <div class="mask-icon"
          v-if="mask_info.mask_type===3"
          :style="{'background':'url('+mask_info.mask_bg_image+') no-repeat center center','background-size':'auto 100%'}">
        </div>
      </div>
    </div>
    <div class="goods-des">
      <p class="goods-title">{{sku.title}}</p>
      <div class="icon-box">
        <template v-for="(mask_info,index) in sku.show_tag">
          <img :src="mask_info.mask_bg_image"
            alt=""
            srcset=""
            v-if="mask_info.mask_type!==3"
            :key="index">
        </template>
      </div>
      <p class="pay-price">
        <span class="current">
          ${{sku.alone_price}}
        </span>
        <!-- <span class="old">
          ${{sku.market_price}}
        </span> -->
      </p>
      <div class="buyer-box">
        <p class="pay-number">
          <!--{{sku.bought_num}} bought-->
        </p>
        <!-- <p class="goods-getter" v-if="sku.bought_user">
          <img v-for="(item,index) in sku.bought_user"
          v-show="index<4"
            :key="index"
            :src="item.photo"
            :style="{right:(index+1)*12+'px',zIndex:10-index}">
          <img src="/static/img/icon/团购人点点点.png"
            v-if="sku.bought_user.length">
        </p> -->

      </div>
      <!-- <p class="light-height-btn">
        <a class="link-btn"
          href="javascript:;"
          @click="to_detail(sku.sku_id)">Get Now <i><img src="../../static/img/icon/get now大.png"
              alt=""
              srcset=""></i></a>
      </p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      // bought_user: this.sku.bought_user.slice(0, 4),
      discount_text: this.sku.mask_info.mask_title.split(/\n|\r\n/g)
    };
  },
  props: {
    sku:{
      type:Object,
      default:undefined
    },
    parent:{
      default:undefined
    }
  },
  components: {},
  methods: {
    to_detail(sku_id) {
      this.$router.push({ path: "/detail", query: { sku_id: sku_id } });
    }
  }
};
</script>

<style lang='scss' scoped>
.goods-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-bottom: 1px solid #eeeeee;
}
.goods-img {
  position: relative;
  width: 130px;
  height: 130px;
  font-size: 0;
  .mask-info {
    position: absolute;
    left: 5px;
    top: 5px;
    width: 38px;
    height: 38px;
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
  img {
    height: 100%;
    width: 100%;
    border: 1px solid #eeeeee;
    border-radius: 8px;
    object-fit: cover;
  }
}
.goods-des {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  padding: 6px 0px 4px 20px;
  .goods-title {
    height: 30px;
    font-size: 14px;
    line-height: 16px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    // font-weight: 700;
    color: #4a4a4a;
    margin-bottom: 10px;
  }
  .icon-box {
    font-size: 0;
    cursor: pointer;
    height: 16px;
    margin-bottom: 18px;
    overflow: hidden;
    img {
      margin-right: 10px;
      height: 16px;
      width: auto;
    }
  }
  .buyer-box {
    display: flex;
    justify-content: space-between;
    .goods-getter {
      font-size: 0;
      position: relative;
      img {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 10;
        vertical-align: middle;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-right: 5px;
        border: 1px solid #eeeeee;
      }
    }
    .pay-number {
      font-size: 12px;
      color: #898989;
    }
  }
  .pay-price {
    font-size: 18px;
    padding-bottom: 16px;
    span {
      font-weight: bold;
    }
    .current {
      color: #000000;
    }
    .old {
      font-size: 17px;
      padding-left: 21px;
      color: #9b9b9b;
      text-decoration-line: line-through;
    }
  }
  .light-height-btn {
    padding-top: 5px;
    img {
      height: 100%;
      vertical-align: middle;
    }
  }
  .link-btn {
    display: block;
    background-color: #000;
    color: #fff;
    font-size: 14px;
    padding: 6px 0;
    text-align: center;
    border-radius: 14px;
  }
}
</style>
