
<script setup>
import { computed } from 'vue'

  const props = defineProps({
    size: {
      type: String,
      default: 'medium',
      validator(val) {
        return ['medium, large'].includes(val)
      }
    }
  })

  const classes = computed(() => ({
    'horizontal-divider--sm': props.size === 'medium',
    'horizontal-divider--lg': props.size === 'large'
  }))
</script>

<template>
  <div class="horizontal-divider" :class="classes" />
</template>

<style scoped>
  .horizontal-divider {
    width: 100%;
    background-color: #f2a938;
  }

  .horizontal-divider--sm {
    height: 4px;
  }

  .horizontal-divider--lg {
    height: 12px;
  }
</style>
