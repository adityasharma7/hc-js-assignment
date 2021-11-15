<template>
  <!-- Category wise Product Page -->
  <div>
    <!-- Category Deatails -->
    <div class="category-title">
      <strong> Category &nbsp; :-</strong>
      <strong>
        &nbsp; {{ this.$route.params.category_slug.toUpperCase() }}
      </strong>
    </div>

    <!-- Sorter -->
    <div class="sort-box">
      <div class="head">
        <strong class="sorting-heading">Sort Products &nbsp; :-</strong>
      </div>
      <div class="sort-box">
        <select @click="sortProducts()" required v-model="sortBy">
          <option>Latest</option>
          <option value="lessThen50">Price &lt;= 50</option>
          <option value="greaterThen50andlessThen100">
            Price &#62;= 50 && Price &lt;= 100
          </option>
          <option value="greaterThen100">Price &#62;= 100</option>
          <option>Latest</option>
          <option value="price">Sort by price</option>
          <option value="rating">sort by rating</option>
        </select>
      </div>
    </div>
    <!-- Products -->
    <div class="product-box">
      <ProductBox
        v-for="product in productArray"
        v-bind:key="product.id"
        v-bind:product="product"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import baseUrl from "@/utils/baseUrl";
import ProductBox from "@/components/ProductBox";

export default {
  name: "Category",
  components: {
    ProductBox,
  },
  data() {
    return {
      sortBy: "Latest",
      latestProducts: [],
      productArray: [],
    };
  },
  mounted() {
    this.getCategory();
  },
  watch: {
    $route(to, from) {
      from;
      if (to.name === "Category") {
        this.getCategory();
      }
    },
    latestProducts: function (newVal) {
      this.productArray = newVal;
    },
  },
  methods: {
    async getCategory() {
      const categorySlug = this.$route.params.category_slug;
      await axios
        .get(`${baseUrl}products/category/${categorySlug}/`)
        .then((response) => {
          this.latestProducts = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    sortProducts() {
      if (this.sortBy == "price") {
        this.latestProducts.sort((productA, productB) => {
          return productA.price - productB.price;
        });
      } else if (this.sortBy == "rating") {
        this.latestProducts.sort((productA, productB) => {
          return productA.rating.rate - productB.rating.rate;
        });
      } else if (this.sortBy == "lessThen50") {
        this.productArray = this.latestProducts.filter(
          (product) => product.price <= 50
        );
      } else if (this.sortBy == "greaterThen50andlessThen100") {
        this.productArray = this.latestProducts.filter(
          (product) => product.price >= 50 && product.price <= 100
        );
      } else if (this.sortBy == "greaterThen100") {
        this.productArray = this.latestProducts.filter(
          (product) => product.price >= 100
        );
      } else {
        this.productArray = this.latestProducts;
      }
    },
  },
};
</script>

<style>
.category-title {
  margin: 20px 30px;
}
.sort-box {
  margin-left: 30px;
  margin-bottom: 20px;
  display: flex;
}
.product-box {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  height: 100%;
}
</style>