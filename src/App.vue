<template>
  <div>
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "./layouts/NavBar.vue";
import Footer from "./layouts/Footer.vue";

export default {
  name: "App",
  components: { NavBar, Footer },
};
</script>