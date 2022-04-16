<template>
  <div>
    <div class="topline">
      <p>Brand Waali Quality. Bazaar Waali Deal!</p>
      <div class="link">
        <ul>
          <li>
            <a href="#">Impact@Snapdeal</a>
          </li>
          <li>
            <a href="#"> Cards</a>
          </li>
          <li>
            <a href="#">Center</a>
          </li>
          <li>
            <a href="#">On Snapdal</a>
          </li>
          <li>
            <a href="#"><i class="fa fa-book"></i>Download App</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav">
      <a class="LogoHeader" href="">
        <img
          title="Snapdeal"
          height="28"
          width="132"
          src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg"
        />
      </a>
      <div>
        <input type="search" placeholder="Search products & brand" />
        <button><i class="fa fa-search"></i>Search</button>
      </div>
      <div class="bord">
        <p>Cart<i class="fa fa-shopping-cart"></i></p>
        <p>Sign in<i class="fa fa-user-circle"></i></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: white;
}
.nav {
  height: 65px;
  padding: 0% 5%;
  overflow: visible !important;
  background: #f3034b;
  transform: translate(0, 0);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  opacity: 1;
  height: 72px;
  box-shadow: 0 0 4px rgb(0 0 0 / 20%);
}
button {
  background-color: #333;
  color: #fff;
  padding: 4px 30px;
  height: 38px;
  border: none;
}
.bord p {
  border-left: 1px solid rgba(26, 25, 25, 0.938);
  padding: 24px 25px;
}
i {
  margin: 1px 8px;
}
p,
li {
  padding: 3px 6px;
  border-radius: 2px;
  line-height: 22px;
  display: inline;
  position: relative;
  z-index: 1;
  color: white;
}
input {
  border: none;
  font-size: 14px;
  width: 813px;
  color: #909090;
  background: rgb(247, 244, 244);
  border-right: none;
  height: 37px;
  padding: 0 10px 0 32px;
  outline: none;
  text-overflow: ellipsis;
  border-radius: 2px 0px 0px 2px;
  font-family: "Gill Sans", sans-serif;
}
.link {
  display: flex;
}
.topline {
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  padding: 0% 5%;
  background-color: #ce013f !important;
  box-sizing: border-box;
  color: white;
  width: 100%;
  height: 30px;
}
ul {
  list-style: none;
  display: flex;
}
li {
  margin: 0px 5px;
}
@media screen and (max-width: 1500px) {
  input {
    width: 400px !important;
  }
}
@media screen and (max-width: 1000px) {
  input {
    width: 150px !important;
  }
}
</style>
