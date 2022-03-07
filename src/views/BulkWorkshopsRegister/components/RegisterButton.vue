<template>
  <button
    @click="$emit('register')"
    class="workshopsRegisterButton"
    :disabled="disabled"
  >
    ثبت نام
  </button>
</template>

<script>
export default {
  name: 'RegisterButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.workshopsRegisterButton {
  border: none;
  font-size: 15px;
  margin-top: 20px;
  padding: 5px 30px;

  background-color: #252040;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.1s ease-in-out;
}

.workshopsRegisterButton:hover {
  box-shadow: 0 0 30px 5px rgba(0, 0, 0, 0.3);
}
</style>
