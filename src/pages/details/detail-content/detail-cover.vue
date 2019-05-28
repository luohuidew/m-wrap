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
        <p class="like-number">
          <img v-if="is_like==1"  class="is_like"  @click="onlike" src="/static/images/icon/detail/like2@3x.png" alt="">
          <img v-if="is_like==2"  class="is_like_no"  @click="onlike" src="/static/images/icon/detail/like@3x.png" alt="">
          <span>
          {{like_num}}
        </span>

        </p>
        <p class="price"
          v-if="cur_goods">
          <span class="cur-price">${{cur_goods.alone_price}}</span>
          <span class="old-price"
            v-if="cur_goods.crossed_price">${{cur_goods.crossed_price}}</span>

          <span class="new-price" v-if="!$store.state.token">{{cur_goods.promote_price}}</span>

        </p>

      </div>

      <div class="goods-info">
        <span>{{sku.title}}</span>
      </div>
      <div class="icon-box" v-if="sku.show_tag.length!=0">
        <template v-for="(mask_info,index) in sku.show_tag">
          <img :src="mask_info.mask_bg_image"
               alt=""
               srcset=""
               v-if="mask_info.mask_type!==3"
               :key="index">
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import api from "@/api/product";
  import { getToken } from "@/utils/auth";
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
    return {
      like_num:this.skuData.like_num,
      is_like:1,
      price_preference:0
    };
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
  methods: {
    onlike(){
      if (!this.$store.state.token) {
        const param = {
          path: "/login",
          query: {
            redirect: this.$route.fullPath
          }
        }
        this.$router.push(param)
      } else {
        let params = {
          sku_id: this.$route.query.sku_id
        };
        api.like(params).then(res => {
          if(res.data==1){
            this.like_num-=1
          }else{
            this.like_num+=1
          }
          this.is_like = res.data;
        });
      }
    }
  },
  mounted(){
    this.is_like=this.sku.is_like;
    this.price_preference=this.cur_goods.alone_price-15<0?0:this.cur_goods.alone_price-15;
  },
  components: {}
};
</script>

<style lang='scss' scoped>

.goods-des {
  background-color: #fff;
  border-bottom: 10px solid #f8f8f8;
  padding-bottom: 10px;
  & > div {
    padding: 0 15px;
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
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0;
  margin-top: 15px;
  .cur-price {
    color: #000000;
    font-size: 24px;
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
  text-align: center;
  display: block;
  position: absolute;
  top: 5px;
  right: 0;
  //justify-content: space-between;
  padding: 0 20px 0 20px;
  align-items: center;
  font-size: 14px;
  color: #9b9b9b;
  .is_like {
    width: 24px;
    height: 22px;
    display: block;
  }
  .is_like_no{
    width: 25px;
    display: block;
    height: 22px;
  }
  span{
    display: block;
    margin-top: 5px;
    text-align: center;
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
  margin-bottom: 0;

  img {
    margin-right: 10px;
    height: 18px;
    width: auto;
  }
}
.goods-info {
  width: 280px;
  /*margin-top: 6px;*/
  font-size: 14px;
  line-height: 20px;
  color: #000;
}
  .is_like{
    animation: go_in .3s;
  }
@keyframes go_in
{
  0% {opacity: 0; transform: scale(0);}
  100%{opacity: 1; transform: scale(1);}
}

.is_like_no{
  animation: go_inn .3s;
}
@keyframes go_inn
{
  0% {opacity: 1; transform: scale(1);}
  100%{opacity: 0; transform: scale(0);}
}
  .new-price{
    margin: 8px 0;
    width: 280px;
    display: block;
    font-size: 12px;
    color: #9B9B9B;
  }
</style>
