<template>
<div class="filter">
    <!-- <button class="b1" :class="highToLowClass" @click="highToLow">
      Price: High to Low
    </button>
    <button class="b2" :class="lowToHighClass" @click="lowToHigh">
      Price: Low to High
    </button> -->
</div>
</template>

<script>
import axios from "axios";
export default {
    name:'Category',
    props:['category'],
    data() {
        return {
            products:[]
        }
    },
    mounted() {
    axios.get("https://fakestoreapi.com/products").then((response) => {
    
      this.products = response.data.filter(
        (product) => product.category === this.category
      );
      console.log(this.products);
        console.log(response.data);
    });
  },watch: {
    $route(to, from) {
      if (to !== from) {
        axios.get("https://fakestoreapi.com/products").then((response) => {
          console.log(response);
          // const products=[];
          this.products = response.data.filter(
            (product) => product.category === this.category
          );
          this.lowToHighClass = "";
          this.highToLowClass = "";
          console.log(this.products);
        });
      }
    },
  },

}
</script>
<style>
</style>
