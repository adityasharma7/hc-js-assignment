<template>
  <div>
    <Header />
    <router-link class="pdetail" to="/">Home</router-link>
    <span>/{{ details.category }}</span>
    <div class="details">
      <div>
        <img :src="details.image" alt="" />
      </div>
      <div>
        <h1>{{ details.title }}</h1>
        <p>{{ details.category }}</p>
        <div>{{ details.description }}</div>
        <div>
          <div class="red">
            <strong style="color: black">Price</strong>: Rs {{ details.price }}
          </div>
          <div class="green">
            <strong style="color: black">Rating</strong>{{ rating }}
          </div>
        </div>
        <div class="">
          <button>Buy Now</button>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
  name: "Productshow",
  props: {
    pid: String,
  },
  data() {
    return {
      details: [],
      id: "",
      rating: 0,
    };
  },
  methods: {
    async getDetails() {
      const res = await fetch(`https://fakestoreapi.com/products/${this.id}`);
      this.details = await res.json();

      this.rating = this.details.rating.rate;
    },
  },

  mounted() {
    this.id = this.$route.params.pid;
    this.getDetails();
  },
};
</script>
<style scoped>
.details {
  margin: 2% 5%;
}
img {
  height: 500px;
  width: 500px;
}
.pdetail {
  padding: 0% 5%;
}
button {
  background-color: #333;
  color: #fff;
  padding: 4px 30px;
  height: 38px;
  border: none;
  margin: 5px;
}
a {
  text-decoration: none;
  color: black;
}
strong {
  margin: 0px 5px;
}
.red {
  color: red;
}
.green {
  color: green;
}
</style>