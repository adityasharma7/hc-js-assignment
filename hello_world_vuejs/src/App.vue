<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
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
