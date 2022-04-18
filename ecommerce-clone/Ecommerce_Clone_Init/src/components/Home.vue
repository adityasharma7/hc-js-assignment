<script>
import ImgSliderCarousel from "./ImgSliderCarousel.vue";
import Button from "./Button.vue";

export default {
  name: "Home",

  components: {
    ImgSliderCarousel,
    Button,
  },

  data() {
    return {
      posts: [],
      allCategories: [],
    };
  },

  methods: {
    async getData() {
      try {
        let response = await fetch("https://fakestoreapi.com/products");
        this.posts = await response.json();
        this.allCategories = this.posts;
      } catch (error) {
        alert(error);
      }
    },

    filterCategories(categoryName) {
      this.posts = this.allCategories;

      if (categoryName !== "all") {
        this.posts = this.posts.filter((post) => {
          return post.category === categoryName;
        });
      }
    },
  },

  created() {
    this.getData();
  },
};
</script>

<template>
  <div id="home-parent">

    <ImgSliderCarousel class="space" />

    <div class="cat-btns-grp">
      <Button :filterCategories="filterCategories" />
    </div>

    <div :posts="posts" class="all">
      <div v-for="post in posts" :key="post" class="cat">
        <h1>{{ post.category }}</h1>
        <div class="row">
          <div class="card col-md-3 col-6 my-1 align">
            <img class="card-img-top" :src="post.image" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">{{ post.title }}</h5>
              <p class="card-text">{{ post.description }}</p>
              <a href="#" class="btn btn-primary">Buy-now</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

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

/* Category Buttons Style Starts */
.cat-btns-grp {
  display: flex;
  justify-content: space-evenly;
  margin: 10px;
}

/* Category Buttons Style Ends */
</style>