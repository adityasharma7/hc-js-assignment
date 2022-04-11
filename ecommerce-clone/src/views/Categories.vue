<template>
  <section>
    <Header />
    <ProductsAPI :productData="API_Products" :categories="categories" />
    <Footer />
  </section>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import ProductsAPI from "../components/ProductsAPI.vue";

export default {
  name: "Categories",
  components: {
    Header,
    ProductsAPI,
    Footer,
  },
  data() {
    return {
      API_Products: [],
      categories: [],
    };
  },
  methods: {
    async getProductsAPI() {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();

      this.API_Products = result;
    },

    async getCategories() {
      const response = await fetch("https://fakestoreapi.com/products/categories");
      const result = await response.json();
      this.categories = result;
    },
  },
  created() {
    this.getProductsAPI();
    this.getCategories();
  },
};
</script>

