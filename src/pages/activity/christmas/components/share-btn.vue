<template>
 <div class="share-box" @click="close_box">

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
     close_box(){
       this.$emit('close','close')
     }
   },
   components: {

   }
 }
</script>

<style lang='scss' scoped>
.share-box {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 40;
  background: rgba(0,0,0,0.5) url('/static/img/elements/Artboard 2@2x.png') no-repeat top right;
  background-size: auto 80px;
}
 
</style>
