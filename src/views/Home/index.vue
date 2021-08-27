<template>
  <div>
    <Header />
    <AboutEvent />
    <Content />
  </div>
</template>

<script>
import AboutEvent from './components/AboutEvent.vue'
import Header from './components/Header.vue'
import Content from './components/Content/index.vue'

export default {
  name: 'home',
  components: {
    Header,
    AboutEvent,
    Content,
  },
}
</script>
