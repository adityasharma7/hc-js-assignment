import { createRouter, createWebHistory } from 'vue-router'
import App from '/home/kanchan/Learning/HotwaxTraining/hc-js-assignment/VueTask2/VueTask2/src/App.vue'
import Login from '/home/kanchan/Learning/HotwaxTraining/hc-js-assignment/VueTask2/VueTask2/src/components/Login.vue'
import SignUp from '/home/kanchan/Learning/HotwaxTraining/hc-js-assignment/VueTask2/VueTask2/src/components/SignUp.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    
  ]
})


export default router
