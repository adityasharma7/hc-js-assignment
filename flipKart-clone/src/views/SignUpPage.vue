<template>
  <div>
    <div class="container">
      <div>
       <form>
      <div>
        <label for="userName">UserName</label>
        <input type="text">
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email">
      </div>
      <div>
        <label for="password">password</label>
        <input type="password" name="password">
      </div>
      <div>  
        <label for="confirmpassword">Confirm password</label>
        <input type="password" name="confirmpassword">
        </div>
         <input type="submit" value="SignUp" @click="signUpFunc">
       </form>
      </div>
      <div>
        <p>hava an account </p>
        <a href="/login">Login</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data(){
    return {
      signUp:{
        userName: null,
        email: null,
        password: null,
        confirmPassward: null,
      }
    }
  },
  methods: {
    signUpFunc(e) {
      if(this.userName === null && this.email === null && this.password === null &&this.confirmPassward === null) {
         alert("all must be filled ")
      }
    }
  }
  

}
</script>

<style>

</style>