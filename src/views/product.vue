<template>
  <!-- Product Page -->
  <div>
    <div class="upper-section">
      <!-- Product Image -->
      <div>
        <figure>
          <img class="image" v-bind:src="product.image" />
        </figure>
      </div>
      <!-- Product Price -->
      <div class="left-section">
        <p class="price">
          <strong>Price &nbsp; :- &nbsp; </strong>₹ &nbsp;{{ product.price }}
        </p>
        <!-- Add to Cart -->
        <div class="cart">
          <p><strong>Product Quantity &nbsp;:-</strong></p>
          <div class="input">
            <input type="number" v-model="quantity" />
          </div>

          <div class="button">
            <a @click="addToCart()">Add to cart</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Product Deatails -->
    <div>
      <!-- Product Title -->
      <div>
        <h1 class="product-title">{{ product.title }}</h1>
      </div>

      <!-- Product Description -->
      <div>
        <h3 class="product-description-title">Description &nbsp; :-</h3>
        <p class="product-description">{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import baseUrl from "@/utils/baseUrl";

export default {
  name: "Product",
  data() {
    return {
      product: {},
      quantity: 1,
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    async getProduct() {
      const product_slug = this.$route.params.product_slug;
      await axios
        .get(`${baseUrl}products/${product_slug}`)
        .then((response) => {
          this.product = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    addToCart() {
      if (isNaN(this.quantity) || this.quantity < 1) {
        this.quantity = 1;
      }
      const item = {
        product: this.product,
        quantity: this.quantity,
      };
      this.$store.commit("addToCart", item);
      this.$router.push({ path: "/cart" });
    },
  },
};
</script>

<style scoped>
.upper-section {
  display: flex;
}
.image {
  padding: 20px 20px;
  width: 100%;
}
.left-section {
  padding: 50px 100px;
}
.price {
  font-size: 18px;
}
.cart {
  margin-top: 50px;
}
.input {
  margin-top: 20px;
}
.button {
  cursor: pointer;
  color: #ffffff;
  padding: 10px 80px;
  margin-top: 20px;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  background-color: blue;
  border-radius: 5px;
}
.product-title {
  width: 75%;
  font-size: 25px;
  font-family: sans-serif;
  font-weight: bold;
  margin: 20px 10px;
}
.product-description-title {
  font-size: 20px;
  font-family: sans-serif;
  font-weight: bold;
  margin: 10px;
}
.product-description {
  width: 70%;
  font-size: 15px;
  font-family: sans-serif;
  font-weight: normal;
  margin: 10px;
}
</style>