<script setup>
  import { storeToRefs } from 'pinia';

  import * as paths from '@/router/paths.js'
  import NavLink from '@/components/NavLink.vue';
  import useAuthStore from '@/stores/auth.js';

  import NavDivider from './NavDivider.vue';
  import Button from './Button/index.vue';

  const authStore = useAuthStore()
  const { isLoggedIn } = storeToRefs(authStore)
</script>

<template>
  <NavLink :to="paths.LOGIN.path" class="navbar-login-link" v-if="!isLoggedIn">
    ورود به حساب کاربری
  </NavLink>
  <NavLink to="/me/current-workshops" v-if="isLoggedIn">حساب من</NavLink>
  <NavDivider v-if="isLoggedIn"/>
  <Button v-if="isLoggedIn" @click="authStore.logout">خروج</Button>
</template>

<style scoped>
  .navbar-login-link {
    margin-right: auto;
  }
</style>
