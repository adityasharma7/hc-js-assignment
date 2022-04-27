<template>
  <div>
    <header />
    <span>{{ details.category }}</span>
    <div class="details">
      <div>
        <img :src="details.image" alt="" />
      </div>
      <div>
        <h1>{{ details.title }}</h1>
        <p>{{ details.category }}</p>
        <div>{{ details.description }}</div>
        <div>
          <div class="pink">
            <strong style="color: black">Price</strong>: Rs {{ details.price }}
          </div>
          <div class="blue">
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
  name: "Productdetail",
  props: {
    p_id: String,
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
    this.id = this.$route.params.p_id;
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
  background-color: rgb(27, 109, 27);
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
.pink {
  color: pink;
}
.blue {
  color: blue;
}
</style> 