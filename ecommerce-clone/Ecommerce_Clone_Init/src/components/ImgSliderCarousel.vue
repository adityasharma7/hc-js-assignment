<template>
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="img-wrap">
        <img
          class="d-block w-100"
          src="https://m.media-amazon.com/images/I/61zkn3Yf3vL._SX3000_.jpg"
          alt="First slide"
        />
        </div>
      </div>

      <div class="carousel-item">
        <div class="img-wrap">
        <img
          class="d-block w-100"
          src="https://m.media-amazon.com/images/I/61TYw9qVUqL._SX3000_.jpg"
          alt="Second slide"
        />
        </div>
      </div>

      <div class="carousel-item">
        <div class="img-wrap">
        <img
          class="d-block w-100"
          src="https://m.media-amazon.com/images/I/61S1vOPq9tL._SX3000_.jpg"
          alt="Third slide"
        />
        </div>
      </div>

      <div class="carousel-item">
        <div class="img-wrap">
        <img
          class="d-block w-100"
          src="https://m.media-amazon.com/images/I/51tz+FLdAhL._SX3000_.jpg"
          alt="Fourth slide"
        />
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleControls"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <!-- <span class="sr-only">Previous</span> -->
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleControls"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <!-- <span class="sr-only">Next</span> -->
    </a>
  </div>
</template>

<script>
export default {
  name: "ImgSliderCarousel",
};
</script>

<style scoped>

/* image fading bottom styling */
.carousel-item {
  /* margin: 0 auto;
  padding: 1em; */
  position: relative;
  /* max-width: 320px; */
  height: 400px;
  border: none;
  overflow: hidden;
}

.carousel-item .img-wrap:before {
  content: '';
  background-image: linear-gradient(to top, rgba(239,239,239,255), rgba(239,239,239,0));
  position: absolute;
  height: 100px;
  right: 0;
  bottom: 0;
  left: 0;
}

.carousel-item .img-wrap:after {
  content: '';
  display: block;
  height: 9999px;
}
.img-wrap img {
  width: auto;
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  border: 0;
  box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.2);
  -ms-interpolation-mode: bicubic;
}

/* image fading bottom styling ends */

#carouselExampleControls {
  position: relative;
}
</style>