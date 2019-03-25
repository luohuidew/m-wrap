<template>
        <Scroll>
            <ul>
                <li v-for="(item, index) in slideData" :key="index">
                    <img :src="item.imgpath" alt="">
                    <span>{{item.text}}</span>
                </li>

            </ul>
        </Scroll>
</template>

<script>
// import Category from "@/api/Category";
import Scroll from "@/components/scroll/Scroll";
export default {
  name: "",
  data() {
    return {
        slideData: []
    };
  },
  created() {
   this.slideData = [
       {
          text : 'Rectangle',
           imgpath: '@/assets/img/icon/goback.png'
       },
       {
           text : 'Rectangle',
           imgpath: '@/assets/img/icon/goback.png'
       },
   ]
  },
  mounted() {},
  computed: {},
  methods: {
    init_data() {
      // coupon.coupon({ status: 2 }).then(res => {
      //   this.coupon_list = res.data;
      //   this.is_checked = this.$store.state.order_detail.is_selected_couponid;
      // });
    },
  },
  components: {
      Scroll
  }
};
</script>

<style lang='scss' scoped>
    .wrap{
        width: 100px;
        height: 100%;
        border:1px solid red;
        ul {
            li {
                height: 80px;
                display: flex;
                width: 100px;
                align-items: center;
                justify-content: center;
            }
        }
    }
</style>
