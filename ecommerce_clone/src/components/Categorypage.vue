<template>
  <div class="category">
    <h4>CATEGORIES FILTER</h4>
    <div class="carddiv flex">
      <div v-for="product in products" v-bind:key="product.id">
        <div class="card child" style="width: 15rem">
          <img class="card-img-top" :src="product.image" alt="Card image cap" />
          <div class="card-body">
            <p class="card-text">
              {{ product.title }}
              <br />
              <span>Rs {{ product.price }}</span
              ><span class="disc">60% OFF</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Categorypage",
  props: {
    cate: String,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async takeData() {
      try {
        let url = "";
        switch (this.cate) {
          case "jewelery":
            url = "https://fakestoreapi.com/products/category/jewelery";
            break;
          case "electronics":
            url = "https://fakestoreapi.com/products/category/electronics";
            break;
          case "men's clothing":
            url = "https://fakestoreapi.com/products/category/men's clothing";
            break;

          case "women's clothing":
            url = "https://fakestoreapi.com/products/category/women's clothing";
            break;
          default:
            url = "https://fakestoreapi.com/products";
            break;
        }

        let response = await fetch(url);
        this.products = await response.json();
      } catch (e) {
        console.log(e);
      }
    },
  },
  computed: {
    call: {
      get: function () {
        this.takeData();
      },
    },
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
}
.carddiv {
  line-height: 25px;
  color: #909090;
}
.child {
  margin: 5px;
}
.disc {
  border: 1px solid gray;
  padding: 2px;
  margin: 5px;
  margin-left: 20px;
  color: #909090;
}
span {
  color: black;
}
img {
  width: 200px;
  height: 200px;
}

.category {
  padding: 0% 5%;
}
</style>