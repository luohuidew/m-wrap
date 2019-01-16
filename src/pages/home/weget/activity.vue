<template>
  <div class="activity">
    <ul>
      <!-- <li v-for="(item,index) in activityData"
        :key="index"
        @click="to_activity(item.route)">
        <img :src="item.image_url"
          :alt="item.title"
          srcset="">
      </li> -->
      <li>
          <img :src="activityData[0].image_url" alt="" srcset="" @click="to_activity(activityData[0].route)">
      </li>
      <li>
          <img :src="activityData[1].image_url" alt="" srcset="" @click="to_activity(activityData[1].route)">
          <img :src="activityData[2].image_url" alt="" srcset="" @click="to_activity(activityData[2].route)">
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
    // height:100%;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 49%;
      height: 47%;
      // background-color: #ccc;
      overflow: hidden;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>
