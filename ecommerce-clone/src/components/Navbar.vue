<template>
  <div>
    <div id="flipkart-navbar">
      <div class="container">
        <div class="row row1">
          <ul class="largenav pull-right">
            <li class="upper-links">
              <RouterLink class="router" to="/register">{{$t('register')}}</RouterLink>
            </li>
            <li v-if="!loggedIn" class="upper-links">
              <RouterLink class="router" to="/login">{{$t('login')}}</RouterLink>
            </li>
            <li v-else class="upper-links">
              <RouterLink class="router" to="/" @click="logoutUser()">{{$t('logout')}}</RouterLink>
            </li>
            <li class="upper-links">
              <a class="links" href="">
                <svg class="" width="16px" height="12px" style="overflow: visible;">
                  <path
                    d="M8.037 17.546c1.487 0 2.417-.93 2.417-2.417H5.62c0 1.486.93 2.415 2.417 2.415m5.315-6.463v-2.97h-.005c-.044-3.266-1.67-5.46-4.337-5.98v-.81C9.01.622 8.436.05 7.735.05 7.033.05 6.46.624 6.46 1.325v.808c-2.667.52-4.294 2.716-4.338 5.98h-.005v2.972l-1.843 1.42v1.376h14.92v-1.375l-1.842-1.42z"
                    fill="#fff"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div class="row row2">
          <div class="col-sm-2">
            <h2 style="margin:0px;"><span class="smallnav menu">flopkart</span></h2>
            <h1 style="margin:0px; font-weight: bolder;"><span class="largenav">
                <RouterLink class="router title" to="/"><i>
                    {{ $t('flopkart') }}
                  </i></RouterLink>
              </span></h1>
          </div>
          <div class="flipkart-navbar-search smallsearch col-sm-8 col-xs-11">
            <div class="row">
              <input style="color: #333" class="flipkart-navbar-input col-xs-11" type=""
                placeholder="Search for Products, Brands and more" name="">
              <button class="flipkart-navbar-button col-xs-1">
                <svg width="15px" height="15px">
                  <path
                    d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 ">
                  </path>
                </svg>
              </button>
            </div>
          </div>
          <div class="cart largenav col-sm-2">
            <a class="cart-button">
              <svg class="cart-svg " width="16 " height="16 " viewBox="0 0 16 16 ">
                <path
                  d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86 "
                  fill="#fff "></path>
              </svg> Cart
              <span class="item-number ">0</span>
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: null
    }
  },
  methods: {
    logoutUser() {
      if (localStorage.token) {
        localStorage.removeItem('token')
        localStorage.removeItem('loginStatus')
        alert("Logged out!")
      }
      this.$router.push('/login')
    }
  },
  created() {
    this.loggedIn = JSON.parse(localStorage.getItem('loginStatus'))
    console.log(this.loggedIn);
  }
}
</script>

<style scoped>
.router {
  text-decoration: none;
  color: white;
}

.router:hover {
  text-decoration: none;
  color: yellow;
}

#flipkart-navbar {
  background-color: #2874f0;
  color: #FFFFFF;
}

.row1 {
  padding-top: 10px;
  padding-right: 50px;
}

.row2 {
  padding-bottom: 20px;
}

.flipkart-navbar-input {
  padding: 11px 16px;
  border-radius: 2px 0 0 2px;
  border: 0 none;
  outline: 0 none;
  font-size: 15px;
}

.flipkart-navbar-button {
  background-color: #ffe11b;
  border: 1px solid #ffe11b;
  border-radius: 0 2px 2px 0;
  color: #565656;
  padding: 10px 0;
  height: 43px;
  cursor: pointer;
}

.cart-button {
  background-color: #2469d9;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .23), inset 1px 1px 0 0 hsla(0, 0%, 100%, .2);
  padding: 10px 0;
  text-align: center;
  height: 41px;
  border-radius: 2px;
  font-weight: 500;
  width: 120px;
  display: inline-block;
  color: #FFFFFF;
  text-decoration: none;
  color: inherit;
  border: none;
  outline: none;
}

.cart-button:hover {
  text-decoration: none;
  color: #fff;
  cursor: pointer;
}

.cart-svg {
  display: inline-block;
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin-right: 8px;
}

.item-number {
  border-radius: 3px;
  background-color: rgba(0, 0, 0, .1);
  height: 20px;
  padding: 3px 6px;
  font-weight: 500;
  display: inline-block;
  color: #fff;
  line-height: 12px;
  margin-left: 10px;
}

.upper-links {
  display: inline-block;
  padding: 0 11px;
  line-height: 23px;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0;
  color: inherit;
  border: none;
  outline: none;
  font-size: 16px;
  text-decoration: underline;
}


.links {
  color: #fff;
  text-decoration: none;
}

.links:hover {
  color: #fff;
  text-decoration: none;
}


.largenav {
  display: none;
}

.smallnav {
  display: block;
}

.smallsearch {
  margin-left: 15px;
  margin-top: 15px;
}

.menu {
  cursor: pointer;
}

@media screen and (min-width: 768px) {
  .largenav {
    display: block;
  }

  .smallnav {
    display: none;
  }

  .smallsearch {
    margin: 0px;
  }
}
</style>