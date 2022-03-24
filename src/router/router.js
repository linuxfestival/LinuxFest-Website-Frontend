import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store/store'
import Home from '@/views/Home/index.vue'
import SignUp from '../views/SignUp/index.vue'
import SignIn from '@/views/SignIn/index.vue'
import UserAccount from '@/views/UserAccount/index.vue'
import Workshop from '@/views/Workshop/index.vue'
import Teachers from '@/views/Teachers/index.vue'
import Teachers_fa from '@/views/Teachers/index_fa.vue'
import UserEdit from '@/views/UserEdit/index.vue'
import BulkWorkshopsRegister from '@/views/BulkWorkshopsRegister/index.vue'
import PaymenResult from '@/views/PaymentResult/index.vue'
import ForgetPass from '@/views/ForgetPass/index.vue'
import Careers from '@/views/Careers/index.vue'
import Career from '@/views/Career/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp,
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn,
  },
  {
    path: '/user/me',
    name: 'userProfile',
    component: UserAccount,
  },
  {
    path: '/user/undefined',
    name: 'userProfile',
    component: UserAccount,
  },
  {
    path: '/user/edit',
    name: 'userEdit',
    component: UserEdit,
  },
  {
    path: '/workshops/:id',
    name: 'workshop',
    component: Workshop,
  },
  {
    path: '/teachers/',
    name: 'teachers',
    component: Teachers,
  },
  {
    path: '/teachers_fa/',
    name: 'teachers_fa',
    component: Teachers_fa,
  },
  {
    path: '/registerworkshop',
    name: 'workshopsRegister',
    component: BulkWorkshopsRegister,
  },
  {
    path: '/careers',
    name: 'careers',
    component: Careers,
  },
  {
    path: '/careers/:id',
    name: 'careersItem',
    component: Career,
  },
  {
    path: '/user/forget/:forgetToken',
    name: 'forget',
    component: ForgetPass,
  },
  {
    path: '/payment/result/',
    name: 'confirmPayment',
    component: PaymenResult,
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

const requiredAuth = ['userEdit', 'userProfile',
  'workshopsRegister',
  'confirmPayment',
]
const notRequiredAuth = ['signin', 'signup', 'forget']
router.beforeEach((to, from, next) => {
  if (requiredAuth.includes(to.name)) {
    // check if user is logged in
    if (store.getters.isLoggedIn) {
      next()
    } else {
      next('/signin')
    }
  } else if (notRequiredAuth.includes(to.name)) {
    if (store.getters.isLoggedIn) {
      next('/')
    } else {
      next()
    }
  } else {
    next()
  }
  window.scroll(0, 0)
})

export default router
