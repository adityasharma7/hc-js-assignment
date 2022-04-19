<template>
  <div>
    <Nav />
    <Carousel />
    <Cards />
   <Button :filterCategories="filterCategories" />
   <div :posts="posts" class="all">
      <div v-for="post in posts" :key="post" class="cat">
        <!-- <h1>{{ post.category }}</h1> -->
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
    <CompanySection />
    <Para />
    <Footer />
  </template>


<script>
import Nav from "../components/Nav.vue";
import Button from "../components/Button.vue";
import Cards from "../components/Cards.vue";
import Carousel from "../components/Carousel.vue";
import CompanySection from "../components/CompanySection.vue";
import Para from "../components/Para.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Cards,
    Carousel,
    CompanySection,
    Para,
    Nav,
    Button,
    Footer,
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






