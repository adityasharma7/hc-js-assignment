<template>
  <div class="dropdown-content">
    <div class="signUp flex">
      <p>New Customer?</p>
      <a href="#">Sign Up</a>
    </div>
    <div class="flex">
      <i class="fa-solid fa-circle-user"></i>
      <p>My Profile</p>
    </div>
    <div class="flex">
      <i class="fa-brands fa-amazon-pay"></i>
      <p>Flipkart Plus Zone</p>
    </div>
    <div class="flex">
      <i class="fa-brands fa-google-wallet"></i>
      <p>Orders</p>
    </div>
    <div class="flex">
      <i class="fa-solid fa-heart"></i>
      <p>Wishlist</p>
    </div>
    <div class="flex">
      <i class="fa-duotone fa-road-circle-check"></i>
      <p>Rewards</p>
    </div>
    <div class="flex">
      <i class="fa-solid fa-gift"></i>
      <p>Gift Cards</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
};
</script>

<style>
/* Drop Down */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 50px;
  left: -70px;
  background-color: #fff;
  min-width: 230px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}

.dropdown-content::after {
  content: "";
  position: absolute;
  height: 10px;
  width: 0;
  left: 46%;
  top: -34px;
  border: 12px solid transparent;
  border-bottom: 12px solid #fff;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content .flex {
  align-items: center;
  padding: 13px 0;
  font-size: 14px;
  font-weight: normal;
  border-bottom: 1px solid rgb(242, 239, 239);
  transition: backgroound-color 1.4s ease;
}

.dropdown-content .flex:hover {
  background-color: #f4f8fb;
}

.dropdown-content i {
  margin: 0 13px;
}

.dropdown-content p {
  color: #333;
}

/* Sign Up */
.signUp {
  justify-content: space-around;
}

.signUp p {
  font-weight: bold;
  padding: 2px 0px;
}

.signUp a:hover {
  color: #0275d8;
  text-decoration: underline;
}
</style>