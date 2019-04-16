<template>
  <div class="sku-box">
    <goods-card :sku="skuData"></goods-card>
    <div class="more-btn" @click="show_actionsheets">
      ...
    </div>
    <van-actionsheet v-model="show"
      :actions="actions"
      cancel-text="Cancel"
      @select="onSelect"
      @cancel="show=false" />
  </div>
</template>

<script>
import goodsCard from "@/components/card-list-row";
export default {
  name: "",
  props: {
    skuData: {
      type: Object,
      default: undefined
    }
  },
  data() {
    return {
      show:false,
      actions: [
        {
          name: 'Delete',
          sku_id:this.skuData.sku_id
        }        
      ]
    };
  },
  computed: {},
  created() {},
  methods: {
    show_actionsheets(){
       this.show = true;
    },
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false;
      console.log(item);
    }
  },
  components: {
    goodsCard
  }
};
</script>

<style lang='scss' scoped>
.sku-box {
  position: relative;
  .more-btn {
    position: absolute;
    right: 10px;
    bottom: 25px;
    width: 30px;
    height: 30px;
    font-size: 30px;
    line-height: 30px;
    color: #9b9b9b;
    border-radius: 50%;
  }
}
</style>
