<template>


  <div class="container mt-5 mb-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-10">
        <div class="card">
          <div class="row">
            <div class="col-md-6">
              <div class="images p-3">
                <div class="text-center p-4"> <img id="main-image" :src="product.image" width="200" />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="product p-4">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center"> <i class="fa fa-long-arrow-left"></i> <span class="ml-1">
                      <RouterLink to="/">Back</RouterLink>
                    </span> </div> <i class="fa fa-shopping-cart text-muted"></i>
                </div>
                <div class="mt-4 mb-3">
                  <h1 class="text-uppercase">{{  product.title  }}</h1>
                  <h2 class="price d-flex flex-row align-items-center"> <span class="act-price">{{  product.price 
                      }}</span>
                  </h2>
                </div>
                <p class="about">{{  product.description  }}</p>

                <div class="cart mt-4 align-items-center"> <button class="btn btn-primary text-uppercase mr-2 px-4">Add
                    to cart</button> <i class="fa fa-heart text-muted"></i> <i class="fa fa-share-alt text-muted"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



</template>

<script>

import axios from 'axios'
import { provide } from 'vue';

export default {
  data() {
    return {
      product: null,
      a: "aa"
    }
  },
  props: {
    id: String
  },
  methods: {
    async showAllProducts() {
      try {
        const productData = await axios.get(`https://fakestoreapi.com/products/${this.id}`);
        this.product = await productData.data

      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.showAllProducts()
  }
}
</script>

<style scoped>
body {
  background-color: #000
}

.card {
  border: none
}

.product {
  background-color: #eee
}

.brand {
  font-size: 13px
}

.act-price {
  color: red;
  font-weight: 700
}

.dis-price {
  text-decoration: line-through
}

.about {
  font-size: 18px
}

.color {
  margin-bottom: 10px
}

label.radio {
  cursor: pointer
}

label.radio input {
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  pointer-events: none
}

label.radio span {
  padding: 2px 9px;
  border: 2px solid #ff0000;
  display: inline-block;
  color: #ff0000;
  border-radius: 3px;
  text-transform: uppercase
}

label.radio input:checked+span {
  border-color: #ff0000;
  background-color: #ff0000;
  color: #fff
}

.btn-danger {
  background-color: #ff0000 !important;
  border-color: #ff0000 !important
}

.btn-danger:hover {
  background-color: #da0606 !important;
  border-color: #da0606 !important
}

.btn-danger:focus {
  box-shadow: none
}

.cart i {
  margin-right: 10px
}
</style>