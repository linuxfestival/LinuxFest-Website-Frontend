<script setup>
    import { storeToRefs } from 'pinia';
    import { useSnackbar } from "vue3-snackbar";

    import TextInput from '@/components/TextInput/TextInput.vue';
    import Button from '@/components/Button/index.vue';
    import useForm from '@/composables/useForm.js';
    import useHttp from '@/composables/useHttp.js';
    import useAuthStore from '@/stores/auth.js';
    import { isFarsi, isEmail, isPhoneNumber, hasMinLength } from '@/utils/validators.js';
    import { generateErrorMessage } from '@/utils/error-message.js';
  
    import { updateUser } from '../requests.js';

    const authStore = useAuthStore()
    const snackbar = useSnackbar()
    const { user } = storeToRefs(authStore)

    const {
    errors,
    values,
    generateErrors,
    getHasErrors
  } = useForm({
    firstName: {
      value: '',
      optional: true,
      validators: [
        {
          checker: isFarsi,
          getMessage() {
            return 'نام باید فارسی باشد.'
          }
        }
      ]
    },
    lastName: {
      value: '',
      optional: true,
      validators: [
        {
          checker: isFarsi,
          getMessage() {
            return 'نام خانوادگی باید فارسی باشد.'
          }
        }
      ]
    },
    phone: {
      value: '',
      optional: true,
      validators: [{
        checker: isPhoneNumber,
        getMessage() {
          return 'ساختار شماره‌تلفن، معتبر نیست.'
        }
      }]
    },
    email: {
      value: '',
      optional: true,
      validators: [
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
      optional: true,
      validators: [
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
    execute: executeUpdateUser
  } = useHttp(updateUser)

  function handleSubmit() {
    generateErrors()
    const hasError = getHasErrors();

    if(hasError) {
      return
    }

    executeUpdateUser(values)
      .then((newUser) => {
        authStore.updateUser(newUser)
        snackbar.add({
          type: 'success',
          text: 'اطلاعات کاربری شما با موفقیت تغییر کرد.'
        })
      })
      .catch(e => {
        snackbar.add({
          type: 'error',
          text: generateErrorMessage(e)
        })
      })
  }
</script>

<template>
    <form class="edit" @submit.prevent="handleSubmit">
        <h2 class="edit__title">
            برای ویرایش اطلاعات خود فیلد های مورد نظر را تغییر دهید. فیلدهای خالی یا بدون تغییر، نادیده گرفته می شوند
        </h2>
        <TextInput
        class="form__field"
        id="register-firstName"
        title="نام:"
        :placeholder="user.firstName"
        v-model="values.firstName"
        :errors="errors.firstName"
      />
      <TextInput
        class="form__field"
        id="register-lastName"
        title="نام خانوادگی:"
        :placeholder="user.lastName"
        v-model="values.lastName"
        :errors="errors.lastName"
      />
      <TextInput
        class="form__field"
        title="ایمیل:"
        id="register-email"
        type="email"
        :placeholder="user.email"
        v-model="values.email"
        :errors="errors.email"
      />
      <TextInput
        title="تلفن:"
        class="form__field"
        id="register-phone"
        type="text"
        :placeholder="user.phoneNumber"
        v-model="values.phone"
        :errors="errors.phone"
      />
      <TextInput
        title=" رمز عبور جدید:"
        id="register-password"
        type="password"
        class="form__field"
        placeholder="رمزعبور خود را وارد کنید"
        :errors="errors.password"
        v-model="values.password"
      />
      <Button :isLoading="isLoading" :disabled="isLoading" type="submit" class="form__field" variant="primary">
        ثبت تغییرات
      </Button>
    </form>
</template>

<style scoped>
    .edit {
        border-radius: 4px;
        min-height: 400px;
        direction: rtl;

        background-color: white;
        max-width: 500px;
        margin: 0 auto;
    }

    .form__field:not(:first-child) {
        margin-top: 16px;
    }

    .edit__title {
        text-align: right;
        line-height: 32px;
    }
</style>
