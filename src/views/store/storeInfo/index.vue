<template>
  <div class="store-head-box"
    v-if="headerData">
    <div class="store-cover-img">
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
    <div class="tag-box">
      <span v-for="(item,index) in headerData.list_store_tag"
        :key="index">
        <img :src="item.tag_url"
          alt=""
          srcset="">
      </span>
    </div>
    <div class="other-info">
      <p>
        <img src="/static/demo.png"
          alt="">
        <span>Products: {{headerData.total_num}}</span>
      </p>
      <p>
        <img src="/static/demo.png"
          alt="">
        <span>{{headerData.location}}</span>
      </p>
      <p class="store-style">
        <img src="/static/demo.png"
          alt="">
        <span>{{headerData.desc}}</span>
      </p>
    </div>
  </div>
</template>

<script>
import api from "@/api/store";
export default {
  name: "",
  props: {},
  data() {
    return {
      headerData: undefined
    };
  },
  computed: {},
  created() {
    this.init_data();
  },
  methods: {
    init_data() {
      let req_params = {
        store_id: this.$route.query.store_id
      };
      api.store_info(req_params).then(res => {
        this.headerData = res.data.store_info;
        // }
      });
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.store-cover-img {
  height: 86px;
  display: flex;
  align-items: center;
  // justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 10px solid #f3f3f3;
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
.tag-box {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 25px 20px;
  img {
    height: 12px;
    width: auto;
    margin-right: 20px;
  }
}
/*  */
.other-info {
  padding: 10px 20px;
  p {
    padding: 10px 0;
  }
  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  span {
    font-size: 14px;
    color: #000000;
  }
}
</style>
