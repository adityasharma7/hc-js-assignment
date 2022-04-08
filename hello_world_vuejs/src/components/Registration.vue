<template>
  <Header />
  <div class="container">
    <h1 class="headtitle">Welcome to the Registration!</h1>

    <form>
      <div class="data mb-3">
        <label for="exampleFormControlInput1" class="col-sm-2 col-form-label"
          >Email:</label
        >
        <div class="col-sm-10">
          <input
            type="email"
            required
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            v-model="email"
          />
        </div>
      </div>
      <div class="data mb-3">
        <label for="inputpassword" class="col-sm-2 col-form-label">Name:</label>
        <div class="col-sm-10">
          <input
            type="text"
            name="password"
            required
            class="form-control"
            id="password"
          />
        </div>
      </div>
      <div class="data mb-3">
        <label for="inputpassword" class="col-sm-2 col-form-label"
          >Password:</label
        >
        <div class="col-sm-10">
          <input
            type="password"
            name="password"
            class="form-control"
            v-model="password"
          />
        </div>
      </div>
      <div class="data mb-3">
        <label for="inputpassword" class="col-sm-2 col-form-label"
          >Confirmed Password:</label
        >
        <div class="col-sm-10">
          <input
            type="password"
            required
            name="password"
            class="form-control"
            v-model="confirmpassword"
          />
          <span class="error" v-if="show"
            >Please Enter the correct Password!</span
          >
        </div>
      </div>
      <div>
        <input
          class="form-check-input mt-0"
          type="checkbox"
          required
          value=""
        /><span>I accept that the data given by me is correct! </span>
      </div>
      <br />
      <input
        type="submit"
        @click="validate"
        class="btn btn-primary mb-3"
        value="Login"
      />
    </form>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  name: "Registration",
  components: {
    Header,
  },
  data() {
    return {
      show: false,
      display: true,
      confirmpassword: this.confirmpassword,
      password: this.password,
      email: this.email,
    };
  },

  methods: {
    validate(e) {
      if (this.password !== this.confirmpassword) {
        e.preventDefault();
        this.show = true;
      } else {
        localStorage.email = this.email;
        localStorage.password = this.password;
        this.$router.push({ name: "Login" });
      }
    },
  },
};
</script>

<style scoped>
#nav {
  display: flex;
  width: 100%;
  height: 50px;
}
.headtitle {
  text-align: center;
}
input {
  margin: 5px;
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
  padding: 40px;
  border: 1px solid black;
}
.error {
  color: red;
  background: rgb(241, 185, 175);
  padding: 10px;
}
</style>