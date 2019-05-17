<template>
  <div @click="close_tips(1)" class='addCart'>
  Add to cart
  </div>
</template>

<script>

import attrDialog from "@/components/dialog/attr-dialog";
import tempDialog from "@/components/dialog/temp-dialog";

export default {
  name: "",
  data() {
    return {
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
props: ["goods", "sku", "attrList", "curGoods", "groupMainUser"],
  mounted() {
    this.init_data();
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
        const param = {
          path: "/login?redirect=" + encodeURIComponent(re_path),
        }
        this.$router.push(param)
      }
    },
    /* 关闭弹窗，并决定是否是团购 */
    close_tips(type, group_id) {
      this.checkedLogin()
      // if (type === 1) {
      //   // this.go_pay(1);
      // } else if (type === 2) {
      // }
      if (type !== 0) {
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
  },
  components: {
    attrDialog,
    tempDialog
  }
};
</script>

<style lang='scss' scoped>
.addCart{
  color: #fff;
  text-align: center;
  line-height: 46px;
  width: 345px;
  height: 46px;
  background: #000;
  border-radius: 23px;
  display: block;
  margin: 15px auto;
}

</style>
