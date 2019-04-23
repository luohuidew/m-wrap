<template>
  <div class="detail-page"
    v-if="coverData">
    <div class="user-name-box">
      <div class="user-img-box">
        <img :src="coverData.user_photo"
          alt=""
          srcset="">
      </div>
      <div class="user-info-box">
        <p class="user-name">{{coverData.user_name}}</p>
        <p class="create-date">{{coverData.create_time | dateServerEnglishYMD}}</p>
      </div>
    </div>
    <!-- goods-cover -->
    <div class="welog-cover-box">
      <div class="cover-img">
        <img v-if="coverData.show_type===2"
          :src="coverData.url"
          alt="">
        <video v-else
          id="my-player"
          ref="videoPlayer"
          class="video-js"
          controls
          preload="auto"
          :poster="coverData.cover_img"
          data-setup='{}'>
          <source :src="coverData.url"
            type="video/mp4" />
          <p class="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a
            web browser that
            <a href="https://videojs.com/html5-video-support/"
              target="_blank">
              supports HTML5 video
            </a>
          </p>
        </video>
      </div>
      <!-- v-if="coverData.show_type===2" -->
      <div v-if="coverData.sku_info"
        class="sku-tips"
        :class="{'active':is_active}">
        <p @click="to_detail(coverData.sku_info.sku_id)">{{coverData.sku_info.title}}</p>
      </div>
    </div>
    <!-- tag标签盒子 -->
    <div class="tag-box">
      <p class="welog-title">{{coverData.content}}</p>
      <ul>
        <li v-for="(item,index) in coverData.tag_names"
          :key="index">
          <span>{{item.tag_name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import videojs from "video.js";
import "video.js/dist/video-js.css";
export default {
  name: "",
  props: {
    coverData: {
      type: Object,
      default: undefined
    }
  },
  data() {
    return {
      is_active: true,
      player: null,
      options: {}
    };
  },
  computed: {},
  created() {},
  mounted() {
    if (this.coverData.show_type === 1) {
      this.init_player();
    }
    setTimeout(() => {
      this.is_active = false;
    }, 8000);
  },

  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
  methods: {
    init_player() {
      this.player = videojs(
        this.$refs["videoPlayer"],
        this.options,
        function onPlayerReady() {
          console.log("onPlayerReady", this);
        }
      );
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.detail-page {
}
/*  */
.user-name-box {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  .user-img-box {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .user-info-box {
    .user-name {
      font-size: 14px;
    }
    .create-date {
      color: #9b9b9b;
      font-size: 12px;
    }
  }
}
/* welog */
.welog-cover-box {
  position: relative;
  width: 100%;
  overflow: hidden;
  .cover-img {
    min-height: 100px;
    img {
      width: 100%;
      height: auto;
    }
    .video-js {
      width: 100%;
      height: 375px;
    }
    video {
      width: 100%;
      height: 100%;
    }
  }
  .sku-tips {
    position: absolute;
    left: 20px;
    bottom: 10px;
    width: 30px;
    height: 30px;
    overflow: hidden;
    border-radius: 15px;
    color: #ffffff;
    transition: width 1s;
    p {
      display: inline-block;
      height: 100%;
      border-radius: 15px;
      padding-left: 34px;
      max-width: 100%;
      font-size: 12px;
      padding-right: 10px;
      line-height: 30px;
      background: rgba(0, 0, 0, 0.7)
        url("/static/images/icon/welog/Group@3x.png") no-repeat 8px center;
      background-size: 15px;
    }
    &.active {
      width: 100%;
    }
  }
}
/* tag */
.tag-box {
  padding: 12px 20px;
  border-bottom: 1px solid #eeeeee;
  .welog-title {
    font-size: 14px;
    margin-bottom: 20px;
  }
  ul {
    li {
      display: inline-block;
      height: 20px;
      line-height: 20px;
      border-radius: 10px;
      padding: 0 14px;
      background-color: #e9e9e9;
      font-size: 12px;
      margin-bottom: 12px;
      margin-right: 10px;
    }
  }
}
</style>
