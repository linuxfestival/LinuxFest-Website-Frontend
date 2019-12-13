import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from "../views/Signup";
import Signin from "../views/Signin";
import UserAccount from "../views/UserAccount";
import WorkshopMore from "../views/WorkshopMore";
import EditUserInfo from "../views/EditUserInfo";

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

export default router
