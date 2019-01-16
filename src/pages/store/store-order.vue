<template>
  <div class="store-item" v-if="req_data">
    <h3>Ongoing open groups，JOIN NOW！</h3>
    <div class="show-list">
      <ul>
        <li v-for="(item,index) in req_data"
          :key="index">
          <sale-list :card-data="item" class="sku-item" :group-id="item.group_buy_info.group_id"></sale-list>
        </li>
      </ul>     
    </div>
  </div>
</template>

<script>
import saleList from "@/components/goodsCard-column-scroll";
// import api from "@/api/product";
export default {
  name: "",
  data() {
    return {
      req_data: this.infoData.group_buy_list,
      cur_select: 0
    };
  },
  props: ["infoData"],
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {
    cur_slice_data() {
      let temp = undefined;
      if (this.req_data) {
        temp = this.req_data.slice(this.cur_select, this.cur_select + 5);
      }
      return temp;
    }
  },
  methods: {
    init_data() {
      // let params = {
      //   sku_id: this.sku.sku_id
      // };
      // api.sku_store(params).then(res => {
      //   console.log(res);
      //   this.req_data = res.data;
      // });
    }
  },
  components: {
    saleList
  }
};
</script>

<style lang='scss' scoped>
.store-item {
  padding: 20px 0 20px 20px;
  background-color: #F8F8F8;
  h3 {
    font-size:14px;
    color: #4a4a4a;
    font-weight: normal;
    padding-bottom: 20px;
  }
}
.show-list {
  width: 100%;
  //   height: 175px;
  overflow-x: auto;
  overflow-y: hidden;
  ul {
    white-space: nowrap;
    display: inline-block;
    padding-right: 20px;
    li {
      // width: 170px;
      //   height: 175px;
      // background-color: blueviolet;
      display: inline-block;
      vertical-align: middle;
      padding-left: 16px;
      &:nth-child(1) {
        padding-left: 0;
      }
      img {
        width: 100%;
        height: 100%;
        //   object-fit: contain;
      }
      .sku-item {
        width: 150px;
      }
    }
  }
}
</style>
