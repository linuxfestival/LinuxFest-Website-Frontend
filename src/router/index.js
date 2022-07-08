import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView/HomeView.vue';
import LoginView from '@/views/LoginView/LoginView.vue';
import WorkshopView from '@/views/WorkshopView/WorkshopView.vue';

import * as paths from './paths.js';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      ...paths.HOME,
      component: HomeView
    },
    {
      ...paths.LOGIN,
      component: LoginView
    },
    {
      ...paths.WORKSHOP,
      component: WorkshopView,
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
