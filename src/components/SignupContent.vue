<template>
    <div class="back">
        <notifications position="top center" class="noti-style"/>
        <div class="main-frame">
            <div class="subject"><h1>ایجاد حساب کاربری</h1></div>
            <div class="top">
                <input type="text" v-model="user.firstName" placeholder="نام">
                <input type="text" v-model="user.lastName" placeholder="نام خانوادگی">
                <input type="email" v-model="user.email" placeholder="ایمیل">
                <p v-if="!verifyEmail" class="red">ایمیل معتبر نمی باشد*</p>
                <div class="check-box">
                    <input type="checkbox" id="checkbox" v-model="checked">
                    <label for="checkbox">امیرکبیری هستم</label>
                </div>
                <input type="text" v-model="user.studentNumber" v-if="this.checked" placeholder="شماره دانشجویی">
                <input type="text" v-model="user.phoneNumber" placeholder="تلفن">
                <input type="password" v-model="user.password" placeholder="رمز عبور">
            </div>
            <div class="bottom">
                <button @click="submitUser()">ایجاد حساب کاربری</button>
                <p>در صورت داشتن حساب کاربری به حساب خود <span><router-link to="/signin"
                                                                            class="red"> وارد </router-link></span>شوید
                </p>
            </div>
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
                if (this.user.firstName !== '' && this.user.phoneNumber !== ' ' && this.user.lastName !== '' && this.user.email !== '' && this.user.password !== '') {
                    if (this.checked && this.user.studentNumber !== ' ') {
                        var success = this.$store.commit('signUp', this.user);
                        if (success === true) {
                            this.$notify('حساب کاربری ایجاد شد')
                        }
                    }
                    this.user = {
                        firstName: '',
                        lastName: '',
                        email: '',
                        studentNumber: '',
                        phoneNumber: '',
                        password: '',
                    };

                }
            },
            computed: {
                verifyEmail: function () {
                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email) || this.user.email === '') {
                        return true;
                    }
                    return false;
                }
            }
        }
    }
</script>

<style scoped>
    .back {
        background-color: black;
        padding: 100px 200px 100px 200px;
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
        margin: 10px;
    }

    .top input {
        margin: 10px;
        border: none;
        background-color: #dddddd;
        border-radius: 25px;
        padding: 10px;
        text-align: right;

    }

    .top label {
        font-size: 13px;
        text-align: right;
    }

    .top .check-box {
        display: flex;
        flex-direction: row-reverse;
        justify-content: right;
    }

    .top #checkbox {
        justify-content: right;
        position: relative;
        top: -10px;
    }

    .subject h1 {
        text-align: center;
        color: #521c34;
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
</style>