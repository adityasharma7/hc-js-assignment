<template>
  <div>
    <h1>my category page</h1>
    <div class="flex">
      <button id="all" @click="getProductByCategory('all')">All</button>
      <button id="men" @click="getProductByCategory('men\'s clothing')">
        Men's Collection
      </button>
      <button id="women" @click="getProductByCategory('women\'s clothing')">
        Women's Collection
      </button>
      <button id="jewellery" @click="getProductByCategory('jewelery')">
        Jewellery Collection
      </button>
      <button id="electronics" @click="getProductByCategory('electronics')">
        Electronics Devices
      </button>

      <div class="productcontainer flex">
        <div v-for="category in categories" :key="category.id">
          <div class="card" style="width: 15rem">
            <img
              :src="category.image"
              class="card-img-top"
              alt="..."
              style="width: 7em; height: 9em"
            />
            <div class="card-body">
              <p class="card-text">
                {{ category.title }}
              </p>
              <p>RS.{{ category.price }}</p>
              <p>{{ category.rating.rate }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CategoryView",
  data() {
    return {
      categories: [],
      Selectedproduct: "",
    };
  },
  props: {
    category: Array,
  },

  async created() {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.categories = json;
      });
  },
  methods: {
    async getProductByCategory(value) {
      let response;
      let changecategory;
      const btns = document.querySelectorAll(".flex button");

      // Data Based on Category -
      if (value === "all") {
        changecategory = this.categories;
        response = await fetch("https://fakestoreapi.com/products");
      } else {
        (changecategory = [value]),
          (response = await fetch(
            `https://fakestoreapi.com/products/category/${changecategory}`
          ));
      }
      const data = await response.json();
      this.categories = data;
    },
  },
};
</script>
<style scoped>
.productcontainer {
  display: flex;
  flex-wrap: wrap;
}
.card {
  margin: 4px;
}
</style>

