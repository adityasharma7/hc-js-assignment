<template>
  <div class="wrapper">
    <div class="categories">
      <div class="heading">
        <p>Categories</p>
      </div>
      <div class="women">
        <h5 @click="womenView">Women</h5>
        <ul v-show="women">
          <li>View all</li>
          <li>Top</li>
          <li>Bottom</li>
        </ul>
      </div>
      <div class="men">
        <h5 @click="menView">Men</h5>
        <ul v-show="men">
          <li>View all</li>
          <li>Top</li>
          <li>Bottom</li>
        </ul>
      </div>
      <div class="gear">
        <h5 @click="gearView">Gear</h5>
        <ul v-show="gear">
          <li>View all</li>
          <li>Bags</li>
          <li>Fitness Equipments</li>
          <li>Watches</li>
        </ul>
      </div>
      <div class="training">
        <h5 @click="trainingView">Training</h5>
        <ul v-show="training">
          <li>View all</li>
          <li>Video Download</li>
        </ul>
      </div>
    </div>

    <div class="product">
      <div
        v-for="product in products"
        @click="$router.push({ name: 'details', params: { id: product.id } })"
        :key="product.id"
        class="item"
      >
        <div class="item-container">
          <img :src="product.image" alt="" />
          <p>{{ product.title }}</p>
          <p>${{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
// import axios from "axios";
export default {
  props: ["category"],
  data() {
    return {
      women: false,
      men: false,
      gear: false,
      training: false,

      // allProducts: this.$store.state.products,
      // products: [],
    };
  },

  computed: mapState({
    products: (state) => state.all,
  }),
  mounted() {
    // axios.get("https://fakestoreapi.com/products").then((response) => {
    //   // console.log(response);
    //   // const products=[];
    //   this.products = response.data.filter(
    //     (product) => product.category === this.category
    //   );
    //   console.log(this.products);
    //   //   console.log(response.data);
    // });
    // this.$store.commit("getProducts");
    // this.products = this.$store.state.products.filter(
    //   (x) => x.category === this.category
    // );
    // console.log(this.products);
    this.$store.dispatch("getAllProducts", this.category);
    console.log(this.category);
  },
  updated() {
    this.$store.dispatch("getAllProducts", this.category);
  },
  watch: {
    $route(to, from) {
      if (to !== from) {
        // axios.get("https://fakestoreapi.com/products").then((response) => {
        //   this.products = response.data.filter(
        //     (x) => x.category === this.category
        //   );
        //   console.log(this.products);
        // });
        // this.$store.commit("getProducts");
        // this.products = this.$store.state.products.filter(
        //   (x) => x.category === this.category
        // );
        // console.log(this.products);
        // this.$store.dispatch("getAllProducts", this.category);
        // this.$store.dispatch("getAllProducts", this.category);
        console.log(this.category);
      }
    },
  },
  created() {},
  methods: {
    womenView() {
      if (this.women == true) {
        this.women = false;
      } else {
        this.women = true;
      }
    },
    menView() {
      if (this.men == true) {
        this.men = false;
      } else {
        this.men = true;
      }
    },
    gearView() {
      if (this.gear == true) {
        this.gear = false;
      } else {
        this.gear = true;
      }
    },
    trainingView() {
      if (this.training == true) {
        this.training = false;
      } else {
        this.training = true;
      }
    },
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  margin: 100px 50px;
}
.categories {
  width: 20%;
}
.product {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.item img {
  height: 250px;
  width: 180px;
}
.item {
  height: 450px;
  width: 260px;
  margin: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: auto; */
}
h5:hover {
  cursor: pointer;
}
.item-container {
  max-width: fit-content;
}
.item-container p {
  max-width: fit-content;
}

.item:hover {
  box-shadow: 0px 4px 35px rgba(46, 46, 47, 0.19);
}
.heading p {
  font-size: 30px;
}
ul {
  list-style-type: none;
  padding-left: 10px;
}
</style>
