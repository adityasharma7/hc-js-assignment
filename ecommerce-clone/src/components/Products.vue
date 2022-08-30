<template>
  <div>
    <ul v-if="categories" class="nav">
      <li v-for="category in categories" :key="category">
        <a @click="showCategoryProducts(category)">{{  category.toUpperCase()  }}</a>
      </li>
    </ul>

    <div style="text-align: center;">
      <label style="padding: 20px;" for="sort">Sort by:</label>
      <select style="padding: 4px 0" name="sort-categories" v-model="sortBy">
        <option value="price">Price</option>
        <option value="rating">Rating</option>
      </select>
      <button style="padding: 4px 5px; margin-left: 10px; background-color: #ffe11b; color: #333; border: none;"
        v-on:click="ascending = !ascending" class="sort-button">
        <span v-if="ascending">Showing Increasing</span>
        <span v-else>Showing Decreasing</span>
      </button>
    </div>

    <div v-if="products" class="container">
      <div v-for="product in filteredProducts" :key="product.id">
        <div class="card">
          <img class="image" :src="product.image" alt="Product Image" style="width:100px">
          <h4 style="font-weight: bold; font-size: 15px; width: 270px; height: 50px;">{{  product.title  }}</h4>
          <p style="font-size: 14px; color: orange;">{{ product.rating.rate }} <span
              style="font-size: 22px; color: #ffe11b;"> &#11088;</span> </p>
          <p class="price">${{  product.price  }}</p>
          <RouterLink class="details-button" :to="`/product/${product.id}`">Get details</RouterLink>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      ascending: true,
      sortBy: 'price',
      products: null,
      productsCopy: null,
      categories: null,
      category: 'all'
    }
  },
  computed: {
    filteredProducts() {
      let filteredProducts = this.productsCopy
      if (this.category != 'all') {
        filteredProducts = filteredProducts.filter(p => {
          return p.category == this.category
        })
      }

      filteredProducts = filteredProducts.sort((a, b) => {
        if (this.sortBy == 'price') {
          return a.price - b.price

        } else if (this.sortBy == 'rating') {
          return a.rating.rate - b.rating.rate
        }
      })

      if (!this.ascending) {
        filteredProducts.reverse()
      }


      return filteredProducts
    }
  },
  methods: {
    async showAllProducts() {
      try {
        const productsData = await axios.get('https://fakestoreapi.com/products');
        this.products = await productsData.data
        this.productsCopy = this.products
      } catch (error) {
        console.log(error);
      }
    },

    async getCategories() {
      try {
        const allCategories = await axios.get('https://fakestoreapi.com/products/categories')
        this.categories = await allCategories.data
        this.categories.unshift('all')
      } catch (error) {
        console.log(error);
      }
    },

    async showCategoryProducts(category) {
      this.category = category
    }
  },
  mounted() {
    this.getCategories();
    this.showAllProducts()
  }
}
</script>

<style scoped>
.container {
  border: 3px solid #fff;
  padding: 20px;
}

.image {
  width: 100px;
  height: 100px;
}

.card {
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);
  max-width: 350px;
  height: 350px;
  margin: 10px;
  text-align: center;
  font-family: arial;
  width: 50%;
  float: left;
  padding: 40px;
}

.price {
  color: #444;
  font-size: 18px;
}

.card a {
  border: none;
  border-radius: 12px;
  padding: 6px 60px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
}

.card a:hover {
  text-decoration: none;
  background-color: #2874f0;
  color: #ffe11b;
}

/* inside nav */
ul.nav {
  padding-left: 0px;
  background-color: #2874f0;
  text-align: center;
}

ul.nav>li {
  display: inline-block;
  padding: 10px 20px;
}

ul.nav>li>a {
  cursor: pointer;
  background: none;
  color: white;
  text-decoration: none;
}

ul.nav>li>a:hover {
  background: none;
  color: #ffe11b;
  text-decoration: none;
}
</style>