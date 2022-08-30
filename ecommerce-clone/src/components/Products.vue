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
          <p style="font-size: 14px; color: orange;">{{product.rating.rate}} <span style="font-size: 22px; color: #ffe11b;"> &#11088;</span> </p>	
          <p class="price">${{  product.price  }}</p>
          <button class="details-button">Get details</button>
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

.card button {
  border: none;
  border-radius: 12px;
  padding: 6px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  background-color: #2874f0;
  color: #ffe11b;
}

/*Sidenav*/
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #fff;
  overflow-x: hidden;
  transition: 0.5s;
  box-shadow: 0 4px 8px -3px #555454;
  padding-top: 0px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  color: #fff;
}

@media screen and (max-height: 450px) {
  .sidenav a {
    font-size: 18px;
  }
}

.sidenav-heading {
  font-size: 36px;
  color: #fff;
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