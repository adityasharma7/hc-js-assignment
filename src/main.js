import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";



const ap=createApp(App);
ap.use(router);

ap.mount("#app");