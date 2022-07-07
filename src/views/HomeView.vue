<script setup>
  import HorizontalDivider from '@/components/HorizontalDivider.vue';

  import WelcomeHero from './components/WelcomeHero.vue';
  import HomeDescription from './components/HomeDescription.vue';

</script>

<template>
  <main class="home">
    <WelcomeHero />
    <HorizontalDivider size="large" />
    <HomeDescription />
    <HorizontalDivider />
  </main>
</template>

<style scoped>
  .home {
    margin-top: 60px;
  }
</style>
