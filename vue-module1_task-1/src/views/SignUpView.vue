<template>
  <div class="container">
    <img class="icon" src="../assets/loginlogo1.png" />
    <!-- SignUp form -->
    <form action="">
      <h1 class="main_heading">SignUp</h1>
      <!-- Name -->
      <input
        type="text"
        class="all"
        name="name"
        placeholder="First name"
        v-model="signup.fname"
      /><span style="color: red">*</span>
      <input
        type="text"
        class="all"
        name="name"
        placeholder="Last name"
        v-model="signup.lname"
      /><span style="color: red">*</span>

      <!--email-->
      <input
        type="email"
        class="all"
        name="name"
        placeholder="Email"
        v-model="signup.email"
      /><span style="color: red">*</span>

      <!--password-->
      <input
        type="password"
        class="all"
        placeholder="Password"
        v-model="signup.password"
      /><span style="color: red">*</span>
      <h2 v-if="signup.show" style="color: red; font-size: 20px">
        The password confirmation does not match
      </h2>
      <input
        type="password"
        class="all"
        placeholder="Confirm password"
        v-model="signup.confirm_password"
      /><span style="color: red">*</span>

      <hr />

      <input type="submit" name="submit" value="SignUp" @click="signupfunc" />
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUpView",
  data() {
    return {
      signup: {
        fname: null,
        lname: null,
        fullname: null,
        email: null,
        password: null,
        confirm_password: null,
        show: false,
      }
    }
  },
  methods: {
    fullnam(fname, lname) {
      return fname.concat(" ", lname);
    },

    signupfunc(e) {
      this.signup.fullname = this.fullnam(this.signup.fname, this.signup.lname);
    //    password validation
        if (this.signup.password !== this.signup.confirm_password) {
        e.preventDefault();
        this.signup.show = true;
        console.warn("password confirmation does not match");
      } else { //update user credential
        const udataobj = {
          fname: this.signup.fullname,
          email: this.signup.email,
          password: this.signup.password,
        };
        let userdata;

        localStorage.getItem("userdata") === null ? (userdata = []) : (userdata = JSON.parse(localStorage.getItem("userdata")));
        userdata.push(udataobj);

        localStorage.setItem("userdata", JSON.stringify(userdata));
        userdata = JSON.parse(localStorage.getItem("userdata"));
        this.$router.push({ name: "Login" });
      }
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin: 15px 30px;
  width: 100%;
  height: 100%;
  background-image: url("../assets/login-bg.jpg");
}
[name="password_match"] {
  background-color: aqua;
}
.icon {
  border: 1px;
  border-radius: 30px;
  object-fit: fill;
  width: 100px;
  height: 100px;
}
.container {
  background-color: rgba(123, 240, 218, 0.366);
  padding: 30px;
  border: 1px solid rgb(199, 195, 195);
  border-radius: 10px;
  width: 650px;
  margin-left: 30vw;
}

.container label {
  font-weight: bold;
  color: antiquewhite;
}
.all {
  width: 100%;
  padding: 10px;
  margin: 10px;
  border: 1px solid lightgrey;
  border-radius: 30px;
}

fieldset {
  background-color: white;
  border: 0.5px solid lightgrey;
}
.main_heading {
  font-weight: bold;
  text-align: center;
  color: black;
}
input[type="text"] ::placeholder {
  color: brown;
}
input[type="submit"] {
  background-color: lightseagreen;
  color: black;
  padding: 5px;
  margin: 5px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  width: 100%;
}
input[type="submit"]:hover {
  background-color: darkcyan;
}
.container p {
  color: rgb(3, 3, 56);
  font-weight: bold;
}
.forget {
  color: black;
  margin-left: 13vw;
}
.forget:hover {
  color: rgb(3, 3, 56);
  font-weight: bold;
}
</style>
