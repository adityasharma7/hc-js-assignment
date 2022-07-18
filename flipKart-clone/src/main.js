import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '../Store'
import i18n from './i18n'
import wrapper from 'axios-cache-plugin'
import axios from 'axios'


let http = wrapper(axios, {maxCacheSize: 15, })
export default http

const app = createApp(App)

app.use(router)
app.use(store)
app.use(i18n)

app.mount('#app')
