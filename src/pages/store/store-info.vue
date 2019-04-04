<template>
  <div class="store-box">
    <div class="store-title"
      :style="{'background-image':'url('+store_info.mobile_background_url+')'}">
      <div class="logo-box">
        <p>
          <img :src="store_info.logo"
            alt="">
        </p>
        <p class="store-desc">
          <span>{{store_info.name}}</span>
          <span class="creat-time" v-if="store_info.open_time"> {{store_info.open_time}}</span>
        </p>

      </div>
      <!-- <p class="store-btn">
        <a href="javascript:;"
          @click="to_store(store_info.store_id)">STORE</a>
      </p> -->
    </div>
    <div class="store-description">
      <span class="desc-min">{{store_info.desc}}</span>
    </div>
    <div class="total-box">
      <ul class="store-account">
        <li>
          <span>{{store_info.weekend_num}}</span>
          <span>New Arrived This Wee</span>
        </li>
        <li>
          <span>{{store_info.total_num}}</span>
          <span>Products</span>
        </li>
      </ul>
    </div>
    <div class="store-banner"
      v-if="store_info.store_banner_list.length">
      <banner :banner-data="store_info.store_banner_list"></banner>
    </div>
  </div>
</template>

<script>
import api from "@/api/store";
import banner from "@/components/banner-store";
export default {
  name: "",
  data() {
    return {
      store_info: this.infoData.store_info
    };
  },
  props: ["infoData"],
  created() {
    //  debugger
    // this.init_data();
  },
  mounted() {},
  computed: {},
  methods: {
    init_data() {
      let params = {
        store_id: this.$route.query.store_id
      };
      // debugger;
      api.store_info(params).then(res => {
        this.store_info = res.data.store_info;
      });
      // api.goods_lists(params).then(res => {});
    }
  },
  components: {
    banner
  }
};
</script>

<style lang='scss' scoped>
.store-box {
  padding: 0;
  // border-top: 10px solid #f8f8f8;
  // border-bottom: 10px solid #f8f8f8;
  .store-title {
    display: flex;
    padding-bottom: 10px;
    padding-top: 126px;
    background: #ffffff url("") no-repeat left top;
    background-size: 100% 150px;
    .logo-box {
      display: flex;
      padding: 0 28px;
      & > p {
        display: flex;
        align-items: center;
      }
    }
    img {
      width: 68px;
      height: 68px;
      background-color: #ffffff;
      border-radius: 50%;
      border: 1px solid #ffffff;
    }
    .store-desc {
      flex: 1;
      flex-direction: column;
      align-items: flex-start !important;
      justify-content: flex-end;
      font-size: 18px;
      font-weight: bold;
      padding: 0 40px 4px 10px;
      .creat-time {
        font-size: 10px;
        padding-top: 2px;
        font-weight: normal;
        color: #9b9b9b;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .store-btn {
      width: 60px;
      display: flex;
      a {
        width: 100%;
        font-size: 12px;
        border: 1px solid #f3f3f3;
        color: #9b9b9b;
        text-align: center;
        height: 30px;
        line-height: 30px;
        // padding: 8px 0;
        border-radius: 13px;
      }
    }
  }
  .store-description {
    padding: 0px 28px 20px 28px;
    .desc-min {
      // height: 26px;
      // display: -webkit-box;
      font-size: 10px;
      line-height: 16px;
      padding-top: 10px;
      color: #4a4a4a;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .total-box {
    padding: 0 28px;
  }
  .store-account {
    // padding-top: 18px;
    border-top: 1px solid #f3f3f3;
    display: flex;
    justify-content: center;
    padding: 18px 0;
    li {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &:nth-child(1) {
        border-right: 1px solid #f3f3f3;
      }
      span {
        font-size: 14px;
        &:nth-child(2) {
          padding-top: 6px;
          font-size: 12px;
          color: #9b9b9b;
        }
      }
    }
  }
  .store-banner {
    padding: 20px;
  }
}
</style>
