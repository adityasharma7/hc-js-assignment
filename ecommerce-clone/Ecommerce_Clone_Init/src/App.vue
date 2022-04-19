<template>
    <div class="container">
        <NavBar />
        <NavBarCat />
        <Home />
        <Footer class="footer" />
    </div>
</template>

<script>
import Home from "./components/Home.vue"
import NavBarCat from "./components/NavBarCat.vue"
import NavBar from "./components/NavBar.vue"
import Footer from "./components/Footer.vue"

export default {
    name: 'App',

    components: {
        NavBar,
        NavBarCat,
        Home,
        Footer,
    },
}

</script>

<style scoped>
    .footer {
        position: relative;
        bottom: 0;
    }
</style>
   
