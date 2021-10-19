<template>
  <div class="nav">
    <ul>
      <div class="logo">
        <img class="vue-logo" src="../assets/vuelogo.jpg" alt="" />
      </div>
      <!-- <li>WOMEN</li> -->
      <div id="dropdown">
        <router-link
          class="link"
          :to="{ name: 'category', params: { category: women } }"
          ><button id="dropdown-btn">WOMEN</button></router-link
        >
        <div id="dropdown-content">
          <div id="row">
            <div id="column">
              <h5>TOPS</h5>
              <a href="#">View all</a>
              <a href="#">Jackets</a>
              <a href="#">Hoodies & Sweatshirts</a>
              <a href="#">Tees</a>
              <a href="#">Bras & Tanks</a>
            </div>
            <div id="column">
              <h5>BOTTOMS</h5>
              <a href="#">View all</a>
              <a href="#">Pants</a>
              <a href="#">Shorts</a>
            </div>
          </div>
        </div>
      </div>
      <div id="dropdown">
        <router-link
          class="link"
          :to="{ name: 'category', params: { category: men } }"
          ><button id="dropdown-btn">MEN</button></router-link
        >
        <!-- <button id="dropdown-btn">MEN</button> -->
        <div id="dropdown-content">
          <div id="row">
            <div id="column">
              <h5>TOPS</h5>
              <a href="#">View all</a>
              <a href="#">Jackets</a>
              <a href="#">Hoodies & Sweatshirts</a>
              <a href="#">Tees</a>
              <a href="#">Tanks</a>
            </div>
            <div id="column">
              <h5>BOTTOMS</h5>
              <a href="#">View all</a>
              <a href="#">Pants</a>
              <a href="#">Shorts</a>
            </div>
          </div>
        </div>
      </div>
      <div id="dropdown">
        <router-link
          class="link"
          :to="{ name: 'category', params: { category: 'jewelery' } }"
          ><button id="dropdown-btn">JEWELERY</button></router-link
        >
        <!-- <button id="dropdown-btn">GEAR</button> -->
        <div id="dropdown-content">
          <div id="row">
            <div id="column">
              <h5>BAGS</h5>
              <a href="#">View all</a>
            </div>
            <div id="column">
              <h5>FITNESS EQUIPMENT</h5>
              <a href="#">View all</a>
            </div>
            <div id="column">
              <h5>WATCHES</h5>
              <a href="#">View all</a>
            </div>
          </div>
        </div>
      </div>

      <div id="dropdown">
        <router-link
          class="link"
          :to="{ name: 'category', params: { category: 'electronics' } }"
          ><button id="dropdown-btn">ELECTRONICS</button></router-link
        >
        <!-- <button id="dropdown-btn">TRAINING</button> -->
        <div id="dropdown-content">
          <div id="row">
            <div id="column">
              <h5>VIDEO DOWNLOAD</h5>
              <a href="#">View all</a>
            </div>
          </div>
        </div>
      </div>
    </ul>
    <ul>
      <div class="search">
        <input
          type="searchInput"
          class="searchBox"
          placeholder="Type what you are looking for..."
        />
        <i class="fas fa-search icon fa-lg"></i>
      </div>
      <div class="user"><i class="far fa-user fa-lg"></i></div>
      <div class="overlay" id="overlay"></div>
      <div id="cart" class="cartSection">
        <a href="javascript:void(0)" class="closebtn" @click="closeCart">X</a>
        <div class="cartItemContainer">
          <div
            v-for="item in this.$store.state.cart"
            :key="item.id"
            class="cartItem"
          >
            <div class="removeProduct" @click="remove(item.id)">
              X
            </div>
            <div class="cart-img-container">
              <img :src="item.image" class="cart-img" alt="" />
            </div>

            <div class="cart-detail-container">
              <p class="cart-title">{{ item.title }}</p>
              <p class="cart-price">{{ item.price }}</p>
            </div>
          </div>
        </div>
      </div>
      <div @click="openCart" class="cart">
        <i class="fas fa-shopping-cart fa-lg"></i>
      </div>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      women: "women's clothing",
      men: "men's clothing",
    };
  },
  methods: {
    openCart() {
      document.getElementById("cart").style.width = "400px";
      document.getElementById("overlay").style.backgroundColor =
        "rgba(0,0,0,0.4)";
      document.getElementById("overlay").style.zIndex = "100";
      document.getElementById("cart").style.zIndex = "1000";
    },
    closeCart() {
      document.getElementById("cart").style.width = "0px";
      document.getElementById("overlay").style.backgroundColor = "transparent";
      document.getElementById("overlay").style.zIndex = "-100";
    },
    remove(id) {
      const index = this.$store.state.cart.findIndex((x) => x.id === id);
      this.$store.state.cart.splice(index, 1);
    },
  },
};
</script>
<style scoped>
ul {
  display: flex;
  text-decoration: none;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  width: 35%;
  height: 80px;
  font-weight: 800;
  font-size: 15px;
  padding-left: 0px;
  margin-bottom: 0px;
}
.nav {
  margin: 0px 60px 0px 40px;
  align-items: center;
  display: flex;
  justify-content: space-between;
}

#dropdown {
  display: flex;
  float: left;
  overflow: hidden;
  height: inherit;
  align-content: center;
}
#dropdown #dropdown-btn {
  font-size: 16px;
  border: none;
  outline: none;
  /* color: rgb(70, 36, 36); */
  /* padding: 14px 16px; */
  background-color: inherit;
  font: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
}
#dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  width: 100%;
  top: 80px;
  left: 0;
  padding: 50px 0px 50px 65px;
  /* padding-left: 65px; */
  /* padding: 30px; */
  /* margin: 30px; */
  /* z-index: 1; */
}

#dropdown-btn:hover {
  border-bottom: 3px solid #5ece7b;
}
#dropdown:hover #dropdown-content {
  display: block;
}
#column {
  float: left;
  width: 20%;
  /* padding: 10px; */
  background-color: white;
  height: 300px;
}
#column a {
  float: none;
  color: black;
  padding: 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}
.searchBox {
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom: 2px solid black;
  height: 30px;
  padding-left: 2px;
  width: 280px;
}

.search i {
  position: relative;
  right: 35px;
  color: rgb(146, 145, 145);
}
.icon {
  text-align: center;
  min-width: 40px;
  padding: 10px;
}
.vue-logo {
  height: 80px;
  widows: 80px;
}
/* .logo {
  background-image: url("/assets/vuelogo.png");
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
} */
#column a {
  color: gray;
}
.link {
  display: flex;
  text-decoration: none;
}
.cart:hover {
  cursor: pointer;
}
.cart-img {
  height: 150px;
  width: 100px;
}
.cartSection {
  width: 0;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
  background-color: white;
}
.cartSection .closebtn {
  position: absolute;
  top: 10px;
  right: 350px;

  text-decoration: none;
  background-color: #5ece7b;
  color: white;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  font-size: 15px;
  margin-left: 50px;
}
.overlay {
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: -1000;
}
.cartItemContainer {
  margin: 20px;
}
.cartItem {
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.cartItem:hover {
  box-shadow: 0px 4px 20px rgba(46, 46, 47, 0.19);
  border-radius: 20px;
}
.cart-detail-container {
  width: 60%;
  padding-left: 20px;
}
.cart-detail-container p {
  max-width: fit-content;
}
.removeProduct {
  position: relative;

  left: 325px;
  bottom: 88px;
  height: 20px;
  background-color: #5ece7b;
  width: 20px;
  color: white;
  cursor: pointer;
  font-size: 10px;
  /* margin: auto; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
}
</style>
