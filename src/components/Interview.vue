<template>
  <div class="interview-container">
    <div class="interview-container-up">
      <div class="line"></div>
      <div class="title">500 輯 優人物專訪</div>
      <div class="description">
        遠離都市喧囂，聚焦台灣質感人物，展現扎根地方的共同信念。
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.line {
  width: 50px;
  height: 1px;
  background: #828ab0;
  margin: 0 auto;
}
.title {
  display: flex;
  justify-content: center;
  margin: 15px 0 13px 0;
  color: #41403d;
  font-weight: 700;
  font-size: 40px;
  @media screen and (min-width: 768px) {
    font-size: 60px;
    margin: 0 0 30px 0;
  }
  @media screen and (min-width: 1280px) {
    margin: 10px 0 21px 0;
  }
}
.description {
  color: #41403d;
  font-weight: 600;
  padding: 0 15px;
  margin: 0 auto;
  font-size: 18px;
  text-align: center;
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