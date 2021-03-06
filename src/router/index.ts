import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Devices from '../views/Devices.vue'
import Progress from '@/views/Progress.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  {
    path: '/devices',
    name: 'devices',
    component: Devices
  },
  {
    path: '/',
    name: 'game',
    component: Progress
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
