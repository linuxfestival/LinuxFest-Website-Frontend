<template>
  <div class="parent">
    <PartialHeader
      title="حساب کاربری"
      backgroundUrl="../assets/img/background2.png"
    />
    <form class="main-frame" @submit.prevent="editUser()">
      <Header />
      <Description />
      <FormGroup>
        <TextInput
          id="firstName"
          v-model="$v.user.firstName.$model"
          :placeholder="this.currentUserData.firstName"
          label="نام :"
        />
        <TextInput
          label="نام خانوادگی :"
          id="lastName"
          v-model="$v.user.lastName.$model"
          :placeholder="this.currentUserData.lastName"
        />
      </FormGroup>
      <FormGroup>
        <TextInput
          type="email"
          id="email"
          v-model="$v.user.email.$model"
          :placeholder="this.currentUserData.email"
          label="ایمیل :"
        />
        <TextInput
          id="phoneNumber"
          label="شماره تماس :"
          v-model="$v.user.phoneNumber.$model"
          :placeholder="this.currentUserData.phone"
        />
      </FormGroup>
      <FormGroup>
        <TextInput
          type="password"
          id="password"
          label="رمز عبور :"
          v-model="$v.user.password.$model"
          placeholder="رمز عبور"
        />
        <TextInput
          type="number"
          id="age"
          v-model="$v.user.age.$model"
          :placeholder="this.currentUserData.age"
          label="سن :"
        />
      </FormGroup>
      <FormGroup>
        <button :disabled="isLoading">اعمال تغییرات</button>
      </FormGroup>
    </form>
  </div>
</template>

<script>
import { numeric, between, email } from 'vuelidate/lib/validators'

import TextInput from '@/components/TextInput.vue'
import PartialHeader from '@/components/PartialHeader'
import { showErrorNotif, showSuccessNotif } from '@/utils/notifs'
import { isPersian, isPasswordValid, isPhoneValid } from '@/utils/validators'

import FormGroup from './components/FormGroup.vue'
import Header from './components/Header.vue'
import Description from './components/Description.vue'
import { fetchUser, editUserRequest } from './requests'

export default {
  name: 'UserEdit',
  components: {
    PartialHeader,
    FormGroup,
    TextInput,
    Header,
    Description,
  },
  validations: {
    user: {
      firstName: { isPersian },
      lastName: { isPersian },
      email: { email },
      phoneNumber: { numeric, isPhoneValid },
      password: { isPasswordValid },
      age: { numeric, between: between(15, 100) },
    },
  },

  data() {
    return {
      isLoading: true,
      user: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        age: '',
      },
      currentUserData: {},
    }
  },
  created() {
    fetchUser()
      .then((user) => {
        this.currentUserData = user
      })
      .catch(() => {
        showErrorNotif(
          'خطایی هنگام ارتباط با سرور رخ داد. لطفا اتصال اینترنت خود را بررسی کنید'
        )
      })
      .finally(() => {
        this.isLoading = false
      })
  },
  methods: {
    updatedFieldsAreValid(updatedUserPayload) {
      return Object.keys(updatedUserPayload).every(
        (key) => !this.$v.user[key].$invalid
      )
    },

    editUser() {
      const updatedUserPayload = Object.fromEntries(
        Object.entries(this.user).filter(([key]) => Boolean(this.user[key]))
      )

      if (!this.updatedFieldsAreValid(updatedUserPayload)) {
        showErrorNotif('لطفا ورودی های وارد شده خود را کنترل کنید.')
        return
      }

      this.isLoading = true
      editUserRequest(updatedUserPayload)
        .then(() => {
          showSuccessNotif(
            'اطلاعات حساب کاربری شما با موفقیت به روز رسانی شد. به پروفایل خود برده می شوید'
          )
          this.$router.push('/user/me')
        })
        .catch(() => {
          showErrorNotif(
            'خطایی هنگام ارتباط با سرور رخ داد. لطفا اتصال اینترنت خود را بررسی کنید'
          )
        })
        .finally(() => {
          this.isLoading = false
        })
    },
  },
}
</script>

<style scoped>
.parent {
  background-color: #e1e1e1;
  width: 100%;
  min-height: calc(100vh - 40px);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
}

.main-frame {
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 0 25px rgba(0, 0, 0, 0.2);
  width: calc(100% - 60px);
  max-width: 1140px;
}

.formGroup button {
  background: #252040;
  border: none;
  color: white;
  padding: 10px 30px;
  border-radius: 5px;
  margin: 10px auto;
  cursor: pointer;
}
</style>
