<template>
  <div class="footers">
    <img src="/static/images/icon/footer/footer1.jpg" alt="">
    <div class="store">
      <a target="_blank" href = "https://itunes.apple.com/us/app/weget-fashion-marketplace/id1439887303?mt=8">
        <img src="/static/images/icon/footer/applestore.png"  />
      </a>
      <a  target="_blank" href = "https://play.google.com/store/apps/details?id=com.weget.www">
        <img src="/static/images/icon/footer/googleplay.png" />
      </a>
    </div>
    <br>
    <div class="about_row1">
      <p class="bold">Follow us</p>
      <p>
        <a href="https://www.facebook.com/wegetofficial">
          <img src="/static/images/icon/detail/f@3x.png">
        </a>
        <a href="https://www.instagram.com/shopweget">
          <img src="/static/images/icon/detail/ins@3x.png">
        </a>
        <a href="https://www.youtube.com/channel/UCJ2SmCasimMk8TCHxloaMtA">
          <img src="/static/images/icon/detail/Shape@3x.png">
        </a>
      </p>
      <br>
      <p class="bold">ABOUT</p>
      <p>
        <router-link to="/about" class="btn" tag="p">
          About Us
        </router-link>
      </p>
      <router-link to="/statement" tag="p">
        Privacy Policy
      </router-link>
      <p><img class="question" src="/static/images/icon/detail/question.png" height="15" /> Need help？ <a class="email" href="mailto:service@weget.com"> Contact us</a></p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "apple-google"
    }
</script>

<style lang='scss' scoped>
  .footers{
    background: #f8f8f8;
  .question{
    width: 15px;
    height: 15px;
    display: inline;
  }
  img{
    width: 100%;
    display: block;
  }
  .store {
    padding: 5px 5px;
    display: flex;
    margin-top: 20px;
    justify-content: space-around;
  a{
    width: 40%;
    display: inline-block;
    height: 40px;
  img {
    width: 100%;
  }
  }

  }
  div.about_row1 {
    padding-bottom: 30px;
  p {
    text-align: center;
    margin-top: 15px;
    font-size:12px;
    font-weight:400;
    color:rgba(0,0,0,1);
  &.bold{
     font-size:16px;
     font-weight:800;
     color:rgba(0,0,0,1);
   }
  a.email {
    margin: 0px;
    font-weight:800;
    text-decoration: underline;
  }
  a {
    display: inline-block;
    margin: 0 15px;
  img {
    width: auto;
    height: 20px;
  }
  }
  }
  }
  }
</style>
