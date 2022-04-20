<template>
  <Header />
  <div class="container">
    <h1 class="headtitle">Welcome to the Login!</h1>

    <form action="">
      <div class="data mb-3">
        <label for="exampleFormControlInput1" class="col-sm-2 col-form-label"
          >{{$t('User Name:')}}</label
        >
        <div class="col-sm-10">
          <input
            type="text"
            required
            class="form-control"
            v-model="username"
            placeholder="User name"
          />
        </div>
      </div>
      <div class="data mb-3">
        <label for="password" class="col-sm-2 col-form-label">{{$t("Password:")}}</label>
        <div class="col-sm-10">
          <input
            type="password"
            required
            name="password"
            class="form-control"
            v-model="password"
          />
        </div>
      </div>
      <div>
        <input
          class="form-check-input mt-0"
          type="checkbox"
          id="check"
          required
          value=""
        /><span>{{$t("Remember Me!")}}</span>
      </div>
      <hr />
      <input
        type="submit"
        @click="login"
        class="btn btn-primary mb-3"
        value="Login"
      />
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";

export default {
  name: "Login",
  components: {
    Header,
  },
  data() {
    return { username: this.username, password: this.password, display: true };
  },
  methods: {
    login(e) {
      e.preventDefault();
      const personData = {
        username: this.username,
        password: this.password,
      };

      this.loginUser(personData);
    },
    async loginUser(personData) {
      let config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      };
      axios
        .post(
          "https://fakestoreapi.com/auth/login",
          JSON.stringify(personData),
          config
        )
        .then((response) => {
          console.log(response.data.token);
          localStorage.token = JSON.stringify(response.data.token);
          this.$router.push({ name: "Redirect" });
        })
        .catch((e) => {
          alert(e);
        });
    },
  },
};
</script>

<style scoped>
.headtitle {
  text-align: center;
}
input {
  margin: 5px;
  margin-left: 25px;
}
h1 {
  margin-bottom: 40px;
}
.data {
  display: flex;
}
.container {
  width: fit-content;
  background: linear-gradient(lightblue, lightgreen);
  box-shadow: 5px 10px #888;
  padding: 60px;
  border: 1px solid black;
}
</style>