<script setup>
  defineProps({
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    name: String,
    modelValue: Boolean
  })

  const emits = defineEmits(['update:modelValue'])
  function handleChange(e) {
    emits('update:modelValue', e.target.checked)
  }
</script>

<template>
  <label class="checkbox-field" :for="id">
    <input
      type="checkbox"
      class="checkbox-field__controller"
      :name="name"
      :id="id"
      :checked="modelValue"
      @change="handleChange"
    />
    <span class="checkbox-field__mock" :class="{ 'checkbox-field__mock--checked': modelValue }" >
      {{ Boolean(modelValue) ? '✔' : ''}}
    </span>
    <p class="checkbox-field__title">{{title}}</p>
  </label>
</template>

<style scoped>
  .checkbox-field {
    display: flex;
    align-items: center;
    cursor: pointer;

    min-height: 32px;
  }

  .checkbox-field__controller {
    display: none;
  }

  .checkbox-field__mock {
    margin-left: 8px;
    font-family: sans-serif;
    width: 16px;
    height: 16px;
    border-radius: 2px;
    background-color: white;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.3);

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all .1s ease-in-out;
  }

  .checkbox-field__mock--checked {
    color: white;
    background-color: purple;
    border-radius: 2px;
    box-shadow: 0 0 0 2px purple;
  }

  .checkbox-field__title {
    font-size: 16px;
    margin-top: 4px;
  }
</style>
