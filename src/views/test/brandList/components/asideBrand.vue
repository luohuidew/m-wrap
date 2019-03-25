<template>
 <div class="aside-brand-box">
   
 </div>
</template>

<script>
import SEARCH from "@/api/search";
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
     this.init_data();
   },
   methods: {
     init_data(){
       SEARCH.getFirstCategory().then(res=>{

       })
     }
   },
   components: {

   }
 }
</script>

<style lang='scss' scoped>

 
</style>
