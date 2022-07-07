<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
  import { computed } from 'vue';
  import { VARIANTS } from './constants'

  const props = defineProps({
    variant: {
      type: String,
      default: VARIANTS.PRIMARY,
      validator(val) {
        return Object.values(VARIANTS).includes(val)
      }
    }
  })

  const classes = computed(() => ({
    'kit-button__primary': props.variant === VARIANTS.PRIMARY,
    'kit-button__secondary': props.variant === VARIANTS.SECONDARY,
  }))

</script>
<template>
  <button class="kit-button" :class="classes">
    <slot />
  </button>
</template>

<style scoped>
  .kit-button {
    outline: none;
    background: none;
    border: none;

    cursor: pointer;
    color: white;
    padding: 4px 12px;
    font-size: 16px;
    border-radius: 4px;
  }

  .kit-button__primary {
    background-color: #252040;
  }

  .kit-button__secondary {
    background-color: #fcc113;
  }

  .kit-button__secondary:hover {
    background-color: #deab10;
  }
</style>
