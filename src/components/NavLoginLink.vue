<script setup>
  import NavLink from '@/components/NavLink.vue'
  import * as paths from '@/router/paths.js'

</script>

<template>
  <NavLink :to="paths.LOGIN.path" class="navbar-login-link">
    ورود به حساب کاربری
  </NavLink>
</template>

<style scoped>
  .navbar-login-link {
    margin-right: auto;
  }
</style>
