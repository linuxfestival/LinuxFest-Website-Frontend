<template>
  <div class="full-page-loading">
    <Loader v-if="withIcon" :text="text" />
  </div>
</template>

<script>
import Loader from './Loader.vue'

export default {
  name: 'FullPageLoading',
  components: {
    Loader,
  },
  props: {
    text: {
      type: String,
    },
    withIcon: {
      type: Boolean,
      default: () => true,
    },
  },
}
</script>

<style scoped>
.full-page-loading {
  position: fixed;
  width: 100%;

  /** 60px is height of top navbar */
  height: calc(100vh - 60px);
  top: 60px;

  right: 0;
  background-color: rgba(255, 255, 255, 0.8);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1030;
}
</style>
