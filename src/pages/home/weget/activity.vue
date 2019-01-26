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
      <li class="one-block">
        <img :src="activityData[0].image_url"
          alt=""
          srcset=""
          @click="to_activity(activityData[0].route)">
      </li>
      <li class="two-block">
        <img :src="activityData[1].image_url"
          alt=""
          srcset=""
          @click="to_activity(activityData[1].route)">
        <img :src="activityData[2].image_url"
          alt=""
          srcset=""
          @click="to_activity(activityData[2].route)">
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
  padding: 10px 0;
  ul {
    display: flex;
    width: 100%;
    height:270px;
    justify-content: space-between;
    flex-wrap: nowrap;
    font-size: 0;
    padding: 0 5px;
    .one-block{
      img {
        height: 100%;
      }
    }
    .two-block {
      // img {
        
      // }
    }
    li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 50%;
      height: 100%;
      padding: 5px;
      // background-color: #ccc;
      // overflow: hidden;
      img {
        width: 100%;
        height: auto;
        border-radius: 8px;
        // margin: 5px;
      }
    }
  }
}
</style>
