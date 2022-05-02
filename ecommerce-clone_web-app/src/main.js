import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import wrapper from 'axios-cache-plugin'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: 'hi',
    fallbackLocale: 'en',
    messages: {
        en: {
            signIn: 'SignIn',
            FirstName: 'First Name',
            LastName: 'Last Name',
            Email: 'Email',
            Password: 'Password',
            ConfirmPassword: 'Confirm Password'
        },
        hi: {
            signIn: 'साइन इन करें',
            FirstName: 'पहला नाम',
            LastName: 'उपनाम',
            Email: 'ईमेल',
            Password: 'पासवर्ड',
            ConfirmPassword: 'पासवर्ड की पुष्टि कीजिये'
        }

    }
})

let http = wrapper(axios, {
    maxCacheSize: 15, // cached items amounts. if the number of cached items exceeds, the earliest cached item will be deleted. default number is 15.
    ttl: 60000, // time to live. if you set this option the cached item will be auto deleted after ttl(ms).
    excludeHeaders: true // should headers be ignored in cache key, helpful for ignoring tracking headers
})
export default http


createApp(App).use(router).use(i18n).mount('#app')