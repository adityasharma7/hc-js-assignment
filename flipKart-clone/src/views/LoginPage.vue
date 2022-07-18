<template>
  <div>
    <div class="container">
      <form action="#" class="form-section">
        <div>
          <label for="username">email:</label>
          <input type="text" name="userName" id="user-name" v-model="login.email">
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" name="password" id="password" v-model="login.password">
        </div>
        <input class="btn" type="submit" value="login" @click.prevent="loginfunc()" >
        <div>
          </div>
      </form>
          <a href="#">forget passsword</a>
          <a href="/SignUp">create new account </a>
    </div>
  <pre>{{login}}</pre>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";
axios.interceptors.request.use((config) => {
  console.log(`${config.method} request sent to [ ${config.url}]`); 
  return config;
});

export default {
  name:"LoginPage",
  data() {
    return {
        login: {
        email: null,
        password: null,
        show: false,
        showform: true,
      },
    }
  },
  methods: {
    loginfunc(e) {
    const userdata = JSON.parse(localStorage.getItem("userdata"));
    console.log(userdata);
    userdata.find((a) => {
      if (a.email == this.login.email) {
        if (a.password == this.login.password) {
          this.$router.push('/')
          console.log("getting Token...");
          
        }
      }else{
        alert("wrong input")
      } 
    });
  },
}
}
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 450px;
  justify-content: center;
  align-items: center;
}
.form-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-section div{
  padding: 1rem;
}
a{
  padding:2rem;
}
label{
  size:30rem;
}

</style>