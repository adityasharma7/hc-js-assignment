<template>
  <div class="home">
    <Header />
    <div class="controldiv">
      <div>
        <Category />
        <img src="../assets/barcode.png" alt="" />
      </div>
      <div class="right">
        <div class="right-top">
          <CarouselSlide />
          <Deliverfast />
        </div>
        <div class="right-bottom">
          <Cardslide />
        </div>
      </div>
    </div>
    <div class="products">
      <Product />
    </div>
    <Categorypage/>
    <div class="btn">
      <button>Load More</button>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Category from "../components/Category.vue";
import CarouselSlide from "../components/CarouselSlide.vue";
import Deliverfast from "../components/Deliverfast.vue";
import Cardslide from "@/components/Cardslide.vue";
import Product from "@/components/Product.vue";
import Footer from "@/components/Footer.vue";
import Categorypage from '../components/Categorypage.vue';
export default {
  name: "Home",
  components: {
    Header,
    Category,
    CarouselSlide,
    Deliverfast,
    Cardslide,
    Product,
    Footer,
    Categorypage,
  },
};
</script>
<style scoped>
.controldiv {
  display: flex;
  column-gap: 30px;
  margin-top: 10px;
  padding: 0% 5%;
}
img {
  margin: 9px;
}
.right {
  display: grid;
}
.right-top {
  display: flex;
}
.right-bottom {
  display: flex;
}
.products {
  padding: 0% 5%;
}
button {
  background-color: #333;
  color: #fff;
  padding: 4px 30px;
  height: 38px;
  width: 250px;
  border-radius: 4px;
  border: none;
}
.btn {
  display: flex;
  justify-content: center;
}
</style>