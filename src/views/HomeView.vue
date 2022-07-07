<script setup>
  import HorizontalDivider from '@/components/HorizontalDivider.vue';

  import WelcomeHero from './components/WelcomeHero.vue';

</script>

<template>
  <main class="home">
    <WelcomeHero />
    <HorizontalDivider size="large" />
  </main>
</template>

<style scoped>
  .home {
    margin-top: 60px;
  }
</style>
