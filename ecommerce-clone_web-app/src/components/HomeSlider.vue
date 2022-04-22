<template>
  <div>
    <section class="fslider">
      <div class="slider">
        <ul class="slides">
          <li>
            <img src="../assets/images/fullslide1.webp" alt="cloth" />
            <div class="caption center-align white-text">
              <h3>Limited Period Offer</h3>
            </div>
          </li>
          <li>
            <img src="../assets/images/fullslide2.webp" alt="cloth" />
            <div class="caption center-align white-text">
              <h3>Limited Period Offer</h3>
            </div>
          </li>
          <li>
            <img src="../assets/images/fullslide3.webp" alt="cloth" />
            <div class="caption center-align white-text">
              <h3>Limited Period Offer</h3>
            </div>
          </li>
          <li>
            <img src="../assets/images/fullslide10.webp" alt="cloth" />
            <div class="caption center-align white-text">
              <h3>Limited Period Offer</h3>
            </div>
          </li>
          <li>
            <img src="../assets/images/fullslide12.jpg" alt="cloth" />
            <div class="caption center-align white-text">
              <h3>Limited Period Offer</h3>
            </div>
          </li>
          <li>
            <img src="../assets/images/slide8.jpg" alt="cloth" />
            <div class="caption center-align white-text">
              <h3>Limited Period Offer</h3>
            </div>
          </li>
          <li>
            <img src="../assets/images/slide5.jpg" alt="cloth" />
            <div class="caption center-align white-text">
              <h3>Limited Period Offer</h3>
            </div>
          </li>
          <li>
            <img src="../assets/images/fullslide4.webp" alt="cloth" />
            <div class="caption center-align white-text">
              <h3>Limited Period Offer</h3>
            </div>
          </li>
          <li>
            <img src="../assets/images/slide9.jpg" alt="cloth" />
            <div class="caption center-align white-text">
              <h3>Limited Period Offer</h3>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "HomeSlider",
  mounted(){
$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.carousel').carousel();
    $('.slider').slider({
        full_width: true
    })
})
  }
};
</script>
