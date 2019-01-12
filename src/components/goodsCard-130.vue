<template>
  <div class='goods-card'>
    <div class="goods-img">
      <img :src="sku.cover_img"
        alt=""
        srcset="">
      <div class="mask-info">
        <div class="mask-icon"
          v-if="sku.mask_info.mask_title"
          :style="{'background':'url('+sku.mask_info.mask_bg_image+') no-repeat center center','background-size':'auto 100%'}">
          <div :class="{'hot':sku.mask_info.mask_type===1,'new':sku.mask_info.mask_type===2,'off':sku.mask_info.mask_type===3}">
            <p class="mask-text">
              <span v-for="(item,index) in discount_text"
                :key="index">{{item}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="goods-des">
      <p class="goods-title"
        @click="to_detail(sku.sku_id)">{{sku.title}}</p>
      <p class="goods-getter">
        <img v-for="(item,index) in bought_user"
          :key="index"
          :src="item.photo">
        <img src="/static/img/icon/团购人点点点.png"
          v-if="bought_user.length">
      </p>
      <p class="pay-number">
        {{sku.bought_num}} bought
      </p>
      <p class="pay-price">
        <span class="current">
          ${{sku.group_price}}
        </span>
        <span class="old">
          ${{sku.market_price}}
        </span>
      </p>
      <p class="light-height-btn">
        <a class="link-btn"
          href="javascript:;"
          @click="to_detail(sku.sku_id)">Get Now <i><img src="../../static/img/icon/get now大.png"
              alt=""
              srcset=""></i></a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      bought_user: this.sku.bought_user.slice(0, 4),
      discount_text: this.sku.mask_info.mask_title.split(/\n|\r\n/g)
    };
  },
  props: ["sku"],
  components: {},
  methods: {
    to_detail(sku_id) {
      this.$router.push({ name: "detail", query: { sku_id: sku_id } });
    }
  }
};
</script>

<style lang='scss' scoped>
.goods-card {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
}
.goods-img {
  position: relative;
  width: 150px;
  height: 150px;
  font-size: 0;
  .mask-info {
    position: absolute;
    left: 10px;
    top: 10px;
    width: 45px;
    height: 45px;
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
  }
}
.goods-des {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 10px;
  .goods-title {
    width: 162px;
    height: 30px;
    font-size: 14px;
    line-height: 15px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    font-weight: 700;
    color: #000;
  }
  .goods-getter {
    font-size: 0;
    //   padding-top:10px;
    img {
      vertical-align: middle;
      width: 17px;
      height: 17px;
      border-radius: 50%;
      margin-right: 5px;
    }
  }
  .pay-number {
    font-size: 12px;
    color: #9b9b9b;
  }
  .pay-price {
    padding-top: 11px;
    font-size: 18px;
    span {
      font-weight: bold;
    }
    .current {
      color: #d80c18;
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
