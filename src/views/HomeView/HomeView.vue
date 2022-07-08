<script setup>
  import HorizontalDivider from '@/components/HorizontalDivider.vue';

  import WelcomeHero from './components/WelcomeHero.vue';
  import HomeDescription from './components/HomeDescription.vue';
  import HomeWorkshops from './components/HomeWorkshops.vue';
  import HomeTimeLine from './components/HomeTimeLine.vue';
  import HomeFooter from './components/HomeFooter.vue';

</script>

<template>
  <main class="home">
    <WelcomeHero />
    <HorizontalDivider size="large" />
    <HomeDescription />
    <HorizontalDivider size="large" />
    <HomeWorkshops />
    <HorizontalDivider size="large" />
    <HomeTimeLine />
    <HorizontalDivider size="large" />
    <HomeFooter />
  </main>
</template>

<style scoped>
  .home {
    margin-top: 60px;
  }
</style>
