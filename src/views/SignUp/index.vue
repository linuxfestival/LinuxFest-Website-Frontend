<template>
  <div class="back">
    <notifications position="top center" class="noti-style" />
    <div class="main-frame">
      <div class="subject">
        <h1>ایجاد حساب کاربری</h1>
      </div>
      <form class="top" @submit.prevent="submitUser()">
        <TextInput
          :isPersian="true"
          v-model="$v.user.firstName.$model"
          placeholder="نام"
          :hasError="$v.user.firstName.$error"
          error="*نام باید فقط شامل حروف فارسی باشد"
        />

        <TextInput
          :isPersian="true"
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

        <CheckboxInput
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

        <Actions />
      </form>
    </div>
  </div>
</template>

<script>
import {
  required,
  email,
  numeric,
  requiredIf,
  helpers,
  between,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";

import persianRex from "persian-rex";

import TextInput from "./components/TextInput.vue";
import CheckboxInput from "./components/CheckboxInput.vue";
import Actions from "./components/Actions.vue";

const persianPhoneValidator = helpers.regex(
  "persianPhoneValidator",
  /^(\+98?)?{?(0?9[0-9]{9,9}}?)$/gm
);
const passwordRegexValidator = helpers.regex(
  "passwordRegexValidator",
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/
);
const booleanValidator = (value) => {
  return value === false || value === true;
};

const perisanRexValidator = (value) => {
  for (let word of value.trim().split(" ")) {
    if (!persianRex.letter.test(word)) {
      return false;
    }
  }
  return true;
};

const validateIf = (prop, validator) =>
  helpers.withParams({ type: "validatedIf", prop }, function (value, parentVm) {
    return helpers.ref(prop, this, parentVm) ? validator(value) : true;
  });

export default {
  name: "SignUp",
  components: {
    TextInput,
    CheckboxInput,
    Actions,
  },
  validations: {
    user: {
      firstName: { required, perisanRexValidator },
      lastName: { required, perisanRexValidator },
      email: { required, email },
      phoneNumber: { required, numeric, persianPhoneValidator },
      password: { required, passwordRegexValidator },
      age: { required, between: between(15, 100) },
      studentNumber: {
        minLength: validateIf("isAmirkabiri", minLength(7)),
        maxLength: validateIf("isAmirkabiri", maxLength(10)),
      },
    },
  },
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        age: "",
        studentNumber: "",
        isAmirkabiri: false,
      },
    };
  },
  created() {
    console.log("component created");
  },
  mounted() {
    console.log("component mounted.");
  },
  methods: {
    submitUser: function () {
      if (!this.$v.$invalid) {
        if (this.user.isAmirkabiri === false) {
          delete this.user.studentNumber;
        }
        console.log("user to send ", this.user);
        this.$notify({
          group: "auth",
          title: "صبر کنید",
          text: "چند لحظه صبر کنید...",
          type: "warn",
        });
        this.$store
          .dispatch("signup", this.user)
          .then(() => {
            console.log("sign up success");
            this.$notify({
              group: "auth",
              title: "موفقیت",
              text: "حساب کاربری شما با موفقیت ساخته شد. به پروفایل خود برده می شوید",
              type: "success",
            });
            this.$router.push("/user/me");
          })
          .catch(() => {
            console.log("sign up error");
            this.$notify({
              group: "auth",
              title: "خطا",
              text:
                "لطفا رورودی های خود را کنترل کنید-" +
                this.$store.getters.signUpErrors,
              type: "error",
            });
          })
          .finally(() => {});
      } else {
        this.$notify({
          group: "auth",
          title: "خطا",
          text: " لطفا ورودی های خود را کنترل کنید",
          type: "error",
        });
      }
    },
  },
  computed: {},
};
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
  color: #521c34;
  font-family: "iransans";

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
