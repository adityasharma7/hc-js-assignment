import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import wrapper from 'axios-cache-plugin'
 
let http = wrapper(axios, {
  maxCacheSize: 15
})
export default http

createApp(App).use(router).mount('#app')
