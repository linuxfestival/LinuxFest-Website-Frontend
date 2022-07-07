<script setup>
  import HorizontalDivider from '@/components/HorizontalDivider.vue';

  import WelcomeHero from './components/WelcomeHero.vue';
  import HomeDescription from './components/HomeDescription.vue';
  import HomeWorkshops from './components/HomeWorkshops.vue';

</script>

<template>
  <main class="home">
    <WelcomeHero />
    <HorizontalDivider size="large" />
    <HomeDescription />
    <HorizontalDivider size="large" />
    <HomeWorkshops />
    <HorizontalDivider size="large" />
  </main>
</template>

<style scoped>
  .home {
    margin-top: 60px;
  }
</style>
