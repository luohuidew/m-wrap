<template>
  <div class="detail-attr">
    <div class="content"
      @click="$emit('show_dialog_show')">
      <div class="icon-box">
        <img src="/static/images/icon/detail/详情 尺码@3x.png"
          alt=""
          srcset="">
      </div>
      <p>{{attrDes.toString()}}</p>

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
  computed: {
    attrDes() {
      return this.attrList.map(item=> {
        return item.attr_name
      })
    }
  },
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
    display: flex;
    align-items: center;
    padding: 20px 0;
    .icon-box {
      padding-right: 10px;
      img {
        height: 20px;
        width: auto;
      }
    }
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
