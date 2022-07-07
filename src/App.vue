<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <header class="header">
    <NavBar />
  </header>
  <RouterView />
</template>

<style>
@import '@/assets/styles/reset.css';
@import '@/assets/styles/rtl.css';
</style>
