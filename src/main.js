import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import VueSessionStorage from "vue-sessionstorage"

createApp(App).use(router,VueSessionStorage).mount('#app')
