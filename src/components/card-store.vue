<template>
 <div class="store-box-item">
   <div class="store-info">
     <div class="store-title">
       <img src="" alt="" srcset="">
       <p class="store-name-tag">
         <span>Amour</span>
         <img src="" alt="" srcset="">
       </p>
     </div>
     <div class="store-btn">
       <router-link :to="'/'">
        Visit Store
       </router-link>
     </div>
   </div>
   <!--  -->
   <div class="store-goods">
     <p>Products:11</p>
     <ul>
       <li class="product-items">
         <img src="" alt="" srcset="">
         <span></span>
       </li>
     </ul>
   </div>
 </div>
</template>

<script>
 export default {
   name:'',
   props: {
     storeData:{
       type:Object,
       default:undefined
     }
   },
   data () {
     return {

     }
   },
   computed: {
   },
   created () {
   },
   methods: {
   },
   components: {

   }
 }
</script>

<style lang='scss' scoped>
.store-box-item {

}
 
</style>
