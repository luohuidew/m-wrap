<template>
  <div class="article-detail">
    <header>
        <img src="/static/img/activity-img/ac-5/Why-Group-Buy_01.jpg" alt="">
        <img src="/static/img/activity-img/ac-5/Why-Group-Buy_02.jpg" alt="">
    </header>
    <section class="two-img ">
        <img class="ac-5_gif" src="/static/img/activity-img/ac-5/jiarutuan.gif" alt="">
        <img class="ac-5_jpg" src="/static/img/activity-img/ac-5/Why-Group-Buy_04.jpg" alt="">
        <img class="ac-5_gif" src="/static/img/activity-img/ac-5/kaituan.gif" alt="">
        <img class="ac-jpg" src="/static/img/activity-img/ac-5/Why-Group-Buy_06.jpg" alt="">
    </section>
    <footer>
      <div class="about_row1">
        <!-- <img class="bgimg" src="/static/img/about/icon bg@2x.png"> -->
        <p>
          <a href="javascript:;">
            <img src="/static/img/about/底部logo@2x.png">
          </a>
          <a href="https://www.facebook.com/wegetofficial">
            <img src="/static/img/about/iconF@2x.png">
          </a>
          <a href="https://www.instagram.com/shopweget">
            <img src="/static/img/about/iconO@2x.png">
          </a>
          <a href="https://www.youtube.com/channel/UCJ2SmCasimMk8TCHxloaMtA">
            <img src="/static/img/about/iconA@2x.png">
          </a>
        </p>
      </div>
      <div class="about_row2">
        <img class="bgimg" src="/static/img/about/底部@2x.png">
      </div>
    </footer>
  </div>
</template>

<script>
// import data from "./config";
export default {
  name: "",
};
</script>

<style lang='scss' scoped>
.article-detail {
  font-size: 0;
  img {
    max-width: 100%;
    height: auto;
  }
}
.two-img {
  text-align: center;
  margin: 20px auto;
  .ac-5_gif{
    height: 450px;
    margin-bottom: 30px;
  }
  .ac-5_jpg{
    width: 100%;
  }
}
footer {
  background: #000;
  width: 100%;
  display: flex;
  flex-direction: column;
  .bgimg {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  div.about_row1 {
    width: 100%;
    height: 80px;
    background: rgb(33, 33, 33);
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: relative;
    p {
      position: absolute;
      width: 80%;
      height: 22px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      a {
        margin: 0 15px;
        img {
          height: 22px;
        }
      }
    }
  }
}
</style>
