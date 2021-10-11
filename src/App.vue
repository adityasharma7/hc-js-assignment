<template>
  <div id="app">
    <div class="wrapper">
    <nav>
      <input type="checkbox" id="show-search">
      <input type="checkbox" id="show-menu">
      <label for="show-menu" class="menu-icon"><i class="fas fa-bars"></i></label>
      <div class="content">
      <div class="logo"><router-link to="/"><img src="@/assets/logo.svg" style="height:40px; width:40px;"></router-link></div>
        <ul class="links">
         <li>
          <router-link class="desktop-link category" :to="{ name: 'products', params: { category: 'women'}}" > WOMEN</router-link>
         <input type="checkbox" id="show-features">
            <label for="show-features">WOMEN</label>
            
          </li>
          <li>
          <router-link class="desktop-link category" :to="{ name: 'products', params: { category: 'men'}}" >MEN</router-link>            
          <input type="checkbox" id="show-features">
            <label for="show-features">MEN</label>
            
          </li>
          <li>
          <router-link class="desktop-link category" :to="{ name: 'products', params: { category: 'electronics'}}" > GEAR</router-link>            
            <input type="checkbox" id="show-features">
            <label for="show-features">GEAR</label>
            
          </li>
          <li>
          <router-link class="desktop-link category" :to="{ name: 'products', params: { category: 'jewelery'}}" > TRAINING</router-link>            
            <input type="checkbox" id="show-services">
            <label for="show-services">TRAINING</label>
            
          </li>
        </ul>
      </div>
      <label for="show-search" class="search-icon"> <router-link class="desktop-link category" :to="{ name: 'products', params: { category: message}}" ><img src="@/assets/Search_Icon.svg" style="height:30px; width:30px;"></router-link></label>
      <form action="#" class="search-box">
        <input  v-model="message" type="text" placeholder="Type what you are looking for..." required>
        <button type="submit" class="go-icon"><i class="fas fa-long-arrow-alt-right"></i></button>
      </form>
    </nav>
  </div>

<div class="main">
  <router-view></router-view>
</div>
    
  <div id="footer">
      <div id="orders">
          <h4>ORDERS</h4>
          <ul>
              <li>My Account</li>
              <li>Delivery</li>
              <li>Return Policy</li>
          </ul>
      </div>
      <div id="help">
          <h4>  HELP</h4>
          <ul>
              <li>Customer Service</li>
              <li>Size Guide</li>
              <li>Contact Us</li>
          </ul>
      </div>
      <div id="aboutus">
          <h4>ABOUT US</h4>
          <ul>
              <li>About Us</li>
              <li>Store Locator</li>
              <li>Customer Service</li>
          </ul>
      </div>
      <div id="others">
          <h4>OTHERS</h4>
          <ul>
              <li>Legal Notice</li>
              <li>Privacy Policy</li>
              <li>v1.12.1 2021-06-24 10:41:56</li>
          </ul>
      </div>
      <div id="social">
          <h4>SOCIAL</h4>
          <ul>
              <li><img src="@/assets/icons/facebook.svg" style="height:30px; width:30px;" alt=""></li>
              <li><img src="@/assets/icons/pinterest.svg" style="height:30px; width:30px;" alt=""></li>
              <li><img src="@/assets/icons/twitter.svg" style="height:30px; width:30px;" alt=""></li>
              <li><img src="@/assets/icons/youtube.svg" style="height:30px; width:30px;" alt=""></li>
          </ul>
      </div>
  </div>  
  <bttb/>
  </div>
</template>

<script>


import bttb from '@/components/bttb.vue'
export default {
  name: 'App',
  data() {
      return {
       
      }
    },
  components: {
    bttb
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#footer{
    margin-top: 200px;
    width: 98%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 100px;
    font-family: "Roboto",sans-serif;
}
#footer div{
    display: inline-block;
    width: 20%;
}
#footer div ul{
    text-decoration: none;
    list-style-type: none;
    margin: 0px;
    padding: 0px;
}
#footer div ul li{
    margin:0px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: rgb(122, 122, 122);
    font-size: 15px;
}
#footer h4{
    margin-bottom: 30px;
    font-size: 18px;
   font-weight: bold;
}
#social{
    float: right;
}
#social ul li{
    display: inline-block;
    /* margin-right: 10px; */
} 
#social ul li img{
    margin-right:25px;
}
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
}
.wrapper{
  background: white;
  position: relative;
  width: 100%;
  padding-bottom: 10px;
}
.wrapper nav{
  position: relative;
  display: flex;
  max-width: calc(100% - 200px);
  margin: -30px auto;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  
}
nav .content{
  display: flex;
  align-items: center;
  
}
nav .content .links{
  margin-left: 80px;
  display: flex;
  
}
.content .logo a{
  color: black;
  font-size: 30px;
  font-weight: 600;
}
.content .links li{
  list-style: none;
  line-height: 70px;
  
}
.content .links li .desktop-link,
.content .links li label{
  color: black;
  font-size: 18px;
  font-weight: 500;
  padding: 9px 17px;
  border-radius: 5px;
  transition: all 0.3s ease;
  text-decoration: none;
}
.content .links li label{
  display: none;
}
.content .links li .desktop-link:hover,
.content .links li label:hover{
  background: #ced2db;
}
.wrapper .search-icon,
.wrapper .menu-icon{
  color: black;
  font-size: 18px;
  cursor: pointer;
  line-height: 70px;
  width: 70px;
  text-align: center;
}
.wrapper .menu-icon{
  display: none;
}
.wrapper #show-search:checked ~ .search-icon i::before{
  content: "\f00d";
}

.wrapper .search-box{
  position: absolute;
  height: 100%;
  max-width: calc(100% - 50px);
  width: 100%;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
}
.wrapper #show-search:checked ~ .search-box{
  opacity: 1;
  pointer-events: auto;
}
.search-box input{
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 17px;
  color: white;
  background: #171c24;
  padding: 0 100px 0 15px;
}
.search-box input::placeholder{
  color: #f2f2f2;
}
.search-box .go-icon{
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  line-height: 60px;
  width: 70px;
  background: white;
  border: none;
  outline: none;
  color: black;
  font-size: 20px;
  cursor: pointer;
}
.wrapper input[type="checkbox"]{
  display: none;
}

/* Dropdown Menu code start */
.content .links ul{
  position: absolute;
  background: white;
  top: 80px;
  z-index: -1;
  opacity: 0;
  visibility: hidden;
}
.content .links li:hover > ul{
  top: 70px;
  opacity: 1;
  visibility: visible;
  transition: all 0.3s ease;
}
.content .links ul li a{
  display: block;
  width: 100%;
  line-height: 30px;
  border-radius: 0px!important;
}
.content .links ul ul{
  position: absolute;
  top: 0;
  right: calc(-100% + 8px);
}
.content .links ul li{
  position: relative;
}
.content .links ul li:hover ul{
  top: 0;
}

/* Responsive code start */
@media screen and (max-width: 1250px){
  .wrapper nav{
    max-width: 100%;
    padding: 0 20px;
  }
  nav .content .links{
    margin-left: 30px;
  }
  .content .links li a{
    padding: 8px 13px;
  }
  .wrapper .search-box{
    max-width: calc(100% - 100px);
  }
  .wrapper .search-box input{
    padding: 0 100px 0 15px;
  }
}

@media screen and (max-width: 900px){
  .wrapper .menu-icon{
    display: block;
  }
  .wrapper #show-menu:checked ~ .menu-icon i::before{
    content: "\f00d";
  }
  nav .content .links{
    display: block;
    position: fixed;
    background: #14181f;
    height: 100%;
    width: 100%;
    top: 70px;
    left: -100%;
    margin-left: 0;
    max-width: 350px;
    overflow-y: auto;
    padding-bottom: 100px;
    transition: all 0.3s ease;
  }
  nav #show-menu:checked ~ .content .links{
    left: 0%;
  }
  .content .links li{
    margin: 15px 20px;
  }
  .content .links li a,
  .content .links li label{
    line-height: 40px;
    font-size: 20px;
    display: block;
    padding: 8px 18px;
    cursor: pointer;
  }
  .content .links li a.desktop-link{
    display: none;
  }

  /* dropdown responsive code start */
  .content .links ul,
  .content .links ul ul{
    position: static;
    opacity: 1;
    visibility: visible;
    background: none;
    max-height: 0px;
    overflow: hidden;
  }
  .content .links #show-features:checked ~ ul,
  .content .links #show-services:checked ~ ul,
  .content .links #show-items:checked ~ ul{
    max-height: 100vh;
  }
  .content .links ul li{
    margin: 7px 20px;
  }
  .content .links ul li a{
    font-size: 18px;
    line-height: 30px;
    border-radius: 5px!important;
  }
}

@media screen and (max-width: 400px){
  .wrapper nav{
    padding: 0 10px;
  }
  .content .logo a{
    font-size: 27px;
  }
  .wrapper .search-box{
    max-width: calc(100% - 70px);
  }
  .wrapper .search-box .go-icon{
    width: 30px;
    right: 0;
  }
  .wrapper .search-box input{
    padding-right: 30px;
  }
}
</style>

