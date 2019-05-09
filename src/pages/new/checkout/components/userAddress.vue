<template>
  <div class="address-box">
    <h3>Shipping Address</h3>
    <div class="select-address">
      <p>
        <!-- <span> Add shipping Address</span> -->
        <template v-if="address_item.zipcode">
          <div class="title">
            <span>Ship to</span>
            <em>Change</em>
          </div>
          <div class="des">
            <span style="fontWeight:bold;">{{address_item.first_name}}</span>&nbsp;<span style="fontWeight:bold;">{{address_item.last_name}}</span><br />
            <span> {{address_item.address1}} </span>
            <span> {{address_item.city}} </span>
            <span> {{address_item.state}} </span>
            <span> {{address_item.zipcode}} </span><br />
            <span style="fontWeight:bold;"> {{address_item.zipcode}} </span>
            <span style="fontWeight:bold;"> {{address_item.tel}} </span>
          </div>

        </template>
        <template v-else>
          <span :style="{color:'#d70e19'}">Add Shipping Address</span>
        </template>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    address_item : {
      type: Object,
      default: function () {
        return {}
      }
    },
  },
  data() {
    return {
      // address_item: {},
      // address_item: {
      //   zipcode: "1",
      //   first_name: "1",
      //   last_name: "1",
      //   address1: "1",
      //   city: "1",
      //   state: "1",
      //   zipcode: "1",
      //   zipcode: "1",
      //   tel: "1"
      // }
    };
  },
  computed: {},
  created() {},
  methods: {},
  components: {}
};
</script>

<style lang='scss' scoped>
.address-box {
  padding: 15px;
  h3 {
    font-size:18px;
    font-weight:400;
    color:rgba(0,0,0,1);
    line-height: 20px;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    border-radius:4px;
    border:1px solid rgba(225,225,225,1);
    font-size:14px;
    font-weight:400;
    color:rgba(74,74,74,1);
    padding: 10px;
    line-height:25px;
    max-height: 130px;
    overflow: hidden;
    .title {
      display: flex;
      justify-content: space-between;
      span {
        font-size:12px;
        font-weight:400;
        color:rgba(155,155,155,1);
      }
    }
  }
}
</style>
