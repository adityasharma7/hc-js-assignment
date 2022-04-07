<template>
  <div>
    <Header />
    <Registration />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import Registration from "../components/Registration.vue"
import Footer from "../components/Footer.vue"

  export default {
    name: 'Registration_page',
    components: {
        Header,
        Registration,
        Footer,
    }
}
</script>