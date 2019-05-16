

<template>
  <div class="detail-pay-btn">
    <!-- <div class="fee-per"
      @click.stop="to_fee">
      <p>ONE TIME shipping fee PER day</p>
      <i></i>
    </div> -->

    <!-- :class="{'cart-icon':this.$store.state.cart.goods_num}" -->
    <!-- :class="{'animeted bounceIn':$store.state.cart.is_static}" src="/static/images/icon/header/H5-购物车@3x.png" -->
    <div class="go-home-box">
      <!-- <router-link :to="{path:'/'}">
        <img src="/static/images/icon/detail/go-home.png"
          alt=""
          srcset="">
      </router-link> -->
    </div>
    <a class="store-btn"
      href="javascript:;"
      @click="to_cart"
      :class="{'have-goods':storeCart.goods_num}">
      <span class="cart-mun-icon"
        v-if="storeCart.goods_num">{{storeCart.goods_num}}</span>
      <span class="heart"
        :class="is_like===2?'active':''">
        <img :class="{'animated bounceIn':!isStatic}"
          alt=""
          src="/static/images/icon/header/H5-购物车@3x.png"
          srcset="">
      </span>
      <span>Cart</span>
    </a>

    <!-- 1:团购参团
          2：开团
          act_type：act_type:免费兑换
          3:支持团购的商品
     -->
    <template v-if="detail_status.status==1">
      <a class="group-status-buy"
        href="javascript:;"
        @click="close_tips(2,cur_group_id)">
        <div class="avator">
          <img :src="groupMainUser.photo"
            alt="">
        </div>
        <div class="group-info">
          <span class="user-info">Join {{groupMainUser.username}}`s group</span>
          <span class="left-time">Time left {{groupMainUser.left_time | timeDiff}}</span>
        </div>
      </a>
    </template>
    <template v-else-if="detail_status.status==2">
      <a class="group-status-buy"
        href="javascript:;"
        @click="close_tips(2)">
        <div class="group-info">
          <span class="user-info">GROUP BUY <span class="status-price">{{data_price.money_unit}}{{data_price.group_price}}</span> </span>
        </div>
      </a>
    </template>
    <template v-else-if="c_query.act_type">
      <a class="group-status-buy"
        href="javascript:;"
        @click="close_tips(1)">
        <div class="group-info">
          <span class="user-info">APPLY THE GIFT FOR FREE</span>
        </div>
      </a>
    </template>
    <template v-else-if="detail_status.status==3">
      <a class="direct-buy buy-btn"
        href="javascript:;"
        @click="alone_buy()">
        <span class="price">{{data_price.money_unit}}{{data_price.alone_price}}</span>
        <span class="price-des">ORIGINAL PRICE</span>
      </a>
      <a class="group-buy buy-btn"
        href="javascript:;"
        @click="group_buy()">
        <!-- <a class="group-buy buy-btn"
        href="javascript:;"
        @click="close_tips(2)"> -->
        <span class="price">{{data_price.money_unit}}{{data_price.group_price}}</span>
        <span class="price-des">GROUP BUY</span>
      </a>
    </template>
    <template v-else>
      <a class="cart-status-buy"
        href="javascript:;"
        @click="close_tips(1)">
        <div class="">
          <span class="">Add To Cart</span>
        </div>
      </a>
    </template>

    <addcart-antion  :sku="sku" v-if="cartAnimate" @toggle="addcartAntion==true"></addcart-antion>

    <temp-dialog v-if="show_dialog_tips"
      @close="close_tips(0)">
      <template slot="tips">
        <div class="tips-group">
          <h3>Group buy Save <span>{{data_price.money_unit}}{{Number((data_price.alone_price-data_price.group_price)*100/100).toFixed(2)}}</span></h3>
          <p class="buy">
            <span class="buy-alone"
              @click.stop="close_tips(1)">BUY IT NOW</span>
            <span class="buy-group"
              @click.stop="group_buy()">GROUP BUY</span>
          </p>
        </div>
      </template>
    </temp-dialog>



    <temp-dialog v-if="show_dialog_tips_group"
      @close="close_tips(0)">
      <template slot="tips">
        <div class="open-group-box">
          <p class="close-icon">
            <img src="/static/img/icon/关闭@2x.png"
              alt=""
              srcset="">
          </p>
          <h3>Join {{recommend_group.username}}' group</h3>
          <p class="need-persion">{{recommend_group.left_num}} Person Needed Time Left {{recommend_group.left_time|timeDiff}}</p>
          <div class="group-info">
            <img :src="recommend_group.photo"
              alt="">
            <img src="/static/img/icon/emity.png"
              alt="">
          </div>
          <div class="btn-box">
            <a class="group"
              href="javascript:;"
              @click="close_tips(2,recommend_group.group_id)">JOIN GROUP</a>
            <p>
              <span class="line"></span>
              <span class="or">OR</span>
              <span class="line"></span>
            </p>
            <a class="open"
              href="javascript:;"
              @click="close_tips(2)">START MY GROUP</a>
          </div>
        </div>
      </template>
    </temp-dialog>
  </div>
</template>

<script>
import attrDialog from "@/components/dialog/attr-dialog";
import tempDialog from "@/components/dialog/temp-dialog";
import api from "@/api/product";
import { getToken } from "@/utils/auth";
import addcartAntion from "@/components/addcart-antion";

export default {
  name: "",
  data() {
    return {
      // data_price:this.goods
      show_dialog: false,
      show_dialog_tips: false,
      show_dialog_tips_group: false,
      cur_type: 1,
      cur_group_id: undefined,
      cur_goods_id: undefined,
      cur_paynumber: 0,
      is_like: this.sku.is_like,
      is_group: false,
      c_query: this.$route.query,
      /* 开团提示的弹框的额内容 */
      recommend_group: undefined,
      isStatic: true,
      showAddCart:false
    };
  },
  computed: {
    data_price() {
      if (this.curGoods) {
        return this.curGoods;
      } else {
        return {
          money_unit: "wait inventory"
        };
      }
    },
    submit_data() {
      return {
        purchase_type: this.cur_type,
        group_id: this.cur_group_id
      };
    },
    detail_status() {
      return {
        status: this.$route.query.status,
        group_id: this.$route.query.group_id
          ? this.$route.query.group_id
          : undefined
      };
    },
    goods_number() {
      return this.$store.state.cart.goods_num;
    },
    goods_state() {
      return this.$store.state.cart.is_static;
    },
    storeCart() {
      return this.$store.state.cart;
    }
  },
  props: ["goods", "sku", "attrList", "curGoods", "groupMainUser","cartAnimate","open"],
  components: {
    attrDialog,
    tempDialog,
    addcartAntion
  },
  watch: {
    // "cur_group_id":{
    //   handler(cur,old){
    //     this.close_tips(2,cur);
    //   },
    //   deep:true
    // },
    storeCart() {
      this.isStatic = false;
      setTimeout(() => {
        this.isStatic = true;
      }, 1000);
    }
  },
  mounted() {
    this.init_data();
    if(this.open){
      this.$emit("show_dialog_show");
    }
  },
  methods: {
    init_data() {
      if (this.$route.query.group_id) {
        this.is_group = true;
        this.cur_group_id = this.$route.query.group_id;
      }
    },
    to_fee() {
      this.$router.push({ path: "/nopostal" });
    },
    to_create(data) {
      // console.log(data);
      // let params = {"goods_id":"3959183990396578","num":"1","purchase_type":"1","token":"bd127566ee70183947afcde581b953768e641e82578aa4c8b9a61a0eb2ec1e7d"};
      // console.log(params);
      // api.confirm_order(params).then(res=>{
      //   console.log(res);
      // });
      let params = {
        sku_id: this.$route.query.sku_id
      };

      // api
      //   .confirm_order(data)
      //   .then(res => {
      //     // console.log(res, "检测订单res");
      //     // if (params.query.num) {
      //     //   this.$router.push(params);
      //     // }
      //     alert(JSON.stringify(res));
      //   })
    },
    get_cur_goods(data) {
      // console.log(data);
    },
    close_emity() {
      this.show_dialog = false;
    },
    group_buy() {
      let params = {
        sku_id: this.$route.query.sku_id
      };
      this.show_dialog_tips = false;
      api.getRandGroup(params).then(res => {
        if (res.data.total === 0) {
          this.close_tips(2);
        } else {
          this.recommend_group = res.data.group;
          this.show_dialog_tips_group = true;
          // window.group_timer = setInterval(() => {
          //   // console.log(this.cur_index);
          //   this.recommend_group.left_time -= 1;
          //   if (this.recommend_group.left_time < 0) {
          //     this.recommend_group.left_time = 0;
          //   }
          //   console.log(this.recommend_group.left_time);
          // }, 1000);
        }
      });
    },
    alone_buy() {
      this.show_dialog_tips = true;
    },
    //检查登录
    checkedLogin() {
      if (!this.$store.state.token){
        let re_path = `${
          this.$route.fullPath
          }&store_id=${
          this.sku.store_id
          }`;
        sessionStorage.setItem('open_cart',1);
        const param = {
          path: "/login?redirect=" + encodeURIComponent(re_path),
        }
        this.$router.push(param)
      }
    },
    /* 关闭弹窗，并决定是否是团购 */
    close_tips(type, group_id) {
      this.checkedLogin();
      // if (type === 1) {
      //   // this.go_pay(1);
      // } else if (type === 2) {
      // }
      if (type !== 0) {
        this.$set(this, "cur_type", type);
        this.$set(this, "cur_group_id", group_id);
        //加入购物车
        let _this=this;
        setTimeout(function () {
          _this.$emit("carting",false)
        },800);
        this.$emit("show_dialog_show");
      }

      this.show_dialog_tips = false;
      this.show_dialog_tips_group = false;
      // window.clearInterval(group_timer);
    },
    to_store(cur_store) {
      // console.log(666);
      let params = {
        path: "/store",
        query: {
          store_id: cur_store
        }
      };
      this.$router.push(params);
    },
    to_cart() {
      let params = {
        path: "/cart"
      };
      this.$router.push(params);
    },
    like_goods() {
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
          this.is_like = res.data;
        });
      }

    }
  }
};
</script>

<style lang='scss' scoped>
.detail-pay-btn {
  position: relative;
  font-size: 18px;
  display: flex;
  z-index: 0;
  overflow: hidden;
  height: 50px;
  border-top: 1px solid #f3f3f3;
  .go-home-box {
    position: absolute;
    right: 10px;
    top: -10px;
    transform: translateY(-100%);
    img {
      width: 50px;
      height: 50px;
    }
  }
  .fee-per {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30px;
    background-color: #efefef;
    transform: translateY(-100%);
    i {
      width: 50px;
      height: 100%;
      background: #efefef url("/static/img/icon/返回 小右.png") no-repeat center
        right;
      background-size: 14px auto;
    }
    p {
      padding-left: 30px;
      font-size: 12px;
      line-height: 30px;
      background: #efefef url("/static/img/icon/user_order_shipped_icon@2x.png")
        no-repeat center left;
      background-size: 18px auto;
    }
  }
  .buy-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // width: 140px;
    flex: 1;
    height: 50px;
    color: #fff;
    span {
      display: block;
    }
    .price {
      font-size: 18px;
      font-weight: bold;
    }
    .price-des {
      font-size: 10px;
    }
  }
  .group-status-buy {
    display: flex;
    flex: 1;
    // justify-content: space-between;
    align-items: center;
    padding: 6px 16px;
    background-color: #d70e19;
    color: #fff;
    .group-info {
      padding-left: 10px;
      span {
        display: block;
      }
      .user-info {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        font-size: 14px;
        font-weight: bold;
        line-height: 24px;
      }
      .left-time {
        font-size: 10px;
      }
      .status-price {
        display: inline;
        font-size: 20px;
        padding-left: 12px;
      }
    }
    img {
      height: 38px;
      width: 38px;
      vertical-align: middle;
      border-radius: 50%;
    }
  }
  .cart-status-buy {
    display: flex;
    flex: 1;
    // justify-content: space-between;
    align-items: center;
    padding: 6px 16px;
    background-color: #000;
    color: #fff;
    justify-content: center;
  }
  .store-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    /*justify-content: center;*/
    height:71px;
    width: 71px;
    color: #000;
    margin-top: 7px;
    // padding: 6px 0;
    font-size: 10px;
    span{
      color: #9B9B9B;
    }
    &.have-goods {
      position: relative;
      .cart-mun-icon {
        position: absolute;
        top: 0px;
        right: 11px;
        display: block;
        width: 14px;
        font-size: 10px;
        text-align: center;
        color: #ffffff;
        height: 14px;
        border-radius: 50%;
        background-color: #d70e19;
      }
    }
    .heart {
      // width: 40px;
      // height: 40px;

      img {
        height: 22px;
        width: 22px;
        object-fit: contain;
        // width: auto;
      }
    }
    .like-heart {
      height: 20px;
      width: 20px;
      background: url("/static/img/icon/icon/收藏前.png") no-repeat center
        center;
      background-size: auto 80%;
      &.active {
        background: url("/static/img/icon/收藏后.png") no-repeat center center;
        background-size: auto 70%;
      }
    }
    // .heart.active {
    //   width: 40px;
    //   height: 40px;
    // }
  }
  /*  */
  .cart-icon {
    position: relative;
    &::before {
      display: block;
      content: "";
      height: 8px;
      width: 8px;
      border-radius: 50%;
      background-color: #d70e19;
      position: absolute;
      right: -4px;
      top: 0%;
      color: #d70e19;
      font-weight: bold;
    }
  }
  .direct-buy {
    background-color: #000;
  }
  .group-buy {
    background-color: #d70e19;
  }
}
/* 内置弹框的样式 */
.tips-group {
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  width: 294px;
  height: 200px;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  padding: 50px 15px 26px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 20px;
    font-weight: 600;
    span {
      color: #d70e19;
    }
  }
  .buy {
    width: 100%;
    display: flex;
    justify-content: space-between;
    span {
      width: 125px;
      height: 40px;
      background: rgba(0, 0, 0, 1);
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
      border-radius: 20px;
      color: #fff;
      line-height: 40px;
      text-align: center;
      font-size: 14px;
    }
    .buy-group {
      background-color: #d70e19;
    }
  }
}
.open-group-box {
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  width: 80%;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  text-align: center;
  padding: 20px 20px 40px 20px;
  .close-icon {
    text-align: right;
    img {
      height: 10px;
    }
  }
  h3 {
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
    padding: 10px 0 6px 0;
  }
  .need-persion {
    font-size: 12px;
    line-height: 15px;
    color: #898989;
  }
  .group-info {
    padding: 20px 0 30px 0;
    img {
      width: 60px;
      width: 60px;
      border-radius: 50%;
      // border:1px solid #C9CACA;
      margin: 0 10px;
    }
  }
  .btn-box {
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 30px 0;
      .line {
        width: 65px;
        height: 1px;
        background-color: #c9caca;
      }
      .or {
        width: auto;
        font-size: 12px;
        line-height: 16px;
        padding: 0 10px;
      }
    }
    a {
      display: inline-block;
      height: 40px;
      width: 255px;
      border-radius: 20px;
      text-align: center;
      color: #ffffff;
      font-size: 16px;
      line-height: 40px;
    }
    .group {
      background-color: #d70e19;
    }
    .open {
      background-color: #c9caca;
    }
  }
}
  .carta{display: block;background: #eee}
</style>
