<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <header class="header">
    <NavBar />
  </header>
  <RouterView />
  <teleport to="body">
    <Vue3Snackbar :duration="4500" bottom />
  </teleport>
</template>

<style>
@import '@/assets/styles/reset.css';
@import '@/assets/styles/rtl.css';
@import '@/assets/styles/snackbar-rtl.css';
</style>
