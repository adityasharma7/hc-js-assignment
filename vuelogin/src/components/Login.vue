<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="text">User Name:</label>
        <input
          v-model="username"
          type="text"
          id="tname"
          class="form-control"
          placeholder="Name"
        />
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input
          type="password"
          v-model="password"
          class="form-control"
          placeholder="Enter password"
          id="pwd"
        />
      </div>
      <div class="form-group form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" /> Remember me
        </label>
      </div>
      <button @click.prevent="sentdata" type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</template>


<script>
import axios from "axios";
axios.interceptors.request.use((config) => {
  console.log(
    `${config.method.toUpperCase()} request sent to ${
      config.url
    } at ${new Date().getTime()}`
  )
  return config;
});

export default {
  name: "Login",
  data() {
    return {
      username: this.username,
      password: this.password,
    };
  },
  methods: {
    sentdata() {
      const credentials = {
        username: this.username,
        password: this.password,
      };
      let config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "niharika",
        },
      };

      axios
        .post("https://fakestoreapi.com/auth/login", credentials, config)
        .then((res) => {
          console.log(res.data.token);
          localStorage.token = res.data.token;
        this.$router.push("/");
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>

<style>
</style>