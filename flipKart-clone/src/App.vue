<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBarVue from './views/NavBar.vue';
import CategorySection from './views/CategorySection.vue';
import Banner from './views/Banner.vue';
import FooterCon from './views/FooterCon.vue';
import FirstSection from './views/FirstSection.vue';
</script>

<template>
<div>
  <header class =NavBar><NavBarVue/></header>
  <section><CategorySection/></section>
  <section ><Banner/></section>
  <section><FirstSection/></section>
  <section><FirstSection/></section>
  <section><FirstSection/></section>
  <section><FirstSection/></section>
  <footer><FooterCon/></footer>
</div>

</template>

<style>
*{
     margin: 0%;
     padding: 0%;
     box-sizing: border-box;
     font-family: 'Roboto', sans-serif;
}
.navBar{
  position: fixed;
  top: 0;
}



</style>



      <!-- <nav>
         <RouterLink to="/">Home</RouterLink>
         <RouterLink to="/about">About</RouterLink>
       </nav>
       <RouterView />
        -->