<template>
 <div class="no-data-box">
   <img src="/static/images/icon/nodata/weget没有@2x.png" alt="" srcset="">
   <p class="tips-text">
     <slot ></slot>
   </p>
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
.no-data-box {
  height: 100%;
  background-color: #f3f3f3;
  text-align: center;
  img {
    width: 60px;
    margin-top: 30%;
  }
  p {
    margin-top: 40px;
    color: rgb(202, 202, 202);
  }
}
 
</style>
