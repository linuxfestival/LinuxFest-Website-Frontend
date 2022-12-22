<script setup>
    import TextInput from '@/components/TextInput/TextInput.vue';
    import Button from '@/components/Button/index.vue';
    import useForm from '@/composables/useForm.js';
    import { isFarsi, isEmail, isPhoneNumber, hasMinLength } from '@/utils/validators.js';

    const {
    errors,
    values,
  } = useForm({
    firstName: {
      value: '',
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
      validators: [{
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
</script>

<template>
    <form class="edit">
        <h2 class="edit__title">
            برای ویرایش اطلاعات خود فیلد های مورد نظر را تغییر دهید. فیلد های خالی نادیده گرفته می شوند
        </h2>
        <TextInput
        class="form__field"
        id="register-firstName"
        title="نام:"
        placeholder="نام خود را وارد کنید"
        v-model="values.firstName"
        :errors="errors.firstName"
      />
      <TextInput
        class="form__field"
        id="register-lastName"
        title="نام خانوادگی:"
        placeholder="نام خانوادگی خود را وارد کنید"
        v-model="values.lastName"
        :errors="errors.lastName"
      />
      <TextInput
        class="form__field"
        title="ایمیل:"
        id="register-email"
        type="email"
        placeholder="ایمیل خود را وارد کنید"
        v-model="values.email"
        :errors="errors.email"
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
      />
      <TextInput
        title="تلفن:"
        class="form__field"
        id="register-phone"
        type="text"
        placeholder="تلفن خود را وارد کنید"
        v-model="values.phone"
        :errors="errors.phone"
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
      />
      <Button type="submit" class="form__field" variant="primary">
        ثبت تغییرات
      </Button>
    </form>
</template>

<style scoped>
    .edit {
        border-radius: 4px;
        /* background-color: #444; */
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
