<template>
  <div class="container h-100">
    <div class="row mt-5">
      <div class="col md-6 m-auto">
        <img
          src="@/assets/signup_image.svg"
          alt=""
          class="
            img-fluid
            hero-img
            animate__animated animate__fadeIn animate__slow
          "
        />
      </div>

      <div class="col-md-6 m-auto">
        <form @submit.prevent="signUp" class="text-dark card card-body">
          <p class="text-center text-primary text-header">
            {{ $t("signupMsg") }}
          </p>

          <div class="form-group">
            <label for="forEmail">{{ $t("email") }}</label>
            <input
              type="email"
              class="form-control"
              id="forEmail"
              aria-describedby="emailHelp"
              placeholder="Email"
              v-model.trim="email"
            />
          </div>

          <div class="form-group">
            <label for="forPassword">{{ $t("password") }}</label>
            <input
              type="password"
              class="form-control"
              id="forPassword"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            {{ $t("signup") }}
          </button>

          <router-link to="/signin" class="mt-2 link-dec">
            {{ $t("loginMsg") }}
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase/app";

export default {
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signUp: function () {
      if (!this.email) return this.$swal("Please provide email");
      if (!this.password) return this.$swal("Please provide password");

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((res) => {
          console.log(res);
          this.$router.push({ path: "/" });
        })
        .catch((err) => {
          this.$swal({
            icon: "error",
            title: "Ops",
            text: err.message,
          });
        });
    },
  },
};
</script>
<style scoped>
.hero-img {
  height: 400px;
  width: 80%;
}
.link-dec {
  text-decoration: none;
}
.text-header {
  padding-bottom: 5px;
  font-weight: bold;
  text-transform: uppercase;
  border-bottom: 2px solid blue;
  font-size: 20px;
}
</style>