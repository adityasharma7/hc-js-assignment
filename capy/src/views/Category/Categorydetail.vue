<template>
<div>
  <div class="container">
    <div class="image">
      <img :src="product.image" alt="" />
    </div>
    <div class="details">
      <h2>{{ product.title }}</h2>
      <h3>$ {{ product.price }}</h3>
      <!-- {{ $n(product.price, "currency") }} -->
      <p align="left">{{ product.description }}</p>
      <!-- <i18n-n :value="product.price" format="currency"></i18n-n> -->
      <!-- <p>{{ $n(product.price, "currency") }}</p> -->
    </div>
  
    
    </div>
    <div>
      <button @click="addToCart()" >Buy Now {{product.price}}</button></div>
    <span class="padding">
    <BannerSubscribe /></span>
    <BannerSubscribe />
    <Imagegrid/>
  </div>

</template>
<script>
import Imagegrid from '@/components/Home/Image-grid.vue'
import BannerSubscribe from '@/components/Home/BannerSubscribe.vue'


import axios from "axios";
export default {
  props: ["id"],
  components:{Imagegrid,BannerSubscribe },
  data() {
    return {
      product: {},
    };
  },methods: {
    addToCart(){
      this.$store.dispatch('addProductToCart',{
        product:this.product,
        quantity:1
      })
    }
  },
  mounted() {
    axios
      .get("https://fakestoreapi.com/products/" + this.id)
      .then((response) => {
        // console.log(response);
        // const products=[];
        this.product = response.data;
        console.log(this.product);
        console.log(this.product.price);
        //   console.log(response.data);
      });
  },
};
</script>
<style scoped>
.padding{
    margin:10px
}
.container {

  display: flex;
  flex-direction: row;
  align-items: center;
 
 
}

.details {
    border: 2px solid black;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;

}
img {
  height: 500px;
  width: 500px;
}
</style>