<template>
  <div class="cart-guide"
    v-if="guiData">
    <h2>You May Also Like</h2>
    <van-list v-model="loading"
      :finished="finished"
      finished-text=""
      :loading-text="'Loading...'"
      @load="get_more_data"
      :offset="220">
      <ul>
        <li v-for="(item,index) in listData"
          :key="index">
          <sale-list :card-data="item"
            class="sku-item"></sale-list>
        </li>
      </ul>
    </van-list>

  </div>
</template>

<script>
import saleList from "@/components/card-column-auto";
import CART from "@/api/cart";
export default {
  name: "",
  props: {
    guiData: {
      type: Object,
      default: undefined
    }
  },
  data() {
    return {
      listData: this.guiData.data,
      loading: false,
      finished: false,
      selectId: this.guiData.extend.select_id
    };
  },
  mounted() {},
  computed: {},
  methods: {
    get_more_data() {
      let query_params = {
        select_id: this.selectId
      };
      CART.likeList(query_params).then(res => {
        this.loading = false;
        if (!res.data.length) {
          this.finished = true;
        }
        res.data.data.forEach(item => {
          this.listData.push(item);
        });
        this.selectId = res.data.selectId;
      });
    }
  },
  components: {
    saleList
  }
};
</script>

<style lang='scss' scoped>
.cart-guide {
  padding: 10px;
  background-color: #f3f3f3;
  h2 {
    font-size: 18px;
    padding: 10px 5px 10px;
  }
  li {
    display: inline-block;
    width: 50%;
    padding: 5px;
  }
}
.sku-item {
}
</style>
