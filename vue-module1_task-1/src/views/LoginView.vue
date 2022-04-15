<template>
  <div class="container">
    <!-- login form  -->
    <form action="" v-if="this.login.showform">
      <img class="icon" alt="img" src="../assets/loginlogo1.png" />
      <h1 class="main_heading">Login</h1>
      <p v-if="login.show" style="color: red; font-size: 20px">
        login credentials is invaild <br />
        please fill correct login credentials
      </p>
      <!--email-->
      <input
        type="text"
        id="email"
        class="all"
        name="name"
        required
        placeholder="Email"
        v-model="login.email"
      /><span style="color: red">*</span>

      <!--password-->

      <input
        type="password"
        id="pas"
        class="all"
        placeholder="password"
        v-model="login.password"
      /><span style="color: red">*</span>
      <hr />

      <input type="submit" name="submit" value="Login" @click="loginfunc" />
      <p>
        <input type="checkbox" /> Remember Me
        <a href="" class="forget">Forget</a> password
      </p>

    </form>

    <!-- welcome view -->
    <div v-if="!this.login.showform">
      <img class="icon" alt="img" src="../assets/bgwelcome.jpg" />
      <h1 style="color: black; font-size: 40px">
        Hello! <b>{{ this.login.fullname }}</b>
      </h1>
      <h2>Welcome To My Vue App</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      login: {
        email: null,
        password: null,
        show: false,
        showform: true,
        fullname: null,
      },
    };
  },
  methods: {
    loginfunc(e) {
      
      const userdata = JSON.parse(localStorage.getItem("userdata"));
      
      userdata.find((a) => {
        if (a.email == this.login.email) {
          if (a.password == this.login.password) {
            this.login.showform = false;
            this.login.fullname = a.fname;
          } else {
            e.preventDefault();
            this.login.show = true;
          }
        }else
        {e.preventDefault();
            this.login.show = true;}
      });
    }
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
.icon {
  border: 1px;
  border-radius: 30px;
  object-fit: fill;
  width: 100px;
  height: 100px;
}
.container {
  background-color: rgba(123, 240, 218, 0.193);
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
