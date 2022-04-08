<template>
  <Header />
  <div class="container">
    <h1 class="headtitle">Welcome to the Login!</h1>

    <form action="">
      <div class="data mb-3">
        <label for="exampleFormControlInput1" class="col-sm-2 col-form-label"
          >Email:</label
        >
        <div class="col-sm-10">
          <input
            type="email"
            required
            class="form-control"
            v-model="email"
            placeholder="name@example.com"
          />
        </div>
      </div>
      <div class="data mb-3">
        <label for="password" class="col-sm-2 col-form-label">Password: </label>
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
        /><span>Remember Me! </span>
      </div>
      <hr />
      <input
        type="submit"
        @click="loginuser"
        class="btn btn-primary mb-3"
        value="Login"
      />
    </form>
  </div>
</template>

<script>
import Header from "./Header.vue";

export default {
  name: "Login",
  components: {
    Header,
  },
  data() {
    return { email: this.email, password: this.password, display: true };
  },
  methods: {
    loginuser(e) {
      let eid = localStorage.email;
      let pass = localStorage.password;
      if (this.email === eid && this.password === pass) {
        this.$router.push({ name: "Redirect" });
      } else {
        e.preventDefault();
        alert("Not a valid user! Registered first.");
      }
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