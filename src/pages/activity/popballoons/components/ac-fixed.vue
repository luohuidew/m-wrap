<template>
  <div class="pop-nav"
    v-show="show_fixed">
    <ul>
      <li>
        <img src="/static/img/popballoons/icon/yinle@2x.png"
          alt="music"
          srcset="">
        <!-- <audio autoplay="autoplay"
          controls="">
          <source src="/static/img/popballoons/popballoons.mp3"
            type="audio/mpeg" />
        </audio> -->
        <!-- <video controls=""
          autoplay="autoplay"
          name="media">
          <source src="/static/img/popballoons/popballoons.mp3"
            type="audio/mpeg"></video> -->
      </li>
      <li @click="show_rules">
        <img src="/static/img/popballoons/icon/Rules@2x.png"
          alt="rules"
          srcset="">
      </li>
      <li @click="to_history">
        <img src="/static/img/popballoons/icon/Records@2x.png"
          alt="recode"
          srcset="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {},
  computed: {
    show_fixed() {
      let temp = this.$route.fullPath.indexOf("popballoons-gift") == -1;
      // console.log(this.$route.fullPath.indexOf('popballoons-gift'));
      return temp;
    }
  },
  methods: {
    show_rules() {
      this.$emit("open", "open");
    },
    to_history() {
      let params = {
        name: "popballoons-gift"
      };
      this.$router.push(params);
    },
    play() {
      var audio = document.querySelector("#audio");
      if (!this.isPlaying) {
        audio.play();
        this.isPlaying = true;
      }
    },
    stop() {
      var audio = document.querySelector("#audio");
      if (this.isPlaying) {
        audio.pause();
        audio.currentTime = 0;
      }
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.pop-nav {
  text-align: right;
}
li {
  img {
    height: 70px;
    width: auto;
    margin: 2px 0;
  }
  &:nth-child(2) {
    img {
      height: 60px;
    }
  }
}
</style>
