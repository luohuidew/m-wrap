<template>
  <div class='goods-card'
    @click="to_detail(card_data.sku_id)">
    <div class="goods-img">
      <img :src="card_data.cover_img"
        alt=""
        srcset="">
      <div class="mask-info"
        v-for="(mask_info,index) in card_data.show_tag"
        :key="index">
        <div class="mask-icon"
          v-if="mask_info.mask_type===3"
          :style="{'background':'url('+mask_info.mask_bg_image+') no-repeat center center','background-size':'auto 100%'}">
        </div>
      </div>
    </div>
    <div class="goods-des">
      <p class="goods-title">{{card_data.title}}</p>
      <div class="icon-box">
        <template v-for="(mask_info,index) in card_data.show_tag">
          <img :src="mask_info.mask_bg_image"
            alt=""
            srcset=""
            v-if="mask_info.mask_type!==3"
            :key="index">
        </template>
      </div>
      <div class="price-box">
        <p class="pay-price">
          <span class="current">
            ${{card_data.alone_price}}
          </span>
        </p>
        <div class="buyer-box"
          v-if="card_data_img.length">
          <img v-for="(item,index) in card_data_img"
            :key="index"
            :src="item.photo"
            :style="{right:(index+1)*12+'px',zIndex:10-index}">
          <img src="/static/img/icon/团购人点点点.png"
            v-if="card_data_img.length">
          <!-- <p class="goods-getter">
          </p> -->

        </div>
      </div>
      <!-- <p class="light-height-btn">
        <a class="link-btn"
          href="javascript:;">Get Now <i><img src="/static/img/icon/get now大.png"
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
      card_data: this.cardData,
      card_data_img: this.cardData.bought_user.slice(0, 2),
      introduce: ""
    };
  },
  props: ["cardData", "groupId"],
  components: {},
  methods: {
    to_detail(sku_id) {
      let href_params = {
        type: 106,
        data: {
          route: "wemall://public/route?type=6&id=" + sku_id + ""
        }
      };
      let temp = this.$CM.weget_device_link(href_params);
      if (temp === "h5") {
        let params = {
          path: "/detail",
          query: {
            sku_id: sku_id
          }
        };
        if (this.groupId) {
          params.query.status = 1;
          params.query.group_id = this.groupId;
          this.$router.push(params);
          // params.query.status = 1;
          // params.query.group_id = this.groupId;
          // window.location.href =
          //   window.location.origin +
          //   "/detail?sku_id=" +
          //   sku_id +
          //   "&status=1&group_id=" +
          //   this.groupId;
        } else {
          this.$router.push(params);
          // window.location.href =
          //   window.location.origin + "/detail?sku_id=" + sku_id;
        }
        // this.$router.push(params);
      }
      // this.$emit("stop", "stop");
    }
  }
};
</script>

<style lang='scss' scoped>
.goods-card {
  display: flex;
  width: 150px;
  padding: 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #eeeeee;
}
.price-box {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // .goods-getter {
  //   font-size: 0;
  //   position: relative;
  // }
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
  }
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
  img {
    height: 100%;
    width: 100%;
    // border: 1px solid #eeeeee;
    border-radius: 8px;
  }
}
.goods-des {
  width: 100%;
  height: 50%;
  padding: 10px 0;
  .goods-title {
    height: 30px;
    font-size: 14px;
    line-height: 16px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    white-space: normal;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    color: #4a4a4a;
    margin-bottom: 10px;
  }
  .icon-box {
    font-size: 0;
    cursor: pointer;
    height: 16px;
    margin-bottom: 10px;
    overflow: hidden;
    img {
      margin-right: 10px;
      height: 16px;
      width: auto;
    }
  }

  .pay-number {
    padding-top: 10px;
    font-size: 12px;
    color: #9b9b9b;
  }
  .pay-price {
    font-size: 18px;
    color: #000;
    span {
      font-weight: bold;
    }
    .current {
      // font-size: 14px;
      // overflow: hidden;
      // text-overflow: ellipsis;
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
