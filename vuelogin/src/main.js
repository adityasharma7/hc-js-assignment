import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import wrapper from 'axios-cache-plugin'
import { createI18n } from 'vue-i18n'

let http = wrapper(axios, {
  maxCacheSize: 15
})
export default http;

const i18n = createI18n({
    locale: "hi",
    fallbackLocale: "en",
    messages: {
        en: {
            "userName": "User Name:",
            "Password": "Password",
             "Remember me":"Remember me",
             "FirstName:":"First Name:",
             "last Name:" : "last Name:",
             "Email address":"Email address:",
             "Confirm Password:" :"Confirm Password:",
             "Submit": "Submit",
             "I Read and Accept" : "I Read and Accept",
             "Register" : "Register",
             "Please fill you further information": "Please fill you further information"
        },
        hi: {
              "userName": "उपयोगकर्ता नाम",
              "Password" : "पासवर्ड",
              "Remember me": "मुझे याद करो",
               "First Name:": "पहला नाम:",
               "last Name:" : "अंतिम नाम:",
               "Email address:":"ईमेल पता:",
               "Confirm Password:": "पासवर्ड की पुष्टि करें",
               "Submit": "सबमिट करें",
               "I Read and Accept" : "मैं पढ़ता हूं और स्वीकार करता हूं",
               "Register": "रजिस्टर करें",
               "Please fill you further information" : "अधिक जानकारी के लिए कृपया इस पृष्ठ पर पूछताछ फ़ॉर्म को पूरा करें।"
    
        }
    }
})

createApp(App).use(router).use(i18n).mount('#app')

