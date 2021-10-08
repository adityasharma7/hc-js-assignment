<template>
    <div>
<div class="navbar">
  <a >Logo</a>
  <!-- <a href="#news">News</a> -->
  <div >
    <div  class="dropdown">

  <router-link  :to="{ name: 'product', params: { category: 'women' } }">WOMEN</router-link>
  <router-link :to="{ name: 'product', params: { category: 'men' } }">MEN</router-link>
  <router-link  :to="{ name: 'product', params: { category: 'gear' } }">GEAR</router-link>
  <router-link  :to="{ name: 'product', params: { category: 'training' } }">TRAINING</router-link>
 
    <div class="dropdown-content">
     
      <div class="row">
        <div class="column">
          <h3>TOPS</h3>
          <a>  <router-link  to="/about">WOMEN</router-link></a>
          <a>  <router-link  to="/about">WOMEN</router-link></a>
          <a>  <router-link  to="/about">WOMEN</router-link></a>
        </div>
        <div class="column">
          <h3>BOTTOMS</h3>
          <a>  <router-link  to="/about">WOMEN</router-link></a>
          <a>  <router-link  to="/about">WOMEN</router-link></a>
          <a>  <router-link  to="/about">WOMEN</router-link></a>
        </div>
        <div class="column">
                   <img src="https://lh3.googleusercontent.com/3vbmf-fE3hNTz_sGEcwIXWDO025BKBEfKgf8kLwMUqsTGFJNuEsBevc5aoUDXs0LeGQuxV3I55z3JelOJRYTxKzdoTWPoueELAx2WWZ-b-XO5vK1VQ
" width="250" height="200" alt="Paris">

        </div>
        <div class="column">
       
         <img src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/04/2-2.jpg" width="250" height="200" alt="Paris">
        </div>
      </div>
    </div>
     </div>

    <spam class="reightside">
    <input class="search" type="text" placeholder="Search..">
   <i class="fa fa-user-circle-o" style="font-size:28px;color:black"></i>
<i class="fa fa-heart-o" style="font-size:36px;"></i>
<i class="fa fa-shopping-cart" style="font-size:36px"></i>
</spam>
</div>
  </div>

<router-view></router-view>
 
    
    </div>
</template>
<script>
export default {
    name:'Navbar.vue'
}
</script>
<style scoped>
.navbar {
  overflow: hidden;
  background-color: #333;
  font-family: Arial;
  padding: 0px;

}

/* Links inside the navbar */
.navbar a {
  float: left;
  font-size: 16px;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
.reightside {
  float: right;
  display:flex;
  justify-content: space-around;
  padding: 6px;
  border: none;
  /* margin-top: 8px;
  margin-right: 16px; */
  font-size: 17px;
}
 
/* The dropdown container */
.dropdown {
  float: left;
  overflow: hidden;
}

/* Dropdown button */
.dropbtnroute {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
}
.dropdown .dropbtnw {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
}
.navbar a:hover, .dropdown:hover .dropbtnw {
  /* background-color: red; */
}
/* Add a red background color to navbar links on hover */
.navbar a:hover, .dropdown:hover .dropbtn {
  /* background-color: red; */
}

/* Dropdown content (hidden by default) */
.dropdown-content {
    margin-top: 50px;
  display: none;
  position: absolute;
  /* background-color: #f9f9f9; */
  width: 100%;
  left: 0;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.search {
  float: right;
  padding-left:10px;

  border: none;
  font-size: 17px;
}
/* Mega Menu header, if needed */
.dropdown-content .header {
  /* background: red; */
  padding: 16px;
  color: white;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Create three equal columns that floats next to each other */
.column {
  float: left;
  width: 23.83%;
  padding: 5px;
  background-color: #ffff;
  height: 250px;
}

/* Style links inside the columns */
.column a {
  float: none;
  color: black;
  padding: 10px;
  text-decoration: none;
  display: block;
  text-align: left;
  
}

/* Add a background color on hover */
.column a:hover {
  background-color: #ddd;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>


