<template>
  <div class="home">
   <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
   <Header/>
    <!-- <HelloWorld/> -->
    <Categories/>
    <Featuredproduct/>
    <BannerHero/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src

// import "bootstrap/dist/css/bootstrap.min.css";
// import HelloWorld from '@/components/HelloWorld'
//import App from '@/views/App.vue'
import BannerHero from '@/components/BannerHero'
import Categories from '@/components/Categories'
import Featuredproduct from '@/components/Featuredproduct'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
    //App,
    BannerHero,
    Categories,
    Featuredproduct,
    Header,
    Footer
  }
}
</script>
