import {createRouter, createWebHistory} from 'vue-router'

const Home = () => import('../views/home/index.vue')
const Calendar = () => import('../views/calendar/index.vue')

const Dashboard = () => import('@/views/dashboard/index.vue')
const Profile = () => import('@/views/profile/index.vue')

const Profile = () => import('@/views/profile/index.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      hasAuth: true
    }
  },  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {name: 'Home'}
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
