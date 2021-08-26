<template>
  <div class="formGroup">
    <slot />
  </div>
</template>

<script>
export default {
  name: "FormGroup",
};
</script>

<style scoped>
.formGroup {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}

@media only screen and (max-width: 576px) {
  .formGroup {
    flex-direction: column;
  }
}
</style>
