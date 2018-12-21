<template>
    <div class="log-content">
        <div class="img-box">
            <img :src="data_log.img_url" alt="" srcset="">
        </div>
        <div class="au-box">
            <p class="au-info">
                <img :src="data_log.avator" alt="" srcset="">
                <span>{{data_log.nickname}}</span>
            </p>
            <p class="au-star">
                <img src="@/assets/img/icon/heart.png" alt="" srcset="">
                {{data_log.Star}}
            </p>
        </div>
        <div class="tag-box">
            <ul>
                <li 
                v-for="(item,index) in data_log.tag"
                :key="index"
                >#{{item.text}}</li>
            </ul>
        </div>
    </div>      
</template>

<script>
export default {
  name: "",
  data() {
    return {
      data_log: {
        img_url: "/static/img/log1.png",
        avator: "/static/img/sandy.png",
        nickname: "abel",
        Star: "2389",
        tag: [
          {
            id: 0,
            text: "tag"
          },
          {
            id: 0,
            text: "Giorgio Armani"
          },
          {
            id: 0,
            text: "Rectangle"
          },
          {
            id: 0,
            text: "201"
          },
          {
            id: 0,
            text: "Eyeshadow Eye"
          }
        ]
      }
    };
  },
//   props:[cardList],
  components: {}
};
</script>

<style lang='scss' scoped>
.log-content {
  width: 100%;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
}
.img-box {
    width:100%;
    font-size: 0;
    img {
        width:100%;
        height:auto;
    }
}
.au-box {
    font-size: 0;
    background-color: #fff;
    padding:10px;
    padding-bottom:0;
    p {
        width:50%;
        display: inline-block;
        vertical-align: middle;
    }
    img {
        height:18px;
        width:18px;
        vertical-align: middle;
    }
    span {
        font-size: 12px;
        color:#9B9B9B;
        vertical-align: middle;
        padding-left:5px;
    }
    .au-star {
        font-size: 11px;
        color:#9B9B9B;
        text-align: right;
        img {
            height:12px;
            width:12px;
            vertical-align: top;
        }
    }
}
.tag-box {
    padding:10px;
    background-color: #fff;
    li {        
        display: inline-block;
        font-size: 12px;
        color:#000;
        background-color: #E9E9E9;
        padding:2px 8px;
        margin-right:5px;
        margin-bottom:5px;
        border-radius: 8px;
    }
}
</style>
