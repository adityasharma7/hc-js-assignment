<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class="container">
        <div class="heading">
          <h3>Sign Up</h3>
          <hr />
        </div>
        <form>
          <div class="form-group">
            <label for="">Email</label>
            <input v-model.trim="email" type="text" class="form-control" />
          </div>

          <div class="form-group">
            <label for="">Username</label>
            <input v-model.trim="username" type="text" class="form-control" />
          </div>

          <div class="form-group">
            <label for="">Password</label>
            <input
              type="password"
              class="form-control"
              v-model.trim="password"
            />
          </div>

          <div class="my-3">
            <button @click="signUpUser" type="submit" class="btn btn-primary">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    
    return {
      email: this.email,
      username: this.username,
      password: this.password,
      name: {
        firstname: "Shashwat",
        lastname: "Bangar",
      },
      address: {
        city: "kilcoole",
        street: "7835 new road",
        number: 3,
        zipcode: "12926-3874",
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
      },
      phone: "1-570-236-7033",

      
    };
  },

  methods: {
    signUpUser(event) {
      event.preventDefault();

      let preventCorsError = {
        headers: {
          "Content-Type": "application/json",
          Accept: "/*/",
        },
      };

      this.postData(preventCorsError);
    },

    postData(preventCorsError) {
      const credentials = {
        email: this.email,
        username: this.username,
        password: this.password,
        name: {
          firstname: this.firstname,
          lastname: this.lastname,
        },
        address: this.address,
        phone: this.phone,
      };

      axios
        .post(
          "https://fakestoreapi.com/users",
          credentials,
          preventCorsError
        )
        .then((res) => {
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

<style scoped>
</style>