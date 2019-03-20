<template>
  <div class='group'
    v-if="group">
    <div class="title-box">
      <p class="tips">{{group.total}} open groups. Join!</p>
    </div>
    <ul class="item-box">
      <li v-for=" (item,index) in group.data"
        :key="index">
        <div class="info-box">
          <img :src="item.photo"
            alt=""
            srcset="">
          <span class="user-name">{{item.username}}</span>
        </div>
        <div class="timer-box">
          <div class="text-des">
            <p>Only <span class="red-color">{{item.left_num}}</span> more</p>
            <p>Time left {{item.left_time | timeDiff}}</p>
          </div>
        </div>
        <div v-if="!no_join"
          class="group-box"
          @click="group_buy(item.group_id)">
          <p>JOIN</p>
          <p>GROUP</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    groupData: {
      type: Object,
      default: null
    }
  },
  computed: {
    group() {
      return this.groupData;
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    group_buy(cgroup) {
      // console.log(cgroup);
      this.$parent.cur_group_id = cgroup;
      this.$emit('change',cgroup);
      // console.log(this.$refs['change_btn']);
      // this.$refs["change_btn"].close_tips(2, cgroup);
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.group {
  padding: 20px 20px 30px 20px;
  font-size: 14px;
  // border-bottom: 1px solid #ccc;
}
.title-box {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 17px;
  padding-bottom: 19px;
  border-bottom: 1px solid #e9e9e9;
  .tips {
    font-weight: bold;
  }
  .more {
    padding-right: 24px;
    background: url(../../../assets/img/icon/right_icon.png) no-repeat right
      center;
  }
}
.item-box {
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e9e9e9;
    padding: 10px 0;
    span,
    img {
      vertical-align: middle;
    }
  }
  .info-box {
    display: flex;
    align-items: center;
    width: 40%;
    padding: 0;
    img {
      height: 34px;
      width: 34px;
      border-radius: 50%;
      margin-right: 8px;
    }
    .user-name {
      font-size: 12px;
      width: 65px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .timer-box {
    display: flex;
    font-size: 12px;
    justify-content: space-between;
    position: relative;
    flex: 1;
    .red-color {
      color: #d70e19;
    }
    .text-des {
      font-size: 12px;
      line-height: 15px;
      flex: 1;
      display: flex;
      text-align: right;
      flex-direction: column;
      justify-content: center;
      p {
        text-align: right;
      }
      // span {
      //   vertical-align: middle;
      // }
    }
  }
  .group-box {
    font-size: 10px;
    line-height: 12px;
    padding: 3px 10px;
    text-align: center;
    background-color: #d70e19;
    color: #fff;
    font-size: 10px;
    line-height: 14px;
    border-radius: 20px;
    margin-left: 10px;
  }
}
</style>
