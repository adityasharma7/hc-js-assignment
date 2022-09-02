import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import i18n from './locales/i18n'

import './assets/main.css'
import wrapper from 'axios-cache-plugin'

let http = wrapper(axios, {
    maxCacheSize: 15, // cached items amounts. if the number of cached items exceeds, the earliest cached item will be deleted. default number is 15.
    ttl: 60000, // time to live. if you set this option the cached item will be auto deleted after ttl(ms).
    excludeHeaders: true // should headers be ignored in cache key, helpful for ignoring tracking headers
})



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
  export default http
  app.use(i18n)

app.mount('#app')
