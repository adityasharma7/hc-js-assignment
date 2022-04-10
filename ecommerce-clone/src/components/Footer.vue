<template>
  <footer class="grid">
    <div class="top flex">
      <div class="left grid">
        <div>
          <ul>
            <h4>ABOUT</h4>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Carrers</a></li>
            <li><a href="#">Flipkart Stories</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Flipkart Wholesale</a></li>
            <li><a href="#">Corporate Information</a></li>
          </ul>
        </div>
        <div>
          <ul>
            <h4>HELP</h4>
            <li><a href="#">Payments</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Cancellation & Returns</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Report Infringement</a></li>
          </ul>
        </div>
        <div>
          <ul>
            <h4>POLICY</h4>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">EPR Compliance</a></li>
          </ul>
        </div>
        <div>
          <ul>
            <h4>SOCIAL</h4>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div class="right grid">
        <ul>
          <h4>Mail Us:</h4>
          <li><a href="#">Flipkart Internet Private Limited,</a></li>
          <li><a href="#">Buildings Alyssa, Begonia &</a></li>
          <li><a href="#">Clove Embassy Tech Village,</a></li>
          <li><a href="#">Outer Ring Road, Devarabeesanahalli Village,</a></li>
          <li><a href="#">Bengaluru, 560103,</a></li>
          <li><a href="#">Karnataka, India</a></li>
        </ul>
        <ul>
          <h4>Registered Office Address:</h4>
          <li><a href="#">Flipkart Internet Private Limited,</a></li>
          <li><a href="#">Buildings Alyssa, Begonia &</a></li>
          <li><a href="#">Clove Embassy Tech Village,</a></li>
          <li><a href="#">Outer Ring Road, Devarabeesanahalli Village,</a></li>
          <li><a href="#">Karnataka, India</a></li>
          <li><a href="#">CIN : U51109KA2012PTC066107</a></li>
          <li>Telephone:<a href="#" class="blue">1800 202 9898</a></li>
        </ul>
      </div>
    </div>
    <div class="bottom">
      <ul class="flex">
        <li class="flex">
          <i class="fa-solid fa-bag-shopping"></i>
          <a href="#">Become a Seller</a>
        </li>
        <li class="flex">
          <i class="fa-solid fa-bag-shopping"></i> <a href="#">Advertise</a>
        </li>
        <li class="flex">
          <i class="fa-solid fa-bag-shopping"></i> <a href="#">Gift Cards</a>
        </li>
        <li class="flex">
          <i class="fa-solid fa-circle-question"></i>
          <a href="#">Help Center</a>
        </li>
        <li class="flex">© 2007-2022 Flipkart.com</li>
        <li class="flex">
          <img src="../assets/footer/payment.svg" alt="Footer Payment SVG" />
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  color: #ffffff;
  background-color: #182336;
  padding: 40px 50px 25px 50px;
  font-size: 13px;
  font-family: Arial;
}

footer h4 {
  margin-bottom: 15px;
  color: #878787;
}

.blue:hover {
  color: #0275d8;
}

footer a {
  color: #ffffff;
}

footer li {
  margin-bottom: 8px;
}

/* Footer Top */
.top a:hover {
  text-decoration: underline;
}

footer i {
  color: #ffb400;
  font-size: 20px;
  margin-right: 10px;
}

footer .top {
  margin-bottom: 20px;
  justify-content: space-between;
}

/* Top Left */
footer .top .left {
  grid-template-columns: repeat(4, 1fr);
  gap: 100px;
}

/* Top Right */
footer .top .right {
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
}

.top .right ul:nth-child(1) {
  border-left: 1px solid #878787;
  padding-left: 30px;
  height: fit-content;
}

/* Footer Bottom */
.bottom {
  border-top: 1px solid #878787;
}

.bottom .flex {
  padding-top: 15px;
  justify-content: space-evenly;
}

.bottom .flex li {
  align-items: center;
}
</style>