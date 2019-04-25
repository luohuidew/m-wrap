<template>
  <div class="check-wrap">
      <div class="title">Registration</div>
      <section>
          <ul v-if="dataList.length > 0">
              <li v-for="(item,index) in dataList" :key="item.id">
                  <p>{{index + 1}}、{{item.email}}</p>
                  <p>{{item.invite_time | timeForml}} &nbsp; {{item.invite_time | hoursForml}}</p>
              </li>
          </ul>
          <div v-else class="noData">
              <img src="./img/face.png" />
              <p>No sign up yet</p>
          </div>
      </section>
      <footer v-if="dataList.length > 0">
          Don’t forget to say thank you!
      </footer>
  </div>
</template>

<script>
    import popularize from "@/api/popularize";

export default {
  data() {
    return {
        dataList:[]
    };
  },
  created() {
      popularize.shareState().then((res)=> {
          this.dataList = res.data
      })
  },
  mounted() {
  },
    filters: {
        timeForml(val) {
            function addStr (str) {
                return str.toString().length === 1 ? '0' + str : str
            }
            let date = new Date(val)
            const year = date.getFullYear().toString().slice(-12);
            const month = addStr(date.getMonth() + 1)
            const day = addStr(date.getDate())
            return `${day}/${month}/${year}`
        },
        hoursForml(val) {
            let date = new Date(val)
            function addStr (str) {
               return str.toString().length === 1 ? '0' + str : str
            }
            let h = addStr(date.getHours());
            let m = addStr(date.getMinutes())
            let s = addStr(date.getSeconds())

            return `${h}:${m}:${s}`
        }
    },
  computed: {},
  methods: {}
};
</script>

<style lang='scss' scoped>
    .check-wrap {
        height: 100%;
        overflow: hidden;
        background: url("./img/footer.png") no-repeat center bottom;
        background-size: 100% auto;
        .title {
            height: 50px;
            line-height: 50px;
            padding-left: 25px;
           border-bottom: 3px solid rgba(247,247,247,1);
            font-size:15px;
            font-weight:bold;
        }
        section{
            display: block;
            padding: 10px 20px;
            font-size: 14px;
            height: calc(100% - 140px);
            overflow-y: scroll;
            overflow-scrolling: touch;
            li {
                line-height: 27px;
                display: flex;
                justify-content: space-between;
            }
            .noData {
                text-align: center;
                img {
                    margin: 20px;
                    width: 42px;
                    height: 42px;
                    display: inline-block;
                }
                p{
                    text-align: center;
                    font-size:13px;
                    font-weight:400;
                    color:rgba(106,106,106,1);
                }
            }
        }
        footer{
            font-size:16px;
            font-weight:bold;
            color:rgba(199,84,109,1);
            text-align: center;
        }
    }
</style>
