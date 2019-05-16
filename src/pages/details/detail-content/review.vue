<template>
  <div class='page' v-if="review.total">
    <div class="title-box">
      <p class="tips">Review ({{review.total}})</p>
      <p class="more">
        <!-- <img src="../../../assets/img/icon/heart_num.png" alt="" srcset=""> -->
        <span>
          <img v-for="index in Math.floor(review.avg_score)"
            :key="index"
            src="/static/img/icon/收藏后1.png"
            alt=""
            srcset="">
          <span class="rank">{{review.avg_score}}</span>
        </span>
      </p>
    </div>
    <div class="rate-box"
      v-for="(item,index) in review.data"
      :key="index">
      <ul class="item-box">
        <li>
          <div class="info-box">
            <img :src="item.user_photo"
              alt=""
              srcset="">
            <span class="user-name">{{item.user_name}}</span>
          </div>
          <div class="timer-box">
            <div class="text-des">
              <img v-for="index in Number(item.comment_rank)"
                :key="index"
                src="/static/img/icon/收藏后1.png"
                alt=""
                srcset="">
            </div>
            <div class="price-box">
              {{item.create_time | dateServer}}
            </div>
          </div>
        </li>
      </ul>
      <div class="context-box">
        <p class="nickname">{{item.attr}}</p>
        <p class="text-des">{{item.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: ["review"],
  components: {}
};
</script>

<style lang='scss' scoped>
.page {
  padding: 20px 20px 0px 20px;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
}
.title-box {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 17px;
  padding-bottom: 19px;
  //   border-bottom: 1px solid #e9e9e9;
  .tips {
    font-size: 24px;
    // font-weight: bold;
  }
  .more {
    padding-right: 24px;  
    img {
      vertical-align: top;
    }
    .rank {
      margin-left:6px;
      // vertical-align: top;
    }
  }
}
.rate-box {
  padding: 15px 5px;
  margin-bottom: 20px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
}
.context-box {
  .nickname {
    font-weight: bold;
    padding: 12px 0 6px 0;
  }
}
.item-box {
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e9e9e9;
    padding: 0 0 10px 0;
    span,
    img {
      vertical-align: middle;
    }
  }
}
.info-box {
  img {
    height: 38px;
    width: 38px;
    border-radius: 50%;
    margin-right:8px;
  }
}
</style>
