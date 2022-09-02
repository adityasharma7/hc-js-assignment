import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import './assets/main.css'

const app = createApp(App)

app.use(router)

axios.interceptors.request.use(
    function (config) {
      config.headers.common["userAccessToken"] = localStorage.getItem("token");
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );


app.mount('#app')
