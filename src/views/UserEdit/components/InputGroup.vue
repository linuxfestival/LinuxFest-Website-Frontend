<template>
  <div class="formInputGroup">
    <label :for="{ id }" v-if="label">{{ label }}</label>
    <slot />
  </div>
</template>

<script>
export default {
  name: "InputGroup",
  props: {
    label: String,
    id: String,
  },
};
</script>

<style scoped>
.formInputGroup {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: calc(50% - 10px);
}

label {
  margin-right: 10px;

  color: #521c34;
}

@media only screen and (max-width: 576px) {
  .formInputGroup {
    width: 100%;
  }
}
</style>
