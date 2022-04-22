<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class="container">
        <div class="heading">
          <h3>{{ $t('signIn') }}</h3>
          <hr />
        </div>
        <form>
          <div class="form-group">
            <label>{{ $t('userName') }}</label>
            <input type="text" class="form-control" v-model="username" />
          </div>

          <div class="form-group">
            <label>{{ $t('password') }}</label>
            <input type="password" class="form-control" v-model="password" />
          </div>

        <div>
         <input class="form-check-input mt-0" type="checkbox" id="check" required value=""/>
         <span>{{ $t('rememberMe') }}</span>
        </div>

          <div class="my-3">
            <button @click="loginUser" type="submit" class="btn btn-primary">{{ $t('signIn') }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Home from "../views/Home.vue";

axios.interceptors.request.use(config => {
  console.log(
    `${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`
  );
  return config;
})

export default {
  data() {
    return {
      username: this.username,
      password: this.password,
    };
  },

  methods: {
    loginUser(event) {
      event.preventDefault();
        
      let config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: 'sometoken'
        }, 
      };

      this.postData(config)
    },

    postData(config) {
      const credentials = {
        username: this.username,
        password: this.password
      }

      axios.post(
        "https://fakestoreapi.com/auth/login",
        credentials,
        config
      ).then((res) => {
        localStorage.token = res.data.token;


        this.$router.push('/');
        
      }).catch((err) => {
        alert(err);
      })
    },


    getData() {
      axios.get(
        "https://fakestoreapi.com/products"
      ).then((response) => console.log(response.data))
      .catch((err) => console.log(err.response));
    }
  },


};
</script>

<style>
.error {
  color: red;
}
</style>