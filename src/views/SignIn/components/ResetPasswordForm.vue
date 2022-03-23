<template>
  <FormTemplate title="ورود به حساب کاربری" @submit="forgetPasswordRequest">
    <template v-slot:form>
      <TextInput
        v-model="email"
        type="email"
        id="email"
        placeholder="ایمیل خود را وارد کنید"
      />
    </template>
    <template v-slot:options>
      <li>
        <button @click="$emit('exit')" type="button" class="optionButton">
          ورود
        </button>
      </li>
    </template>
    <template v-slot:actions>
      <button class="loginButton">درخواست تعویض رمز عبور</button>
    </template>
  </FormTemplate>
</template>

<script>
import { showErrorNotif, showSuccessNotif } from '@/utils/notifs'
import TextInput from '@/components/TextInput'

import { sendResetPasswordRequest } from '../requests'
import FormTemplate from './FormTemplate.vue'

export default {
  name: 'ResetPasswordForm',
  components: { FormTemplate, TextInput },
  props: {
    initialEmail: String,
  },
  data() {
    return {
      email: '',
    }
  },
  created() {
    this.email = this.initialEmail
  },
  methods: {
    forgetPasswordRequest() {
      console.log('forget password request')
      console.log(this.email)
      sendResetPasswordRequest(this.email)
        .then(() => {
          showSuccessNotif('ایمیل خود را برای ادامه مراحل چک کنید..')
        })
        .catch((error) => {
          const {
            response: { status },
          } = error

          if (status === 404) {
            showErrorNotif(
              'چنین کاربری وجود ندارد. از صحت ایمیل اطمینان حاصل کنید.'
            )
            return
          }
          showErrorNotif(
            'خطایی هنگام ارتباط با سرور رخ داد. لطفا اتصال اینترنت خود را بررسی کنید.'
          )
        })
    },
  },
}
</script>
