<template>
    <div class="warp">
     <img class="imgs" src="./img/text.png"  />
        <h2>
            Hurry up！Copy and share<br> your link, get your $15 now!
        </h2>
        <input type="text" id="successinput" class="succee-input" readonly="readonly" v-model="link"/>

        <div class="copy" @click="copyLink"
             data-clipboard-target="#successinput"
             :data-clipboard-text="link"
        >
           &nbsp; https://m.weget.com
        </div>
    </div>
</template>

<script>

import clipboard from 'clipboard';

export default {
  data() {
    return {
      link: ''
    };
  },
  created() {
    this.link = this.$route.query.url;
    console.log( this.link)
  },
  mounted() {
  },
  computed: {},
  methods: {
      copyLink() {
          let coyd = new clipboard('.copy');
          coyd.on('success', ()=> {
              this.$toast('Copy Success');
              coyd.destroy()
          });
      },
  },
  components: {
  }
};
</script>

<style lang='scss' scoped>
.warp {
    height: 100%;
    overflow: scroll;
    background: url("./img/bg.jpg");
    background-size: cover;

    .imgs {
        width: 80%;
        margin: 20px auto;
        margin-top: 30px;
        display: block;
    }
    .succee-input {
        display: none;
    }
    h2{
        font-size:15px;
        line-height: 24px;
        font-weight:bold;
        color:rgba(0,0,0,1);
        margin-top: 40px;
        text-align: center;
    }
    .copy {
        margin-top: 20px;
        cursor: pointer;
        width: 191px;
        height: 43px;
        line-height: 43px;
        padding-left: 30px;
        background: url('./img/copy.png') no-repeat 10px center;
        background-size: 17px auto;
        overflow: hidden;
        background-color: #fff;
        font-size: 14px;
        border-radius: 5px;
        font-weight: bold;
        margin: 20px auto;
    }
}
</style>
