<template>
 <div>
   <router-view/>
 </div>
</template>
<script>

import Home from "./views/Home.vue"

export default {
  name: "App",
  componets:{
    Home,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:  "Gill Sans",sans-serif;
}
body{
  background: #f7f7f7;
}
</style>
