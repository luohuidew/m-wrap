<template>
  <div class="order-list">
    <div class="order-content"
      v-for="(item,index) in order_lists"
      :key="index">
      <div class="order-box">
        <p class="order-title">
          <span>{{item.order_no}}</span>
          <span class="title-tips">{{item.status_name}}</span>
        </p>
        <ul class="order-item">
          <li>
            <img :src="item.cover_img"
              alt=""
              srcset="">
            <!-- <img src="https://avatars1.githubusercontent.com/u/8121621?v=4"
              alt=""
              srcset=""> -->
          </li>
          <li class="goods-card">
            <p>{{item.title}}</p>
            <p class="attr">{{item.attr}}</p>
          </li>
          <li>
            <p> ${{item.price}} </p>
            <p> X {{item.amount}} </p>
          </li>
        </ul>
        <p class="order-footer">
          <span>
            <img v-for="(user,index) in item.group_user"
              :key="index"
              :src="user.photo"
              alt=""
              srcset="">
          </span>
          <span class="order-total">Order Total ${{item.total_price}}</span>
        </p>
        <p class="order-footer">
          <span></span>
          <span class="control-btn">
            <a v-if="item.status === 1"
              href="javascript:;" @click="to_pay(item.order_no,item.total_price)">Pay</a>
            <a v-else-if="item.status === 2"
              href="javascript:;" @click="to_share(item.order_no)">Share</a>
            <!-- <a v-else-if="item.status === 3"
              href="javascript:;">Receipt</a>
            <a v-else-if="item.status === 5"
              href="javascript:;">Review</a> -->
            <a href="javascript:;"
              class="blank" @click="to_detail(item.sku_id)">Buy Again</a>
          </span>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
import api from "@/api/order";
export default {
  name: "",
  data() {
    return {
      order_lists: []
    };
  },
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {},
  methods: {
    init_data(params = {}) {
      if (this.$route.query.label) {
        params = {
          label: this.$route.query.label
        };
      }
      api.order_query(params).then(res => {
        console.log(res);
        this.order_lists = res.data;
        if (this.order_lists.length === 0) {
          setTimeout(()=>{
          this.$router.go(-1);
          },3000)
        }
      });
    },
    change_type(cid, index) {
      this.is_selected = index;
      let params = {
        label: cid
        // limit:1,
        // id:1
      };
      this.init_data(params);
    },
    to_pay(order_no,total) {
      let params = {
        path:'/accept',
        query:{
          order_no: order_no,
          total:total
        }
      }
      this.$router.push(params);
    },
    to_cancel(order_no) {
      // this.$alert('Your order will be cancel', 'TIPS', {
      //     confirmButtonText: 'OK',
      //     callback: action => {
      //       api.order_cancel({order_no:order_no}).then(res=>{
      //         this.$router.go(-1);
      //       })
      //     }
      //   });
    },
    to_delete(order_no) {
      // this.$alert('Your order will be delete', 'TIPS', {
      //     confirmButtonText: 'OK',
      //     callback: action => {
      //       api.order_delete({order_no:order_no}).then(res=>{
      //         this.$router.go(-1);
      //       })
      //     }
      //   });
    },
    to_share(order_no) {
        let params = {
        path:'/share',
        query:{
          order_no: order_no,         
        }
      }
      this.$router.push(params);
    },
    to_receipt(order_no) {},
    to_rejected(order_no) {
      //  this.$alert('Your order will be returned', 'TIPS', {
      //     confirmButtonText: 'OK',
      //     callback: action => {
      //       api.order_returned({order_no:order_no}).then(res=>{
      //         this.$router.go(-1);
      //       })
      //     }
      //   });
    },
    to_review(order_no) {
      // alert("review");
      // let params = {
      //   path: "/user/review",
      //   query: {
      //     order_no: order_no
      //   }
      // };
      // this.$router.push(params);
    },
    to_detail(sku_id) {
      let params = {
        path: "/detail",
        query: {
          sku_id: sku_id
        }
      };
      this.$router.push(params);
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.order-list {
  background-color: #f3f3f3;
  font-size: 14px;
  .order-content {
    padding-top: 12px;
  }
  .order-box {
    // margin:12px 0;
    background-color: #fff;
  }
  .order-title,
  .order-footer {
    border-bottom: 1px solid #e9e9e9;
    // padding-left: 10px;
    padding: 30px 10px 10px 10px;
    display: flex;
    justify-content: space-between;
    span {
    }
    .title-tips {
      font-weight: bold;
    }
    img {
      height: 21px;
      width: 21px;
      border-radius: 50%;
      margin-right: 10px;
      vertical-align: middle;
    }
    .order-total {
      color: rgba(0, 0, 0, 1);
      line-height: 24px;
    }
  }
  .order-footer {
    padding: 10px;
    // border-top: 1px solid #e9e9e9;
    .control-btn {
      padding: 10px 0;
      a {
        font-size: 12px;
        padding: 4px 12px;
        height: 26px;
        border: 1px solid#D70E19;
        color: #fff;
        border-radius: 13px;
        font-weight: bold;
        background-color: #d70e19;
      }
      .blank {
        font-size: 12px;
        padding: 4px 12px;
        height: 26px;
        border: 1px solid #000;
        color: #000;
        border-radius: 13px;
        font-weight: bold;
        background-color: #fff;
      }
    }
  }
  .order-item {
    // margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    img {
      height: 80px;
      width: 80px;
    }
    // margin-top:10px;
    // height: 100%;
    p {
      font-size: 14px;
      background-image: none;
    }
  }

  .goods-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 230px;
    padding: 0 10px;
    .attr {
      padding-top: 10px;
      color: #b6b6b6;
    }
  }
}
</style>
