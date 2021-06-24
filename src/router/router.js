import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home/index.vue'
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
import Career from "@/components/careers/Career";
import * as paths from '@/configs/route-paths';
import * as names from '@/configs/route-names';

Vue.use(VueRouter);

const routes = [
    {
        path: paths.home,
        name: names.home,
        component: Home
    },
    {
        path: paths.signUp,
        name: names.signUp,
        component: Signup
    },
    {
        path: paths.signIn,
        name: names.signIn,
        component: Signin
    },
    {
        path: paths.profile,
        name: names.profile,
        component: UserAccount
    },
    {
        path: paths.workshop,
        name: names.workshop,
        component: WorkshopMore
    },
    {
        path: paths.profileEdit,
        name: names.profileEdit,
        component: EditUserInfo
    },
    {
        path: paths.registerWorkshops,
        name: names.registerWorkshops,
        component: AllWorkshops
    },
    {
        path : paths.careers,
        name : names.careers,
        component : AllCareers
    },
    {
        path : paths.company,
        name : names.company,
        component : Career
    },
    {
        path : paths.forgetPass,
        name : names.forgetPass,
        component : ForgetPass
    },
    {
        path : paths.paymentResult,
        name : names.paymentResult,
        component : ConfirmPayment
    },

];

const router = new VueRouter({
    routes,
    mode : 'history'
});


const requiredAuth = [names.profileEdit, names.profile, names.registerWorkshops, names.paymentResult];
const notRequiredAuth = [names.signIn, names.signUp , names.forgetPass];

router.beforeEach((to, from, next) => {
    const { name: destinationName } = to;
    const { getters: { isLoggedIn } } = store;

    if (requiredAuth.includes(destinationName)) {
        if (isLoggedIn) {
            next()
        } else {
            next(paths.signIn);
        }
    } else if (notRequiredAuth.includes(destinationName)) {
      if (isLoggedIn){
        next(paths.home)
      } else {
        next()
      }
    } else {
        next()
    }

    window.scroll(0,0);
});


export default router