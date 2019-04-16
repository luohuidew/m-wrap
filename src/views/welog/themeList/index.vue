<template>
 <div class="welog-theme-page">
   <div class="tab-content">

   </div>
   <div class="theme-content">
     <ul>
       <li v-for="(item,index) in 10">
         <card></card>
       </li>
     </ul>
   </div>
 </div>
</template>

<script>
import card from "@/views/welog/components/theme-card"
 export default {
   name:'',
   props: {
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
     card
   }
 }
</script>

<style lang='scss' scoped>

 
</style>
