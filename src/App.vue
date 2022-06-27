<template>
  <div>
   <button @click="tab='Login'">Login</button>
   <button @click="tab='SignUp'">SignUp</button>
   <component :is="tab"/>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'

export default {
  name: 'App',
  components: {
    Login,
    SignUp
    
  },
  data(){
    return{
      tab:'Login'
    }
  }
}
</script>

<style>

</style>
