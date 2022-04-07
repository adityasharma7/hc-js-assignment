<template>
  <div>
    <router-view/>  
  </div> 
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

a {
  color: #2c3e50;
  text-decoration: none;
}

button {
  background-color: #2c3e50;
  border: none;
  padding: 10px 15px;
  color: #FFFFFF;
  cursor: pointer;
}

ul {
  list-style-type: none;
}

li {
  margin: 10px 15px;
}

.container {
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 10px 40px;
}
</style>
