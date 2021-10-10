<template>
   <Navbar />   

         <router-link to="/">Home</router-link> |
<router-link to="/about">About</router-link>
<hr>

    
  <router-view :key="$route.path"></router-view>
  <hr>
  <Footer />  
  <ScrollTopComponent>
      <i class="fa fa-arrow-circle-up" style="font-size:48px;color:black"></i>
  </ScrollTopComponent>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/footer.vue";
import ScrollTopComponent from "@/components/scroll.vue";

export default {
  name:"app",
  components:{
    Navbar,Footer,ScrollTopComponent
  },
  
}
</script>

<style scoped>
.verticalLine {
  border-left: solid black;
  margin-left:15%;
  
}
.btn {
    border-radius: 8px;
    background-color:red;
    padding-top: 27px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 5px;
}
</style>
