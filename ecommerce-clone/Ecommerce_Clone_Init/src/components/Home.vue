<script>
import ImgSliderCarousel from './ImgSliderCarousel.vue'
import ItemsCard from './ItemsCard.vue';
import ItemsList from './ItemsList.vue';

export default {
    name: 'Home',

    components: {
      ImgSliderCarousel,
      ItemsCard,
      ItemsList,
    },

    data() {
      return {
        posts: [],
        mens: [],
        womens: [],
        electronics: [],
        jwelerys: [],
      };
    },

    methods: {
      async getData() {
        try {
          let response = await fetch("https://fakestoreapi.com/products");
          this.posts = await response.json();

          this.mens = this.posts.filter(
            (post) => post.category === "men's clothing"
          );

          this.womens = this.posts.filter(
            (post) => post.category === "women's clothing"
          );

          this.electronics = this.posts.filter(
            (post) => post.category === "electronics"
          );

          this.jwelerys = this.posts.filter(
            (post) => post.category === "jewelery"
          );

          console.log(this.electronics);
        } catch (error) {
          console.log(error);
        }
      },
    },

    created() {
      this.getData();
    },
}
</script>

<template>
  <div id="home-parent">
    <ImgSliderCarousel class="space" />
    <!-- <ItemsCard class="space" />
    <ItemsList class="space" /> -->

    <div class="container">
    <div class="cat">
      <h1>Mens clothing</h1>
      <div class="row">
        <div
          class="card col-md-3 col-6 my-1 align"
          v-for="men of mens"
          v-bind:key="men.id"
        >
          <img class="card-img-top" :src="men.image" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{{ men.title }}</h5>
            <p class="card-text">{{ men.description }}</p>
            <a href="#" class="btn btn-primary">Buy-now</a>
          </div>
        </div>
      </div>
    </div>

    <div class="cat">
      <h1>Womens clothing</h1>
      <div class="row">
        <div
          class="card col-md-3 col-6 my-1 align"
          v-for="women of womens"
          v-bind:key="women.id"
        >
          <img class="card-img-top" :src="women.image" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{{ women.title }}</h5>
            <p class="card-text">{{ women.description }}</p>
            <a href="#" class="btn btn-primary">Buy-now</a>
          </div>
        </div>
      </div>
    </div>

    <div class="cat">
      <h1>Electronics</h1>
      <div class="row">
        <div
          class="card col-md-3 col-6 my-1 align"
          v-for="elec of electronics"
          v-bind:key="elec.id"
        >
          <img class="card-img-top" :src="elec.image" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{{ elec.title }}</h5>
            <p class="card-text">{{ elec.description }}</p>
            <a href="#" class="btn btn-primary">Buy-now</a>
          </div>
        </div>
      </div>
    </div>

    <div class="cat">
      <h1>Jewellery</h1>
      <div class="row">
        <div
          class="card col-md-3 col-6 my-1 align"
          v-for="jew of jwelerys"
          v-bind:key="jew.id"
        >
          <img class="card-img-top" :src="jew.image" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{{ jew.title }}</h5>
            <p class="card-text">{{ jew.description }}</p>
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

/* .align{
  width: 18rem;
  height:100px;
} */
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