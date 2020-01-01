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
        path : '/user/forget/:forgetToken',
        name : 'forget',
        component : ForgetPass
    }

];

const router = new VueRouter({
    routes,
    mode : 'hash'
});


const requiredAuth = ['userEdit', 'userProfile', 'workshopsRegister'];
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
});


export default router