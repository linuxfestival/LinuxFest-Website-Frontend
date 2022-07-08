<script setup>
  import TextInput from '@/components/TextInput/TextInput.vue';
  import CheckboxField from '@/components/CheckboxField/CheckboxField.vue';
  import Button from '@/components/Button/index.vue';
  import useForm from '@/composables/useForm.js'
  import { 
    isPresent,
    isEmail,
    hasMinLength, 
    isFarsi, 
    isPhoneNumber 
  } from '@/utils/validators.js'
  import * as paths from '@/router/paths.js'

  const {
    errors,
    values,
    generateErrors,
    hasErrors
  } = useForm({
    firstName: {
      value: '',
      validators: [
        {
          checker: isPresent,
          getMessage() {
            return 'نام، اجباری است.'
          }
        },
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
      validators: [
        {
          checker: isPresent,
          getMessage() {
            return 'نام‌ خانوادگی، اجباری است.'
          }
        },
        {
          checker: isFarsi,
          getMessage() {
            return 'نام خانوادگی باید فارسی باشد.'
          }
        }
      ]
    },
    isAmirkabiri: {
      value: false,
      validators: []
    },
    studentNumber: {
      value: '',
      validators: [
        {
          checker(value, fieldValues) {
            return fieldValues.isAmirkabiri && isPresent(value)
          },
          getMessage() {
            return 'شماره‌دانشجویی اجباری است.'
          }
        },
      ]
    },
    phone: {
      value: '',
      validators: [{
        checker: isPresent,
        getMessage() {
          return 'شماره تماس، اجباری است.'
        }
      },
      {
        checker: isPhoneNumber,
        getMessage() {
          return 'ساختاری شماره‌تلفن، معتبر نیست.'
        }
      }]
    },
    age: {
      value: '',
      validators: []
    },
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

  function handleSubmit() {
    generateErrors()

    if(hasErrors) {
      console.log('has error', errors)
      return
    }
    console.log(values)
  }

</script>
<template>
  <div class="form-wrapper" >
    <form class="form" @submit.prevent="handleSubmit" novalidate>
      <h1 class="form__title">
        ثبت‌نام
      </h1>
      <TextInput
        class="form__field"
        id="register-firstName"
        title="نام:"
        placeholder="نام خود را وارد کنید"
        v-model="values.firstName"
        :errors="errors.firstName"
        hasStar
      />
      <TextInput
        class="form__field"
        id="register-lastName"
        title="نام خانوادگی:"
        placeholder="نام خانوادگی خود را وارد کنید"
        v-model="values.lastName"
        :errors="errors.lastName"
        hasStar
      />
      <TextInput
        class="form__field"
        title="ایمیل:"
        id="register-email"
        type="email"
        placeholder="ایمیل خود را وارد کنید"
        v-model="values.email"
        :errors="errors.email"
        hasStar
      />
      <CheckboxField
        class="form__field"
        id="register-isamirkabiri"
        title="امیرکبیری هستم"
        v-model="values.isAmirkabiri"
      />
      <TextInput
        v-if="values.isAmirkabiri"
        class="form__field"
        id="register-studentNumber"
        title="شماره دانشجویی:"
        placeholder="شماره‌ دانشجویی خود را وارد کنید"
        v-model="values.studentNumber"
        :errors="errors.studentNumber"
        hasStar
      />
      <TextInput
        title="تلفن:"
        class="form__field"
        id="register-phone"
        type="text"
        placeholder="تلفن خود را وارد کنید"
        v-model="values.phone"
        :errors="errors.phone"
        hasStar
      />
       <TextInput
        title="سن:"
        id="register-age"
        type="number"
        class="form__field"
        placeholder="سن خود را وارد کنید"
        v-model="values.age"
      />
      <TextInput
        title="رمزعبور:"
        id="register-password"
        type="password"
        class="form__field"
        placeholder="رمزعبور خود را وارد کنید"
        :errors="errors.password"
        v-model="values.password"
        hasStar
      />
      <div class="form__meta">
        <ul class="form__options">
          <li class="form__option">
            حساب کاربری دارید؟ برای ورود 
            <RouterLink :to="{ name: paths.LOGIN.name }" >اینجا</RouterLink>
            را کلیک کنید
          </li>
        </ul>
        <Button class="form__button">ثبت‌نام</Button>
      </div>
    </form>
  </div>
</template>

<style scoped>
  .form-wrapper {
    min-height: calc(100vh - 60px);

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    margin-top: 60px;
    padding: 32px 0;
  }

  .form {
    width: 100%;
    max-width: 560px;
    background-color: white;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 16px;
  }

  .form__title {
    text-align: center;
    font-size: 24px;
    margin: 24px 0;
  }

  .form__field {
    margin-top: 16px;
  }

  .form__meta {
    display: flex;
    margin-top: 32px;
  }

  .form__button {
    flex-grow: 1;

    height: fit-content;
    text-align: center;

    margin-right: 12px;
    padding: 8px 12px;
}

  .form__options {
    padding-right: 16px;
    list-style: disc;
    flex-shrink: 0;
  }

  .form__option {
    margin-top: 12px;
  }
</style>