<script>
import NavBar from './components/NavBar.vue';
import ImgSliderCarousel from './components/ImgSliderCarousel.vue'
import NavBarCat from './components/NavBarCat.vue';
import ItemsCard from './components/ItemsCard.vue';
import ItemsList from './components/ItemsList.vue';
import Footer from './components/Footer.vue';

export default {
    name: 'App',

    components: {
      NavBar,
      NavBarCat,
      ImgSliderCarousel,
      ItemsCard,
      ItemsList,
      Footer,
    }
}

</script>

<template>
    <div id="home-parent">
      <NavBar />
      <NavBarCat />
      <ImgSliderCarousel />
      <ItemsCard />
      <ItemsList />
      <Footer />
    </div>
</template>

<style scoped>
  #home-parent {
    display: flex;
    flex-direction: column;
    background: #d3d3d3;
    /* text-align: center; */
  }
</style>
   
