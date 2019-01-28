<template>
 <div class='page' v-if="skuData">
      <div class="title-box">
         <p class="tips">Shipping & Returns</p>
         <!-- <p class="more"></p> -->
     </div>
     <ul class="des-info">
       <li>{{sku_data.ship_desc}}</li>
         <!-- <li>Free STANDARD SHIPPING over US$49.00</li>
         <li>Return or exchange within 30 days.</li> -->
     </ul>
 </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      sku_data:this.skuData
    };
  },
  props:{
    skuData:{
      type:Object,
      default:undefined
    }
  },
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
  // padding:0 20px;
  // li {
  //   list-style-type: square;
  // }
}
</style>
