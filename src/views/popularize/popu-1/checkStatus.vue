<template>
  <div class="check-wrap">
      <div class="title">Registration</div>
      <section>
          <ul v-if="dataList.length > 0">
              <li v-for="(tiem,index) in 70">
                  <p>{{index}}、stacy.sun@weget.com</p>
                  <p>4/13/19 &nbsp; 17:30:35</p>
              </li>
              <li>
                  <p>1、stacy.sun@weget.com</p>
                  <p>4/13/19  17:30:35</p>
              </li>
              <li>
                  <p>1、stacy.sun@weget.com</p>
                  <p>4/13/19  17:30:35</p>
              </li>
          </ul>
          <div v-else class="noData">
              <img src="./img/face.png" />
              <p>No sign up yet</p>
          </div>
      </section>
      <footer>
          Don’t forget to say thank you!
      </footer>
  </div>
</template>

<script>

export default {
  data() {
    return {
        dataList: []
    };
  },
  created() {

  },
  mounted() {
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
