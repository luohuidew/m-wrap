<template>
  <div class="activity" v-if="activityData">
    <ul>
      <!-- <li v-for="(item,index) in activityData"
        :key="index"
        @click="to_activity(item.route)">
        <img :src="item.image_url"
          :alt="item.title"
          srcset="">
      </li> -->
      <li>
        <img :src="activityData[0].image_url"
          alt=""
          srcset=""
          @click="to_activity(activityData[0].route)">
      </li>
      <li>
        <img :src="activityData[1].image_url"
          alt=""
          srcset=""
          @click="to_activity(activityData[1].route)">
        <img :src="activityData[2].image_url"
          alt=""
          srcset=""
          @click="to_activity(activityData[2].route)">
      </li>
      <li>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activity_lists: this.activityData
    };
  },
  props: ["activityData"],
  components: {},
  methods: {
    to_activity(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>

<style lang="scss" scoped>
.activity {
  // height:294px;
  padding: 10px;
  ul {
    display: flex;
    width: 100%;
    // height:270px;
    justify-content: space-between;
    flex-wrap: wrap;
    font-size: 0;
    li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 49%;
      height: 100%;
      // background-color: #ccc;
      overflow: hidden;
      img {
        width: 100%;
        height: auto;
        margin: 5px;
      }
    }
  }
}
</style>
