import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import i18n from "@/plugins/i18n";
import FlagIcon from "vue-flag-icon";

//firebase
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./utils/config";
firebase.initializeApp(firebaseConfig);

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

store.dispatch("checkAuth");

const app = createApp(App);

app.use(VueSweetalert2);
app.use(store);
app.use(router);
app.use(i18n);
app.use(FlagIcon);
app.mount("#app");
