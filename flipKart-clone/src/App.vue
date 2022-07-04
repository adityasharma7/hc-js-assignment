<script >
// import { RouterLink, RouterView } from 'vue-router'
import NavBarVue from './views/NavBar.vue';
import CategorySection from './views/CategorySection.vue';
import Banner from './views/Banner.vue';
import FooterCon from './views/FooterCon.vue';
import FirstSection from './views/FirstSection.vue';


export default {
  name:"App",
  data() {
    return {

    }
  },
  async created() {
    await this.$store.dispatch('getfackApi')
    
  },
  components: {
    NavBarVue,
    CategorySection,
    Banner,
    FooterCon,
    FirstSection,
  
}
}
</script>

<template>

  <NavBarVue/>
<div>
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
</style>

