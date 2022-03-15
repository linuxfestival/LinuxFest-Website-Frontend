<template>
  <div class="back">
    <notifications position="top center" class="noti-style" />
    <div class="main-frame">
      <div class="subject">
        <h1>ایجاد حساب کاربری</h1>
      </div>
      <form class="top" @submit.prevent="submitUser()">
        <TextInput
          v-model="$v.user.firstName.$model"
          placeholder="نام"
          :hasError="$v.user.firstName.$error"
          error="*نام باید فقط شامل حروف فارسی باشد"
        />

        <TextInput
          v-model="$v.user.lastName.$model"
          placeholder="نام خانوادگی"
          :hasError="$v.user.lastName.$error"
          error="*نام خانوادگی باید فقط شامل حروف فارسی باشد"
        />

        <TextInput
          type="email"
          v-model="$v.user.email.$model"
          placeholder="ایمیل"
          :hasError="$v.user.email.$error"
          error="*ایمیل معتبر نمی باشد(از کیبورد انگلیسی استفاده کنید)"
        />

        <Checkbox
          id="checkbox"
          v-model="user.isAmirkabiri"
          label="امیرکبیری هستم"
          checkboxClass="aut_check"
        />

        <TextInput
          type="number"
          v-model="$v.user.studentNumber.$model"
          v-if="user.isAmirkabiri"
          placeholder="شماره دانشجویی"
          :hasError="$v.user.studentNumber.$error"
          error="شماره دانشجویی شما معتبر نمی باشد"
        />

        <TextInput
          v-model="$v.user.phoneNumber.$model"
          placeholder="تلفن"
          :hasError="$v.user.phoneNumber.$error"
          error="* شماره تلفن شما معتبر نمی باشد."
        />

        <TextInput
          type="number"
          v-model="$v.user.age.$model"
          placeholder="سن"
          :hasError="$v.user.age.$errorr"
          error="سن شما معتبر نمی باشد."
        />

        <TextInput
          id="pass"
          type="password"
          v-model="$v.user.password.$model"
          placeholder="رمز عبور"
          :hasError="$v.user.password.$error"
          error="رمز عبور باید بیش از ۸ کاراکتر و شامل حروف کوچک و بزرگ و اعداد باشد"
        />

        <Actions :disabled="isLoading" />
      </form>
    </div>
  </div>
</template>

<script>
import {
  required,
  email,
  numeric,
  between,
  minLength,
  maxLength,
} from 'vuelidate/lib/validators'

import { showErrorNotif, showSuccessNotif } from '@/utils/notifs'
import { isPersian, isPhoneValid, isPasswordValid, validateIf } from '@/utils/validators'
import TextInput from '@/components/TextInput.vue'
import Checkbox from '@/components/Checkbox.vue'

import Actions from './components/Actions.vue'

export default {
  name: 'SignUp',
  components: {
    TextInput,
    Checkbox,
    Actions,
  },
  validations: {
    user: {
      firstName: { required, isPersian },
      lastName: { required, isPersian },
      email: { required, email },
      phoneNumber: { required, numeric, isPhoneValid },
      password: { required, isPasswordValid },
      age: { required, between: between(15, 100) },
      studentNumber: {
        minLength: validateIf('isAmirkabiri', minLength(7)),
        maxLength: validateIf('isAmirkabiri', maxLength(10)),
      },
    },
  },
  data() {
    return {
      isLoading: false,
      user: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        age: '',
        studentNumber: '',
        isAmirkabiri: false,
      },
    }
  },
  methods: {
    submitUser() {
      if (this.$v.$invalid) {
        showErrorNotif('لطفا ورودی های خود را کنترل کنید')
        return
      }

      if (!this.user.isAmirkabiri) {
        delete this.user.studentNumber
      }
      this.isLoading = true
      this.$notify({
        group: 'auth',
        title: 'صبر کنید',
        text: 'چند لحظه صبر کنید...',
        type: 'warn',
      })
      this.$store
        .dispatch('signUp', this.user)
        .then(() => {
          showSuccessNotif(
            'حساب کاربری شما با موفقیت ساخته شد. به پروفایل خود برده می شوید',
          )
          this.$router.push('/user/me')
        })
        .catch(() => {
          showErrorNotif('لطفا رورودی های خود را کنترل کنید')
        })
        .finally(() => {
          this.isLoading = false
        })
    },
  },
}
</script>

<style scoped>
.back {
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 50px);
}

.main-frame {
  background-color: white;
  padding: 24px;
  border-radius: 12px;
  width: 600px;
}

.top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
}

.subject h1 {
  text-align: center;
  color: #252040;

  margin-bottom: 32px;
}
/*notification*/
.noti-style {
  padding: 0px;
  margin: 0px 5px 5px;
  font-size: 15px;
}

.d-none {
  display: none;
}

v-none {
  visibility: hidden;
}

.aut_check {
  margin: 3px;
}
</style>
