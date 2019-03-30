<template>
  <div class="home-pick">
    <div class="card-title">
      <span class="left-title">
        Influencer’s Pick
      </span>
      <span class="right-arrow">
        <span>View All </span>
        <img src="/static/images/icon/user/user_right_gary_arrow@3x.png"
          alt=""
          srcset="">
      </span>
    </div>
    <ul class="pick-lists">
      <li v-for="(item,index) in listsData"
        :key="index">
        <autoCard :cardData="item"></autoCard>
      </li>
    </ul>
  </div>
</template>

<script>
import autoCard from "@/components/card-column-auto";
export default {
  name: "",
  props: {
    listsData: {
      type: Array,
      default: undefined
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {},
  components: {
    autoCard
  }
};
</script>

<style lang='scss' scoped>
.home-pick {
  padding: 10px 10px 0 10px;
  margin: 0 15px 24px 15px;
  background-color: #fff;
  border-radius: 6px;
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
/*  */
.pick-lists {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &>li {
    width: calc(50% - 5px);
    margin-bottom: 10px;
    &:nth-child(2n-1) {
      // margin-right: 5px;
    }
    &:nth-child(2n) {

    }
  }
}
</style>
