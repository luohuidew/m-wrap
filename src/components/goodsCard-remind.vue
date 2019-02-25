<template>
 <div class='goods-card'>
     <div class="goods-img">
         <img :src="card_data.img_url" alt="" srcset="">
     </div>
     <div class="goods-des">
         <p class="goods-title">{{card_data.title}}</p>
         <p class="goods-getter">
             <img v-for="(item,index) in card_data.avator" :key="index" :src="item" alt="" srcset="">
         </p>
         <p class="pay-number">
             {{card_data.account}}+ get this
         </p>
         <p class="pay-price">
             <span class="current">
                 ${{card_data.current_price}}
             </span>
             <!-- <span class="old">
                 ${{card_data.old_price}}
             </span> -->
         </p>
         <p class="light-height-btn">
            <a class="link-btn" :class="card_data.is_disable?'disable':''" href="javascript:;" @click="to_detail(card_data.goods_id)">Remind</a>
         </p>
     </div>
 </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      card_data: {
        goods_id: 0,
        img_url: "/static/img/goods.png",
        title: "TOM FORD-Golden Rose Eye and Lip Set",
        avator: [
          "/static/img/sandy.png",
          "/static/img/sandy.png",
          "/static/img/sandy.png"
        ],
        account: 1000,
        current_price: 368,
        old_price: 388,
        is_disable: false
      }
    };
  },
  components: {},
  methods: {
    to_detail(id) {
      if(!this.card_data.is_disable){
        this.card_data.is_disable = true;
      }else {
        this.card_data.is_disable = false;
      }
      // console.log(id);
      //  this.$router.push({name:'detail',query:{id:this.card_data.goods_id}})
    }
  }
};
</script>

<style lang='scss' scoped>
.goods-card {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 0 10px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
}
.goods-img {
  width: 50%;
  height: 100%;
}
.goods-des {
  width: 50%;
  height: 100%;
  padding: 5px 10px;
  .goods-title {
    width: 162px;
    font-size: 14px;
    text-overflow: ellipsis;
    font-weight: 700;
    color: #000;
  }
  .goods-getter {
    font-size: 0;
    //   padding-top:10px;
    img {
      vertical-align: middle;
      width: 24px;
      height: 24px;
    }
  }
  .pay-number {
    padding-top: 10px;
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
  .disable {
    background-color: #c9caca;
    color: #fff;
  }
}
</style>
