<template>
  <div>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
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

  @font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://example.com/MaterialIcons-Regular.eot); /* For IE6-8 */
  src: local('Material Icons'),
    local('MaterialIcons-Regular'),
    url(https://example.com/MaterialIcons-Regular.woff2) format('woff2'),
    url(https://example.com/MaterialIcons-Regular.woff) format('woff'),
    url(https://example.com/MaterialIcons-Regular.ttf) format('truetype');
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

</style>
