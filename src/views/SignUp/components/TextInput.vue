<template>
  <div class="input">
    <input
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      class="input__controller"
      :class="inputClass"
    />
    <p v-if="hasError" class="input__message input__message--error">
      {{ error }}
    </p>
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    value: String,
    placeholder: String,
    type: {
      type: String,
      default: () => "text",
    },
    hasError: {
      type: Boolean,
      default: () => false,
    },
    error: {
      type: String,
      default: () => "این ورودی را کنترل کنید",
    },
    isPersian: Boolean,
  },
  computed: {
    inputClass() {
      return `${this.hasError ? "input__controller--error" : ""} ${
        this.isPersian ? "persian" : ""
      }`;
    },
  },
};
</script>

<style scoped>
.input {
  display: flex;
  flex-direction: column;



  margin-bottom: 16px;
}

.input__controller {
  border: 1px solid #dddddd;
  background-color: #dddddd;
  border-radius: 15px;
  padding: 10px;
  text-align: right;
  outline: none;


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
