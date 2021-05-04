<template>
  <div class="card-container">
    <ClientOnly>
      <Slider />
      <Content />
    </ClientOnly>
  </div>
</template>

<script>
import Slider from "@/components/Card/Slider.vue";
import Content from "@/components/Card/Content.vue";

export default {
  metaInfo: {
    title: "Lekkeslaap Search Results Card Component",
  },
  components: {
    Slider,
    Content,
  },
};
</script>

<style lang="scss">
// card container

.card-container {
  padding-top: 60px;
}
</style>
