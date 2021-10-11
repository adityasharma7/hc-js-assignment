<template>
 
  <Navbar />
   <!-- <HomePage /> -->
   <router-view :key="$route.path"></router-view>
   <Footer />
   <!-- <Modal /> -->

</template>

<script>
// import HomePage from './components/HomePage.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
// import PhotoSlider from './components/PhotoSlider.vue'
// import Modal from './components/Modal.vue'


export default {
  name: 'App',
  components: {
    // HomePage,
    Navbar,
    // PhotoSlider,
    Footer,
    // Modal
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 10px;
  width: 93vw;
  margin-left: auto;
  margin-right: auto;
}
</style>
