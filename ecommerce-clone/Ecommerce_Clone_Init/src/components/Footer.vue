<template>
  <div class="container">
    <div class="first">
      <div class="head-1">Get to Know Us</div>
      <ul>
        <li>
          <a href="">About Us</a>
        </li>
        <li>
          <a href="">Careers</a>
        </li>
        <li>
          <a href="">Press Releases</a>
        </li>
        <li>
          <a href="">Amazon Cares</a>
        </li>
        <li>
          <a href="">Gift a Smile</a>
        </li>
        <li>
          <a href="">Amazon Science</a>
        </li>
      </ul>
    </div>

    <div class="first">
      <div class="head-1">Connect with us</div>
      <ul>
        <li>
          <a href="">Facebook</a>
        </li>
        <li>
          <a href="">Twitter</a>
        </li>
        <li>
          <a href="">Instagram</a>
        </li>
      </ul>
    </div>

    <div class="first">
      <div class="head-1">Let Us Help You</div>
      <ul>
        <li>
          <a href="">COVID-19 and Amazon</a>
        </li>
        <li>
          <a href="">Your Account</a>
        </li>
        <li>
          <a href="">Returns Centre</a>
        </li>
        <li>
          <a href="">Amazon App Download</a>
        </li>
        <li>
          <a href="">Help</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-evenly;
    top: 1250px;
    margin-bottom: 0;
    padding-bottom: 0;
    background-color: #232f3e;
    min-width: 100%;
    position: absolute;
    color: #fff;
}

.head-1 {
    font-weight: 700;
}

a {
    color: white;
    text-decoration: none;
}
</style>