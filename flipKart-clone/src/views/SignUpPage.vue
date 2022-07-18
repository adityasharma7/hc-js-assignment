<template>
  <div>
    <div class="container">
      <div>
        <h1>{{$t('signUp')}}</h1>
       <form>
      <div>
        <label for="userName">{{$t('UserName')}}</label>
        <input type="text" v-model="signUp.userName">
      </div>
      <div>
        <label for="email">{{$t('Email')}}</label>
        <input type="email" v-model="signUp.email">
      </div>
      <div>
        <label for="password">{{$t('Password')}}</label>
        <input type="password" name="password" v-model="signUp.password">
      </div>
      <div>  
        <label for="confirmpassword">{{$t('ConfirmPassword')}}</label>
        <input type="password" name="confirmpassword" v-model="signUp.confirmPassward">
        </div>
         <input  type="submit" value="SignUp" @click.prevent="signUpFunc()">
       </form>
      </div>
      <div>
        <p>hava an account </p>
        <a href="/login">Login</a>
      </div>
    </div>
    <pre>{{signUp}}</pre>
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
    signUpFunc() {
      if(this.signUp.userName === null && this.signUp.email === null && this.signUp.password === null && this.confirmPassward === null) {
         alert("all must be filled ")
         console.log(this.signUp);
      } else {
        if (false) {   //this.signUp.password !== this.signUp.confirmPassword
          console.log("h1")
          alert("password confirmation does not match");
        } else {
        //update user credential
          const updataobj = {
          userName: this.signUp.userName,
          email: this.signUp.email,
          password: this.signUp.password,
          };
          let userdata;
          localStorage.getItem("userdata") === null ? (userdata = []):(userdata = JSON.parse(localStorage.getItem("userdata")));
          userdata.push(updataobj);
          localStorage.setItem("userdata", JSON.stringify(userdata));
          userdata = JSON.parse(localStorage.getItem("userdata"));
          this.$router.push({ name: "login" });
          console.log("h2")
        }
      }
    }
  }  

  }
</script>

<style scoped>
.container{
  width:100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}

</style>