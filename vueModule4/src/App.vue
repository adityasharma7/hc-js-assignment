<script >
import { RouterLink, RouterView } from 'vue-router'

import NavBar from './components/NavBar.vue'
import NavInner from './components/NavInner.vue'
import ImageSlider from './components/ImageSlider.vue'
import Button from './components/Button.vue'
import  Category from './components/Category.vue'

// import Footer from './components/Footer.vue'



 
 export default {
  name: "App",
  components: { NavBar, NavInner, ImageSlider, Button,Category,  },
 
  
};



</script>

<template>
  <header>
       
      <NavBar />
         <NavInner />
       
          
          <ImageSlider /> 
        <!-- <Home /> -->
     <!-- <Category />  -->
       
      <!-- <Footer />  -->
 

  </header>

 <RouterView /> 
</template>

<style>
.footer{



}

</style>
