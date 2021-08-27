<template>
  <input
    :type="type"
    :id="id"
    :value="value"
    :placeholder="placeholder"
    @input="$emit('input', $event.target.value)"
    class="input"
  />
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    id: String,
    value: String,
    placeholder: String,
    type: {
      type: String,
      default: () => 'text',
    },
  },
}
</script>

<style scoped>
.input {
  border: none;
  border-radius: 15px;
  background-color: #e6e6e6dd;
  padding: 15px 5px;
  margin: 10px;
  width: calc(100% - 20px);

  outline: none;
}
</style>
