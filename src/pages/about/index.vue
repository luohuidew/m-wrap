<template>
 <div class="about-us-page">
   <ul>
     <li>
       <img src="/static/images/elements/about/about-us_01.jpg" alt="" srcset="">
     </li>
     <li>
       <img src="/static/images/elements/about/about-us_02.jpg" alt="" srcset="">
     </li>
     <li class="gif">
       <img src="/static/images/elements/about/about-us_03.gif" alt="" srcset="">
     </li>
     <li>
       <img src="/static/images/elements/about/about-us_04.jpg" alt="" srcset="">
     </li>
     <li class="gif">
       <img src="/static/images/elements/about/about-us_05.gif" alt="" srcset="">
     </li>
     <li>
       <img src="/static/images/elements/about/about-us_06.jpg" alt="" srcset="">
     </li>
   </ul>
 </div>
</template>

<script>
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

   }
 }
</script>

<style lang='scss' scoped>
.about-us-page {
  img {
    width: 100%;
  }
  .gif {
    padding: 0 28px;
  }
}
 
</style>
