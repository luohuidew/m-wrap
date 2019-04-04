<template>
  <div class="home-topic"
    v-if="listsData">
    <ul v-scroll="get_more_data">
      <li class="theme-box"
        v-for="(store,index) in listsData"
        :key="index">
        <router-link class="img-box"
          :to="{path:store.route}">
          <img :src="store.image_url"
            alt="">
        </router-link>
        <div class="scroll-row-box">
          <ul>
            <li v-for="(item,index) in store.product"
              :key="index">
              <router-link class="box-item"
                :to="{path:item.route}">
                <img :src="item.cover_img"
                  alt=""
                  srcset="">
                <p>{{item.money_unit}}{{item.alone_price}}</p>
              </router-link>
            </li>
            <!-- <li class="">
              <router-link class="box-item" :to="{path:'/hot'}">
                <img src="/static/images/icon/home/home_more_data.png" alt="" srcset="">
              </router-link>
            </li> -->
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    listsData: {
      type: Array,
      default: undefined
    }
  },
  data() {
    return {
      topicData: this.listsData
    };
  },
  computed: {
    headHeight() {
      return document.querySelectorAll(".page-head")[0].offsetHeight;
    }
  },
  created() {},
  methods: {
    get_more_data(data) {
      console.log(data);
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.home-topic {
  padding: 0 15px;
}
/*  */
.theme-box {
  padding-bottom: 20px;
  .img-box {
    height: 165px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
/*  */
.scroll-row-box {
  overflow: auto;
  background-color: #fff;
  ul {
    display: flex;
    flex-wrap: nowrap;
  }
  .box-item {
    padding: 10px 5px;
    img {
      width: 100px;
      height: 100px;
      border-radius: 6px;
      border: 1px solid #f3f3f3;
    }
    p {
      font-size: 12px;
      font-weight: bold;
      padding-top: 6px;
    }
  }
}
</style>
