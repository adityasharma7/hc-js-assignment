import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/Components/HomePage.vue';
import SearchPage from '@/Components/SearchPage.vue'
import NotificationPage from '@/Components/NotificationPage.vue'
import MessagePage from '@/Components/MessagePage.vue'



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/search',
    name: 'search',
    component: SearchPage
  },
  {
    path: '/notification',
    name: 'notification',
    component: NotificationPage
  },
  {
    path: '/message',
    name: 'message',
    component: MessagePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
