<template>
  <h3 style="text-align:center"><RouterLink to="/"> Go To Home Page </RouterLink></h3>

  <div v-if="productDetails" class="container">
    <div class="img-container">
      <img :src="productDetails.image" alt="img" />
    </div>
    <div class="product-details">
      <span>
        <h1>{{ productDetails.title }}</h1></span
      >
      <h3>{{ productDetails.description }}</h3>
      <p class="price" style="font-size: large">${{ productDetails.price }}</p>

      <button type="button" class="btn btn-danger">Add TO Cart</button>
    </div>
  </div>
</template>
  




<script>
import axios from "axios";
import { setupCache } from "axios-cache-adapter";

const cache = setupCache({
  maxAge: 30 * 60 * 1000,
});
const api = axios.create({
  adapter: cache.adapter,
});

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
        const pData = await api.get(
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  /* margin: auto; */
  /* border: 1px solid #ddd; */
  /* border-radius: 4px; */
  /* padding: 5px; */
  width: 300px;
  background-color: red;
}

.product-details {
  width: 50%;
}
</style> 