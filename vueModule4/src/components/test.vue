<template>
  
</template>

<script>
export default {

}

fetch('http://example.com/movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));
</script>

<style>

</style>