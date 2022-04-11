<template>
  <div class="ads grid">
    <a href="">
      <img src="../assets/Ads/add.png" alt="Ads Image" />
    </a>
    <a href="#">
      <img src="../assets/Ads/add2.png" alt="Ads Image" />
    </a>
    <a href="#">
      <img src="../assets/Ads/add3.png" alt="Ads Image" />
    </a>
  </div>
</template>

<script>
export default {
  name: "Ads3",
};
</script>

<style scoped>
.ads {
  margin: auto 20px;
  grid-template-columns: repeat(3, 1fr);
  background-color: #f0f3f6;
}

img {
  width: 100%;
  padding: 10px;
}
</style>