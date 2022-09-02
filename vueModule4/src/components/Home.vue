<template>
  <div>
    <ImgSlider class="space" />
    <div style="text-align: center">
      <label style="padding: 20px" for="sort">Sort by:</label>
      <select style="padding: 4px 0" name="sort-categories" v-model="sortBy">
        <option value="price">Price</option>
        <option value="rating">Rating</option>
      </select>
      <button v-on:click="ascending = !ascending" class="sort-button">
        <span v-if="ascending">High to Low</span>
        <span v-else>Low to High</span>
      </button>
    </div>

    <h2 style="text-align: center; color: black">Amazing deals</h2>

    <div class="container">
      <div class="cat"> 
        <Button :updateCategory="updateCategory" />
       
        <div class="row">
          <div
            class="card col-md-3 col-6 my-1 align"
            v-for="post of filteredProducts"
            v-bind:key="post.id"
          >
            <img class="card-img-top" :src="post.image" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">{{ post.title }}</h5>
              <p class="card-text">{{ post.description }}</p>
              <p class="priceofproduct">₹{{ post.price }}</p>
              <h6>Rating :{{ post.rating.rate }}</h6>
              <!-- <a @click=" productDetails(post.id)"  class="btn btn-primary">Shop-now</a> -->
              <RouterLink :to="`/ProductDetail/${post.id}`"> Shop Now </RouterLink>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
import Button from "./Button.vue";

export default {
  components: { Button },

  name: "Home",
  data() {
    return {
      posts: [],
      allCategories: [],
      sortBy: 'price',
      ascending: true,
      category: 'all',
      productId: null
    };
  },
  computed: {
    filteredProducts() {
      let filteredProducts = this.allCategories;
      if (this.category != "all") {
        filteredProducts = filteredProducts.filter((products) => {
          return products.category == this.category;
        });
      }

      filteredProducts = filteredProducts.sort((a, b) => {
        if (this.sortBy == "price") {
          return a.price - b.price;
        } else if (this.sortBy == "rating") {
          return a.rating.rate - b.rating.rate;
        }
      });

      if (!this.ascending) {
        filteredProducts.reverse();
      }

      console.log(filteredProducts );
      return filteredProducts;  
    },
  },

  

  methods: {
    async getData() {
      try {
        let response = await fetch("https://fakestoreapi.com/products");
        this.posts = await response.json();
        this.allCategories = this.posts;
      } catch (error) {
        console.log(error);
      }
    },
    updateCategory(categoryName) {
      this.category = categoryName
    },

   },
 

  created() {
    this.getData();
  },
};
</script>

<style scoped>
#home-parent {
  width: 100% !important;
}
.space {
  margin-bottom: 20px;
  width: 100% !important;
}

img {
  height: 200px;
  width: 100px;
}
.card-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cat {
  display: flex;
  flex-direction: column;
}
.sort-button {
  padding: 4px 5px;
  margin-left: 10px;
  background-color: #131105;
  color: bisque;
  border: none;
}
</style> 