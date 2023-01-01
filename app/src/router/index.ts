import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/walton',
    component: () => import("../views/walton/Index.vue")
  },
  {
    path: '/codekids',
    component: () => import("../views/codekids/Index.vue")
  },
  {
    path: '/killswitch',
    component: () => import("../views/killswitch/Index.vue")
  },
  {
    path: '/walton-namecard',
    component: () => import("../views/WaltonNamecard.vue")
  },
  {
    path: '/personal-namecard',
    component: () => import("../views/PersonalNamecard.vue")
  }


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router