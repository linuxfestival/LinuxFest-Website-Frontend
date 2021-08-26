import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/index.vue'
import SignUp from "../views/SignUp/index.vue";
import SignIn from "@/views/SignIn/index.vue";
import UserAccount from "@/views/UserAccount/index.vue";
import Workshop from "@/views/Workshop/index.vue";
import UserEdit from "@/views/UserEdit/index.vue";
import store from '@/store/store'
import BulkWorkshopsRegister from "@/views/BulkWorkshopsRegister/index.vue";
import ForgetPass from '@/views/ForgetPass';
import ConfirmPayment from "@/views/ConfirmPayment";
import AllCareers from "../components/careers/AllCareers";
import Career from "@/components/careers/Career";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn
  },
  {
      path: '/user/me',
      name: 'userProfile',
      component: UserAccount
  },
  {
      path: '/user/edit',
      name: 'userEdit',
      component: UserEdit
  },
  {
    path: '/workshops/:id',
    name: 'workshop',
    component: Workshop,
  },
  {
    path: '/registerworkshop',
    name: 'workshopsRegister',
    component: BulkWorkshopsRegister
  },
  // {
  //     path : '/careers',
  //     name : 'careers',
  //     component : AllCareers
  // },
  // {
  //     path : '/companies/:id',
  //     name : 'careersItem',
  //     component : Career
  // },
  // {
  //     path : '/user/forget/:forgetToken',
  //     name : 'forget',
  //     component : ForgetPass
  // },
  // {
  //     path : '/payment/result/',
  //     name : 'confirmPayment',
  //     component : ConfirmPayment
  // },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});


const requiredAuth = ['userEdit', 'userProfile',
  // 'workshopsRegister',
  'confirmPayment'];
const notRequiredAuth = ['signin', 'signup', 'forget'];
router.beforeEach((to, from, next) => {
  if (requiredAuth.includes(to.name)) {
    //check if user is logged in
    if (store.getters.isLoggedIn) {
      next()
    } else {
      next('/signin');
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
  window.scroll(0, 0);
});


export default router
