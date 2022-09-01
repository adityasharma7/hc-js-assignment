import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import i18n  from "./locales/i18n";
const app = createApp(App);

app.use(router);

axios.interceptors.request.use(
  function (config) {
    config.headers.common["accessToken"] = localStorage.getItem("token");
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

app.use(i18n)

app.mount("#app");
