<template>
  <div class="container h-100">
    <div class="row mt-5">
      <div class="col-md-6">
        <img
          src="@/assets/signin_image.png"
          alt=""
          class="
            img-fluid
            hero-img
            animate__animated animate__fadeIn animate__slow
          "
        />
      </div>

      <div class="col-md-6 m-auto">
        <form @submit.prevent="signIn" class="text-dark card card-body">
          <p class="text-center text-primary text-header">
            {{ $t("loginMsg") }}
          </p>
          <div class="form-group">
            <label for="email">{{ $t("email") }}</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Email"
              v-model.trim="email"
            />
          </div>

          <div class="form-group">
            <label for="password">{{ $t("password") }}</label>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              v-model.trim="password"
            />
          </div>

          <button type="submit" class="btn btn-primary btn-block">
            {{ $t("signin") }}
          </button>

          <router-link to="/signup" class="mt-2 link-dec">
            {{ $t("signupMsg") }}
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import { mapGetters } from "vuex";

export default {
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  watch: {
    isAuthenticated: function (newVal) {
      if (newVal) {
        return this.$router.replace("/");
      }
    },
  },
  methods: {
    signIn: function () {
      if (!this.email) return this.$swal("Please provide email");
      if (!this.password) return this.$swal("Please provide password");

      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
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