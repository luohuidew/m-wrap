<template>
  <div class='page'>
    <div class="title-box">
      <p class="tips">Materials</p>
      <!-- <p class="more"></p> -->
    </div>
    <ul class="des-info" :class="{moreshow:!is_more&&more_height>100,desPadding:more_height>100}" >
        <p v-html="detail_text" ref="more"></p>
        <div class="img-box">
        <template v-if="sku.desc_imgs.length>0">
          <img v-for="(item,index) in sku.desc_imgs"
            :key="index"
            :src="item"
            alt=""
            srcset="">
        </template>
      </div>
      <div class="shade" v-if="!is_more&&more_height>100"></div>
    </ul>
    <div class="more" v-if="more_height>100" @click="tab_more">{{!is_more?'+ More':'- Less'}}</div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      is_more:false,
      more_height:'',
      detail_text:
        "<p>" + this.sku.desc.toString().replace(/\n|\r\n/g, "<br/>") + "</p>"
    };
  },
  props: ["sku"],
  components: {},
  methods:{
    tab_more(){
      this.is_more=!this.is_more
    }
  },
  mounted() {
    this.more_height=this.$refs.more.offsetHeight;
  }
};
</script>

<style lang='scss' scoped>
.page {
  padding: 15px 20px 30px 20px;
  font-size: 14px;
  border-top: 10px solid #f8f8f8;
  border-bottom: 10px solid #f8f8f8;
}
.title-box {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 17px;
  padding-bottom: 10px;
  //   border-bottom: 1px solid #e9e9e9;
  .tips {
    font-size: 16px;
    font-weight: bold;
  }
  .more {
    padding-right: 24px;
    background: url(../../../assets/img/icon/right_icon.png) no-repeat right
      center;
  }
}
.des-padding{
  padding-bottom: 20px;
}
.des-info {
  font-size: 14px;
  position: relative;
  p {
    padding: 6px 0;
  }
  img {
    width: 100%;
    height: auto;
  }
  //   padding-left: 20px;
}
  .more{
    font-size:16px;
    font-weight:800;
    color:rgba(0,0,0,1);
    text-decoration: underline;
  }
  .moreshow{
    max-height: 120px!important;
    overflow: hidden;
  }
  .shade{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 65px;
    background-image: linear-gradient(rgba(255,255,255,0),rgba(255,255,255,1));
  }
</style>
