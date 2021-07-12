<template>
  <div class="podcast-container">
    <div class="podcast-container-up">
      <div class="line"></div>
      <div class="title">Podcast</div>
      <div class="description">
        讓資深記者用聲音，帶你到地方現場去，聽聽３組在偏鄉發展的質青們，聊聊他們洄游他方、為偏鄉帶來改變的故事。
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.podcast-container {
  height: 700px;
  background-image: url(('../assets/img/bg/deep-purple-bg-2.svg'));
  background-repeat: no-repeat;
  background-position: 0 80px;
  background-size: 375px 265px;
  margin-bottom: 96px;
  @media screen and (min-width: 360px) {
    background-position: 0 60px;
    background-size: 450px 265px;
  }
  @media screen and (min-width: 768px) {
    background-size: 100vw;
    background-position: 0 0;
    margin-bottom: 110px;
  }
  @media screen and (min-width: 1280px) {
    background-position: 0 -250px;
    margin-bottom: 131px;
  }
}
.podcast-container-up {
  background: #828ab0;
  padding-top: 17.4px;
}
.line {
  width: 50px;
  height: 1px;
  background: #eeedfc;
  margin: 0 auto;
}
.title {
  display: flex;
  justify-content: center;
  margin: 21px 0;
  color: #ffffff;
  font-weight: 700;
  font-size: 40px;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 60px;
    margin: 8px 0 13px 0;
  }
  @media screen and (min-width: 1280px) {
    margin: 8px 0 33px 0;
  }
}
.description {
  color: #eeedfc;
  font-weight: 600;
  padding: 0 15px;
  margin: 0 auto;
  font-size: 18px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    padding: 0 50px;
  }
  @media screen and (min-width: 1280px) {
    width: 710px;
    padding: 0;
  }
}
</style>