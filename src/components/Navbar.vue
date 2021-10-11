<template>
<div id="navigation">
    <router-link to="/">
         <img id="logo-image" src="https://pbs.twimg.com/profile_images/1192434574577610752/NyX82InT_400x400.jpg" alt="">
    </router-link>
    <div id="list">
        <nav>
            <div>
                <!-- <a href="">WOMEN</a> -->
                <router-link :to=" {name: 'ProductCategoryPage', params: { category: women } }" :key="$route.path">WOMEN</router-link>
            </div>
            <div>
                <!-- <a href="">MEN</a> -->
                <router-link :to=" {name: 'ProductCategoryPage', params: { category: men } }" :key="$route.path">MEN</router-link>
            </div>
            <div>
                <!-- <a href="">GEAR</a> -->
                <router-link :to=" {name: 'ProductCategoryPage', params: { category: 'jewelery' } }" :key="$route.path">JEWELLERY</router-link>
            </div>
            <div>
                <!-- <a href="">TRAINING</a> -->
                <router-link :to=" {name: 'ProductCategoryPage', params: { category: 'electronics' } }" :key="$route.path">ELECTRONICS</router-link>
            </div>
        </nav>
    </div>
    <div id="search">
            <form class="example">
                <input type="text" placeholder="Search.." name="search">
                <button type="submit"><i class="fa fa-search fa-1x"></i></button>
            </form>
    </div>
    <div id="right">
        <a href="" @click.prevent="userInfo"><img src="https://static.thenounproject.com/png/2014807-200.png" alt=""></a>
        <a href=""><img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt=""></a>
    </div>
</div>




<transition name="modal">
      <div v-if="isLogin">
        <div class="overlay" @click.self="isLogin = false;">
          <div class="login">
              <button id="cancel" @click="isLogin = false">X</button>
              <input id="email" type="Email" placeholder="Your Email" v-model="loginEmail">  
              <input type="password" placeholder="Password" v-model="loginPassword">
              <input type="checkbox" id="checkbox">
              <label for="">Remember Me</label>
              <button @click="login">LOGIN</button>
              <a href="">Forgotten Password</a>
              <h2>Don't You have an account?</h2>
            <button @click="isRegister = !isRegister; isLogin = !isLogin">Register Now</button>
          </div>
        </div>
      </div>
</transition>


<transition name="modal">
      <div v-if="isRegister">
        <div class="overlay" @click.self="isRegister = false;">
          <div class="register">
            <button id="cancel" @click="isRegister = false">X</button>
            <input id="email" type="email" placeholder="Your Email" v-model="registerEmail">
            <input type="text" placeholder="First Name" v-model="registerFirstName">
            <input type="text" placeholder="Last Name" v-model="registerLastName">
            <input type="password" placeholder="Password" v-model="registerPassword">
            <button @click="register">CREATE AN ACCOUNT</button>
            <h2>Already have a Account?</h2>
            <button @click="isLogin = !isLogin; isRegister = !isRegister">Login Now</button>
            <a href=""></a>
          </div>
        </div>
      </div>
</transition>  




</template>

<script>
import axios from 'axios'

export default {
    name: "Navbar",
    data(){
        return {
            men: "men's clothing",
            women: "women's clothing",
            isLogin: false,
            isRegister: false,
            loginEmail:'',
            loginPassword:'',
            registerEmail:'',
            registerFirstName:'',
            registerLastName:'',
            registerPassword:''

        }
    },
    methods:{
        register(){
            if(this.registerEmail=='' || this.registerFirstName=='' || this.registerLastName=='' || this.registerPassword==''){
                alert("Please fill all the fields properly")
            }
            else{
                axios.post('http://localhost:3000/user',{
                    firstName:this.registerFirstName,
                    lastName:this.registerLastName,
                    email:this.registerEmail,
                    password:this.registerPassword
                })

                alert('Sign Up done Succesfully')
                this.registerEmail=''
                this.registerFirstName=''
                this.registerLastName=''
                this.registerPassword=''
                this.isRegister = false
                this.isLogin = true
            }
        },
        async login(){
            let result = await axios.get(
                `http://localhost:3000/user?email=${this.loginEmail}&password=${this.loginPassword}`
            )

            if(result.status==200 && result.data.length>0){
                this.loginEmail=''
                this.loginPassword=''
                localStorage.setItem('user-info',JSON.stringify(result.data[0]));
                this.$router.push({name:'HomePage'})
                alert('Logged In Succesfully');
                this.isLogin = false
            }
            else{
                this.loginEmail=''
                this.loginPassword=''
                alert('Please Enter Correct Data')
            }
        },
        userInfo(){
            // if localstorage is empty and session storage is empty then opem modals 
            // else open user profile
            if(localStorage.getItem('user-info')){
                this.$router.push({name:'UserProfile'})
            }
            else{
                this.isLogin = true
            }
        }
    }
}
</script>

<style scoped>

#navigation{
    font-family: "Raleway" ,sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 15px;
    color: darkgray;
    height: auto;
}

#logo-image{
    height: 60px;
    width: 60px;
    display: inline-block;
    position: absolute;
}

#list{
    display: inline-block;
    margin-left: 100px;
    padding: 10px;
}

nav div{
    display: inline-block;
    padding: 10px;
    margin-right: 30px;
}

nav div a{
    text-decoration: none;
    color: rgb(114, 110, 110);
}

#search{
    display: inline-block;
    text-decoration-line: underline;
    border-bottom: 1px solid black;
    padding: 10px;
    padding-top: 0px;
    margin-left: 150px;
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
    float: right;
    margin-top: 8px;
    padding: 10px;
}

#right a img{
    margin-left: 35px;
    height: 25px;
    width: 25px;
}



/* using the Modals */


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


/* Login Page */


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

/* button {
  padding: 7px;
  margin-top: 10px;
  background-color: green;
  color: white;
  font-size: 1.1rem;
} */


</style>