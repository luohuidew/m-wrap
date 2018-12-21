<template>
 <div class="home-tips-box">
      <img class="them"
        src="/static/img/christmas/主题.png"
        alt="">
      <div class="rules-tips-box">

        <img src="/static/img/christmas/规则-这个会动.png"
          alt=""
          srcset="" @click.stop="show_dialog">
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
     show_dialog(type){
      console.log(type);
      this.$emit('showrules',type)
    }
   },
   components: {
   }
 }
</script>

<style lang='scss' scoped>
.home-tips-box {
  width: 100%;
  position: relative;
  .them {
    width: 100%;
    height: auto;
  }
  // background: url("/static/img/christmas/主题.png") no-repeat top center;
  // background-size: 100% auto;
  .rules-tips-box {
    position: absolute;
    bottom: 7px;
    right: 0;
    transform: translateY(100%);
  }
}
 
</style>
