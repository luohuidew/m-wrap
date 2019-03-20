<template>
  <div class="detail-attr">
    <div class="content"
      @click="$emit('show_dialog_show')">
      <p>Color,Size</p>
    </div>
    <!--<attr-dialog v-if="show_dialog"-->
      <!--@close="show_dialog = false"-->
      <!--:sku="sku"-->
      <!--:goods="goods"-->
      <!--:attr-list="attrList"-->
      <!--:cur-goods="curGoods"></attr-dialog>-->
  </div>
</template>

<script>
import attrDialog from "@/components/dialog/attr-dialog";
export default {
  name: "",
  props: ["goods", "attrList", "curGoods", "sku"],
  data() {
    return {
      show_dialog: false
    };
  },
  computed: {},
  created() {},
  methods: {},
  components: {
    attrDialog
  }
};
</script>

<style lang='scss' scoped>
.detail-attr {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url("/static/images/icon/cart/分类 copy@3x.png") no-repeat right
    center;
  background-size: auto 18px;
  // border-bottom: 1px solid #e9e9e9;
  .content {
    padding: 20px 0;
  }
  img {
    height: 18px;
    width: auto;
  }
  p {
    font-size: 14px;
  }
  span {
    font-size: 12px;
    color: #9b9b9b;
  }
}
</style>
