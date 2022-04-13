<template>
  <div>
    <div class="items flex" v-for="item in Product" :key="item.id">
      <a href="#" class="items-card">
        <img :src="item.imgSrc" alt="Item Image" />
        <h3>{{ item.productName }}</h3>
        <p class="green">{{ item.pricing }}</p>
        <p class="grey">{{ item.description }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    Product: Array,
  },
};
</script>

<style scoped>
/* Items */
.items {
  width: 180px;
  font-size: 14px;
  text-align: center;
  padding: 20px;
}

.items-card {
  margin: 20px 0;
  height: 200px;
}

.items-card img:hover {
  transform: scale(1.03);
}

img {
  height: 160px;
  width: 155px;
  object-fit: contain;
}
</style>