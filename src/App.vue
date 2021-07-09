<template>
  <div>
    <Header></Header>
    <Podcast></Podcast>
    <Interview></Interview>
    <Instagram></Instagram>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Podcast from "@/components/Podcast.vue";
import Interview from "@/components/Interview.vue";
import Instagram from "@/components/Instagram.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Podcast,
    Interview,
    Instagram,
    Footer
  }
}
</script>

<style lang="scss">

</style>
