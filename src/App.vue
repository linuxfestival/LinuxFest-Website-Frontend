<template>
  <div>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    <notifications group="auth" position="top center"></notifications>
    <Header></Header>
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view></router-view>
      </transition>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "@/components/Header";
  import Footer from "@/components/Footer";
  export default {
    components: {Footer, Header}
  }
</script>

<style>
  * {
    margin : 0;
    padding : 0;
    direction: rtl;
  }

  .fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

  body {
    direction: rtl;
  }

  @font-face {
    font-family: 'iransans';
    src : url('assets/fonts/iranSansFarsiNumber.ttf') format('truetype');
  }

  .iransans {
    font-family : 'iransan';
  }

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
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
  font-feature-settings: 'liga';
}

/* .vue-notification {
  font-family : 'iransans';
  direction: rtl;
} */

.notification-title {
  font-family : 'iransans' !important;
  direction: rtl !important;
  text-align:right;
}

.notification-content {
  font-family : 'iransans' !important;
  direction: rtl !important;
  text-align:right;
}

</style>
