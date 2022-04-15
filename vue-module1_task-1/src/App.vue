<template>
  <nav id="navbar-example2" class="navbar navbar-light bg-light px-3">
    <a class="navbar-brand ms-5 ms-5" href="#">MyApp</a>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link to="/" class="nav-link active" aria-current="page"
          >Home</router-link
        >
      </li>
      <li class="nav-item ms-4">
        <router-link
          :to="{ name: 'Login' }"
          class="nav-link active"
          aria-current="page"
          >Login</router-link
        >
      </li>
      <li class="nav-item ms-4">
        <router-link
          :to="{ name: 'SignUp' }"
          class="nav-link active"
          aria-current="page"
          >SignUp</router-link
        >
      </li>
    </ul>
  </nav>
  <br />
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
