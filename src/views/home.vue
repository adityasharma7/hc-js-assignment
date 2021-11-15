<template>
  <div class="">
    <!-- Main Section -->
    <section class="banner">
      <div class="banner-body">
        <p class="welcome-slogan">Welcome to @niket's Store</p>
        <p class="mini-tagline">The best "Ecommerce" store online</p>
      </div>
    </section>

    <!-- Product Display Section -->
    <section>
      <!-- Section Title -->
      <div class="products-title">
        <h1>Latest products</h1>
      </div>

      <div class="main-display">
        <div class="sorter-filter">
          <!-- Sorter -->
          <div style="margin-bottom: 15px">
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
                <option value="price">Price Low to High</option>
                <option value="rating">Rating Low to High</option>
              </select>
            </div>
          </div>

          <!-- Filter -->
          <div class="filter">
            <Filter />
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
    </section>
  </div>
</template>


<script>
import axios from "axios";
import baseUrl from "@/utils/baseUrl";

import Filter from "@/components/Filter";
import ProductBox from "@/components/ProductBox";

export default {
  name: "Home",
  data() {
    return {
      sortBy: "Latest",
      latestProducts: [],
      productArray: [],
    };
  },
  components: {
    ProductBox,
    Filter,
  },
  watch: {
    latestProducts: function (newVal) {
      this.productArray = newVal;
    },
  },
  mounted() {
    this.getLatestProducts();
  },
  methods: {
    async getLatestProducts() {
      await axios
        .get(`${baseUrl}/products`)
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

<style scoped>
.banner-body {
  display: block;
  margin: 10px;
  height: 370px;
  border-radius: 10px;
  color: #ffffff;
  background-color: #4a4a4a;
}
.welcome-slogan {
  padding-top: 120px;
  font-size: 25px;
  font-weight: bold;
  padding-left: 35%;
}
.mini-tagline {
  font-size: 18px;
  padding-left: 37%;
}
.main-display {
  display: grid;
  grid-template-columns: auto auto;
}
.sorter-filter {
  grid-row-start: 1;
  padding: 15px;
}
.head {
  padding-bottom: 10px;
}
.sort-box {
  font-weight: 10px;
}
.products-title {
  margin: 30px 0px;
  margin-left: 35%;
}
.product-box {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  height: 100%;
}
</style>