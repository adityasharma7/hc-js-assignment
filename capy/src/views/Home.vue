<template>
  <div >
    <Navbar/>
    <Slider/>
    <Imagegrid/>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

      <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Slider from '@/components/Home/Slider.vue'
import Navbar from '@/components/Home/Navbar.vue'
import Footer from '@/components/Home/Footer.vue'
import Imagegrid from '@/components/Home/Image-grid.vue'





export default {
  name: 'Home',
  components: {
    Navbar,Slider,Imagegrid,Footer
  }
}
</script>
