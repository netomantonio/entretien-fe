import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/home/index.vue')
const Calendar = () => import('../views/calendar/index.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
