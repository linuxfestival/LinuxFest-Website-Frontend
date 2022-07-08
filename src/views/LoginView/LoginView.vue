<script setup>
  import { reactive } from 'vue';
  import TextInput from '@/components/TextInput/TextInput.vue';
  import Button from '@/components/Button/index.vue';
  import { isPresent, isEmail, hasMinLength } from '@/utils/validators.js'

  const values = reactive({
    password: '',
    email: ''
  })

  const errors = reactive({
    email: [],
    password: []
  })

  function generateEmailErrors() {
    const newErrors = []
    if(!isPresent(values.email)) {
      newErrors.push('ایمیل، اجباری است.')
    }

    if(!isEmail(values.email)) {
      newErrors.push('ساختار ایمیل نادرست است.')
    }

    errors.email = newErrors
  }

  function generatePasswordErrors() {
    const newErrors = []

    if(!isPresent(values.password)) {
      newErrors.push('رمزعبور اجباری است.')
    }

    if(!hasMinLength(values.password, 8)) {
      newErrors.push('رمزعبور باید حداقل ۸ کاراکتر باشد.')
    }

    errors.password = newErrors;
  }

  function handleSubmit() {
    generateEmailErrors()
    generatePasswordErrors()

    const hasError = errors.email.length > 0 || errors.password.length > 0;

    if(hasError) {
      console.log('has error', errors)
      return
    }
    console.log(values)
  }

</script>
<template>
  <div class="login" >
    <form class="login__form" @submit.prevent="handleSubmit" novalidate>
      <h1 class="login__title">
        ورود به حساب کاربری
      </h1>
      <TextInput
        title="ایمیل:"
        id="login-email"
        type="email"
        placeholder="ایمیل خود را وارد کنید"
        v-model="values.email"
        :errors="errors.email"
        hasStar
      />
      <TextInput
        class="login__password"
        title="رمزعبور:"
        id="login-password"
        type="password"
        placeholder="رمزعبور خود را وارد کنید"
        :errors="errors.password"
        v-model="values.password"
        hasStar
      />
      <div class="form__meta">
        <ul class="form__options">
          <li class="form__option">
            حساب کاربری ندارید؟ برای ثبت‌نام، 
            <a href="#">اینجا</a>
            را کلیک کنید
          </li>
          <li class="form__option">
            برای بازیابی رمزعبور،
            <a href="#">اینجا</a>
            را کلیک کنید.
          </li>
        </ul>
        <Button class="form__button">ورود به حساب کاربری</Button>
      </div>
    </form>
  </div>
</template>

<style scoped>
  .login {
    min-height: calc(100vh - 60px);

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    margin-top: 60px;
  }

  .login__form {
    width: 100%;
    max-width: 560px;
    background-color: white;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 16px;
  }

  .login__title {
    text-align: center;
    font-size: 24px;
    margin: 24px 0;
  }

  .login__password {
    margin-top: 16px;
  }

  .form__meta {
    display: flex;
    margin-top: 32px;
  }

  .form__button {
    margin-right: auto;
    height: fit-content;
    padding: 8px 12px;
  }

  .form__options {
    padding-right: 16px;
    list-style: disc;
  }

  .form__option {
    margin-top: 12px;
  }
</style>