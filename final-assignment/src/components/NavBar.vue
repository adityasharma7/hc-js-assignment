<template>
  <div class="nav">
    <ul>
      <div class="logo">
        <img class="vue-logo" src="../assets/vuelogo.jpg" alt="" />
      </div>
      <!-- <li>WOMEN</li> -->
      <div id="dropdown">
        <button id="dropdown-btn">WOMEN</button>
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
        <button id="dropdown-btn">MEN</button>
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
        <button id="dropdown-btn">GEAR</button>
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
        <button id="dropdown-btn">TRAINING</button>
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
      <div class="cart"><i class="fas fa-shopping-cart fa-lg"></i></div>
    </ul>
  </div>
</template>
<script>
export default {};
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
.searchBox:focus {
  /* outline: none; */
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
</style>
