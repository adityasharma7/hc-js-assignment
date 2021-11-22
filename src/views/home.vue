<template>
  <div class="">
    <!-- Main Section -->
    <section class="banner">
      <div class="banner-body">
        <p class="welcome-slogan">
          {{ $t("welcomeMsg") }}
        </p>
        <p class="mini-tagline">{{ $t("storeDesc") }}</p>
      </div>
    </section>

    <!-- Product Display Section -->
    <section>
      <!-- Section Title -->
      <div class="products-title">
        <h1>{{ $t("latestProducts") }}</h1>
      </div>

      <div class="main-display">
        <div class="sorter-filter">
          <!-- Sorter -->
          <div style="margin-bottom: 15px">
            <div class="head">
              <strong class="sorting-heading">
                {{ $t("sortProducts") }} &nbsp; :-
              </strong>
            </div>
            <div class="sort-box">
              <select
                @click="sortProducts(productArray)"
                required
                v-model="sortBy"
              >
                <option>{{ $t("Latest") }}</option>
                <option value="lessThen50">{{ $t("Price") }} &lt;= 50</option>
                <option value="greaterThen50andlessThen100">
                  {{ $t("Price") }} &#62;= 50 && {{ $t("Price") }} &lt;= 100
                </option>
                <option value="greaterThen100">
                  {{ $t("Price") }} &#62;= 100
                </option>
                <option value="price">{{ $t("Price Low to High") }}</option>
                <option value="rating">{{ $t("Rating Low to High") }}</option>
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
  mounted() {
    this.getLatestProducts();
  },
  methods: {
    async getLatestProducts() {
      await axios
        .get(`${process.env.VUE_APP_API}/products`)
        .then((response) => {
          this.productArray = this.sortProducts(response.data);
        });
    },
    sortProducts(latestProducts) {
      if (this.sortBy == "price") {
        return latestProducts.sort((productA, productB) => {
          return productA.price - productB.price;
        });
      } else if (this.sortBy == "rating") {
        return latestProducts.sort((productA, productB) => {
          return productA.rating.rate - productB.rating.rate;
        });
      } else if (this.sortBy == "lessThen50") {
        return latestProducts.filter((product) => product.price <= 50);
      } else if (this.sortBy == "greaterThen50andlessThen100") {
        return latestProducts.filter(
          (product) => product.price >= 50 && product.price <= 100
        );
      } else if (this.sortBy == "greaterThen100") {
        return latestProducts.filter((product) => product.price >= 100);
      }
      return latestProducts;
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