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
import RoutesWithTransition from "@/router/RoutesWithTransition.vue";
import NotificationsContainer from '@/components/NotificationsContainer.vue';
import FullPageLoading from "@/components/FullPageLoading";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    RoutesWithTransition,
    NotificationsContainer,
    Footer,
    Header,
    FullPageLoading,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  direction: rtl;
}

body {
  direction: rtl;
}

@font-face {
  font-family: "iransans";
  src: url("assets/fonts/iranSansFarsiNumber.ttf") format("truetype");
}

.iransans {
  font-family: "iransans";
}

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

/* .vue-notification {
  font-family : 'iransans';
  direction: rtl;
} */
</style>
