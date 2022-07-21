import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '../Store'
import i18n from './i18n'
import axios from 'axios'

axios.interceptors.request.use((config) => {
  const data = localStorage.getItem('userdata')
	if(data[0].password){
    console.log("axiosinterceptor",data[0].passward)
		config.headers.common['Authorization'] =  'Bearer'+data[0].passward;
		config.headers['Content-Type'] = 'application/json';
	}
    return config;
},
 function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    console.log(response)
    return response;
  },
  
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

const app = createApp(App)

app.use(router)
app.use(store)
app.use(i18n)

app.mount('#app')
