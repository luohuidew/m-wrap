<template>
  <div class="store-head-box"
    v-if="headerData">
    <div class="store-cover-img"
      :style="{backgroundImage:`url('${headerData.mobile_background_url}')`}">
      <div class="store-logo">
        <img :src="headerData.logo"
          alt=""
          srcset="">
      </div>
      <div class="store-desc">
        <p class="font-weight-bold">{{headerData.name}}</p>
        <p>{{headerData.open_time}}</p>
      </div>
      <div class="follow-box bgc-red">
        <span>
          +
        </span>
        <span>
          Follow
        </span>
      </div>
    </div>
    <div class="other-info">
      <div class="procuct-position">
        <p>
          <img src="/static/images/icon/store/店铺产品@3x.png"
            alt="">
          <span>Products: {{headerData.total_num}}</span>
        </p>
        <p>
          <img v-if="headerData.location" src="/static/images/icon/store/店铺 地点@3x.png"
            alt="">
          <span>{{headerData.location}}</span>
        </p>
      </div>
      <div class="store-style">
        <img src="/static/images/icon/store/店铺信息@3x.png"
          alt="">
        <span>{{headerData.desc}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    headerData: {
      type: Object,
      default: undefined
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {},
  components: {}
};
</script>

<style lang='scss' scoped>
.store-cover-img {
  height: 156px;
  display: flex;
  align-items: flex-end;
  // justify-content: space-between;
  padding: 10px 20px;
  background: url("") no-repeat center center;
  background-size: 100% auto;
  .store-logo {
    img {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
  .store-desc {
    height: 50px;
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: center;
    flex: 1;
    color: #ffffff;
    p {
      font-size: 12px;
      line-height: 18px;
      &:nth-child(1) {
        font-size: 14px;
      }
    }
  }
  .follow-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 78px;
    height: 24px;
    font-size: 12px;
    color: #ffffff;
    border-radius: 12px;
  }
}
/*  */
.other-info {
  padding: 10px 20px;
  .procuct-position {
    display: flex;
    p {
      width: 50%;
    }
  }
  .store-style {
    padding-top: 14px;
  }
  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  span {
    font-size: 12px;
    color: #4a4a4a;
  }
}
</style>
