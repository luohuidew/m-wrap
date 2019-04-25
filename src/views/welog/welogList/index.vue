<template>
  <div class="welog-list-page" v-if="homeData">
    <ul class="content-box">
      <li class="title-box">
        <p>WELOG</p>
        <router-link class="view-btn" to="/welog/theme">
          View All
        </router-link>
      </li>
      <li class="scroll-box">
        <ul>
          <li v-for="(item,index) in homeData.topic" :key="index">
            <router-link :to="item.route">
              <img :src="item.image_url"
                alt="">
            </router-link>            
          </li>
        </ul>
      </li>
      <li class="list-box" v-if="homeData">
        <welogPage :listData="homeData.list"/>
      </li>
    </ul>
  </div>
</template>

<script>
import welogPage from "./welogPage";
import api from "@/api/welog";
export default {
  name: "",
  props: {},
  data() {
    return {
      homeData:undefined
    };
  },
  computed: {},
  created() {
    this.init_data();
  },
  methods: {
    init_data() {
      api.welogIndex().then(res => {
        this.homeData = res.data;
      });
    },   
  },
  components: {
    welogPage
  }
};
</script>

<style lang='scss' scoped>
.content-box {
  padding-top: 10px;
  .title-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    padding-bottom: 0;
    p {
      font-size: 20px;
      font-weight: bold;
    }
    .view-btn {
      font-size: 14px;
      padding-right: 25px;
      color: #4a4a4a;
      background: url("/static/images/icon/store/首页 全部箭头@3x.png")
        no-repeat right center;
      background-size: 20px 18px;
    }
  }
  .scroll-box {
    padding: 20px;
    padding-bottom: 0;
    padding-right: 0;
    ul {
      height: 80px;
      display: flex;
      flex-wrap: nowrap;
      overflow: auto;
      overflow-y: hidden;
      padding-right: 10px;
      li {
        margin-right: 10px;
      }
    }
    img {
      height: 80px;
      width: auto;
      border-radius: 6px;
    }
  }
  .list-box {
    padding-top: 20px;
  }
}
</style>
