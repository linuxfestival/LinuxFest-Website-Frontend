import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from "../views/Signup";
import Signin from "../views/Signin";
import UserAccount from "../views/UserAccount";
import WorkshopMore from "../views/WorkshopMore";
import EditUserInfo from "../views/EditUserInfo";
import store from '../store/store'
import AllWorkshops from "../views/AllWorkshops";
import ForgetPass  from '@/views/ForgetPass';
import ConfirmPayment from "@/views/ConfirmPayment";
import AllCareers from "../components/careers/AllCareers";

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
        component: Signup
    },
    {
        path: '/signin',
        name: 'signin',
        component: Signin
    },
    {
        path: '/user/me',
        name: 'userProfile',
        component: UserAccount
    },
    {
        path: '/workshops/:id',
        name: 'workshopInfo',
        component: WorkshopMore
    },
    {
        path: '/user/edit',
        name: 'userEdit',
        component: EditUserInfo
    },
    {
        path: '/registerworkshop',
        name: 'workshopsRegister',
        component: AllWorkshops
    },
    {
        path : '/careers',
        name : 'careers',
        component : AllCareers
    },
    {
        path : '/user/forget/:forgetToken',
        name : 'forget',
        component : ForgetPass
    },
    {
        path : '/payment/result/',
        name : 'confirmPayment',
        component : ConfirmPayment
    },

];

const router = new VueRouter({
    routes,
    mode : 'history'
});


const requiredAuth = ['userEdit', 'userProfile', 'workshopsRegister', 'confirmPayment'];
const notRequiredAuth = ['signin', 'signup' , 'forget'];
router.beforeEach((to, from, next) => {
    console.log('from ', from);
    console.log('to ', to);
    console.log(store.getters.isLoggedIn)
    if (requiredAuth.includes(to.name)) {
        //check if user is logged in
        if (store.getters.isLoggedIn) {
            next()
        } else {
            next('/signin');
        }
    } else if (notRequiredAuth.includes(to.name)) {
      if(store.getters.isLoggedIn){
        next('/')
      }else{
            next()
      }
    } else {
        next()
    }
    window.scroll(0,0);
});


export default router