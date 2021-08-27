<template>
  <Loader v-if="isLoading" />
  <div v-else>
    <slot />
  </div>
</template>

<script>
import Loader from './Loader.vue'

export default {
  name: 'ContentWithLoader',
  components: { Loader },
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
