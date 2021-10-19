import { createApp } from "vue";
import { createStore } from "vuex";
import axios from "axios";
import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "./components/LandingPage.vue";
import ProductSection from "./components/ProductSection.vue";
import ProductDetail from "./components/ProductDetail.vue";
import App from "./App.vue";
const app = createApp(App);

const store = createStore({
  state() {
    return {
      all: [],
      item: [],
      cart: [],
    };
  },
  actions: {
    getProductById({ commit }, id) {
      axios.get("https://fakestoreapi.com/products/" + id).then((response) => {
        commit("setItem", response.data);
      });
    },
    getAllProducts({ commit }, category) {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        // console.log(response);
        // const products=[];
        console.log(category);
        const items = response.data.filter((x) => x.category == category);
        commit("setProducts", items);

        // state.products = response.data;
        // console.log(state.products);

        //   console.log(response.data);
      });
    },
    addProductToCart({ commit }) {
      commit("addToCart");
    },
  },
  mutations: {
    setProducts(state, products) {
      state.all = products;
      console.log(state.all);
    },
    setItem(state, item) {
      state.item = item;
      console.log(state.item);
    },
    addToCart(state) {
      state.cart.push(state.item);
      console.log(state.cart);
    },
  },
});
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      Path: "/",
      component: LandingPage,
    },
    {
      path: "/:category",
      name: "category",
      component: ProductSection,
      props: true,
    },
    {
      path: "/:category/:id",
      name: "details",
      props: true,
      component: ProductDetail,
    },
  ],
});
app.use(router);
app.use(store);
app.mount("#app");
