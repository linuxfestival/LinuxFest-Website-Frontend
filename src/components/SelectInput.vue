<template>
  <div class="input">
    <label :v-for="id" v-if="label" class="input__label">{{label}}</label>
    <select
      class="input__controller"
      :type="type"
      :id="id"
      :class="inputClass"
      @input="$emit('input', $event.target.value)"
    >
      <option value="" disabled selected v-if="default_option"> {{ default_option }} </option>
      <option :value="optionData.value" v-for="optionData in options" :select="optionData.value === value"> {{ optionData.text }} </option>
      <!-- <option value="bsc">Undergraduated (BSc).</option> -->
      <!-- <option value="msc">Graduated (MSc).</option> -->
    </select>
    <p v-if="hasError" class="input__message input__message--error">
      {{ error }}
    </p>
  </div>
</template>

<script>
import { type } from 'os';

export default {
  name: 'SelectInput',
  props: {
    value: {
      type: String
    },
    type: {
      type: String,
      default: () => 'text',
    },
    hasError: {
      type: Boolean,
      default: () => false,
    },
    error: {
      type: String,
      default: () => 'این ورودی را کنترل کنید',
    },
    customInputClass: {
      type: String
    },
    label: {
      type: String
    },
    id: {
      type: String
    },
    options: {
      type: Array
    },
    default_option: String
  },
  computed: {
    inputClass() {
      return `${this.hasError ? 'input__controller--error' : ''} ${this.customInputClass}`
    },
  },
}
</script>

<style scoped>
.input {
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-bottom: 16px;
}

.input__controller {
  border: 1px solid #dddddd;
  background-color: #dddddd;
  border-radius: 15px;
  padding: 10px;
  text-align: right;
  outline: none;

  box-sizing: border-box;
}

.input__label {
  margin-bottom: 6px;
}

.input__message {
  font-size: 13px;
}

.input__controller--error {
  border: 1px solid red;
}

.input__message--error {
  color: darkred;
}

</style>
