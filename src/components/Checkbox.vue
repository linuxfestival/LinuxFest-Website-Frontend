<template>
  <div class="check-box">
    <input
      type="checkbox"
      :id="id"
      :class="checkboxClass"
      @change="$emit('change', $event.target.checked)"
      :checked="value"
    />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    id: String,
    checkboxClass: String,
    value: Boolean,
    label: String,
  },
}
</script>

<style scoped>
.check-box {
  display: flex;
  flex-direction: row;
  justify-content: right;
  padding: 10px;
}

label {
  font-size: 13px;
  text-align: right;

}
</style>
