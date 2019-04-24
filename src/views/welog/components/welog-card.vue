<template>

  <router-link :to="{path:'/welog/detail',query:{welog_id:datas.welog_id}}"
    class="card-item">
    <div class="cover-img"
      :class="{'default-height':datas.height==750}">
      <img :src="datas.cover_img"
        alt=""
        srcset="">
      <span v-if="datas.show_type===1"
        class="fixed-icon"></span>
    </div>
    <p class="cover-desc text-line-clamp-2">
      {{datas.content}}
    </p>
    <div class="user-box ">
      <img :src="datas.user_photo"
        alt=""
        srcset="">
      <span class="text-line-clamp-1">
        {{datas.user_name}}
      </span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "",
  props: {
    datas: {
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
.card-item {
  display: block;
  width:168px;
  border: 1px solid #f3f3f3;
  border-radius: 6px;
  overflow: hidden;
  margin: 0 auto;
  padding-bottom: 10px;
  font-size: 12px;
  .cover-img {
    position: relative;
    display: block;
    width: 168px;
    // height: 168px;
    height: auto;
    border-radius: 6px;
    &.default-height {
      height: 168px;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .fixed-icon {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 30px;
      height: 30px;
      background: url("/static/images/icon/welog/welog白M@2x.png") no-repeat
        center center;
      background-size: 80%;
    }
  }
  .cover-desc,
  .user-box {
  }
  .cover-desc {
    // width: 100%;
    margin: 6px 6px 6px 10px;
  }
  .user-box {
    padding: 0 10px;
    display: flex;
    img {
      display: inline-block;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      margin-right: 6px;
    }
    span {
      font-size: 12px;
      color: #cccccc;
    }
  }
}
</style>
