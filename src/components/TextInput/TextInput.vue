<script setup>
  import { computed } from 'vue';

  const emits = defineEmits(['update:modelValue'])
  const props = defineProps({
    title: {
      type: String
    },
    id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text',
    },
    errors: {
      type: Array,
      default() { return [] },
    },
    placeholder: {
      type: String,
    },
    hasStar: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    },
    modelValue: {
      type: String,
    }
  })

  const controllerClasses = computed(() => ({
    'text-input__controller--hasError': props.errors.length > 0
  }))

  function handleChange(e) {
    emits('update:modelValue', e.target.value)
  }
</script>

<template>
  <label :for="id" class="text-input" >
    <p v-if="Boolean(title)" class="text-input__title">
      <span v-if="hasStar" class="text-input__star" >*</span>
      {{title}}
    </p>
    <input
      class="text-input__controller"
      :class="controllerClasses"
      @input="handleChange"
      :value="modelValue"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :id="id"
    />
    <p class="text-input__error" v-for="error in errors" :key="error">{{error}}</p>
  </label>
</template>

<style scoped>
  .text-input {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .text-input__title {
    margin-bottom: 4px;
    font-size: 16px;
    display: flex;
    align-items: center;
  }

  .text-input__controller {
    border: 1px solid #ddd;
    background-color: #ddd;
    border-radius: 4px;
    padding: 8px;
    text-align: right;
    outline: none;
    box-sizing: border-box;

    transition: all .2s ease-in-out;
  }

  .text-input__controller:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
  }

  .text-input__controller--hasError {
    box-shadow: 0 0 0 2px red;
  }

  .text-input__error {
    color: red;
    font-size: 14px;
    margin-top: 4px;
    line-height: 18px;
  }

  .text-input__star {
    color: red;
    margin-left: 4px;
    display: flex;
    align-items: center;
  }
</style>
