<template>
  <div class="aside-brand-box"
    v-if="CatLists">
    <cube-scroll ref="scroll"
      :data="CatLists"     
      class="horizontal-scroll-list-wrap">
      <ul class="left-lists">
        <li v-for="(item,index) in CatLists"
          :key="index"
          :class="{'active':item.id===CurSelectId}"
          @click="select_cate(item)">
          <img :src="item.img_url"
            alt=""
            srcset="">
            <p>{{item.cat_name}}</p>
        </li>
      </ul>
    </cube-scroll>

  </div>
</template>

<script>
import SEARCH from "@/api/search";
export default {
  name: "",
  props: {},
  data() {
    return {
      CurSelectId:undefined,
      CatLists: undefined
    };
  },
  watch:{
    CurSelectId:{
      handler(cur){
        this.$emit('select_change',cur);
      },      
    }
  },
  computed: {},
  created() {
    this.init_data();
  },
  methods: {
    init_data() {
      SEARCH.getFirstCategory().then(res => {
        this.CatLists = res.data;
        this.CurSelectId = res.data[0].id;
      });
    },
    select_cate(item) {
      this.CurSelectId = item.id;
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.aside-brand-box {
  height: 100%;
}
.left-lists {
  li {
    height: 80px;
    width: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f7f7f7;
  }
  .active {
    background-color: #ffffff;
  }
  img {
    height: 30px;
    width: 30px;
  }
  p {
    // width: 40px;
    height: 10px;
    font-size: 10px;
    color: #9b9b9b;
    text-align: center;
    margin-top: 12px;
  }
}
</style>
