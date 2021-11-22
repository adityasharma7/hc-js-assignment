<template>
  <nav class="navbar navbar-dark bg-secondary nav-class">
    <!-- Brand Logo -->
    <router-link class="navbar-brand" to="/">
      <strong> @niket's </strong>
    </router-link>

    <!-- Search Bar -->
    <div class="mt-2"><Searcher /></div>

    <!-- Products Section -->
    <!-- Cloths Drop Down -->
    <div class="dropdown">
      <span class="navbar-text text-white mr-3 drop-ele">
        {{ $t("cloths") }}
      </span>
      <div class="dropdown-content">
        <router-link
          class="navbar-text"
          :to="{ name: 'Category', params: { category_slug: men } }"
          :key="$route.path"
        >
          {{ $t("mens") }}
        </router-link>
        <router-link
          class="navbar-text"
          :to="{ name: 'Category', params: { category_slug: women } }"
          :key="$route.path"
        >
          {{ $t("womens") }}
        </router-link>
      </div>
    </div>
    <!-- Other Products -->
    <div>
      <router-link
        class="
          navbar-text
          text-white
          mr-5
          text-decoration-none
          font-weight-bold
        "
        :to="{
          name: 'Category',
          params: { category_slug: 'electronics' },
        }"
        :key="$route.path"
      >
        {{ $t("electronics") }}
      </router-link>

      <router-link
        class="
          navbar-text
          text-white
          mr-3
          text-decoration-none
          font-weight-bold
        "
        :to="{
          name: 'Category',
          params: { category_slug: 'jewelery' },
        }"
        :key="$route.path"
      >
        {{ $t("jewelery") }}
      </router-link>
    </div>
    <!-- Authentication Section -->
    <div v-if="!isAuthenticated">
      <router-link class="btn btn-primary mr-4" tag="button" to="/signin">
        {{ $t("signin") }}
      </router-link>
      <router-link class="btn btn-primary mr-2" tag="button" to="/signup">
        {{ $t("signup") }}
      </router-link>
    </div>
    <!-- Logout Section -->
    <div v-else>
      <span class="navbar-text text-white mr-3 font-weight-bold">{{
        email
      }}</span>
      <button class="btn btn-danger mr-2 mb-1" type="button" @click="logout">
        {{ $t("logout") }}
      </button>
    </div>
    <!-- Cart Section -->
    <div class="addToCart">
      <router-link class="btn btn-success" tag="button" to="/cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="18"
          fill="currentColor"
          class="bi bi-cart"
          viewBox="0 1 16 16"
        >
          <path
            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
          />
        </svg>
        {{ $t("cart") }} ({{ cartCount() }})
      </router-link>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Searcher from "@/components/Searcher.vue";

export default {
  name: "NavBar",
  data() {
    return {
      cartNumber: 0,
      men: "men's clothing",
      women: "women's clothing",
    };
  },
  components: {
    Searcher,
  },
  computed: {
    ...mapGetters(["email", "isAuthenticated", "cartItems"]),
  },
  methods: {
    ...mapActions(["logout"]),
    cartCount() {
      let totalCount = 0;
      this.cartItems.items.forEach((item) => (totalCount += item.quantity));
      return totalCount;
    },
  },
};
</script>


<style scoped>
.nav-class {
  display: flex;
}
.drop-ele {
  cursor: pointer;
  font-weight: bold;
}

.dropdown-content {
  visibility: hidden;
  position: absolute;
  margin-top: 10px;
  background-color: #cad5e2;
  min-width: 250px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  transition: 0.25s;
}

.dropdown-content > a {
  color: black;
  font-size: 15px;
  font-weight: bold;
  padding: 5px 10px;
  text-decoration: none;
  display: block;
}

.dropdown-content > a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  visibility: visible;
  transition-delay: 0s;
}
</style>