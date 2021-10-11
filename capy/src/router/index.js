import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Category from "@/views/Category/Category.vue";
import Categorydetail from "@/views/Category/Categorydetail.vue";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/:category",
    name: "product",
    component: Category,
    props: true,
  } ,{
    path: "/category/:category/:id",
    name: "singleproduct",
    component: Categorydetail,
    props: true,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
