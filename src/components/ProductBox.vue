<template>
  <!-- Product Box -->
  <div class="box-container">
    <!-- Product Image -->
    <router-link
      :to="{ name: 'Product', params: { product_slug: product.id } }"
      :key="$route.path"
    >
      <center>
        <img :src="product.image" class="image" />
      </center>
    </router-link>
    <!-- Title -->
    <h3 class="title">{{ product.title }}</h3>
    <!-- Ratings -->
    <p class="rating"><strong>Ratings (★) :- &nbsp;</strong>{{ product.rating.rate }}</p>
    <!-- Price -->
    <p class="price"><strong>₹ &nbsp;</strong>{{ product.price }}</p>
  </div>
</template>

<script>
export default {
  name: "ProductBox",
  props: {
    product: Object,
  },
};
</script>
<style scoped>
.box-container {
  border-radius: 15px;
  margin: 10px;
  padding-top: 40px;
  box-shadow: 0 5px 10px 0 #888888;
}
.box-container:hover {
  box-shadow: 0 4px 8px 0 rgba(173, 170, 170, 0.3),
    0 16px 20px 0 rgba(92, 89, 89, 0.19);
}
.image {
  height: 240px;
  width: 180px;
  align-items: center;
}
.title {
  width: 100%;
  padding: 5px;
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 15px;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
}
.rating {
  font-weight: bold;
  width: 100%;
  text-align: center;
  color: rgba(75, 51, 51, 0.911);
}
.price {
  margin-bottom: 30px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  text-align: center;
  color: black;
}
</style>