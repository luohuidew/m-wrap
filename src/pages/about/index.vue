<template>
  <div class="about_page">
    <header class="about_head">
      <img src="/static/img/about/关于我们4切图_02.jpg">
    </header>
    <section>
      <img src="/static/img/about/关于我们4切图_06.jpg">
    </section>
    <section>
      <img src="/static/img/about/关于我们4切图_08.jpg">
    </section>
    <section>
      <img src="/static/img/about/关于我们4切图_10.jpg">
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
export default {};
</script>
<style lang="scss" scoped>
.about_page {
  height: auto;
  width: 100%;
  overflow: hidden;
  min-width: 100%;
  .about_head {
    width: 100%;
    padding: 20px 0;
    margin: 0 auto;
    img {
      width: 100%;
      height: auto;
    }
  }
  section {
    padding-bottom: 20px;
    img {
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
      // background: url("/static/img/about/icon bg@2x.png") no-repeat;
      // background: cover;
      background-color: rgb(33,33,33);
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
    // div.about_row2{
    //   height: 50px;
    //   background: #000;
    //   color: rgb(124, 124, 124);
    // }
  }
}
</style>

