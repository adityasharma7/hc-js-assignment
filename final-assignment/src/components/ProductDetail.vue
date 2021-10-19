<template>
  <div class="wrapper">
    <div class="image">
      <img :src="item.image" alt="" />
    </div>
    <div class="details">
      <h1>{{ item.title }}</h1>
      <h4>${{ item.price }}</h4>
      <p>{{ item.description }}</p>
      <div class="cartButton">
        <button @click="addProductToCart(product)">ADD TO CART</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  props: ["id"],
  mounted() {
    this.$store.dispatch("getProductById", this.id);

    console.log(this.item);
  },
  computed: mapState({
    item: (state) => state.item,
  }),
  methods: mapActions(["addProductToCart"]),
};
</script>
<style scoped>
.wrapper {
  display: flex;
  margin: 0px 50px;
}
.image {
  padding: 100px;
}
.image img {
  height: 400px;
  width: 400px;
}
.details {
  width: 50%;
  line-height: 25px;
  padding: 100px;
}
.details h1,
.details h4,
.details p {
  margin: 20px 0px;
}
.cartButton button {
  height: 50px;
  width: 300px;
  margin: 50px;
  border: none;
  background-color: #5ece7b;
  color: white;
  font-weight: 900;
}
.cartButton button:hover {
  box-shadow: 5px 5px 5px rgb(122, 119, 119);
}
</style>
