<template>
  <button @click="$emit('register')" class="workshopsRegisterButton">ثبت نام</button>
</template>

<script>
export default {
  name: 'RegisterButton',
  props: {
    onRegister: Function,
  }
}
</script>

<style scoped>
    .workshopsRegisterButton {
        border: none;
        font-size: 15px;
        margin-top: 20px;
        padding: 5px 30px;
        font-family: 'iransans';
        background-color: #521c34;
        color: white;
        cursor: pointer;
        border-radius: 5px;
        transition: all 0.1s ease-in-out;
    }

    .workshopsRegisterButton:hover {
        box-shadow: 0 0 30px 5px rgba(0, 0, 0, 0.3);
    }
</style>
