<template>
 
  <Navbar />
   <HomePage />
   <Footer />
</template>

<script>
import HomePage from './components/HomePage.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
// import PhotoSlider from './components/PhotoSlider.vue'


export default {
  name: 'App',
  components: {
    HomePage,
    Navbar,
    // PhotoSlider,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 10px;
  width: 95vw;
  margin-left: auto;
  margin-right: auto;
}
</style>
