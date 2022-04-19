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
        <label for="name" class="col-sm-2 col-form-label">Name:</label>
        <div class="col-sm-10">
          <input
            type="text"
            name="name"
            required
            class="form-control"
            id="name"
            v-model="name"
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
      <div class="data mb-3">
        <label for="First Name">First Name:</label>
        <input type="text" class="form-control" v-model="firstName" />
      </div>
      <div class="data mb-3">
        <label for="First Name">Last Name:</label>
        <input type="text" class="form-control" v-model="lastName" />
      </div>

      <div class="data mb-3">
        <label for="User Name">User Name:</label>
        <input type="text" class="form-control" v-model="userName" />
      </div>
      <div class="data mb-3">
        <label for="User Id">Email Id:</label> <br />
        <input type="email" class="form-control" v-model="email" />
      </div>
      <div class="data mb-3">
        <label for="Phone Number">Phone Number</label>
        <input type="tel" class="form-control" v-model="phoneNumber" />
      </div>
      <div class="data mb-3">
        <label for="Address Info">Address Info:</label>
      </div>
      <div>
        <div class="data mb-3">
          <label for="City">City:</label>
          <input type="text" class="form-control" v-model="city" />
        </div>
        <div class="data mb-3">
          <label for="zipcode">Zipcode:</label>
          <input type="text" class="form-control" v-model="zipcode" />
        </div>
      </div>
      <div class="data mb-3">
        <label for="Street">Street:</label>
        <input type="text" class="form-control" v-model="street" />
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
import axios from "axios";
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
      name: this.name,
      firstName: this.firstName,
      lastName: this.lastName,
      userName: this.userName,
      email: this.email,
      phoneNumber: this.phoneNumber,
      password: this.password,
      rePassword: this.rePassword,
      city: this.city,
      street: this.street,
      zipcode: this.zipcode,
    };
  },

  methods: {
    async validate(e) {
      e.preventDefault();

      const personData = {
        email: this.email,
        username: this.username,
        password: this.password,
        name: {
          firstname: this.firstname,
          lastname: this.lastName,
        },
        address: {
          city: this.city,
          street: this.street,
          number: 309,
          zipcode: this.zipcode,
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
        },
        phone: this.phoneNumber,
      };

      this.registerNewUser(personData);
    },
    async registerNewUser(personData) {
      const respone = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        body: JSON.stringify(personData),
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      });

      const dataRegistered = await respone.json();
      console.log(dataRegistered);
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