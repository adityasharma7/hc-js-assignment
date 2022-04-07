import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Registration_page from "../views/Registration_page";
import Client from "../views/Client";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/registration_page",
    name: "Registration_page",
    component: Registration_page,
  },
  {
    path: "/client",
    name: "Client",
    component: Client,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
