<template>
  <div class="formWrapper">
    <h1 class="formTitle">{{ title }}</h1>
    <form class="formForm" @submit.prevent="$emit('submit')">
      <slot name="form" />
      <div class="formFormFooter">
        <ul class="formOptionsList">
          <slot name="options" />
        </ul>
        <slot name="actions" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormTemplate',
  props: {
    title: String,
  },
}
</script>

<style scoped>
.formWrapper {
  width: 550px;
  background-color: white;
  border-radius: 15px;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
}

.formTitle {

  margin-bottom: 10px;
  color: #252040;
}

.formForm {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.formFormFooter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
}

.formOptionsList {

  list-style-type: disc;
  font-size: 15px;
}
</style>
