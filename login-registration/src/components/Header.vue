<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="bar flex container-fluid">
      <a class="navbar-brand" href="#"><h2>My App</h2></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="space collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'Registration' }" class="link"
              >{{$t('Registration')}}</router-link
            >
          </li>
          <br />
          <li class="nav-item">
            <router-link :to="{ name: 'Login' }" class="link">
              {{$t('Login')}}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>


<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
}
h2 {
  margin-top: 0px;
  margin-bottom: 15px;
}
li {
  text-align: right;
}
.bar {
  box-shadow: 0px 4px #888888;
}
a.router-link-exact-active {
  color: white;
  background: blue;
  padding: 2px;
  text-decoration: none;
  border: 1px solid lightblue;
  border-radius: 5px;
  padding: 10px;
  font-size: 25x;
}
.link {
  color: white;
  background: lightblue;
  padding: 2px;
  text-decoration: none;
  list-style: none;
  border: 1px solid lightblue;
  border-radius: 5px;
  margin: 5px;
  padding: 8px;
  font-size: 25x;
}
.container {
  margin-top: 100px;
}
.space {
  margin-left: 80%;
}
</style>

