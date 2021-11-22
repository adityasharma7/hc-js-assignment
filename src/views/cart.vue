<template>
  <!-- Cart Page -->
  <div>
    <!-- Cart Title -->
    <div class="cart-title">
      <p>{{ $t("CART") }}</p>
    </div>

    <!-- Cart Box -->
    <div>
      <table v-if="cartTotalLength">
        <!-- Table Head -->
        <thead>
          <tr>
            <th>{{ $t("Product") }}</th>
            <th>{{ $t("Price") }}</th>
            <th>{{ $t("Quantity") }}</th>
            <th>{{ $t("Total") }}</th>
            <th></th>
          </tr>
        </thead>

        <!-- Table Body -->
        <tbody>
          <CartItem
            v-for="item in cart.items"
            v-bind:key="item.product.id"
            v-bind:initialItem="item"
            v-on:removeFromCart="removeFromCart"
          />
        </tbody>
      </table>
      <!-- Warning -->
      <p class="sorry-letter" v-else>
        {{ $t("emptyCart") }}
      </p>
    </div>

    <div class="summary-box">
      <h2>{{ $t("Summary") }}</h2>

      <strong>₹&nbsp;{{ cartTotalPrice.toFixed(2) }} , &nbsp;</strong>
      {{ cartTotalLength }} items

      <hr />

      <router-link
        v-if="cartTotalLength && isAuthenticated"
        to="/cart/checkout"
        class="button"
      >
        {{ $t("Proceed to checkout") }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "@/components/CartItem.vue";

export default {
  name: "Cart",
  components: {
    CartItem,
  },
  data() {
    return {
      cart: {
        items: [],
      },
      authData: true,
    };
  },
  mounted() {
    this.cart = this.$store.state.cart;
  },
  methods: {
    removeFromCart(item) {
      this.cart.items = this.cart.items.filter(
        (i) => i.product.id !== item.product.id
      );
    },
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),

    cartTotalLength() {
      return this.cart.items.reduce((acc, curVal) => {
        return (acc += curVal.quantity);
      }, 0);
    },
    cartTotalPrice() {
      return this.cart.items.reduce((acc, curVal) => {
        return (acc += curVal.product.price * curVal.quantity);
      }, 0);
    },
  },
};
</script>
<style scoped>
.cart-title {
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin: 10px 0px;
}
.sorry-letter {
  margin-top: 40px;
  text-align: center;
  font-weight: bold;
}

th {
  padding: 10px 50px;
}
.summary-box {
  padding: 50px;
}
.button {
  text-decoration: none;
}
</style>