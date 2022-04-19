<template>
  <div>
    <h1>Welcome to My Website!</h1>
  </div>
</template>
<script>
export default {
  name: "Redirect",
  data() {
    return {
      token: localStorage.token,
    };
  },
  mounted() {
    console.log(this.token);
  },
};
</script>
<style scoped>
div {
  background: turquoise;
  padding: 446px 0px;
}
</style>

