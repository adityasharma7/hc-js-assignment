<template>
  <div class="container">
      <h1>{{ $t('home') }}</h1>
      <div class="container mb-4 mt-4">
      <div class="row">
        <div class="col-9"></div>
        <div class="col-3">
          <select class="custom-select" v-model="lang" @change="handleChange($event)">
            <option value="en">English</option>
            <option value="de">Deutsch</option>
            <option value="ar">عربى</option>
          </select>
        </div>
      </div>
    </div>

    <div class="show-products" v-for="product in products" :key="product">
        <div class="product-image">
          <img :src="product.image" alt="">
        </div>
        <div class="product-details">
          <h1>{{product.title}}</h1>
          <p>{{product.description}}</p>
        </div>
        
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',

  data() {
    const lang = localStorage.getItem('lang' || 'en');

    return {
      lang: lang,
      products: []
    }
  },

  methods: {
     handleChange(event) {
      localStorage.setItem('lang', event.target.value);
      window.location.reload();
    }
  },

  mounted() {
    axios.get(
        "https://fakestoreapi.com/products"
      ).then((response) => this.products = response.data)
      .catch((err) => console.log(err.response));
  }

}
</script>

<style scoped>

.show-products {
  display: flex;
}
  .product-image {
    width: 50%;
    height: 100px  !important;
    width: 100px !important;
  }

  img {
    width: 50%;
    height: 100px  !important;
    width: 100px !important;
  }

  .product-details {
    display: flex;
    flex-direction: column;
  }
</style>