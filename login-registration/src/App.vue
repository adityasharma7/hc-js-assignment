<template>
    <div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">My-Application</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link to="/Login" class="nav-link">Login<span class="sr-only"></span></router-link>
        </li>
      <li class="nav-item">
        <router-link to="/Registraion" class="nav-link">Sign-up<span class="sr-only"></span></router-link>
      </li>
     </ul>
  </div>
</nav>

  <!-- <router-view/> -->
  </div>

</template>

<script>



import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'
    export default {
        name: 'ClientHeader',
        mounted() {
          
            const cache = setupCache({
                maxAge: 15 * 60 * 1000
            })
            
            const api = axios.create({
                adapter: cache.adapter
            })
        
            api({
                url: 'https://fakestoreapi.com/products',
                method: 'get'
            }).then(async (response) => {
          
                console.log('Request response:', response)
            
                const length = await cache.store.length()
                console.log('Cache store length:', length)
            })
        }, 
        methods: {
            something(e){
                e.preventDefault()
            }
        }, 
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
