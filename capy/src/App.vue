<template>
  <div >
<!-- <Home/> -->
<Navbar/>
<Topbutton>
     <i class="fa fa-arrow-circle-up" style="font-size:48px;color:green"></i>
  </Topbutton>
  <router-view :key="$route.path"></router-view>
  <Footer/>

<!-- <router-link to="/">Home</router-link>  -->
  </div>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->
</template>

<script>
import Navbar from '@/components/Home/Navbar.vue'
import Topbutton from '@/components/Home/Topbutton.vue'
import Footer from '@/components/Home/Footer.vue'



// import Home from "@/views/Home.vue"
export default {
  components:{
    Navbar,Topbutton,Footer
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.btn {
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.55);
    padding-top: 27px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 5px;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
