<template>
  <center class="center-block mt-5">
    <h3 class="error">{{ $t("error") }}</h3>
    <h3 class="lead error">{{ $t("pageNotFound") }}</h3>
  </center>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style>
.error {
  font-weight: bold;
}
</style>