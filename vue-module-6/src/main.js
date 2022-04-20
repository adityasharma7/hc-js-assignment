import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: "hi",
    fallbackLocale: 'en',
    messages: {
        en: {
            signIn: 'Sign In',
            getStarted: 'Get Started',
            home: 'Home',
            features: 'Features',
            pricing: 'Pricing',
            client: 'Client',
            english: 'English',
            hindi: 'Hindi',
        },
        hi: {
            signIn: 'साइन इन',
            getStarted: 'नया खाता बनाएँ',
            home: 'घर',
            features: 'विशेषताएँ',
            pricing: 'मूल्य निर्धारण',
            client: 'ग्राहक',
            english: 'अंग्रेज़ी',
            hindi: 'हिन्दी',
        }
    }
})

createApp(App).use(router).use(i18n).mount('#app')
