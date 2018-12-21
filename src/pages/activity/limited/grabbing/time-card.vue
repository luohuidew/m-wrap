<template>
 <div class="grabbing">
     <div class="time-box">
         <p class="des-time">
             <img src="@/assets/img/icon/hot.png" alt="" srcset="">
             <span>10:00</span>
             <span>Grabbing</span>
         </p>
         <p class="run-time">
             <span>Time Left</span>
             <i>20</i>:
             <i>30</i>:
             <i>59</i>
         </p>
     </div>
    <!-- <template v-for="(item,index) in 5" >
        <goods-card :key="index"></goods-card>
    </template> -->
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {
      
   }
 }
</script>

<style lang='scss' scoped>
.time-box {
    padding:15px 0;
    margin-top:2px;
    background-color: #000;
    color:#fff;
    margin-bottom: 5px;
    p {

    text-align: center;
    }
}
.des-time {
    font-size: 24px;
    line-height: 36px;
}
.run-time {
    font-size: 16px;
    i {
        padding:3px;
        background-color: #D80C18;
    }
} 
</style>
