<template>
 <div class="page">
     <Swiper :datas = 'obj'>
         <template slot="default" slot-scope="{ item }">
             <div style ="height: 330px">
                 {{item.text}}
             </div>
         </template>
     </Swiper>
   <router-view></router-view>
 </div>
</template>

<script>
    import Swiper from "@/components/Swiper";

    export default {
   name:'',
   props: {
   },
   data () {

     return {
         obj: [
             {text: 1},
             {text: 2},
             {text: 3},
         ],
     }
   },
   computed: {
   },
   created () {
   },
   methods: {
   },
   components: {
       Swiper
   }
 }
</script>

<style lang='scss' scoped>


</style>
