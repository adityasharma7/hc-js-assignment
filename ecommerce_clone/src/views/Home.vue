<template>
<div>

<Nav />
<Carousel/>
<Cards/>
<Categories />
<CompanySection/>
<Para/>
<Footer/>
</div>
  </template>

<script>
import Nav from "../components/Nav.vue"
import Categories from '../components/Categories.vue'
import Cards from"../components/Cards.vue"
import Carousel from "../components/Carousel.vue"
import CompanySection from "../components/CompanySection.vue"
import Para from "../components/Para.vue"
import Footer from "../components/Footer.vue"

export default {
  name: "Home",
  components:{
Cards,
Carousel,
CompanySection,
Para,Nav,Categories,
Footer
  }
}

</script>






