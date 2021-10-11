<template>
<div class="body">
 <div class=carousel> 
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094; </a>
    <a class="next" @click="next" href="#">&#10095;</a>
  </div>


<div class="banner">
<div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body1">
        <h1 class="card-title">COCKTAIL PARTY</h1>
        <p class="card-text"> 
        Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.
      </p>
         <router-link class="desktop-link category btn btn-primary" :to="{ name: 'products', params: { category: 'women'}}"><h2>SHOP NOW</h2></router-link>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body2">
        <h1 class="card-title">LINEN DRESSES</h1>
        <p class="card-text">
        Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.
      </p>
<router-link class="desktop-link category btn btn-primary" :to="{ name: 'products', params: { category: 'men'}}"><h2>SHOP NOW</h2></router-link>      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body3">
        <h1 class="card-title">THE OFFICE LIFE</h1>
        <p class="card-text">T-SHIRTS</p>
<router-link class="desktop-link category btn btn-primary" :to="{ name: 'products', params: { category: 'electronics'}}"><h2>SHOP NOW</h2></router-link>      </div>
      <div class="card-body4">
        <h1 class="card-title">ECO SANDALS</h1>
        <p class="card-text">SUMMER SHOES</p>
<router-link class="desktop-link category btn btn-primary" :to="{ name: 'products', params: { category: 'bags'}}"><h2>SHOP NOW</h2></router-link>      </div>
    </div>
  </div>
</div>
</div>

<div class="photos">
  <div class="heading">
    <h1>Share Your Look</h1>
    <p>#YOURLOOK</p>
  </div>
<div class="photo">
 <div class="photo-item"> <img src="../assets/ig/webp/ig01.webp" style="height:400px; width:400px;"></div>
<div class="photo-item"><img src="../assets/ig/webp/ig02.webp" style="height:400px; width:400px;"></div>
<div class="photo-item"><img src="../assets/ig/webp/ig03.webp" style="height:400px; width:400px;"></div>
<div class="photo-item"> <img src="../assets/ig/webp/ig04.webp" style="height:400px; width:400px;"></div>
<div class="photo-item"><img src="../assets/ig/webp/ig05.webp" style="height:400px; width:400px;"></div>
<div class="photo-item"><img src="../assets/ig/webp/ig06.webp" style="height:400px; width:400px;"></div>
</div>
</div>

</div>

  

</template>


<script>
import image1 from '@/assets/1.jpeg';
import image2 from '@/assets/2.jpeg';
export default {
    name:'Home',
    data() {
    return {
      images: [
        image1,
       image2,
        
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>
<style scoped>
.carousel{
    padding-top:70px;
}


img {
  height:400px;
  width:1000px;
}

.prev, .next {
  
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: black;
  font-weight: bold;
  font-size: 18px;
  
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  
}

.next {
  right: 0;
}

.prev {
  left: 0;
}
.banner{
  padding: 100px 400px;
}
.card-body1{
  background-image: url("../assets/banner/webp/bannerF.webp");
  height:650px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-transform: uppercase;
}
.card-body2{
  background-image: url("../assets/banner/webp/bannerE.webp");
  height:650px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-transform: uppercase;
}
.card-body3{
  margin-bottom: 25px;
  background-image: url("../assets/banner/webp/bannerC.webp");
  height:300px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-transform: uppercase;
}
.card-body4{
  margin-top: 25px;
  background-image: url("../assets/banner/webp/bannerK.webp");
  height:300px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-transform: uppercase;
}
.card-title{
  text-align: left;
  padding: 20px ;
}
.card-text{
  text-align: left;
  padding: 50px;
}
.heading{
  padding-top: 200px;
}
.photo{
  
  display: grid;
  grid-gap: 40px 40px;
  grid-template-columns: auto auto auto;
  padding: 100px 300px;
}

</style>
