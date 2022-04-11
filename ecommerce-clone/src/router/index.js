import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Categories from "../views/Categories.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/categories",
    name: "categories",
    component: Categories,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
