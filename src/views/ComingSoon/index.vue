<template>
  <div>
    <Header />
    <AboutEvent />
  </div>
</template>

<script>
import AboutEvent from './components/AboutEvent.vue'
import Header from './components/Header.vue'

export default {
  name: 'home',
  components: {
    Header,
    AboutEvent,
  },
}
</script>
