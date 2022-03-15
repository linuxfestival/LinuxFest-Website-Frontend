<template>
  <div class="loginWrapper">
    <div class="formWrapper">
      <h1 class="formTitle">ایجاد رمز عبور جدید</h1>
      <form action class="formForm" @submit.prevent="handleSubmit()">
        <TextInput
         v-model="password"
          type="password"
          placeholder="رمز عبور خود را وارد کنید"
         />
        <div class="formFormFooter">
          <ul class="formOptionsList">
            <li>
              برای ورود
              <router-link to="/signin">اینجا</router-link>
              را کلیک کنید.
            </li>
          </ul>
          <button class="loginButton">تغییر رمز عبور</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { showErrorNotif, showSuccessNotif } from '@/utils/notifs'
import TextInput from '@/components/TextInput.vue'

import { confirmPassword } from './requests'

export default {
  name: 'ForgetPass',
  components: { TextInput },
  data() {
    return {
      password: '',
    }
  },
  methods: {
    handleSubmit() {
      const {
        params: { forgetToken: token },
      } = this.$route

      confirmPassword({ token, password: this.password })
        .then(() => {
          showSuccessNotif('رمز عبور شما با موفقیت تعویض شد. به صفحه ورود ریدایرکت می شوید...')
          this.$router.push('/signin')
        })
        .catch(() => {
          showErrorNotif('خطایی هنگام تعویض رمز عبور رخ داد.لطفا اتصال اینترنت خود را چک کنید')
        })
    },
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.loginWrapper {
  min-height: 100vh;
  background: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

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

.loginButton {
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: #252040;
  color: white;
  cursor: pointer;
}

.formOptionsList {
  list-style-type: disc;
  font-size: 15px;
}
</style>
