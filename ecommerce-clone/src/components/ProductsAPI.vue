<template>
  <section>
    <!-- Products Container -->
    <div class="container" v-for="category in categories" :key="category">
      <div class="head flex">
        <div class="flex">
          <h3>{{ category }}</h3>
        </div>
        <div>
          <button class="primary-btn">View All</button>
        </div>
      </div>
      <!-- Product Item -->
      <div class="flex">
            <div v-for="product in productData" :key="product.id">
                <div class="items flex" v-if="category === product.category" >
                    <div @click="sendProductDetails(product.id)">
                        <a href="#" class="items-card">
                            <img :src="product.image" alt="Item Image" />
                            <h3>{{product.title}}</h3>
                            <p class="green">${{product.price}}</p>
                            <p class="grey">Product Description</p>
                        </a>
                    </div>
                </div>
            </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductAPI",
  props: {
    productData: Array,
    categories: Array,
  },
  methods: {
    sendProductDetails(productId) {
      
      this.$router.push({
        name: 'ProductDetailsView',
        params: {productId},
      })
    }
  }
};
</script>

<style scoped>
/* Utilities */
.primary-btn {
  font-weight: normal;
  padding: 12px 20px;
  text-transform: uppercase;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}

.container {
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.16);
  margin: 10px 30px;
  background-color: #fff;
}

/* Headings of Products */
.container .head {
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px 20px 15px 20px;
}

.head .flex {
  align-items: center;
}

.head h3 {
  margin-right: 15px;
  font-size: 26px;
}

.timer {
  color: #7f7f7f;
}

.timer-img {
  width: 30px;
  margin-right: 13px;
}

/* Items */
.items {
  width: 250px;
  font-size: 14px;
  text-align: center;
  padding: 20px;
}

.items-card {
  margin: 20px 0;
  height: 300px;
}

.items-card img:hover {
  transform: scale(1.03);
}

.items-card img {
  height: 160px;
  width: 155px;
  object-fit: contain;
}

router-link {
  color: #fff;
}
</style>