import {createRouter, createWebHistory} from 'vue-router'

const Home = () => import('../views/home/index.vue')
const Dashboard = () => import('@/views/dashboard/index.vue')
const Profile = () => import('@/views/profile/index.vue')

const Interviews = () => import('@/views/interviews/index.vue')

const Schedules = () => import('@/views/schedules/index.vue')

const Curriculum = () => import('@/views/resume/index.vue')

const InterviewDetails = () => import('@/views/interviewDetails/index.vue')


const redirectUserLogged = (to, from, next) => {
  const token = localStorage.getItem('token')
  if (token) {
    next('/dashboard')
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: redirectUserLogged,
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
    path: '/interviews',
    name: 'Interviews',
    component: Interviews,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/schedules/',
    name: 'Schedules',
    component: Schedules,
    props: true,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/curriculum/',
    name: 'Curriculum',
    component: Curriculum,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/interviews/:id/edit',
    name: 'InterviewDetails',
    component: InterviewDetails,
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
