import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "./components/LandingPage.vue";
import App from "./App.vue";
const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      Path: "/",
      component: LandingPage,
    },
  ],
});
app.use(router);
app.mount("#app");
