<template>
  <div class='goods-card'
    @click="to_detail(card_data.sku_id)">
    <div class="goods-img">
      <img :src="card_data.cover_img"
        alt=""
        srcset="">
    </div>
    <div class="goods-des">
      <p class="goods-title">{{card_data.title}}
      </p>
      <div class="price-box">
        <p class="pay-price">
          <span class="current">
            ${{card_data.alone_price}}
          </span>
        </p>
        <!-- <div class="buyer-box"
          v-if="cardData.bought_user.length">
          <img v-for="(item,index) in cardData.bought_user"
            :key="index"
            v-show="index<2"
            :src="item.photo"
            :style="{right:(index+1)*12+'px',zIndex:10-index}">
          <img src="/static/img/icon/团购人点点点.png"
            v-if="cardData.bought_user.length">

        </div> -->
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
      introduce: ""
    };
  },
  props: ["cardData", "groupId", "activeFixed"],
  components: {},
  methods: {
    to_detail(sku_id) {
      if (this.activeFixed) {
        let params = {
          path: "/detailAcive",
          query: {
            sku_id: sku_id,
            activeList: this.activeFixed
          }
        };
        this.$router.push(params);
      } else {
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
          } else {
            this.$router.push(params);
            // window.location.href =
            //   window.location.origin + "/detail?sku_id=" + sku_id;
          }
          // this.$router.push(params);
        }
      }
      // this.$emit("stop", "stop");
    }
  }
};
</script>

<style lang='scss' scoped>
.goods-card {
  background-color: #fff;
  border-radius: 8px;
  .goods-img {
    img {
      border-radius: 8px;
      width: 100%;
      object-fit:contain
    }
  }
}
.goods-des {
  margin-top: 6px;
  width: 100%;
  .goods-title {
    text-align: center;
    height: 40px;
    font-size: 12px;
    line-height: 20px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    white-space: normal;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    color: #000;
  }

  .pay-price {
    .current {
      margin-top: 3px;
      display: block;
      text-align: center;
      font-size:14px;
      font-weight:bold;
      color:rgba(0,0,0,1);
    }
  }

}

</style>
