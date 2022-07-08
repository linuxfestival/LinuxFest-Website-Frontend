<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
  import { computed } from 'vue';
    import SyncLoader from 'vue-spinner/src/SyncLoader.vue';

  import { VARIANTS } from './constants'

  const props = defineProps({
    variant: {
      type: String,
      default: VARIANTS.PRIMARY,
      validator(val) {
        return Object.values(VARIANTS).includes(val)
      }
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  })

  const classes = computed(() => ({
    'kit-button__primary': props.variant === VARIANTS.PRIMARY,
    'kit-button__secondary': props.variant === VARIANTS.SECONDARY,
  }))

</script>
<template>
  <button class="kit-button" :disabled="disabled" :class="classes">
    <SyncLoader
      v-if="isLoading"
      :loading="true"
      size="8px"
      color="white"
    />
    <slot v-else />
  </button>
</template>

<style scoped>
  .kit-button {
    box-sizing: border-box;
    outline: none;
    background: none;
    border: none;

    cursor: pointer;
    color: white;
    padding: 4px 12px;
    font-size: 16px;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 148px;
  }

  .kit-button:disabled {
    pointer-events: none;
    cursor: default;
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
