import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '../views/CategoryView.vue'
import ProductDetail from '../views/ProductDetail.vue'
import SignUpView from '../views/SignUpView.vue'
import LoginView from '../views/LoginView.vue'
const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/category',
        name: 'category',
        component: CategoryView
    },
    {
        path: '/productdetail',
        name: 'ProductDetail',
        component: ProductDetail
    },
    {
        path: '/signupview',
        name: 'SignUpView',
        component: SignUpView
    },
    {
        path: '/loginview',
        name: 'LoginView',
        component: LoginView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router