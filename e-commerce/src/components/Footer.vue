<template>
  <!-- Start Footer -->
  <footer class="bg-dark" id="tempaltemo_footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4 pt-5">
          <h2 class="h2 text-success border-bottom pb-3 border-light logo">
            Jassa Shop
          </h2>
          <ul class="list-unstyled text-light footer-link-list">
            <li>
              <i class="fas fa-map-marker-alt fa-fw"></i>
              India
            </li>
            <li>
              <i class="fa fa-phone fa-fw"></i>
              <a class="text-decoration-none" href="#">000-000-0000</a>
            </li>
            <li>
              <i class="fa fa-envelope fa-fw"></i>
              <a class="text-decoration-none" href="#">info@company.com</a>
            </li>
          </ul>
        </div>

        <div class="col-md-4 pt-5">
          <h2 class="h2 text-light border-bottom pb-3 border-light">
            Products
          </h2>
          <ul class="list-unstyled text-light footer-link-list">
            <li><a class="text-decoration-none" href="#">Luxury</a></li>
            <li><a class="text-decoration-none" href="#">Sport Wear</a></li>
            <li><a class="text-decoration-none" href="#">Men's Shoes</a></li>
            <li><a class="text-decoration-none" href="#">Women's Shoes</a></li>
            <li><a class="text-decoration-none" href="#">Popular Dress</a></li>
            <li>
              <a class="text-decoration-none" href="#">Gym Accessories</a>
            </li>
            <li><a class="text-decoration-none" href="#">Sport Shoes</a></li>
          </ul>
        </div>

        <div class="col-md-4 pt-5">
          <h2 class="h2 text-light border-bottom pb-3 border-light">
            Further Info
          </h2>
          <ul class="list-unstyled text-light footer-link-list">
            <li><a class="li-elements" href="#">Home</a></li>
            <li><a class="li-elements" href="#">About Us</a></li>
            <li><a class="text-decoration-none" href="#">Shop Locations</a></li>
            <li><a class="text-decoration-none" href="#">FAQs</a></li>
            <li><a class="text-decoration-none" href="#">Contact</a></li>
          </ul>
        </div>
      </div>

      <div class="row text-light mb-4">
        <div class="col-12 mb-3">
          <div class="w-100 my-3 border-top border-light"></div>
        </div>
        <div class="col-auto me-auto">
          <ul class="list-inline text-left footer-icons">
            <li
              class="
                list-inline-item
                border border-light
                rounded-circle
                text-center
              "
            >
              <a
                class="text-light text-decoration-none"
                target="_blank"
                href="#"
                ><i class="fab fa-facebook-f fa-lg fa-fw"></i
              ></a>
            </li>
            <li
              class="
                list-inline-item
                border border-light
                rounded-circle
                text-center
              "
            >
              <a
                class="text-light text-decoration-none"
                target="_blank"
                href="#"
                ><i class="fab fa-instagram fa-lg fa-fw"></i
              ></a>
            </li>
            <li
              class="
                list-inline-item
                border border-light
                rounded-circle
                text-center
              "
            >
              <a
                class="text-light text-decoration-none"
                target="_blank"
                href="#"
                ><i class="fab fa-twitter fa-lg fa-fw"></i
              ></a>
            </li>
            <li
              class="
                list-inline-item
                border border-light
                rounded-circle
                text-center
              "
            >
              <a
                class="text-light text-decoration-none"
                target="_blank"
                href="#"
                ><i class="fab fa-linkedin fa-lg fa-fw"></i
              ></a>
            </li>
          </ul>
        </div>
        <div class="col-auto">
          <label class="sr-only" for="subscribeEmail">Email address</label>
          <div class="input-group mb-2">
            <input
              type="text"
              class="form-control bg-dark border-light"
              id="subscribeEmail"
              placeholder="Email address"
            />
            <div class="input-group-text btn-success text-light">Subscribe</div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-100 bg-black py-3">
      <div class="container">
        <div class="row pt-2">
          <div class="col-12">
            <p class="text-left text-light">
              Copyright &copy; 2021 Company Name | Designed by
              <a rel="sponsored" href="#" target="_blank">Jassa</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- End Footer -->
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.container {
  display: grid;
}

.li-elements {
  text-decoration: none;
}
#tempaltemo_footer a {
  color: #dcdde1;
}
#tempaltemo_footer a:hover {
  color: #68bb7d;
}
#tempaltemo_footer ul.footer-link-list li {
  padding-top: 10px;
}
#tempaltemo_footer ul.footer-icons li {
  width: 2.6em;
  height: 2.6em;
  line-height: 2.6em;
}
#tempaltemo_footer ul.footer-icons li:hover {
  background-color: #cfd6e1;
  transition: 0.5s;
}
#tempaltemo_footer ul.footer-icons li:hover i {
  color: #212934;
  transition: 0.5s;
}
#tempaltemo_footer .border-light {
  border-color: #2d343f !important;
}
</style>