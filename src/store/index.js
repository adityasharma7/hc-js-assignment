import { createStore } from "vuex";
import firebase from "firebase/app";

import router from "../router";

export default createStore({
  state: {
    cart: {
      items: [],
    },
    isAuthenticated: false,
    user: null,
  },
  getters: {
    email: (state) => {
      if (state.user) {
        return state.user.email;
      } else {
        return null;
      }
    },
    isAuthenticated: (state) => state.isAuthenticated,
    cartItems: (state) => state.cart,
    cartCount: (state) => {
      state.cart.items.length
    }
  },
  mutations: {
    setAuth(state, payload) {
      state.isAuthenticated = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    addToCart(state, payload) {
      const exists = state.cart.items.filter(
        (i) => i.product.id === payload.product.id
      );
      if (exists.length) {
        exists.quantity =
          parseInt(exists.quantity) + parseInt(payload.quantity);
      } else {
        state.cart.items.push(payload);
      }
    },
    clearCart(state) {
      state.cart = { items: [] };
    },
  },
  actions: {
    checkAuth(context) {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          context.commit("setAuth", true);
          context.commit("setUser", user);
        } else {
          context.commit("setAuth", false);
        }
      });
    },

    logout() {
      firebase.auth().signOut();
      router.replace("/signin");
    },
  },
});
