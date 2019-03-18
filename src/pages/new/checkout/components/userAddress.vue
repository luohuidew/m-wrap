<template>
  <div class="address-box">
    <h3>Shipping Address</h3>
    <div class="select-address">
      <p>
        <!-- <span> Add shipping Address</span> -->
        <template v-if="address_item.zipcode">
          <span style="fontWeight:bold;">{{address_item.first_name}}</span>&nbsp;<span style="fontWeight:bold;">{{address_item.last_name}}</span><br />
          <span> {{address_item.address1}} </span>
          <span> {{address_item.city}} </span>
          <span> {{address_item.state}} </span>
          <span> {{address_item.zipcode}} </span><br />
          <span style="fontWeight:bold;"> {{address_item.zipcode}} </span>
          <span style="fontWeight:bold;"> {{address_item.tel}} </span>
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
  p {
    font-size: 16px;
    // padding-right: 20px;
    padding: 20px 20px 20px 0;
    background: url("/static/img/icon/right.png") no-repeat right center;
  }
}
</style>
