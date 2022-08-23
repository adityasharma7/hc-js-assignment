<script >
import { RouterLink, RouterView } from 'vue-router'

import NavBar from '/home/kanchan/Learning/HotwaxTraining/hc-js-assignment/vueModule4/src/components/NavBar.vue'
import NavInner from '/home/kanchan/Learning/HotwaxTraining/hc-js-assignment/vueModule4/src/components/NavInner.vue'
import Footer from '/home/kanchan/Learning/HotwaxTraining/hc-js-assignment/vueModule4/src/components/Footer.vue'



 
 export default {
  name: "App",
  components: { NavBar ,NavInner , Footer},
 
  
};



</script>

<template>
  <header>
    
      <!-- <nav>
      <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> 
      </nav> -->

      <NavBar />
         <NavInner />
      <Footer />
 

  </header>

  <!-- <RouterView /> -->
</template>

