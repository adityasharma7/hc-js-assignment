<template>
  <div>
    <div class="container">
      <form action="#" class="form-section" @submit.prevent="loginfunc()">
        <div>
          <label for="username">{{$t('Email')}}:</label>
          <input type="text" name="userName" id="user-name" v-model="email">
        </div>
        <div>
          <label for="password">{{$t('Password')}}:</label>
          <input type="password" name="password" id="password" v-model="password">
        </div>
        <input class="btn" type="submit" value="login"  >
        <div>
          </div>
      </form>
          <a href="#">forget passsword</a>
          <a href="/SignUp">create new account </a>
    </div>
  </div>
</template>

<script>
import router from "../router";
export default {
  name:"LoginPage",
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    loginfunc() {
    this.$store.dispatch('getUser')
    this.$store.state.userData.find((a) => {
      if (a.email == this.email) {
        if (a.password == this.password) { 
          this.$store.dispatch('getfackApi')         
          this.$router.push('/')
        }else{console.log("wrong1")}
      }else{
        console.log("wrong input")
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