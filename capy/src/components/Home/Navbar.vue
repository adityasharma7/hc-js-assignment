<template>
    <div class="box1">
<div class="navbar">
  <!-- <router-link to="/"> -->
      <img   id="logo-image" src="https://pbs.twimg.com/profile_images/1192434574577610752/NyX82InT_400x400.jpg"  alt="">
<!-- </router-link> -->
 


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
        <a @click="isLogin = true"><img src="https://static.thenounproject.com/png/2014807-200.png" alt=""></a>
        
        <a class="openbtn" @click="openNav"><img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt=""></a>
    </div>
     <div>
      

<transition name="modal">
  <form @submit="handelsubmit">
      <div v-if="isLogin">
        <div class="overlay" @click.self="isLogin = false;">
          <div class="login">
              <button id="cancel" @click="isLogin = false">X</button>
                 <input type="text" placeholder="User Name" v-model="Loginusername">
              <input type="password" placeholder="Password" v-model="Loginpassword">
              <input type="checkbox" id="checkbox">
              <label for="">Remember Me</label>
              <button @click="login">LOGIN</button>
              <a href="">Forgotten Password</a>
              <h2>Don't You have an account?</h2>
            <button type="submit" @click="isRegister = !isRegister; isLogin = !isLogin">Register Now</button>
          </div>
        </div>
      </div>
      </form>
</transition>

<transition name="modal">
<form>
      <div v-if="isRegister">
        <div class="overlay" @click.self="isRegister = false;">
          <div class="register">
            <button id="cancel" @click="isRegister = false">X</button>
            <input id="email" type="email" placeholder="Your Email" v-model="email">
            <input type="text" placeholder="User Name" v-model="username">
            <input type="password" placeholder="Password" v-model="password1">
            <input type="password" placeholder="Password" v-model="password2">
            <button type="submit" @click="register">CREATE AN ACCOUNT</button>
            <h2>Already have a Account?</h2>
            <button @click="isLogin = !isLogin; isRegister = !isRegister">Login Now</button>
            <a href=""></a>
          </div>
        </div>
      </div>
      
</form>
</transition>  

<div id="mySidebar" class="sidebar">
  <a href="javascript:void(0)" class="closebtn" @click="closeNav()">×</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>

<div >
  <!-- <button class="openbtn" @click="openNav">☰ Open Sidebar</button>   -->
  <!-- <h2>Collapsed Sidebar</h2> -->
  <!-- <p>Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p> -->
</div>
    </div>
</div>
  
    

<!-- <router-view></router-view> -->
 
    
    </div>
</template>
<script>
// import Cardicon from "./Cardicon.vue"
export default {
    name:'Navbar.vue',data() {
      return {
        men:"men's clothing",

        women:"women's clothing",
        isLogin:false,
        isRegister:false,
         Loginusername:"",
          Loginpassword:"",
           username: "",
      email: "",
      password: "",
      password2: "",
      }
    },methods: { handelsubmit(e){
             e.preventDefault();
             let passwordIndex;
           let credentials={
            Loginusername:this.Loginusername,
            Loginpassword:this.Loginpassword,
           };
            console.log(credentials)
            // this.username="",
            // this.password=""
            let isusers=localStorage.users;
            isusers=JSON.parse(isusers);
            let usernameIndex=isusers.findIndex(
                (user)=>user.username===credentials.Loginusername
            );
            if(usernameIndex>-1){
                 passwordIndex=isusers.findIndex((user)=>
                user.password===credentials.LoginLoginpassword);
            }
            if( passwordIndex >-1){
                this.$router.push("/")
            }else{
                alert("Wrong Credentials")
            }

        },register(isLogin=true,isRegister=false){},registeruser() {
      let user = {
        username: this.username,
        email: this.email,
        password: this.password,
        password2: this.password2,
      };
      // const { isInvalid, errors } = validateRegisterInput(user);
      // if (isInvalid) {
      //   this.errors = errors;
      // } else 
        // this.errors = {};
        // store user in local storage
        if (localStorage.users) {
          let lsUsers = localStorage.users;
          this.users = JSON.parse(lsUsers);
        }
        this.users.push(user);
        localStorage.setItem("users", JSON.stringify(this.users));
        this.username = "";
        this.email = "";
        this.password = "";
        this.password2 = "";
        this.$router.push("/login");
      
    },

        openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
,
closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
    },
}
</script>
<style scoped>

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #cecbcb94;
  z-index: 999;
  transition: opacity 1s ease;
}
.fadeIn-enter {
  opacity: 0;
}
.fadeIn-leave-active {
  opacity: 0;
  transition: all 1s step-end;
}
.fadeIn-enter .modal,
.fadeIn-leave-active.modal {
  transform: scale(1.1);
}

.login {
  width: 450px;
  margin: 0px auto;
  padding: 5px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 ;
  transition: all 2s ease-in;
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
}
#checkbox{
    float: left;
    width: 10%;
    margin-right: 0px;
    padding-left: 10px;
    margin-left: 10px;
    size: 20px;
    zoom: 2;
    margin-bottom: 20px;
    margin-top: 0px;
}
label{
    float: left;
    margin-top: 2px;
    font-size: 20px;
    margin-bottom: 60px;
}
/* Registration Page */
.register {
  width: 450px;
  margin: 0px auto;
  padding: 5px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 ;
  transition: all 2s ease-in;
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
}
/* common in both Login and Registration */
#email{
    margin-top: 50px;
}
.login  input, .register input{
    display: block;
    /* text-align: center; */
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    font-size: 25px;
    outline: white;
    border: none;
    border-bottom: 2px solid rgb(226, 221, 221);
    font-family: "Raleway",sans-serif;
    font-weight: lighter;
}
.login button, .register button{
    width: 85%;
    padding: 15px;
    background-color: rgb(9, 196, 133);
    border: none;
    font-family: "Raleway",sans-serif;
    font-weight: 600;
    color: white;
    font-size: 20px;
    cursor: pointer;
    margin-bottom: 30px;
}
.login input:focus, .register input:focus{
    outline: none;
    border-bottom: 2px solid rgb(9, 196, 133);
}
.login input::placeholder, .register input::placeholder{
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: lighter;
}
#cancel{
    float: right;
    border: none;
    margin: 0px;
    font-size: 20px;
    background-color: white;
    width: 20%;
    color: black;
    color: rgb(168, 165, 165);
}


.sidebar {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidebar a:hover {
  color: #f1f1f1;
}

.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

.openbtn {
  font-size: 20px;
  cursor: pointer;
  /* background-color: #111; */
  color: white;
  padding: 10px 15px;
  border: none;
}

.openbtn:hover {
  /* background-color: #444; */
}

#main {
  transition: margin-left .5s;
  padding: 16px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidebar {padding-top: 15px;}
  .sidebar a {font-size: 18px;}
}
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
