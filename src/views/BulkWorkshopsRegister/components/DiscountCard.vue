<template>
  <div class="discount">
    <label for="discount">کد تخفیف </label>
    <input
      placeholder="code"
      id="discount"
      @input="$emit('input', $event.target.value)"
      :value="value"
    />
  </div>
</template>

<script>
export default {
  name: 'DiscountCard',
  props: {
    value: { type: String },
  },
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
