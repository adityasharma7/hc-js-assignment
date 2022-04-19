import { createRouter, createWebHistory } from 'vue-router'
import LoginPg from '@/components/LoginPg.vue'
import RegistrationPg from '@/components/RegistrationPg.vue'
import HomeView from '@/views/HomeView.vue'


const routes = [
  {
    path: '/LoginPg',
    name: 'LoginPg',
    component: LoginPg
  },
  {
    path: '/RegistrationPg',
    name: 'RegistrationPg',
    component: RegistrationPg
  },
{
  path: '/HomeView',
  name: 'HomeView',
  component: HomeView
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
