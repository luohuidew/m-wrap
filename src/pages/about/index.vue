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
      <div>
        <p>
          <img src="/static/img/about/iconF@2x.png">
          <img src="/static/img/about/iconO@2x.png">
          <img src="/static/img/about/iconA@2x.png">
        </p>
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
    width: 100%;
    height: 131px;
    background: url("/static/img/about/关于我们4切图_12.jpg");
    background-size: cover;
    div {
      width: 100%;
      text-align: right;
      position: relative;
      height: 80px;
      line-height: 80px;
      padding-right: 30px;
      p {
        height: 70px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 50px;
        img {
          height: 25px;
          margin-right: 20px;
        }
      }
    }
  }
}
</style>

