<template>
    <div class="back">
        <v-wait for="Wait to sign in"></v-wait>
        <notifications position="top center" class="noti-style"/>
        <div class="main-frame">
            <div class="subject">
                <h1>ایجاد حساب کاربری</h1>
            </div>
            <form class="top" @submit.prevent="submitUser()">
                <input
                        class="persian"
                        type="text"
                        v-model="$v.user.firstName.$model"
                        v-bind:class="$v.user.firstName.$invalid ? 'notVerified' : 'input'"
                        placeholder="نام"
                />
                <p v-if="$v.user.firstName.$invalid" class="red">*نام باید فقط شامل حروف فارسی باشد</p>

                <input
                        class="persian"
                        type="text"
                        v-model="$v.user.lastName.$model"
                        v-bind:class="$v.user.lastName.$invalid ? 'notVerified' : 'input'"
                        placeholder="نام خانوادگی"
                />
                <p v-if="$v.user.lastName.$invalid" class="red">*نام خانوادگی باید فقط شامل حروف فارسی باشد</p>

                <input
                        type="email"
                        v-model="$v.user.email.$model"
                        v-bind:class="$v.user.email.$invalid ? 'notVerified' : 'input'"
                        placeholder="ایمیل"
                />
                <p v-if="$v.user.email.$invalid" class="red">*ایمیل معتبر نمی باشد(از کیبورد انگلیسی استفاده کنید)</p>

                <div class="check-box">
                    <input type="checkbox" id="checkbox" v-model="$v.user.isAmirkabiri.$model"/>
                    <label for="checkbox">امیرکبیری هستم</label>
                </div>

                <input
                        type="text"
                        v-model="$v.user.studentNumber.$model"
                        v-if="user.isAmirkabiri"
                        v-bind:class="$v.user.studentNumber.$invalid ? 'notVerified' : 'input'"
                        placeholder="شماره دانشجویی"
                />
                <p
                        v-if="$v.user.studentNumber.$invalid"
                        class="red"
                >*شماره دانشجویی معتبر نمی باشد(از کیبورد انگلیسی استفاده کنید)</p>

                <input
                        type="text"
                        v-model="$v.user.phoneNumber.$model"
                        v-bind:class="$v.user.phoneNumber.$invalid ? 'notVerified' : 'input'"
                        placeholder="تلفن"
                />
                <p
                        v-if="$v.user.phoneNumber.$invalid"
                        class="red"
                >*شماره تلفن همراه شما باید با ۰۹ شروع شود(از کیبورد انگلیسی استفاده کنید)</p>

                <input
                        type="text"
                        v-model="$v.user.age.$model"
                        v-bind:class="$v.user.age.$invalid ? 'notVerified' : 'input'"
                        placeholder="سن"
                />
                <p v-if="$v.user.age.$invalid " class="red">*سن معتبر نمی باشد(از کیبورد انگلیسی استفاده کنید)</p>

                <input
                        type="password"
                        v-model="$v.user.password.$model"
                        v-bind:class="$v.user.password.$invalid ? 'notVerified' : 'input'"
                        placeholder="رمز عبور"
                />
                <p
                        v-if="$v.user.password.$invalid"
                        class="red"
                >*رمز عبور باید بیش از ۶ کاراکتر و شامل حروف و اعداد باشد(از کیبورد انگلیسی استفاده کنید)</p>

                <div class="bottom">
                    <button>ایجاد حساب کاربری</button>
                    <p>
                        در صورت داشتن حساب کاربری به حساب خود
                        <span>
              <router-link to="/signin" class="red">وارد</router-link>
            </span>شوید
                    </p>
                </div>
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
        maxLength
    } from "vuelidate/lib/validators";

    import persianRex from 'persian-rex'

    const persianPhoneValidator = helpers.regex('persianPhoneValidator', /^(\+98?)?{?(0?9[0-9]{9,9}}?)$/gm);
    const passwordRegexValidator = helpers.regex('passwordRegexValidator', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/);
    const booleanValidator = (value) => {
        return value === false || value === true
    };
    const perisanRexValidator = (value) => {
        for(let word of value.trim().split(" ")) {
            if(!persianRex.letter.test(word)){
                return false;
            }
        }
        return true;
    };

    export default {
        name: "SignupContent",
        validations: {
            user: {
                firstName: {required, perisanRexValidator},
                lastName: {required, perisanRexValidator},
                email: {required, email},
                studentNumber: {
                    numeric,
                    minLength: minLength(7),
                    maxLength: maxLength(8),
                },
                phoneNumber: {required, numeric, persianPhoneValidator},
                password: {required, passwordRegexValidator},
                age: {required, between: between(15, 100)},
                isAmirkabiri: {booleanValidator }
            }
        },
        data: function () {
            return {
                user: {
                    firstName: "",
                    lastName: "",
                    email: "",
                    studentNumber: "",
                    phoneNumber: "",
                    password: "",
                    age: "",
                    isAmirkabiri: false
                }
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
                console.log("submit user");
                console.log('is invalid ', this.$v.user.$invalid);
                console.log(this.$v.user);

                if(!this.$v.$invalid) {
                    if(this.user.isAmirkabiri !== true) {
                        delete this.user.isAmirkabiri;
                        delete this.user.studentNumber;
                    }


                    //form is valid, sending
                    this.$store
                        .dispatch("signup", this.user)
                        .then(() => {
                            console.log("sign up success");
                            this.$notify({
                                group: "auth",
                                title: "موفقیت",
                                text:
                                    "حساب کاربری شما با موفقیت ساخته شد. به پروفایل خود برده می شوید",
                                type: "success"
                            });
                            this.user = {
                                firstName: "",
                                lastName: "",
                                email: "",
                                studentNumber: "",
                                phoneNumber: "",
                                password: "",
                                age: ""
                            };
                            this.$router.push("/user/me");
                        })
                        .catch(() => {
                            console.log("sign up error");
                            this.$notify({
                                group: "auth",
                                title: "خطا",
                                text:
                                    "خطایی هنگام ارتباط با سرور رخ داد. لطفا ورودی های خود را کنترل کنید",
                                type: "error"
                            });
                        })
                        .finally(() => {
                        });
                }


            }
        },
        computed: {}
    };
</script>

<style scoped>
    p {
        font-family: "iransans";
    }

    input {
        font-family: "iransans";
    }

    .back {
        background-color: black;
        padding: 50px 0 30px 0;
        display: flex;
        justify-content: center;
    }

    .main-frame {
        background-color: white;
        padding: 10px;
        border-radius: 60px;
        width: 600px;
        margin: 0 auto;
    }

    .red {
        color: darkred;
    }

    .bottom {
        display: flex;
        justify-content: space-between;
        margin: 10px;
    }

    button {
        background-color: #521c34;
        border-radius: 35px;
        border: none;
        padding: 0px 30px 0px 30px;
        font-size: 15px;
        color: white;
        margin: 10px;
        font-family: "iransans";
        cursor: pointer;
    }

    button:hover {
        background-color: rgb(242, 169, 56);
    }

    .bottom p {
        color: #521c34;
        margin: 20px;
        text-align: right;
        font-size: 13px;
    }

    .top {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: right;
    }

    .top .input {
        margin: 10px;
        border: 1px solid #dddddd;
        background-color: #dddddd;
        border-radius: 25px;
        padding: 10px;
        text-align: right;
    }

    .top label {
        font-size: 13px;
        text-align: right;
        font-family: "iransans";
    }

    .top .check-box {
        display: flex;
        flex-direction: row;
        justify-content: right;
        padding: 10px;
    }

    .top #checkbox {
        justify-content: right;
        position: relative;
    }

    .subject h1 {
        text-align: center;
        color: #521c34;
        font-family: "iransans";
    }

    .top p {
        font-size: 13px;
        text-align: right;
    }

    /*notification*/
    .noti-style {
        padding: 0px;
        margin: 0px 5px 5px;
        font-size: 15px;
    }

    .notVerified {
        border: 1px solid red;
        margin: 10px;
        background-color: #dddddd;
        border-radius: 25px;
        padding: 10px;
        text-align: right;
    }

    /*med*/
    /* @media only screen and (max-width: 768px) {
            .back{
                background-color: #68CD86;
            }
        } */
</style>