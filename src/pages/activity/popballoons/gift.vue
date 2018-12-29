<template>
  <div id="activity-detail">
    <div class="detail-header">
      <img src="/static/img/popballons/MYRECORDS.png" alt>
    </div>
    <ul class="detail-info" v-if="tableData.length!==0">
      <li v-for="(item,index) of tableData" :key="index">
        <div class="detail_box success" v-if="item.status===3">
          <div class="middle">
            <div class="info-img">
              <img :src="item.sku_image">
            </div>
            <div class="info-text">
              <p>{{item.name}}</p>
              <p>{{item.lamp_num}} lights</p>
              <p>End time：{{item.etime | dateServer}}</p>
              <p v-if="item.coupon_status==2 || !item.coupon_status" @click="to_coupon(item.id)" >
                <img src="/static/img/popballons/MYRECORDS.png" alt>
              </p>
              <p v-else>

              </p>
            </div>
          </div>
        </div>
        <div v-if="item.status===2" class="detail_box fail">
          <div class="middle">
            <div class="info-img">
              <img :src="item.sku_image">
            </div>
            <div class="info-text">
              <p>{{item.name}}</p>
              <p>{{item.lamp_num}} lights</p>
              <p>End time：{{item.etime | dateServer}}</p>
              <p class="btn-jump">
                <b>Times up!</b>
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="norecord" v-if="is_no">
      <img src="/static/img/christmas/icon/Norecord@2x.png" alt>
    </div>
  </div>
</template>

<script>
import api from "@/api/christmas";
export default {
  name: "",
  data() {
    return {
      tableData: [],
      is_no: false
    };
  },
  created() {
    this.init_data();
  },
  mounted() {},
  computed: {},
  methods: {
    init_data() {
      api.user_detail().then(res => {
        console.log(res);
        this.tableData = res.data;
        let temp_flag = this.tableData.some((item, index) => {
          return item.status === 2 || item.status === 3;
        });
        this.is_no = !temp_flag;
        console.log(temp_flag);
        console.log(this.tableData);
      });
    },
    to_coupon(id) {
      console.log(id);
      this.$router.push({
        path: "christmas-download",
        query: {
          id: id
        }
      });
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
#activity-detail {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height:100%;
  height: 100%;
  overflow: hidden;
  padding: 0 20px;
  z-index: 10;
  font-size: 0;
  // background: url("/static/img/christmas/icon/通用背景.jpg") no-repeat top
  //   center;
  // background-size: 100% 100%;
  .detail-header {
    text-align: center;
    padding-top: 14px;
    img {
      height: 28px;
      width: auto;
    }
  }
  .detail-info {
    flex:1;
    overflow: auto;
    font-size: 12px;
    color: #16352f;
    // padding: 30px 0px;
    margin: 0 auto;
    li {
      margin-top: 30px;
      .success {
        background: url("/static/img/christmas/icon/成功表情@2x.png") no-repeat
          top center;
      }
      .fail {
        background: url("/static/img/christmas/icon/失败表情@2x.png") no-repeat
          top center;
      }
      .detail_box {
        background-size: 100% 100%;
        width: 302px;
        height: 132px;
        position: relative;
        margin: 0 auto;
        .middle {
          display: flex;
          position: absolute;
          height: 119px;
          width: 250px;
          top: 50%;
          left: 10px;
          transform: translateY(-50%);
          padding: 10px 0;
          .info-img {
            height: 110px;
            width: 96px;
            img {
              height: 100%;
              width: auto;
            }
          }
          .info-text {
            margin-top: 12px;
            font-size: 12px;
            line-height: 14px;
            p {
              padding-top: 5px;
              position: relative;
              img,
              b {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                width: 95px;
                height: auto;
              }
              b {
                width: 65px;
                padding: 5px 0;
              }
            }
          }
        }
      }
    }
  }
  .norecord {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 86px;
    img {
      width: 117px;
    }
  }
}
</style>
