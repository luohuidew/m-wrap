<template>
  <div class="home-store"
    v-if="listsData">
    <div class="card-title">
      <span class="left-title">
        Selected Stores
      </span>
      <span class="right-arrow">
        <!-- <span>View All </span>
        <img src="/static/images/icon/user/user_right_gary_arrow@3x.png"
          alt=""
          srcset=""> -->
      </span>
    </div>
    <div class="card-swiper">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item,index) in bannerData"
          :key="index">
          <router-link :to="item.route">
            <img :src="item.image_url"
              alt=""
              srcset="">
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="card-box">
      <ul>
        <li v-for="(store,index) in storeData"
          :key="index"
          class="store-item">
          <div class="store-title"
            @click="to_path(store.route)">
            <div class="img-box">
              <img :src="store.image_url"
                alt=""
                srcset="">
            </div>
            <div class="store-name-tag ">
              <div class="store-name">
                {{store.name}}
              </div>
              <div class="store-tag"
                v-if="store.tag.tag_url">
                <img :src="store.tag.tag_url"
                  alt=""
                  srcset="">
              </div>
            </div>
            <!-- <div class="more">
              <img src="/static/images/icon/user/user_right_gary_arrow@3x.png"
                alt=""
                srcset="">
            </div> -->
          </div>
          <div class="store-card">
            <ul>
              <li v-for="(item,index) in store.product"
                :key="index">
                <router-link :to="{path:'/detail',query:{sku_id:item.sku_id}}">
                  <img :src="item.cover_img"
                    alt=""
                    srcset="">
                </router-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "",
  props: {
    listsData: {
      type: Array,
      default: undefined
    },
    bannerData: {
      type: Array,
      default: undefined
    }
  },
  data() {
    return {
      storeData: this.listsData
    };
  },
  computed: {},
  created() {},
  methods: {
    to_path(path) {
      this.$router.push({
        path: path
      });
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.home-store {
  padding: 10px 10px 0 10px;
  margin: 0 15px 24px 15px;
  background-color: #fff;
  border-radius: 6px;
}
/* lunbotu */
.card-swiper {
  height: 130px;
  overflow: hidden;
  border-radius: 6px;
  a {
    display: block;
    height: 100%;
    width: 100%;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .van-swipe {
    height: 100%;
  }
}
/* biaoti */
.card-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  .left-title {
    font-size: 18px;
    font-weight: bold;
  }
  .right-arrow {
    font-size: 12px;
    color: #4a4a4a;
    img {
      height: 12px;
    }
  }
}
/* 卡片 */
.card-box {
  ul {
    display: flex;
    flex-wrap: wrap;
    .store-item {
      width: 50%;
      padding-bottom: 10px;
      &:nth-child(2n-1) {
        padding-right: 10px;
        border-right: 1px solid #f3f3f3;
      }
      &:nth-child(2n) {
        padding-left: 10px;
      }
    }
  }
  .store-title {
    display: flex;
    // justify-content: space-between;
    font-size: 10px;
    padding: 10px 0;
    padding-right: 10px;
    .store-name-tag {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      background: url("/static/images/icon/user/user_right_gary_arrow@3x.png")
        no-repeat right center;
      background-size: 12px;
      .store-name {
        height: 12px;
        width: 80px;
        font-size: 10px;
        font-weight: bold;
        overflow: hidden;
        /* width: 100%; */
        text-overflow: ellipsis;
      }
      .store-tag {
        // -webkit-background-clip: text; /*必需加前缀 -webkit- 才支持这个text值 */
        // -webkit-text-fill-color: transparent; /*text-fill-color会覆盖color所定义的字体颜色： */
        // background-image: linear-gradient(
        //   42deg,
        //   rgba(114, 135, 241, 1) 0%,
        //   rgba(223, 96, 185, 1) 100%
        // );
        img {
          height: 7px;
          width: auto;
        }
      }
    }
    .img-box {
      height: 26px;
      width: 26px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .more {
      float: right;
      img {
        height: 12px;
      }
    }
  }
  .store-card {
    ul {
      display: flex;
      justify-content: space-between;
    }
    img {
      width: 70px;
      height: 70px;
      border-radius: 2px;
      border: 1px solid #f3f3f3;
    }
  }
}
</style>
