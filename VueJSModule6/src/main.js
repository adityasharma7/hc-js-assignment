import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: "hi",
    fallbackLocale: "en",
    messages: {
        en: {
            home: 'Home',
            signIn: 'SignIn',
            userName: 'Username',
            password: 'Password',
            rememberMe: 'Remember Me'
        },
        hi: {
            home: 'घर',
            signIn: 'साइन इन करें',
            userName: 'उपयोगकर्ता नाम',
            password: 'पासवर्ड',
            rememberMe: 'मुझे याद रखें'
        }
    }
})

createApp(App).use(router).use(i18n).mount('#app')