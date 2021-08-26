<template>
  <FormTemplate title="ورود به حساب کاربری" @submit="forgetPasswordRequest">
    <template v-slot:form>
      <input
        v-model="email"
        type="email"
        class="formFormInput"
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
import axios from "axios";

import FormTemplate from "./FormTemplate.vue";
export default {
  name: "ResetPasswordForm",
  components: { FormTemplate },
  props: {
    initialEmail: String,
  },
  data() {
    return {
      email: "",
    };
  },
  created() {
    this.email = this.initialEmail;
  },
  methods: {
    forgetPasswordRequest() {
      console.log("forget password request");
      axios({
        url: this.$store.getters.baseUrl + "users/forget",
        method: "post",
        data: this.user,
      })
        .then((response) => {
          console.log(response);
          this.$notify({
            group: "auth",
            type: "success",
            title: "موفقیت",
            text: "ایمیل خود را برای ادامه مراحل چک کنید..",
          });
        })
        .catch((error) => {
          if (error.response.status === 404) {
            this.$notify({
              group: "auth",
              type: "error",
              title: "خطا",
              text: "چنین کاربری وجود ندارد. از صحت ایمیل اطمینان حاصل کنید.",
            });
          } else {
            this.$notify({
              group: "auth",
              type: "error",
              title: "خطا",
              text: "خطایی هنگام ارتباط با سرور رخ داد. لطفا اتصال اینترنت خود را بررسی کنید.",
            });
          }
          console.log(error.response);
        });
    },
  },
};
</script>
