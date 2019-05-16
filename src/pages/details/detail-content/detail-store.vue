<template>
  <div class="store-box"
    v-if="item.store_id">

    <div class="store-title"
      @click.stop="to_store(item.store_id)">
      <p>
        <img :src="item.logo"
          alt="">
      </p>
      <p class="store-desc">
        <span class="store-name text-line-clamp-1">
          <span>{{sold}}</span>
          <span class="desc">{{item.name}}</span>
        </span>
        <!-- <span class="desc-min">{{item.desc}}</span> -->
      </p>
      <p class="store-btn">
        <img src="/static/images/icon/detail/infoaddress.png" alt="">
        <span>{{item.state}}</span>
        <!--<a href="javascript:;"-->
          <!--@click="to_store(item.store_id)">Visit Store</a>-->
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      sold:'Sold by'
    };
  },
  props: ["item"],
  mounted() {},
  computed: {},
  methods: {
    to_store(cid) {
      let params = {
        path: "/store",
        query: {
          store_id: cid
        }
      };
      this.$router.push(params);
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.store-box {
  /* tuan */
  .top-cir-border {
    padding-bottom: 20px;
    ul {
      height: 24px;
      overflow: hidden;
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
    }
    li {
      // height:
      height: 30px;
      width: 30px;
      background-color: #e9e9e9;
      border-radius: 50%;
      transform: translateY(-7px);
      &:nth-child(2n-1) {
        background-color: #f3f3f3;
      }
    }
  }
  .store-title {
    display: flex;
    padding: 5px 15px;
    & > p {
      display: flex;
      align-items: flex-end;
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .store-desc {
      flex: 1;
      overflow: hidden;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      font-size: 18px;
      /*font-weight: bold;*/
      padding: 0 40px 0 10px;
      .desc-min {
        height: 26px;
        // display: -webkit-box;
        font-size: 12px;
        padding-top: 10px;
        color: #9b9b9b;
        overflow: hidden;
        text-overflow: ellipsis;
        img {
          height: 10px;
          width: auto;
        }
      }
      .store-name {
        height: 40px;
        font-size: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .desc{
          width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: inline-block;
          font-weight: bold;
        }
        span{
          display: block;
        }
      }
    }
    .store-btn {
      margin-bottom: 5px;
      display: flex;
      span{
        color: #9B9B9B;
        font-size: 12px;
      }
      img{
        width: 18px;
        height: 18px;
        margin-right: 3px;
      }
      a {
        width: 100%;
        font-size: 12px;
        color: #ffffff;
        text-align: center;
        height: 26px;
        padding: 0 14px;
        line-height: 26px;
        background-color: #d70e19;
        // padding: 8px 0;
        border-radius: 13px;
      }
    }
  }
  .store-account {
    padding: 0 20px;
    padding-top: 18px;
    display: flex;
    justify-content: center;
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
          padding-top: 10px;
          font-size: 12px;
          color: #9b9b9b;
        }
      }
    }
  }
}
</style>
