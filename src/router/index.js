import { createRouter, createWebHistory } from 'vue-router'
import Detail from '../views/detail.vue'
import Index from '../views/index.vue'

const routes = [

  {
    path: '/',
    name: 'Index',
    component: () => Index
  },
  {
    path: '/d/:pid',
    name: 'Detail',
    component: () => Detail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
