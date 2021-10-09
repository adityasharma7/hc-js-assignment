<template>
    <div class="box1">
<div class="navbar">
  
      <img href="/"  id="logo-image" src="https://pbs.twimg.com/profile_images/1192434574577610752/NyX82InT_400x400.jpg"  alt="">
  <!-- <a href="#news">News</a> -->
 


    <div  class="dropdown">

  <router-link  class="category" :to="{ name: 'product', params: { category: women } }" :key="$route.path" > WOMEN</router-link>
  <router-link class="category" :to="{ name: 'product', params: { category: men } }" :key="$route.path" > MEN</router-link>
  <router-link class="category"  :to="{ name: 'product', params: { category: 'electronics' } }" :key="$route.path" > GEAR</router-link>
  <router-link class="category"  :to="{ name: 'product', params: { category: 'jewelery' } }" :key="$route.path" > TRAINING</router-link>
 
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

    <div id="search">
            <form class="example" action="action_page.php">
                <input type="text" placeholder="Search.." name="search">
                <button type="submit"><i class="fa fa-search fa-1x"></i></button>
            </form>
    </div>
    <div id="right">
        <a href=""><img src="https://static.thenounproject.com/png/2014807-200.png" alt=""></a>
        <a href=""><img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt=""></a>
    </div>
</div>
  
    

<!-- <router-view></router-view> -->
 
    
    </div>
</template>
<script>
export default {
    name:'Navbar.vue',data() {
      return {
        men:"men's clothing",

        women:"women's clothing"
      }
    },
}
</script>
<style scoped>
.box1{
      /* border: 1px solid black; */

}
#search{
    display: inline-block;
    text-decoration-line: underline;
    /* border-bottom: 1px solid black; */
    padding: 10px;
    padding-top: 0px;
    margin-left: 250px;
}

#search form input{
    border: white;
    width: 300px;
}
#search form input:focus{
    outline: none;
}
#search form input::placeholder{
   font-weight: 500;
   font-size: 16px;
}
#search form button{
    border: white;
    background: white;
    color: grey;
}
#right{
    /* display: inline-block; */
    /* float: right; */
    margin-top: 8px;
    /* padding: 10px; */
}
#right a img{
    margin-left: 35px;
    height: 25px;
    width: 25px;
}

#logo-image{
    height: 60px;
    width: 60px;
    display: inline-block;
    position: absolute;
}
.category{
  color: #ddd;
}
.navbar {
  overflow: hidden;
  background-color: #FFFFFF;
  font-family: Arial;
  padding: 0px;
  /* border:4px solid blue; */
  display: flex;
  align-content: center;
  align-items: center
  
}
/* Links inside the navbar */
.navbar a {
  float: left;
  font-size: 16px;
  color: #1D1F22;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-family: Raleway;
font-style: normal;
font-weight: bolder;

}
.reightside {
  /* float: right; */
  display:flex;
  justify-content: space-between;
  padding: 6px;
  border: none;
  /* margin-top: 8px;
  margin-right: 16px; */
  font-size: 17px;
    /* border: 2px solid black; */

}
 
/* The dropdown container */
.dropdown {
  float: left;
  overflow: hidden;
  /* border: 2px solid rgb(209, 8, 8); */
  margin-left:82px 
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
