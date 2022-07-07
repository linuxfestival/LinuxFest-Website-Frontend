<script setup>
import { RouterLink } from 'vue-router';

defineProps([
  'to'
])
</script>

<template>
  <RouterLink :to="to" class="navbar-link">
    <slot />
  </RouterLink>
</template>

  <style scoped>
  .navbar-link {
    color: white;
    align-self: stretch;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }

  .navbar-link:hover {
    color: #fcc113;
  }
  </style>
