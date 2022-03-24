<template>
  <router-link
    :to="`/registerworkshop/?workshop=${id}`"
    v-if="isRegOpen"
    class="registerButton"
  >
    {{ $t("workshop.description.register_en") }}
  </router-link>
  <p v-else class="registerButton">
    {{ $t("workshop.description.capacityIsFull_en") }}
  </p>
</template>

<script>
export default {
  name: 'RegisterButton',
  props: {
    isRegOpen: Boolean,
    id: String,
  },
}
</script>

<style scoped>
.registerButton {
  background-color: #fcc113;
  color: white;
  text-decoration: none;
  font-size: 20px;
  padding: 5px 30px;

  border-radius: 5px;
  margin: auto 10px 15px auto;
}
</style>
