<template>
  <div class="detail-attr">
    <div class="content"
      @click="show_log">
      <div class="icon-box">
        <img src="/static/images/icon/detail/detailchi.png"
          alt=""
          srcset="">
      </div>
      <p>{{attrDes.toString()}}</p>
      <!--<p class="end">Size Guide</p>-->
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
  created() {
  },
  methods: {
    show_log(){
      if (!this.$store.state.token){
        let re_path = `${
          this.$route.fullPath
          }&store_id=${
          this.sku.store_id
          }`;
        sessionStorage.setItem('open_cart',1);
        const param = {
          path: "/login?redirect=" + encodeURIComponent(re_path),
        }
        this.$router.push(param)
      }else{
        this.$emit('show_dialog_show')
      }

    }
  },
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
  .content {
    display: flex;
    align-items: center;
    padding: 17px 0;
    .icon-box {
      padding-right: 10px;

      img {
        height: 18px;
        width: 18px;
      }
    }
  }
  .end{
    flex: 1;
    text-align: right;
    margin-right: 17px;
    color: #9B9B9B;
    text-decoration:underline;
  }
  p {
    font-size: 14px;
    font-weight: bold;
  }
  span {
    font-size: 12px;
    color: #9b9b9b;
  }
}
</style>
