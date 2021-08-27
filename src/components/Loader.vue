<template>
  <div class="loader">
    <img class="loader__icon" style="color: red" src="../assets/img/loading2.svg" />
    <p class="loader__text" v-if="text">{{text}}</p>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    text: {
      type: String,
      default: 'صبر کنید...',
    },
    color: {
      type: String,
    },
  },
}
</script>

<style scoped>
.loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.loader__icon {
  height: 110px;
}

.loader__text {

  text-align: center;
  font-size: 1.2rem;
}
</style>
