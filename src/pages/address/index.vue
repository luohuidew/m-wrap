<template>
 <div class="my-address">
   <h3>MY ADDRESS</h3>
   <ul class="address-content">
     <li v-for=" n in 10">
       <p><span>syat</span><span>syat</span></p>
       <p><span>syat</span><span>syat</span></p>
       <p><span>syat</span><span>syat</span></p>
       <p><span>syat</span><span>syat</span></p>
     </li>
   </ul>
    <div class="red-btn">
      <a href="javascript:;" @click="go_back">ADD</a>
    </div>
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
     go_back(){
       this.$router.go(-1);
     }
   },
   components: {

   }
 }
</script>

<style lang='scss' scoped>
$color1: #d70e19;
$bgcolor: #f3f3f3;
$linecolor: #e9e9e9;
.my-address {
  background-color: $bgcolor;
  padding-bottom:120px;
  overflow: auto;
}
.address-content {
  // height:80%;
  li {
    padding:15px 10px;
    // margin-bottom:10px;
    background-color: #fff;
    margin:10px;
    border-radius: 5px;
    p {

    }
    span {
      font-size: 13px;
      font-weight: bold;
    }
  }
}
.red-btn {
  position: fixed;
  width:100%;
  bottom: 0;
}
 
</style>
