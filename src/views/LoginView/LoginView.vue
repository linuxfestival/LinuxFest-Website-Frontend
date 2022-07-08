<script setup>
  import { useSnackbar } from "vue3-snackbar";

  import TextInput from '@/components/TextInput/TextInput.vue';
  import Button from '@/components/Button/index.vue';
  import useForm from '@/composables/useForm.js'
  import useHttp from '@/composables/useHttp.js';
  import useAuthStore from '@/stores/auth.js'
  import { isPresent, isEmail, hasMinLength } from '@/utils/validators.js'
  import { generateErrorMessage } from '@/utils/error-message.js';

  import * as paths from '@/router/paths.js'

  import { sendLogin } from './requests.js';
  
  const snackbar = useSnackbar()
  const authStore = useAuthStore()
  const {
    errors,
    values,
    generateErrors,
    getHasErrors
  } = useForm({
    email: {
      value: '',
      validators: [
        {
          checker: isPresent,
          getMessage() {
            return 'ایمیل، اجباری است.'
          }
        },
        {
          checker: isEmail,
          getMessage() {
            return 'ساختار ایمیل، صحیح نیست.'
          }
        }
      ]
    },
    password: {
      value: '',
      validators: [
        {
          checker: isPresent,
          getMessage() {
            return 'رمزعبور، اجباری است.'
          }
        },
        {
          checker(val) {
            return hasMinLength(val, 8)
          },
          getMessage() {
            return 'رمزعبور باید حداقل ۸ کاراکتر باشد.'
          }
        }
      ]
    }
  })

  const {
    isLoading,
    execute,
  } = useHttp(sendLogin)

  function handleSubmit() {
    generateErrors()

    const hasErrors = getHasErrors()
    if(hasErrors) {
      console.log('has error', errors)
      return
    }

    execute({
      email: values.email,
      password: values.password
    })
    .then(({ token, user }) => {
      authStore.login(token)
      authStore.setUser(user)
      snackbar.add({
        type: 'success',
        text: 'با موفقیت وارد حساب خود شدید.'
      })
    })
    .catch((e) => {
      snackbar.add({
        type: 'error',
        text: generateErrorMessage(e),
      }) 
    })
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
        v-model="values.password"
        :errors="errors.password"
        hasStar
      />
      <div class="form__meta">
        <ul class="form__options">
          <li class="form__option">
            حساب کاربری ندارید؟ برای ثبت‌نام، 
            <RouterLink :to="{ name: paths.REGISTER.name }" >اینجا</RouterLink>
            را کلیک کنید
          </li>
          <li class="form__option">
            برای بازیابی رمزعبور،
            <a href="#">اینجا</a>
            را کلیک کنید.
          </li>
        </ul>
        <Button 
          class="form__button" 
          :isLoading="isLoading" 
          :disabled="isLoading">
            ورود به حساب کاربری
        </Button>
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