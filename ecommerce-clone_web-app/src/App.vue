<template>
  <div>
    <nav class="nav">
      <div class="nav-wrapper container">
        <img src="./assets/images/beautyicon.png" alt="" />
        <h2 href="#!" class="blogo">Fashion Gravity</h2>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"
          ><i class="material-icons">menu</i></a>

        <ul class="right hide-on-med-and-down nbt">
          <li>
            <router-link to="/" class="black-text" aria-current="page"
              ><a class="active" href="#home">home</a></router-link
            >
          </li>
          <li><router-link to="/category" aria-current="page"
              ><a href="#category">category</a></router-link
            ></li>
          <li><router-link to="/productdetail" aria-current="page"
              ><a class="white-text" href="#">Product Detail</a></router-link
            ></li>
            <li><router-link to="/signupview" aria-current="page"
              ><a class="white-text" href="#">SignUp</a></router-link
            ></li>
            <li><router-link to="/loginview" aria-current="page"
              ><a class="white-text" href="#">Login</a></router-link
            ></li>
          <li>
            <router-link to="/about" aria-current="page" 
              ><a href="#about">about</a></router-link
            >
          </li>
          <li>
            <a class="black-text" href=""
              ><i class="material-icons">search</i></a
            >
          </li>
          <li>
            <a class="black-text" href=""
              ><i class="material-icons">favorite</i></a
            >
          </li>
          <li>
            <a class="black-text" href=""
              ><i class="material-icons">shopping_cart</i></a
            >
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}
:root {
  --green: #27ae60;
  --black: #192a56;
  --light-color: #666;
  --box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--black);
}
body {
  background-image: url("./assets/images/bodybg1.gif");
}
.nav {
  background-color: rgba(30, 210, 201, 0.774);
  position: relative;
  z-index: 3;
  margin: 0px;
}
.blogo {
  color: #fff;
  display: inline-block;
  font-size: 2.1rem;
  padding: 0;
}
.nav img {
  border-radius: 100px;
  height: 3em;
  width: 3em;
  margin: 0px 1em 5px 0px;
}
nav a {
  font-weight: bold;
}

.col-1 {
  width: 8.33%;
}

.col-2 {
  width: 16.66%;
}

.col-3 {
  width: 25%;
}

.col-4 {
  width: 33.33%;
}

.col-5 {
  width: 41.66%;
}

.col-6 {
  width: 50%;
}

.col-7 {
  width: 58.33%;
}

.col-8 {
  width: 66.66%;
}

.col-9 {
  width: 75%;
}

.col-10 {
  width: 83.33%;
}

.col-11 {
  width: 91.66%;
}

.col-12 {
  width: 100%;
}

@media screen and (max-width: 1395px) {
  .col-l-1 {
    width: 8.33%;
  }
  .col-l-2 {
    width: 16.66%;
  }
  .col-l-3 {
    width: 25%;
  }
  .col-l-4 {
    width: 33.33%;
  }
  .col-l-5 {
    width: 41.66%;
  }
  .col-l-6 {
    width: 50%;
  }
  .col-l-7 {
    width: 58.33%;
  }
  .col-l-8 {
    width: 66.66%;
  }
  .col-l-9 {
    width: 75%;
  }
  .col-l-10 {
    width: 83.33%;
  }
  .col-l-11 {
    width: 91.66%;
  }
  .col-l-12 {
    width: 100%;
  }
}
@media screen and (max-width: 992px) {
  .col-m-1 {
    width: 8.33%;
  }
  .col-m-2 {
    width: 16.66%;
  }
  .col-m-3 {
    width: 25%;
  }
  .col-m-4 {
    width: 33.33%;
  }
  .col-m-5 {
    width: 41.66%;
  }
  .col-m-6 {
    width: 50%;
  }
  .col-m-7 {
    width: 58.33%;
  }
  .col-m-8 {
    width: 66.66%;
  }
  .col-m-9 {
    width: 75%;
  }
  .col-m-10 {
    width: 83.33%;
  }
  .col-m-11 {
    width: 91.66%;
  }
  .col-m-12 {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .col-s-1 {
    width: 8.33%;
  }
  .col-s-2 {
    width: 16.66%;
  }
  .col-s-3 {
    width: 25%;
  }
  .col-s-4 {
    width: 33.33%;
  }
  .col-s-5 {
    width: 41.66%;
  }
  .col-s-6 {
    width: 50%;
  }
  .col-s-7 {
    width: 58.33%;
  }
  .col-s-8 {
    width: 66.66%;
  }
  .col-s-9 {
    width: 75%;
  }
  .col-s-10 {
    width: 83.33%;
  }
  .col-s-11 {
    width: 91.66%;
  }
  .col-s-12 {
    width: 100%;
  }
  .catscroll {
    overflow-y: hidden;
    background-color: rgba(240, 248, 255, 0.418);
    height: fit-content;
  }
}

@media screen and (max-width: 600px) {
  .col-es-1 {
    width: 8.33%;
  }
  .col-es-2 {
    width: 16.66%;
  }
  .col-es-3 {
    width: 25%;
  }
  .col-es-4 {
    width: 33.33%;
  }
  .col-es-5 {
    width: 41.66%;
  }
  .col-es-6 {
    width: 50%;
  }
  .col-es-7 {
    width: 58.33%;
  }
  .col-es-8 {
    width: 66.66%;
  }
  .col-es-9 {
    width: 75%;
  }
  .col-es-10 {
    width: 83.33%;
  }
  .col-es-11 {
    width: 91.66%;
  }
  .col-es-12 {
    width: 100%;
  }
}
</style>
