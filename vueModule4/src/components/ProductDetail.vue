<template>
  <div v-if="productDetails" class="container">
    <div class="img-container">
      <img :src="productDetails.image" alt="img">
    </div>
    <div class="product-details">
      <span>
        <h1>{{ productDetails.title }}</h1></span>
     <h3>{{ productDetails.description }}</h3>
      <p class="pPrice" style="font-size:large">${{ productDetails.price }}</p>
      <i class="fa-solid fa-cart-shopping cart-icon"></i>	
      <button type="button" class="btn btn-danger">Add TO Cart</button>
      
    
                  
           
    </div>
  </div>

   
</template>
  




<script>
import axios from "axios";

export default {
  name: "ProductDetail",

  props: {
    id: String,
  },

  data() {
    return {
      productDetails: null,
    };
  },

  methods: {
    async getProduct() {
      try {
        const pData = await axios.get(
          `https://fakestoreapi.com/products/${this.id}`
        );
        this.productDetails = await pData.data;
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.getProduct();
  },
};
</script>

<style scoped>
    .container {
      display: flex;
    }
    
    img {
    }
    
    .img-container {
   height: min-content;
    }
    
    .product-details {
      width: 50%;
    }
    </style> 