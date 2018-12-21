<template>
 <div class='final'>
   <div class="final-title">
     <div class="title-line-box">
      <p class="main-title">FINAL SALE</p>
      <p class="min-title">SEE MORE </p>
     </div>
   </div>
   <div class="card-box">
     <!-- 预留卡片 -->
     <template v-for="(item,index) in 10" >
       <goods-card-move :style="{top:40-2*index+'px'}" :key="index"></goods-card-move>
     </template>
     <!-- <div class="stack-wrapper">
      <stack ref="stack" :pages="someList" :stackinit="stackinit"></stack>
    </div> -->
   </div>
 </div>
</template>

<script>
import goodsCardMove from '@/components/goodsCard-move.vue'
// import stack from '@/components/stack.vue'
export default {
  name: "final",
  data() {
    return {
      someList: [],
      stackinit: {
        visible: 3
      }
    };
  },
  components: {
    goodsCardMove,
    // stack
  },
  mounted () {
    let that = this
    setTimeout(function () {
      that.someList = [
        {
          html: '<img src="src/img/1.png" alt="01">'
        },
        {
          html: '<img src="src/img/2.png" alt="02">'
        },
        {
          html: '<img src="src/img/3.png" alt="03">'
        },
        {
          html: '<img src="src/img/4.png" alt="04">'
        },
        {
          html: '<img src="src/img/5.png" alt="05">'
        },
        {
          html: '<img src="src/img/6.png" alt="06">'
        },
        {
          html: '<img src="src/img/7.png" alt="07">'
        }
      ]
    }, 2000)
  },
};
</script>

<style lang='scss' scoped>
  .final-title {
    // height:100px;
    background-color: #445299;
    padding:9px;
  }
  .title-line-box {
    border:3px solid #fff;
    padding:10px;
    p {
      color:#fff;
    }
  }
    .stack-wrapper{
    margin: 0 auto;
    position: relative;
    z-index: 1000;
    height: 200px;
    padding: 0;
    list-style: none;
    pointer-events: none;
  }
</style>
