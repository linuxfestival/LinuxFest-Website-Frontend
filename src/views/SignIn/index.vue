<template>
  <div class="loginWrapper">
    <v-wait for="Wait to sign in"></v-wait>
    <notifications position="top center" class="noti-style" />
    <transition name="fade" mode="out-in">
      <LoginForm @exit="toggleForgetLoginForm" v-if="isLoginFormShown" />
      <ResetPasswordForm
        @exit="toggleForgetLoginForm"
        :initialEmail="resetPasswordEmail"
        v-else
      />
    </transition>
  </div>
</template>

<script>
import FormTemplate from "./components/FormTemplate.vue";
import LoginForm from "./components/LoginForm.vue";
import ResetPasswordForm from "./components/ResetPasswordForm.vue";

export default {
  name: "SignIn",
  components: {
    LoginForm,
    ResetPasswordForm,
    FormTemplate,
  },

  data() {
    return {
      resetPasswordEmail: "",
      isLoginFormShown: true,
    };
  },

  methods: {
    toggleForgetLoginForm(forgetPassEmail) {
      this.resetPasswordEmail = forgetPassEmail;
      this.isLoginFormShown = !this.isLoginFormShown;
    },
  },
};
</script>

<style>
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

.formFormInput {
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 15px;
  background-color: #ddd;
  padding: 15px;
  color: #333;
  border: none;
  font-family: "iransans";
}

.loginButton {
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: #521c34;
  color: white;
  cursor: pointer;
  font-family: "iransans";
}

.optionButton {
  border: none;
  font-family: "iransans";
  background: none;
  cursor: pointer;
}

.optionButton:hover {
  color: #521c34;
}
</style>
