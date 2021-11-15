import { createRouter, createWebHashHistory } from 'vue-router'
import Govemail from '../views/Govemail.vue'

const routes = [
  {
    path: '/govemail',
    name: 'Govemail',
    component: Govemail
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
