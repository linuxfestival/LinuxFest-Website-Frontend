<template>
    <div class="back">
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
                        v-bind:class="$v.user.firstName.$error ? 'notVerified' : 'input'"
                        placeholder="نام"
                />
                <p v-if="$v.user.firstName.$error" class="red">*نام باید فقط شامل حروف فارسی باشد</p>

                <input
                        class="persian"
                        type="text"
                        v-model="$v.user.lastName.$model"
                        v-bind:class="$v.user.lastName.$error ? 'notVerified' : 'input'"
                        placeholder="نام خانوادگی"/>
                <p v-if="$v.user.lastName.$error" class="red">*نام خانوادگی باید فقط شامل حروف فارسی باشد</p>

                <input
                        type="email"
                        v-model="$v.user.email.$model"
                        v-bind:class="$v.user.email.$error ? 'notVerified' : 'input'"
                        placeholder="ایمیل"
                />
                <p v-if="$v.user.email.$error" class="red">*ایمیل معتبر نمی باشد(از کیبورد انگلیسی استفاده کنید)</p>

                <div class="check-box">
                    <input type="checkbox" class="aut_check" id="checkbox" v-model="user.isAmirkabiri" checked="false"/>
                    <label for="checkbox">امیرکبیری هستم </label>
                </div>

                <input
                        type="number"
                        v-model="$v.user.studentNumber.$model"
                        v-if="user.isAmirkabiri"
                        :class="{'notVerified' : $v.user.studentNumber.$error , 'input' : !$v.user.studentNumber.$error}"
                        placeholder="شماره دانشجویی"
                />
                <p
                        v-if="$v.user.studentNumber.$error"
                        class="red"
                >شماره دانشجویی شما معتبر نمی باشد</p>

                <input
                        type="text"
                        v-model="$v.user.phoneNumber.$model"
                        v-bind:class="$v.user.phoneNumber.$error ? 'notVerified' : 'input'"
                        placeholder="تلفن"
                />
                <p
                        v-if="$v.user.phoneNumber.$error"
                        class="red"
                >* شماره تلفن شما معتبر نمی باشد.</p>

                <input
                        type="number"
                        v-model="$v.user.age.$model"
                        v-bind:class="$v.user.age.$error ? 'notVerified' : 'input'"
                        placeholder="سن"
                />
                <p v-if="$v.user.age.$error " class="red">سن شما معتبر نمی باشد.</p>
                <input
                      id="pass"
                        type="password"
                        v-model="$v.user.password.$model"
                        v-bind:class="$v.user.password.$error ? 'notVerified' : 'input'"
                        placeholder="رمز عبور"
                />
                <p
                        v-if="$v.user.password.$error"
                        class="red"
                >رمز عبور باید بیش از ۸ کاراکتر و شامل حروف کوچک و بزرگ و اعداد باشد</p>

                <div class="bottom">
                    <button>ایجاد حساب کاربری</button>
                    <p>
                        در صورت داشتن حساب کاربری به حساب خود
                        <span>
              <router-link to="/signin" class="red">وارد</router-link>
            </span> شوید
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

    const validateIf = (prop, validator) =>
  helpers.withParams({ type: 'validatedIf', prop }, function(value, parentVm) {
    return helpers.ref(prop, this, parentVm) ? validator(value) : true
  })

    export default {
        name: "SignupContent",
        validations: {
            user: {
                firstName: {required, perisanRexValidator},
                lastName: {required, perisanRexValidator},
                email: {required, email},
                phoneNumber: {required, numeric, persianPhoneValidator},
                password: {required, passwordRegexValidator},
                age: {required, between: between(15, 100)},
                studentNumber : {
                    minLength : validateIf('isAmirkabiri', minLength(7)),
                    maxLength : validateIf('isAmirkabiri', maxLength(10))
                },
            }
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
                    isAmirkabiri : false,
                },
            } 
        },
        created() {
            console.log("component created");
        },
        mounted() {
            console.log("component mounted.");
        },
        methods: {
            submitUser: function () {

                if(!this.$v.$invalid) {
                    if(this.user.isAmirkabiri === false) {
                        delete this.user.studentNumber;
                    }
                    console.log('user to send ', this.user);
                    this.$notify({
                        group : "auth",
                        title : "صبر کنید",
                        text : "چند لحظه صبر کنید...",
                        type : "warn"
                    })
                    this.$store
                        .dispatch("signup", this.user)
                        .then(() => {
                            console.log("sign up success");
                            this.$notify({
                                group: "auth",
                                title: "موفقیت",
                                text: "حساب کاربری شما با موفقیت ساخته شد. به پروفایل خود برده می شوید",
                                type: "success"
                            });
                            this.$router.push("/user/me");
                        })
                        .catch(() => {
                            console.log("sign up error");
                            this.$notify({
                                group: "auth",
                                title: "خطا",
                                text: "خطایی هنگام ارتباط با سرور رخ داد. لطفا ورودی های خود را کنترل کنید",
                                type: "error"
                            });
                        })
                        .finally(() => {
                        });
                } else {
                    this.$notify({
                        group: "auth",
                        title: "خطا",
                        text:" لطفا ورودی های خود را کنترل کنید",
                        type: "error"
                    });
                }
            }
        },
        computed: {}
    }
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
        display: flex;
        justify-content: center;
        align-items:center;
        min-height:calc(100vh - 50px);
    }

    .main-frame {
        background-color: white;
        padding: 25px;
        border-radius: 15px;
        width: 600px;
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
        border-radius: 5px;
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
        border-radius: 15px;
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
        border-radius: 15px;
        padding: 10px;
        text-align: right;
    }

    .d-none {
        display:none;
    }

    v-none {
        visibility: hidden;
    }
    
    .aut_check {
        margin: 3px;
    }
</style>
