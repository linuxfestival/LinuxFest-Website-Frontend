import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView/HomeView.vue';
import LoginView from '@/views/LoginView/LoginView.vue';
import RegisterView from '@/views/RegisterView/RegisterView.vue';
import WorkshopView from '@/views/WorkshopView/WorkshopView.vue';
import MyProfile from '@/views/MyProfile/MyProfile.vue';
import MyCurrentWorkshops from '@/views/MyProfile/views/MyCurrentWorkshops.vue';
import SelectWorkshops from '@/views/MyProfile/views/SelectWorkshops.vue';
import MyEdit from '@/views/MyProfile/views/MyEdit.vue';

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
    },
    {
      ...paths.REGISTER,
      component: RegisterView
    },
    {
      ...paths.MyProfile,
      component: MyProfile,
      children: [
        {
          path: '',
          redirect: { name: paths.MyProfile.children.CurrentWorkshops.name },
        },
        {
          ...paths.MyProfile.children.CurrentWorkshops,
          component: MyCurrentWorkshops,
        },
        {
          ...paths.MyProfile.children.SelectWorkshops,
          component: SelectWorkshops,
        },
        {
          ...paths.MyProfile.children.MyEdit,
          component: MyEdit,
        }
      ]
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
