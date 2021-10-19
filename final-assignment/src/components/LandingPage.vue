<template>
  <div class="carousel">
    <carousel-slide></carousel-slide>
  </div>
  <div class="image">
    <div class="bannerF">
      <div class="ban-textF">
        <p>DRESSES</p>
        <h1>COCKTAIL PARTY</h1>
        <p>
          Find stunning women's cocktail dresses and party dresses. Stand out in
          lace and metallic cocktail dresses from all yourfavourite brands.
        </p>
        <div>
          <p>SHOP NOW</p>
        </div>
      </div>

      <img src="../assets/bannerF.png" alt="" />
    </div>
    <div class="bannerE">
      <div class="ban-textE">
        <p>DRESSES</p>
        <h1>LINEN DRESSES</h1>
        <p>
          Find stunning women's cocktail dresses and party dresses. Stand out in
          lace and metallic cocktail dresses from all yourfavourite brands.
        </p>
        <div>
          <p>SHOP NOW</p>
        </div>
      </div>
      <img src="../assets/bannerE.png" alt="" />
    </div>
    <div class="ban">
      <div class="bannerG">
        <div class="ban-textE">
          <p>T-SHIRTS</p>
          <h1>THE OFFICE LIFE</h1>
        </div>
        <img src="../assets/bannerG.png" alt="" />
      </div>
      <div class="bannerG">
        <div class="ban-textE">
          <p>SUMMER SHOES</p>
          <h1>ECO SANDALS</h1>
        </div>
        <img src="../assets/bannerG.png" alt="" />
      </div>
    </div>
  </div>

  <div class="looks">
    <div class="looks-text">
      <h1>SHARE YOUR LOOKS</h1>
      <p>#YOURLOOK</p>
    </div>

    <div class="row">
      <img src="../assets/ig01.jpg" alt="" />
      <img src="../assets/ig02.jpg" alt="" />
      <img src="../assets/ig03.jpg" alt="" />
    </div>
    <div class="row">
      <img src="../assets/ig04.jpg" alt="" />
      <img src="../assets/ig05.jpg" alt="" />
      <img src="../assets/ig06.jpg" alt="" />
    </div>
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
<style scoped>
.image {
  margin: 50px;
  display: flex;
  justify-content: space-between;
}
.ban {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.ban-textF {
  position: absolute;
  width: 20%;
  padding: 40px;
}
.ban-textE {
  position: absolute;
  width: 26%;
  padding: 40px;
}
/* .ban-text p {
  margin: 10px 0px;
} */
.ban-textF h1,
.ban-textE h1 {
  margin: 10px 0px;
}
.ban-textF div,
.ban-textE div {
  height: 50px;
  width: 170px;
  background-color: black;

  color: white;
  font-weight: 800;
  padding: 10px;
  font-size: 20px;
}
.ban-textF div p,
.ban-textE div p {
  margin: auto;
  max-width: fit-content;
}
.row img {
  height: 385px;
  width: 385px;
}
.row {
  display: flex;
  justify-content: space-between;
  margin: 50px 0px;
}
.looks {
  margin: 100px 50px;
}
/* .looks h1 {
  margin: 160px auto;
  max-width: fit-content;
}
.looks p {
  max-width: fit-content;
  margin: 30px auto;
} */
.looks-text {
  max-width: fit-content;
  text-align: center;
  margin: 160px auto;
}
.looks-text p {
  color: gray;
}
</style>
