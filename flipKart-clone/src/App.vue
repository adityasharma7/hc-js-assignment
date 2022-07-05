<script >
import { RouterLink, RouterView } from 'vue-router'
import NavBarVue from './views/NavBar.vue';
import CategorySection from './views/CategorySection.vue';
import FooterCon from './views/FooterCon.vue';
import HomePage from './views/HomePage.vue';



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
    FooterCon,
    HomePage
}
}
</script>

<template>
<div>
  <NavBarVue/>
  <section><CategorySection/></section>
<div>
<router-view/>
</div>
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

