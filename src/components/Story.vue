<template>
  <div class="story-container">
    <Map></Map>
    <Articles></Articles>
  </div>
</template>

<script>
import Map from "@/components/Map.vue";
import Articles from "@/components/Articles.vue";

export default {
  components: {
    Map,
    Articles
  }
}
</script>

<style lang="scss" scoped>

</style>