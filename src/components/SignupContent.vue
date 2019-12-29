<template>
    <div class="back">
        <v-wait for="Wait to sign in"></v-wait>
        <notifications position="top center" class="noti-style"/>
        <div class="main-frame">
            <div class="subject"><h1>ایجاد حساب کاربری</h1></div>
            <form class="top" @submit.prevent="submitUser()">
                <input class="persian" type="text" v-model="user.firstName" v-bind:class="!verifyFirstName ? 'notVerified' : 'input'"
                       placeholder="نام">
                <p v-if="!verifyFirstName" class="red">*نام باید فقط شامل حروف فارسی باشد</p>
                <input class="persian"  type="text" v-model="user.lastName" v-bind:class="!verifyLastName ? 'notVerified' : 'input'"
                       placeholder="نام خانوادگی">
                <p v-if="!verifyLastName" class="red">*نام خانوادگی باید فقط شامل حروف فارسی باشد</p>
                <input type="email" v-model="user.email" v-bind:class="!verifyEmail ? 'notVerified' : 'input'"
                       placeholder="ایمیل">
                <p v-if="!verifyEmail" class="red">*ایمیل معتبر نمی باشد(از کیبورد انگلیسی استفاده کنید)</p>
                <div class="check-box">
                    <input type="checkbox" id="checkbox" v-model="checked">
                    <label for="checkbox">امیرکبیری هستم</label>
                </div>
                <input type="text" v-model="user.studentNumber" v-if="this.checked"
                       v-bind:class="!verifyStudentNumber ? 'notVerified' : 'input'" placeholder="شماره دانشجویی">
                <p v-if="!verifyStudentNumber" class="red">*شماره دانشجویی معتبر نمی باشد(از کیبورد انگلیسی استفاده کنید)</p>
                <input type="text" v-model="user.phoneNumber"
                       v-bind:class="!verifyPhoneNumber ? 'notVerified' : 'input'" placeholder="تلفن">
                <p v-if="!verifyPhoneNumber" class="red">*شماره تلفن همراه شما باید با ۰۹ شروع شود(از کیبورد انگلیسی استفاده کنید)</p>
                <input type="text" v-model="user.age" v-bind:class="!verifyAge ? 'notVerified' : 'input'"
                       placeholder="سن">
                <p v-if="!verifyAge" class="red">*سن معتبر نمی باشد(از کیبورد انگلیسی استفاده کنید)</p>
                <input type="password" v-model="user.password" v-bind:class="!verifyPassword ? 'notVerified' : 'input'"
                       placeholder="رمز عبور">
                <p v-if="!verifyPassword" class="red">*رمز عبور باید بیش از ۶ کاراکتر و شامل حروف و اعداد باشد(از کیبورد انگلیسی استفاده کنید)</p>
                <div class="bottom">
                <button>ایجاد حساب کاربری</button>
                <p>در صورت داشتن حساب کاربری به حساب خود <span>
                    <router-link to="/signin" class="red"> وارد </router-link></span>شوید
                </p>
            </div>
            </form>
        </div>
    </div>
</template>

<script>

    export default {
        name: "SignupContent",
        data: function () {
            return {
                user: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    studentNumber: '',
                    phoneNumber: '',
                    password: '',
                    age: '',
                    isAmirkabiri: ''
                },
                checked: ''
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
                console.log("submit user");
                if (this.user.age !== '' && this.user.firstName !== '' && this.user.phoneNumber !== ' ' && this.user.lastName !== '' && this.user.email !== '' && this.user.password !== '') {
                    if ((this.checked === '' && this.user.studentNumber === '') || (this.checked !== '' && this.user.studentNumber !== '')) {
                        if (this.verifyFirstName && this.verifyLastName && this.verifyEmail && this.verifyStudentNumber && this.verifyPhoneNumber && this.verifyPassword && this.verifyAge) {
                            if (this.checked !== '') this.isAmirkabiri = 'true';
                            //delete the empty properties in the object
                            for (var propName in this.user) {
                                if (this.user[propName] === null || this.user[propName] === "" || this.user[propName] === undefined) {
                                    delete this.user[propName];
                                }
                            }
                            console.log("Before");
                            this.$store.dispatch('signup', this.user).then(() => {
                                console.log('sign up success');
                                this.$notify({
                                    group : 'auth',
                                    title : 'موفقیت',
                                    text : 'حساب کاربری شما با موفقیت ساخته شد. به پروفایل خود برده می شوید',
                                    type : "success"
                                });
                                this.user = {
                                    firstName: '',
                                    lastName: '',
                                    email: '',
                                    studentNumber: '',
                                    phoneNumber: '',
                                    password: '',
                                    age: ''
                                };
                                this.$router.push('/user/me');
                            }).catch(() => {
                                console.log('sign up error');
                                this.$notify({
                                    group : 'auth',
                                    title : 'خطا',
                                    text : 'خطایی هنگام ارتباط با سرور رخ داد. لطفا ورودی های خود را کنترل کنید',
                                    type : "error"
                                });
                                
                            }).finally(() => {

                            });
                        }
                    }
                }
            }

        }, computed: {
            verifyEmail: function () {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email) || this.user.email === '') {
                    return true;
                }
                return false;
            },
            verifyFirstName: function () {
                var p = /^[\u0600-\u06FF\s]+$/;

                if (p.test(this.user.firstName) || this.user.firstName === '') {
                    return true
                } else return false
            },
            verifyLastName: function (str) {
                var p = /^[\u0600-\u06FF\s]+$/;

                if (p.test(this.user.lastName) || this.user.lastName === '') {
                    return true
                } else return false
            },

            verifyPhoneNumber: function () {
                var p = /^\d+$/
                if (this.user.phoneNumber == '' || (this.user.phoneNumber.length == 11 && p.test(this.user.phoneNumber))) {
                    return true
                } else {
                    return false
                }
            },
            verifyStudentNumber: function () {
                var p = /^\d+$/
                if (this.user.studentNumber == '' || (this.user.studentNumber.length == 7 && p.test(this.user.studentNumber))) {
                    return true
                } else {
                    return false
                }
            },
            verifyAge: function () {
                if (this.user.age == '' || (this.user.age < 100 && this.user.age > 15)) {
                    return true
                } else {
                    return false
                }

            },
            verifyPassword: function () {
                var p = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
                if (this.user.password == '' || (this.user.password.length > 5 && p.test(this.user.password))) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
</script>

<style scoped>
    p {
        font-family: 'iransans';
    }

    input {
        font-family: 'iransans';
    }

    .back {
        background-color: black;
        padding: 50px 0 30px 0 ;
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
        font-family: 'iransans';
        cursor:pointer;

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
        font-family: 'iransans';
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
        font-family: 'iransans';
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