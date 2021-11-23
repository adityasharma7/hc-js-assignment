<template>
  <!-- Category wise Product Page -->
  <div>
    <!-- Category Deatails -->
    <div class="category-title">
      <strong> {{ $t("Category") }} &nbsp; :-</strong>
      <strong>
        &nbsp; {{ this.$route.params.category_slug.toUpperCase() }}
      </strong>
    </div>

    <!-- Sorter -->
    <div class="sort-box">
      <div class="head">
        <strong class="sorting-heading">
          {{ $t("Sort Products") }} &nbsp; :-
        </strong>
      </div>
      <div class="sort-box">
        <select @click="sortProducts(productArray)" required v-model="sortBy">
          <option>{{ $t("Latest") }}</option>
          <option value="lessThen50">{{ $t("Price") }} &lt;= 50</option>
          <option value="greaterThen50andlessThen100">
            {{ $t("Price") }} &#62;= 50 && {{ $t("Price") }} &lt;= 100
          </option>
          <option value="greaterThen100">{{ $t("Price") }} &#62;= 100</option>
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
  },
  methods: {
    async getCategory() {
      const categorySlug = this.$route.params.category_slug;
      await axios
        .get(`${process.env.VUE_APP_API}products/category/${categorySlug}/`)
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