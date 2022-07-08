<script setup>
  import Button from '@/components/Button/index.vue';

  defineProps({
    message: {
      type: String
    }
  })

  const emits = defineEmits(['retry'])

  function handleClick() {
    emits('retry')
  }
</script>

<template>
  <div class="retry-box">
    <p class="retry-box__message" v-if="Boolean(message)">
      {{message}}
    </p>
    <Button class="retry-box__button" @click="handleClick">
      دوباره تلاش کنید
    </Button>
  </div>
</template>

<style scoped>
  .retry-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 16px;
  }

  .retry-box__message {
    margin-bottom: 8px;
    color: red;
  }

  .retry-box__button {
    color: white;
    background-color: red;
  }
</style>
