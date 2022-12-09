<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <header class="header">
    <NavBar />
  </header>
  <main class="content">
    <RouterView />
  </main>
  <teleport to="body">
    <Vue3Snackbar :duration="4500" bottom />
  </teleport>
</template>

<style>
@import '@/assets/styles/reset.css';
@import '@/assets/styles/rtl.css';
@import '@/assets/styles/snackbar-rtl.css';

.content {
  min-height: calc(100vh - 60px);
  margin-top: 60px;
}
</style>
