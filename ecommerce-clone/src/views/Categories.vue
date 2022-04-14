<template>
  <section>
    <Header />
    <FilterAPIProducts @Filter_Products='updateData($event)' :category='categories' />
    <ProductsAPI :productData="API_Products" :categories="categories" />
    <Footer />
  </section>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import ProductsAPI from "../components/ProductsAPI.vue";
import FilterAPIProducts from "../components/FilterAPIProducts.vue"

export default {
  name: "Categories",
  components: {
    Header,
    FilterAPIProducts,
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

    // Default Values for Categories
    async getCategories() {
      const response = await fetch("https://fakestoreapi.com/products/categories");
      const result = await response.json();
      this.categories = result;

      return result
    },

    // Updates Data After Filteration -
    updateData(updateAPI_Products) {
        this.categories = []
        updateAPI_Products[1].map(category => this.categories.push(category))

        this.API_Products = updateAPI_Products[0]
    },
  },
  created() {
    this.getProductsAPI();
    this.getCategories();
  },
};
</script>

