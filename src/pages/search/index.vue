<template>
 <div class="search-home">
   <div class="aside-bar"></div>
   <div class="lists-box"></div>
 </div>
</template>

<script>
import api from "@/api/search"
 export default {
   name:'',
   data () {
     return {
       aside_data:undefined,
     }
   },
   created(){
     this.init_data();
   },
   mounted () {
   },
   computed: {
   },
   methods: {
     init_data(){
       api.getFirstCategory().then(res=>{

       })
     }
   },
   components: {

   }
 }
</script>

<style lang='scss' scoped>
.search-home {
  display: flex;
  height: 100%;
  & > div {
    height: 100%;
    overflow: auto;
    overflow-x: hidden;
  }
  .aside-bar {
    width: 90px;
  }
  .lists-box {
    flex:1;
  }
}
 
</style>
