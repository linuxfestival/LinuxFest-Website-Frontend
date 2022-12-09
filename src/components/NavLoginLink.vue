<script setup>
  import NavLink from '@/components/NavLink.vue';
  import * as paths from '@/router/paths.js'
  import useAuthStore from '@/stores/auth.js';

  import NavDivider from './NavDivider.vue';
  import Button from './Button/index.vue';

  const authStore = useAuthStore()

console.log(authStore)
</script>

<template>
  <NavLink :to="paths.LOGIN.path" class="navbar-login-link" v-if="!authStore.isLoggedIn">
    ورود به حساب کاربری
  </NavLink>
  <NavLink to="/" v-if="authStore.isLoggedIn">حساب من</NavLink>
  <NavDivider v-if="authStore.isLoggedIn"/>
  <Button v-if="authStore.isLoggedIn" @click="authStore.logout">خروج</Button>
</template>

<style scoped>
  .navbar-login-link {
    margin-right: auto;
  }
</style>
