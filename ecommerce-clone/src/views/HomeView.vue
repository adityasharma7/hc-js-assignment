<template>
  <div class="home">
    <Header />
    <Catlog />
    <Hero />
    <Products :Products="Products" />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Catlog from "../components/Catlog.vue";
import Hero from "../components/Hero.vue";
import Products from "../components/Products.vue";
import Footer from "../components/Footer.vue";
import Ads3 from "../components/Ads3.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    Catlog,
    Hero,
    Products,
    Footer,
    Ads3,
  },
  data() {
    return {
      Products: [
        {
          id: 1,
          title: "Deals of the Day",
          timer: true,
          items: [
            {
              id: 1,
              imgSrc: require("../assets/DOTD/earphones.jpeg.webp"),
              productName: "Headphones",
              pricing: "Min 50% off",
              description: "Grab Now!",
            },
            {
              id: 2,
              imgSrc: require("../assets/DOTD/fragrance.jpeg.webp"),
              productName: "Fragrance",
              pricing: "Min 20% off",
              description: "Grab Now!",
            },
            {
              id: 3,
              imgSrc: require("../assets/DOTD/books.jpeg.webp"),
              productName: "Books",
              pricing: "Min 35% off",
              description: "Grab Now!",
            },
            {
              id: 4,
              imgSrc: require("../assets/DOTD/watch.jpeg.webp"),
              productName: "Watch",
              pricing: "Min 50% off",
              description: "Grab Now!",
            },
            {
              id: 5,
              imgSrc: require("../assets/DOTD/show-piece.jpeg.webp"),
              productName: "Show Piece",
              pricing: "Min 70% off",
              description: "Grab Now!",
            },
            {
              id: 6,
              imgSrc: require("../assets/DOTD/bears.jpeg.webp"),
              productName: "Bears",
              pricing: "Min 5% off",
              description: "Grab Now!",
            },
            {
              id: 7,
              imgSrc: require("../assets/DOTD/baby-care.jpeg.webp"),
              productName: "Baby Care",
              pricing: "Min 15% off",
              description: "Grab Now!",
            },
          ],
        },
        {
          id: 2,
          title: "Top Mens Essentials",
          timer: false,
          items: [
            {
              id: 1,
              imgSrc: require("../assets/mens/bag.webp"),
              productName: "Bag",
              pricing: "Min 50% off",
              description: "Grab Now!",
            },
            {
              id: 2,
              imgSrc: require("../assets/mens/bed.webp"),
              productName: "Bed",
              pricing: "Min 20% off",
              description: "Grab Now!",
            },
            {
              id: 3,
              imgSrc: require("../assets/mens/shoes1.webp"),
              productName: "Shoes",
              pricing: "Min 35% off",
              description: "Grab Now!",
            },
            {
              id: 4,
              imgSrc: require("../assets/mens/keys.webp"),
              productName: "Keys",
              pricing: "Min 50% off",
              description: "Grab Now!",
            },
            {
              id: 5,
              imgSrc: require("../assets/mens/shoes.webp"),
              productName: "Shoes",
              pricing: "Min 70% off",
              description: "Grab Now!",
            },
            {
              id: 6,
              imgSrc: require("../assets/mens/tshirt.webp"),
              productName: "T-Shirt",
              pricing: "Min 5% off",
              description: "Grab Now!",
            },
            {
              id: 7,
              imgSrc: require("../assets/mens/bag.webp"),
              productName: "Bag",
              pricing: "Min 15% off",
              description: "Grab Now!",
            },
            {
              id: 8,
              imgSrc: require("../assets/mens/shoes3.webp"),
              productName: "Shoes",
              pricing: "Min 30% off",
              description: "Grab Now!",
            },
            {
              id: 9,
              imgSrc: require("../assets/mens/bed.webp"),
              productName: "Bed",
              pricing: "Min 50% off",
              description: "Grab Now!",
            },
          ],
        },
        {
          id: 3,
          title: "Season's Top Pick",
          timer: false,
          items: [
            {
              id: 1,
              imgSrc: require("../assets/DOTD/earphones.jpeg.webp"),
              productName: "Headphones",
              pricing: "Min 50% off",
              description: "Grab Now!",
            },
            {
              id: 2,
              imgSrc: require("../assets/DOTD/fragrance.jpeg.webp"),
              productName: "Fragrance",
              pricing: "Min 20% off",
              description: "Grab Now!",
            },
            {
              id: 3,
              imgSrc: require("../assets/DOTD/books.jpeg.webp"),
              productName: "Books",
              pricing: "Min 35% off",
              description: "Grab Now!",
            },
            {
              id: 4,
              imgSrc: require("../assets/DOTD/watch.jpeg.webp"),
              productName: "Watch",
              pricing: "Min 50% off",
              description: "Grab Now!",
            },
            {
              id: 5,
              imgSrc: require("../assets/DOTD/show-piece.jpeg.webp"),
              productName: "Show Piece",
              pricing: "Min 70% off",
              description: "Grab Now!",
            },
            {
              id: 6,
              imgSrc: require("../assets/DOTD/bears.jpeg.webp"),
              productName: "Bears",
              pricing: "Min 5% off",
              description: "Grab Now!",
            },
            {
              id: 7,
              imgSrc: require("../assets/DOTD/baby-care.jpeg.webp"),
              productName: "Baby Care",
              pricing: "Min 15% off",
              description: "Grab Now!",
            },
            {
              id: 8,
              imgSrc: require("../assets/DOTD/watch.jpeg.webp"),
              productName: "Watch",
              pricing: "Min 30% off",
              description: "Grab Now!",
            },
            {
              id: 9,
              imgSrc: require("../assets/DOTD/fragrance.jpeg.webp"),
              productName: "Fragrance",
              pricing: "Min 50% off",
              description: "Grab Now!",
            },
          ],
        },
        {
          id: 4,
          title: "Top Brands",
          timer: false,
          items: [
            {
              id: 1,
              imgSrc: require("../assets/mens/bag.webp"),
              productName: "Bag",
              pricing: "Min 50% off",
              description: "Grab Now!",
            },
            {
              id: 2,
              imgSrc: require("../assets/mens/bed.webp"),
              productName: "Bed",
              pricing: "Min 20% off",
              description: "Grab Now!",
            },
            {
              id: 3,
              imgSrc: require("../assets/mens/shoes1.webp"),
              productName: "Shoes",
              pricing: "Min 35% off",
              description: "Grab Now!",
            },
            {
              id: 4,
              imgSrc: require("../assets/mens/keys.webp"),
              productName: "Keys",
              pricing: "Min 50% off",
              description: "Grab Now!",
            },
            {
              id: 5,
              imgSrc: require("../assets/mens/shoes.webp"),
              productName: "Shoes",
              pricing: "Min 70% off",
              description: "Grab Now!",
            },
            {
              id: 6,
              imgSrc: require("../assets/mens/tshirt.webp"),
              productName: "T-Shirt",
              pricing: "Min 5% off",
              description: "Grab Now!",
            },
            {
              id: 7,
              imgSrc: require("../assets/mens/bag.webp"),
              productName: "Bag",
              pricing: "Min 15% off",
              description: "Grab Now!",
            },
            {
              id: 8,
              imgSrc: require("../assets/mens/shoes3.webp"),
              productName: "Shoes",
              pricing: "Min 30% off",
              description: "Grab Now!",
            },
            {
              id: 9,
              imgSrc: require("../assets/mens/bed.webp"),
              productName: "Bed",
              pricing: "Min 50% off",
              description: "Grab Now!",
            },
          ],
        },
      ],
    };
  },
};
</script>
