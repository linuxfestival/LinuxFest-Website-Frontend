import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from "../views/Signup";
import Signin from "../views/Signin";
import UserAccount from "../views/UserAccount";
import WorkshopMore from "../views/WorkshopMore";
import EditUserInfo from "../views/EditUserInfo";
import store from '../store/store'

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
        name: 'userme',
        component: UserAccount
    },
    {
        path: '/more/#',
        name: 'more',
        component: WorkshopMore
    },
    {
        path: '/edit',
        name: 'edit',
        component: EditUserInfo
    }

];

const router = new VueRouter({
    routes
});


const requiredAuth = ['/edit', '/user/me'];
const notRequiredAuth = ['/signin', 'signup'];
router.beforeEach((to, from, next) => {
    console.log('from ', from);
    console.log('to ', to);
    console.log(store.getters.isLoggedIn)
    if (requiredAuth.includes(to.path)) {
        //check if user is logged in
        if (store.getters.isLoggedIn) {
            next()
        } else {
        }
    } else if (notRequiredAuth.includes(to.path)) {
      if(store.getters.isLoggedIn()){
        next('/user/me')
      }else{

      }
    } else {
        next()
    }
});


export default router
