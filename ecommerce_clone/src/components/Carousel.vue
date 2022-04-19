<template>
  <div id="demo" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ul class="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" class="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
      <li data-target="#demo" data-slide-to="2"></li>
    </ul>

    <!-- The slideshow -->
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="https://m.media-amazon.com/images/I/61Mke0IyEAL._SX3000_.jpg"
            alt="First slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="https://m.media-amazon.com/images/I/71rhY78MP2L._SX3000_.jpg"
            alt="Second slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="https://m.media-amazon.com/images/I/617CoD4euRL._SX3000_.jpg"
            alt="Third slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="https://m.media-amazon.com/images/I/617CoD4euRL._SX3000_.jpg"
            alt="Third slide"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
};
</script>

<style>
</style>