<template>
  <div class="home">
    <HomeContent></HomeContent>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeContent from '../components/HomeContent.vue'

export default {
  name: 'home',
  components: {
    HomeContent
  }
}
</script>
