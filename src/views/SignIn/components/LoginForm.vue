<template>
  <FormTemplate title="ورود به حساب کاربری" @submit="login">
    <template v-slot:form>
      <input
        v-model="user.email"
        type="email"
        class="formFormInput"
        placeholder="ایمیل خود را وارد کنید"
      />
      <input
        v-model="user.password"
        type="password"
        class="formFormInput"
        placeholder="رمز عبور خود را وارد کنید"
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
import FormTemplate from "./FormTemplate.vue";
export default {
  name: "LoginForm",
  components: { FormTemplate },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", this.user)
        .then(() => {
          this.$router.push("/user/me");
          this.$notify({
            group: "auth",
            type: "success",
            title: "موفقیت",
            text: "با موفقیت وارد شدید. به صفحه پروفایل برده می شوید.",
          });
        })
        .catch(() => {
          this.$notify({
            group: "auth",
            type: "error",
            title: "خطا",
            text: "خطایی هنگاه ورود رخ داد. لطفا ورودی های خود را کنترل کنید",
          });
        });
    },
  },
};
</script>

<style>
</style>
