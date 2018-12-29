<template>
 <div class="ac-gift" @click.stop="to_gift">
   <img src="/static/img/christmas/icon/MyRecords@2x_99.png" alt="" srcset="">
 </div>
</template>

<script>
 export default {
   name:'',
   data () {
     return {

     }
   },
   mounted () {
   },
   computed: {
   },
   methods: {
     to_gift(){
       let params = {
         name:'christmas-gift'
       }
       this.$router.push(params);
     }
   },
   components: {

   }
 }
</script>

<style lang='scss' scoped>
.ac-gift {
  // position: absolute;
  // left: 0;
  // bottom: 0;
  position: relative;
  width: 70px; 
  height: 90px;
   background: url("/static/img/christmas/icon/图层39@2x.png") no-repeat
    center top;
  background-size: 100% auto;
  @keyframes move {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(0.8);
      }
    }
  img {
    position: absolute;
    bottom: 16px;
    left: -5px;
    width: 100%;
    height: auto;
    animation: move 2s infinite;
    animation-direction:alternate;
  }
}
 
</style>
