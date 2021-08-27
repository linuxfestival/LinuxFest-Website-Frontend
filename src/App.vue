<template>
  <div>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <NotificationsContainer />
    <!-- <FullPageLoading /> -->
    <Header />
    <RoutesWithTransition />
    <Footer />
  </div>
</template>

<script>
import RoutesWithTransition from '@/router/RoutesWithTransition.vue'
import NotificationsContainer from '@/components/NotificationsContainer.vue'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    RoutesWithTransition,
    NotificationsContainer,
    Footer,
    Header,
  },
}
</script>

<style>
.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px; /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: "liga";
}
</style>
