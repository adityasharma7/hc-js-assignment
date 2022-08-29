<template>
  <div id="home-parent">
    <ImgSlider class="space" />
    <h2 style="text-align: center; color: black">Amazing deals</h2>

    <div class="container">
      <div class="cat">
        <Button :updateCategory="updateCategory" />
        <div class="row">
          <div
            class="card col-md-3 col-6 my-1 align"
            v-for="post of posts"
            v-bind:key="post.id"
          >
             <img class="card-img-top" :src="post.image" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">{{ post.title }}</h5>
              <p class="card-text">{{ post.description }}</p>
              <p class="priceofproduct">₹{{ post.price }}</p>
              <h6>Rating :{{ post.rating.rate }}</h6>
              <a href="#" class="btn btn-primary">Shop-now</a> 
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
      currentCategory: ''
    };
  },
  methods: {
    goToHome(categoryName) {
      // alert(categoryName)
      this.$router.push("/category");
      this.$router.push({
        name: "category",
        params: { category_name: categoryName },
      });
    },
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
      console.log(this.posts)
      this.posts = this.allCategories
      if (categoryName !== "all") {
        this.posts = this.posts.filter((post) => post.category === categoryName);
      }
      console.log(this.posts);
    }
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
</style> 