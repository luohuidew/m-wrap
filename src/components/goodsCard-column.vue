<template>
  <div class='goods-card'>
    <div class="goods-img">
      <img :src="card_data.cover_img"
        alt=""
        srcset="">
    </div>
    <div class="goods-des"
      @click="to_detail(card_data.sku_id)">
      <p class="goods-title">{{card_data.title}}</p>
      <div class="price-box">
        <p class="pay-price">
          <span class="current">
            ${{card_data.alone_price}}
          </span>
        </p>
        <p class="goods-getter">
          <img v-for="(item,index) in card_data_img"
            :key="index"
            :src="item.photo">
          <img src="/static/img/icon/团购人点点点.png">
        </p>
      </div>
      <p class="light-height-btn">
        <a class="link-btn"
          href="javascript:;">Get Now <i><img src="/static/img/icon/get now大.png"
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
      card_data: this.cardData,
      card_data_img: this.cardData.bought_user.slice(0, 2),
      introduce: ""
    };
  },
  props: ["cardData"],
  components: {},
  methods: {
    to_detail(sku_id) {
      let href_params = {
        type: 106,
        data: {
          route: "wemall:///public/route?type=6&id=" + sku_id + ""
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
      this.$emit("stop", "stop");
    }
  }
};
</script>

<style lang='scss' scoped>
.goods-card {
  display: flex;
  // width: 172px;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  // margin-right: 10px;
  overflow: hidden;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
}
.price-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.goods-img {
  width: 100%;
  height: 100%;
  img {
    width: 172px;
    height: 172px;
    object-fit: cover;
  }
}
.goods-des {
  width: 100%;
  height: 50%;
  padding: 10px;
  .goods-title {
    overflow: hidden;
    width: 152px;
    text-overflow: ellipsis;
    font-size: 12px;
    min-height: 28px;
    font-family: "AvertaStd-Semibold";
    text-overflow: ellipsis;
    // font-weight: 700;
    color: #000;
  }
  .goods-getter {
    font-size: 0;
    //   padding-top:10px;
    img {
      vertical-align: middle;
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
  }
  .pay-number {
    padding-top: 10px;
    font-size: 12px;
    color: #9b9b9b;
  }
  .pay-price {
    // padding-top: 11px;
    font-size: 18px;
    span {
      font-weight: bold;
    }
    .current {
      color: #d80c18;
      font-size: 18px;
    }
    .old {
      font-size: 14px;
      // padding-left: 21px;
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
