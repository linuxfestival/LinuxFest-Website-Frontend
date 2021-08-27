<template>
  <FormTemplate title="ورود به حساب کاربری" @submit="login">
    <template v-slot:form>
      <TextInput
        v-model="user.email"
        type="email"
        placeholder="ایمیل خود را وارد کنید"
        id="email"
      />
      <TextInput
        v-model="user.password"
        type="password"
        placeholder="رمز عبور خود را وارد کنید"
        id="password"
      />
    </template>
    <template v-slot:options>
      <li>
        حساب کاربری ندارید؟ <router-link to="/signup">اینجا</router-link> را
        کلیک کنید
      </li>
      <li>
        <button
          @click="$emit('exit', user.email)"
          type="button"
          class="optionButton"
        >
          رمز عبور خود را فراموش کردم
        </button>
      </li>
    </template>
    <template v-slot:actions>
      <button class="loginButton">ورود به حساب کاربری</button>
    </template>
  </FormTemplate>
</template>

<script>
import { showErrorNotif, showSuccessNotif } from '@/utils/notifs'
import TextInput from '@/components/TextInput.vue'

import FormTemplate from './FormTemplate.vue'

export default {
  name: 'LoginForm',
  components: { FormTemplate, TextInput },
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    login() {
      this.$store
        .dispatch('login', this.user)
        .then(() => {
          showSuccessNotif(
            'با موفقیت وارد شدید. به صفحه پروفایل برده می شوید.'
          )
          this.$router.push('/user/me')
        })
        .catch(() => {
          showErrorNotif(
            'خطایی هنگاه ورود رخ داد. لطفا ورودی های خود را کنترل کنید'
          )
        })
    },
  },
}
</script>
