import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home.vue"),
  },
  {
    path: "/signin",
    name: "Signin",
    component: () => import("@/views/signIn.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("@/views/signUp.vue"),
  },
  {
    path: "/:category_slug",
    name: "Category",
    component: () => import("@/views/category.vue"),
    props: true,
  },
  {
    path: "/product/:product_slug",
    name: "Product",
    component: () => import("@/views/product.vue"),
    props: true,
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("@/views/cart.vue"),
  },
  {
    path: "/cart/checkout",
    name: "Checkout",
    component: () => import("@/views/checkout.vue")
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("@/views/pageNotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
