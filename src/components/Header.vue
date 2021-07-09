<template>
<div class="header-container">
  <div class="topHeader-container">
    <div class="header-left">
      <a href="/">
        <img class="logo" src="@/assets/img/header/udn-logo.svg" />
      </a>
    </div>
    <div class="header-right">
      <a href="/">
        <img class="fb-icon" src="@/assets/img/header/fb.svg" />
      </a>
      <a href="/">
        <img class="line-icon" src="@/assets/img/header/line.svg" />
      </a>
      <a href="/">
        <img class="twitter-icon" src="@/assets/img/header/tw.svg" />
      </a>
    </div>
  </div>
  <Story></Story>
</div>
</template>

<script>
import Story from "@/components/Story.vue";

export default {
  components: {
    Story
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  background-image: url('../assets/img/bg/cloud-bg.png'),
                    url('../assets/img/bg/purple-bg1.svg'),
                    url('../assets/img/bg/purple-bg2.svg');
  background-size: 862px, 171.5px, 287.2px 473.3px;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: 0% 1%, top right, -50px 300px;
  @media screen and (min-width: 768px) {
    background-size: 862px, 285.7px, 525px 666.7px;
    background-position: 0% 1%, top right, -70px 400px;
  }
  @media screen and (min-width: 1280px) {
    background-size: 862px, 285.7px, 525px 666.7px;
    background-position: 0% 1%, top right, 190px 245px;
    background-repeat: repeat, no-repeat, no-repeat;
  }
}
.topHeader-container {
  display: flex;
  justify-content: space-between;
}
.header-right {
  margin: 11px 8.7px 0 0;
  @media screen and (min-width: 768px) {
    margin-right: 30px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 25px;
  }
}
.logo {
  width: 90.2px;
  margin: 18px 0 0 24px;
  @media screen and (min-width: 768px) {
    margin-left: 30px;
  }
}
.fb-icon, .line-icon, .twitter-icon {
  width: 32px;
  height: 32px;
}
</style>