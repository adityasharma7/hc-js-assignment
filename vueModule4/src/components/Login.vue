<template>
  <div>
    <h1 style="text-align: center; margin-top: 40px">Login Page</h1>

    <form>
      <label for="alreadyRe">Already Have An Account ?</label> <br />
      <fieldset>
        <legend style="font-weight: bold"><h2>SignIn</h2></legend>

        <label for="Username">Enter Username</label> <br />
        <input
          type="text"
          id="email"
          name="email"
          size="30"
          v-model="username"/> <br /> <br />

        <label for="password">Enter Password</label> <br />
        <input
          type="password"
          id="password"
          name="password"
          size="30"
          v-model="password"
        /><br /><br />
        <button type="button" class="btn btn-primary" @click="loginUser()">Login</button>
      </fieldset>
    </form>
  </div>
</template>
  
 

<script>
import axios from "axios";
export default {
  name: "Login",

  data() {
    return {
      username: "mor_2314",
      password: "83r5^_",
      userAccessToken : null
    };
  },

  methods: {
          async loginUser() {

            if(localStorage.token){
        const cardentials  = {
            username: this.username,
            password: this.password
        }
        
        const response = await axios.post('https://fakestoreapi.com/auth/login', cardentials)
        //  this.$router.push('/')

        localStorage.setItem('token', response.data.token)
          this.$router.push('/')
    }
    }
  },
//     userAuthentication(){
//         if(localStorage.token){
//             this.$router.push('/')
//         }
//     },
//     created() {
//      this.userAuthentication()
//   }


  
}
   

</script>



  
  <style>
form {
  text-align: center;
  margin-top: 40px;
  background-color: azure;
}
</style>