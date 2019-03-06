<template>
  <div class='page'>
    <div class="title-box">
      <p class="tips">Details</p>
      <!-- <p class="more"></p> -->
    </div>
    <ul class="des-info">
      <p v-html="detail_text"></p>
      <div class="img-box">
        <template v-if="sku.desc_imgs.length>0">
          <img v-for="(item,index) in sku.desc_imgs"
            :key="index"
            :src="item"
            alt=""
            srcset="">
        </template>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      detail_text:
        "<p>" + this.sku.desc.toString().replace(/\n|\r\n/g, "<br/>") + "</p>"
    };
  },
  props: ["sku"],
  components: {}
};
</script>

<style lang='scss' scoped>
.page {
  padding: 20px 20px 30px 20px;
  font-size: 14px;
  border-bottom: 10px solid #f8f8f8;
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
    background: url(../../../assets/img/icon/right_icon.png) no-repeat right
      center;
  }
}
.des-info {
  font-size: 14px;
  padding-bottom: 20px;
  p {
    padding: 6px 0;
  }
  img {
    width: 100%;
    height: auto;
  }
  //   padding-left: 20px;
}
</style>
