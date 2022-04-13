<template>
  <header>
    <nav class="container flex">
      <div class="relative">
        <h1>Flipkart</h1>
        <!-- Home View -->
        <router-link :to="{ name: 'home' }">
            <a href="#" class="plus flex">
              Explore <span>Plus</span>
              <img src="../assets/flip.png" alt="" />
            </a
        ></router-link>
      </div>
      <div class="search-div relative">
        <input type="text" placeholder="Search for products, brands and more" />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div>
        <ul class="flex">
          <li>
            <button class="white-btn dropdown">
              <p>Login</p>
              <Dropdown />
            </button>
          </li>
          <li><a href="#">Become a Seller</a></li>
          <li>
            <router-link :to="{ name: 'categories' }"
              ><a href="#">More</a>
            </router-link>
          </li>
          <li>
            <a href="#"><i class="fa-solid fa-cart-shopping"></i> Cart</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import Dropdown from "./Dropdown.vue";

export default {
  name: "Header",
  components: {
    Dropdown,
  },
};
</script>

<style scoped>
header {
  background-color: #f1f3f6;
  color: #f1f3f6;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.16);
  font-family: Roboto, Arial, Helvetica, sans-serif;
  z-index: 100;
}

.container {
  width: 100%;
  background-color: #2874f0;
  color: #f1f3f6;
  padding: 4px 0;
  align-items: center;
  justify-content: center;
}

.container > div {
  margin: 0 10px;
}

.container .relative:nth-child(1) {
  text-align: center;
  font-size: 13px;
  padding: 5px 0;
}

input {
  max-width: 100%;
  font-size: 14px;
}

a {
  color: #ffffff;
}

h1 {
  font-style: italic;
  font-size: 20px;
}

ul {
  align-items: center;
}

ul li {
  margin: 0 20px;
}

span {
  color: #ffe500;
  font-style: italic;
  margin-left: 3px;
}

img {
  position: absolute;
  right: -10px;
  width: 10px;
  margin-left: 4px;
}

.search-div {
  margin: 0px;
}

.search-div i {
  position: absolute;
  top: 10px;
  right: 16px;
  color: #2874f0;
  cursor: pointer;
}

.plus {
  font-style: italic;
}
</style>