<template>
<div>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/category">Categories</router-link>
  <router-view/> 

    <!-- Start Top Nav -->
 <nav class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
  <div class="container text-light">
      <div class="w-100 d-flex justify-content-between">
          <div>
              <i class="fa fa-envelope mx-2"></i>
              <a class="navbar-sm-brand text-light text-decoration-none" href="#">info@company.com</a>
              <i class="fa fa-phone mx-2"></i>
              <a class="navbar-sm-brand text-light text-decoration-none" href="#">010-000-0000</a>
          </div>
          <div>
              <a class="text-light" href="#" target="_blank" rel="sponsored"><i class="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
              <a class="text-light" href="#" target="_blank"><i class="fab fa-instagram fa-sm fa-fw me-2"></i></a>
              <a class="text-light" href="#" target="_blank"><i class="fab fa-twitter fa-sm fa-fw me-2"></i></a>
              <a class="text-light" href="#" target="_blank"><i class="fab fa-linkedin fa-sm fa-fw"></i></a>
          </div>
      </div>
  </div>
</nav>
<!-- Close Top Nav -->

<!-- Modal -->
<div class="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
      <div class="w-100 pt-1 mb-5 text-right">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form action="" method="get" class="modal-content modal-body border-0 p-0">
          <div class="input-group mb-2">
              <input type="text" class="form-control" id="inputModalSearch" name="q" placeholder="Search ...">
              <button type="submit" class="input-group-text bg-success text-light">
                  <i class="fa fa-fw fa-search text-white"></i>
              </button>
          </div>
      </form>
  </div>
</div>
</div>
</template>

<script>

//importing bootstrap 5 Modules
//
import bootstrap from 'bootstrap' 
// import "src/assets/Style.css";
// import "./Style.css";

export default {
  name: 'App',
  components:{
      bootstrap
  }
}
</script>

<style scoped>
body, ul, li, p, a, label, input, div {
    font-family: 'Roboto', sans-serif;
    font-size: 18px !important;
    font-weight: 300 !important;
  }

  .w-100{
    display: flex;
    background-color: black !important;
    }

  .h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 48px !important;
    font-weight: 200 !important;
  }
  .h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 30px !important;
    font-weight: 300;
  }
  .h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 22px !important;
  }
  /* General */
  .logo { font-weight: 500 !important;}
  .text-warning {  color: #ede861 !important;}
  .text-muted { color: #bcbcbc !important;}
  .text-success { color: #59ab6e !important;}
  .text-light { color: #cfd6e1 !important;}
  .bg-dark { background-color: #212934 !important;}
  .bg-light { background-color: #e9eef5 !important;}
  .bg-black { background-color: #1d242d !important;}
  .bg-success { background-color: #59ab6e !important;}
  .btn-success {
    background-color: #59ab6e !important;
    border-color: #56ae6c !important;
  }
  .pagination .page-link:hover {color: #000;}
  .pagination .page-link:hover, .pagination .page-link.active {
    background-color: #69bb7e;
    color: #fff;
  }
  /* Nav */
  #templatemo_nav_top { min-height: 40px;}
  #templatemo_nav_top * { font-size: 12px !important;}
  #templatemo_main_nav a { color: #212934;}
  #templatemo_main_nav a:hover { color: #69bb7e;}
  #templatemo_main_nav .navbar .nav-icon { margin-right: 20px;}
  
  /* Hero Carousel */
  #template-mo-jassa-hero-carousel { background: #efefef !important;}
  /* Accordion */
  .templatemo-accordion a { color: #000;}
  .templatemo-accordion a:hover { color: #333d4a;}
  /* Shop */
  .shop-top-menu a:hover { color: #69bb7e !important;}
  /* Product */
  .product-wap { box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.10);}
  .product-wap .product-color-dot.color-dot-red { background:#f71515;}
  .product-wap .product-color-dot.color-dot-blue { background:#6db4fe;}
  .product-wap .product-color-dot.color-dot-black { background:#000000;}
  .product-wap .product-color-dot.color-dot-light { background:#e0e0e0;}
  .product-wap .product-color-dot.color-dot-green { background:#0bff7e;}
  .card.product-wap .card .product-overlay {
    background: rgba(0,0,0,.2);
    visibility: hidden;
    opacity: 0;
    transition: .3s;
  }
  .card.product-wap:hover .card .product-overlay {
    visibility: visible;
    opacity: 1;
  }
  .card.product-wap a { color: #000;}
  #carousel-related-product .slick-slide:focus { outline: none !important;}
  #carousel-related-product .slick-dots li button:before {
    font-size: 15px;
    margin-top: 20px;
  }
  /* Brand */
  .brand-img {
    filter: grayscale(100%);
    opacity: 0.5;
    transition: .5s;
  }
  .brand-img:hover {
    filter: grayscale(0%);
    opacity: 1;
  }
  /* Carousel Hero */
  #template-mo-jassa-hero-carousel .carousel-indicators li {
    margin-top: -50px;
    background-color: #59ab6e;
  }
  #template-mo-jassa-hero-carousel .carousel-control-next i,
  #template-mo-jassa-hero-carousel .carousel-control-prev i {
    color: #59ab6e !important;
    font-size: 2.8em !important;
  }
  /* Carousel Brand */
  .tempaltemo-carousel .h1 {
    font-size: .5em !important;
    color: #000 !important;
  }
  /* Services */
  .services-icon-wap {transition: .3s;}
  .services-icon-wap:hover, .services-icon-wap:hover i {color: #fff;}
  .services-icon-wap:hover {background: #69bb7e;}
  /* Contact map */
  .leaflet-control a, .leaflet-control { font-size: 10px !important;}
  .form-control { border: 1px solid #e8e8e8;}
  /* Footer */
  #tempaltemo_footer a { 
    color: #dcdde1;
    display: grid;
  }
  #tempaltemo_footer a:hover { color: #68bb7d;}
  #tempaltemo_footer ul.footer-link-list li { padding-top: 10px;}
  #tempaltemo_footer ul.footer-icons li {
    width: 2.6em;
    height: 2.6em;
    line-height: 2.6em;
  }
  #tempaltemo_footer ul.footer-icons li:hover {
    background-color: #cfd6e1;
    transition: .5s;
  }
  #tempaltemo_footer ul.footer-icons li:hover i {
    color: #212934;
    transition: .5s;
  }
  #tempaltemo_footer .border-light { border-color: #2d343f !important;}
  /*
  // Extra small devices (portrait phones, less than 576px)
  // No media query since this is the default in Bootstrap
  */
  /* Small devices (landscape phones, 576px and up)*/
  .product-wap .h3, .product-wap li, .product-wap i, .product-wap p {
    font-size: 12px !important;
  }
  .product-wap .product-color-dot {
    width: 6px;
    height: 6px;
  }
  
  @media (min-width: 576px) {
    .tempaltemo-carousel .h1 { font-size: 1em !important;}
  }
  
  /*// Medium devices (tablets, 768px and up)*/
  @media (min-width: 768px) {
    #templatemo_main_nav .navbar-nav {max-width: 450px;}
   }
  
  /* Large devices (desktops, 992px and up)*/
  @media (min-width: 992px) {
    #templatemo_main_nav .navbar-nav {max-width: 550px;}
    #template-mo-jassa-hero-carousel .carousel-item {min-height: 30rem !important;}
    .product-wap .h3, .product-wap li, .product-wap i, .product-wap p {font-size: 18px !important;}
    .product-wap .product-color-dot {
      width: 12px;
      height: 12px;
    }
  }
  
  /* Extra large devices (large desktops, 1200px and up)*/
  @media (min-width: 1200px) {}
   #app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983; 
} 
</style>