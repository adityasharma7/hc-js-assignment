<template>
<Home />
  <div id="app">
    
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>

  <!-- <router-view /> -->
</template>

<style>

</style>

<script>
import Home from './views/Home.vue'

export default {
  name:'app',
  components:{
    Home
  }
  
}
</script>

