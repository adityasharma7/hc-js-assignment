<template>
  <div class="slider-container">
    <div class="img-content">
      <div class="slider">
        <a href="#"><img src="../assets/hero/hero_1.png" alt="Hero Image" /></a>
      </div>
      <div class="slider">
        <a href="#"><img src="../assets/hero/hero_3.png" alt="Hero Image" /></a>
      </div>
      <div class="slider">
        <a href="#"><img src="../assets/hero/hero_2.png" alt="Hero Image" /></a>
      </div>
      <button class="previous-btn" @click="slidePrevious">
        <i class="fa-solid fa-angle-left"></i>
      </button>
      <button class="next-btn" @click="slideNext">
        <i class="fa-solid fa-angle-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    slideNext(e) {
      const slides = document.querySelectorAll(".slider");
      this.count++;

      if (this.count === 3) {
        this.count = 0;
      }

      slides.forEach((slide) => {
        slide.style.display = "block";
        slide.style.transform = `translateX(-${this.count * 100}%)`;
      });
    },

    slidePrevious(e) {
      const slides = document.querySelectorAll(".slider");
      this.count--;

      if (this.count === -1) {
        this.count = 2;
      }

      slides.forEach((slide) => {
        slide.style.display = "block";
        slide.style.transform = `translateX(-${this.count * 100}%)`;
      });
    },
  },
  mounted() {
    setInterval(this.slideNext, 4000);
  },
};
</script>

<style scoped>
.img-content {
  position: relative;
  height: 20rem;
}

.slider {
  position: absolute;
  width: 100%;
  transition: transform 0.3s ease;
}

.slider:nth-child(1) {
  left: 0%;
}

.slider:nth-child(2) {
  display: none;
  left: 100%;
}

.slider:nth-child(3) {
  display: none;
  left: 200%;
}

.slider {
  transform: translateX(0%);
}

/* Btns */
.previous-btn {
  display: flex;
  justify-content: center;
  place-items: center;
  position: absolute;
  left: 30px;
  top: 35%;
  height: 100px;
  width: 10px;
  padding: 20px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #fff;
  font-size: 25px;
  text-align: center;
}

.next-btn {
  display: flex;
  justify-content: center;
  place-items: center;
  position: absolute;
  right: 30px;
  top: 35%;
  height: 100px;
  padding: 20px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #fff;
  font-size: 25px;
  font-weight: 600;
}

.right-btn i {
  right: 35px;
}

img {
  width: 100%;
  height: 20rem;
  padding: 10px 30px;
}

button {
  height: 30px;
  width: 10px;
}
</style>