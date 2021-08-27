<template>
  <div class="discount">
    <TextInput
      label="کد تخفیف"
      v-model="value"
      placeholder="code"
      id="discount"
    />
  </div>
</template>

<script>
import TextInput from '@/components/TextInput.vue'

export default {
  name: 'DiscountCard',
  components: {
    TextInput,
  },
  data() {
    return {
      value: ''
    }
  },
  watch: {
    value(newValue) {
      this.$emit('input', newValue)
    }
  }
}
</script>

<style scoped>
.discount {
  margin: 20px;
}

.discount input {
  padding: 3px;
  margin-right: 8px;
  border-radius: 4px;
  border: solid gray 1px;
  text-align: center;
  font-size: 16px;
}
</style>
