<template>
  <div class="my-address">
    <div class="title-and-add">
      <h3>MY ADDRESS</h3>
      <a href="javascript:;"
        @click="to_add()">ADD</a>
    </div>
    <ul class="address-content">
      <li v-for="(item,index) in address_lists"
        :key="index"
        @click="address_change(item)">
        <div class="address_radio">
          <img v-if="is_selected== item.id"
            src="/static/img/icon/选择红.png">
          <img v-else
            src="/static/img/icon/选择 灰.png">
        </div>
        <div class="address_main">
          <p class="nickname">
            <span>{{item.first_name}}</span>&nbsp;
            <span>{{item.last_name}}</span>
            <span class="default-address"
              v-if="item.is_default===2">Default</span>
          </p>
          <p>
            <span> {{item.address1}}</span>
            <span> {{item.city}} </span>
            <span> {{item.state}} </span>
            <span> {{item.zipcode}} </span><br />
            <span style="fontWeight:bold;"> {{item.zipcode}} </span>
            <span style="fontWeight:bold;"> {{item.tel}} </span>
          </p>
        </div>
        <div class="address-edit"
          @click="to_address_edit(index)">
          <span>EDIT</span>
        </div>
      </li>
    </ul>
    <div class="add-btn">
      <a href="javascript:;"
        @click="to_pay()">DONE</a>
    </div>
  </div>
</template>

<script>
import addressApi from "@/api/address";
export default {
  name: "",
  data() {
    return {
      is_selected: -1,
      is_editor: false,
      address: {
        cur_address: {},
        first_name: "",
        last_name: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipcode: "",
        tel: ""
      },
      address_lists: [],
      edit_first_name: ""
    };
  },
  created() {
    this.init_address();
  },
  mounted() {},
  computed: {},
  methods: {
    init_address() {
      addressApi.address_list().then(res => {
        this.is_selected = this.$route.query.id;
        this.address_lists = res.data;
        let temp_address = this.address_lists.filter(item=>{
          return item.id == this.is_selected;
        })
        // debugger;
        this.address_change(temp_address[0]);
      });
    },
    save_address() {
      let params = this.address;
      addressApi.address_save(params).then(res => {
        this.is_editor = !this.is_editor;
        this.init_address();
      });
    },
    to_pay() {
      this.$store.state.order_detail.address = this.cur_address;
      // this.$store.state.order_detail.is_selected_address = index;
      this.$router.go(-1);
    },
    address_change(item) {
      this.cur_address = item;
      this.is_selected = item.id;
    },
    to_address_edit(index) {
      this.$router.push({
        path: "/add_address",
        query: {
          cur_index: index
        }
      });
    },
    to_add() {
      let params = {
        path: "/add_address"
      };
      this.$router.push(params);
    },
    ___selected_shipping(citem, index) {
      this.is_selected_shipping = index;
      this.$store.state.order_detail.delivery = citem;
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
$color1: #d70e19;
$bgcolor: #f3f3f3;
$linecolor: #e9e9e9;
.my-address {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: $bgcolor;
  overflow: auto;
  .title-and-add {
    display: flex;
    justify-content: space-between;
    h3 {
      padding: 30px 0 10px 20px;
    }
    a {
      padding: 30px 20px 10px 20px;
      color: #000;
    }
  }
}
.default-address {
  padding: 2px 6px;
  background-color: #d70e19;
  color: #fff;
  margin-left: 12px;
  font-size: 12px;
}
.address-content {
  // height:80%;
  flex: 1;
  overflow: auto;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 10px;
    // margin-bottom:10px;
    background-color: #fff;
    margin: 10px;
    border-radius: 5px;
    .address_radio {
      width: 5%;
      margin-right: 10px;
      position: relative;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .address_main {
      width: 80%;
    }
    .address-edit {
      width: 15%;
      text-align: right;
      padding: 15px 10px;
      border-left: 1px solid #ddd;
      color: #898989;
    }
    span {
      font-size: 13px;
      font-weight: bold;
    }
  }
}
.add-btn {
  padding: 10px 0 10px 0;
  background-color: #fff;
  text-align: center;
  // display: flex;
  // justify-content: space-between;
  a {
    display: inline-block;
    width: 250px;
    // padding:0 30px;
    height: 40px;
    background: rgba(215, 14, 25, 1);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    text-align: center;
    margin: 0 20px;
    line-height: 40px;
    color: #fff;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
