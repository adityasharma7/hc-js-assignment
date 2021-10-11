<template>
  <div class="carousel">
    <carousel-slide></carousel-slide>
  </div>

  <!-- <h1>LandingPage</h1> -->
</template>
<style scoped>
.carousel {
  z-index: -1000;
}
</style>
<script>
import CarouselSlide from "./CarouselSlide.vue";
export default {
  components: {
    CarouselSlide,
  },
};
</script>
