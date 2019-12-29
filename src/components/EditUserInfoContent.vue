<template>
    <div class="parent">
        <v-wait for="Wait to sign in"></v-wait>
        <notifications position="top center" class="noti-style"/>
        <div class="main-frame">
            <h1>ویرایش اطلاعات</h1>
            <div class="info-list">
                <input type="text" v-model="user.firstName"  :placeholder="this.getFirstName +'  (نام)'" v-bind:class="!verifyFirstName ? 'notVerified' : 'input'">
                <input type="text" v-model="user.lastName" :placeholder="this.getLastName+'  (نام خانوادگی)'" v-bind:class="!verifyLastName ? 'notVerified' : 'input'">
                <input type="email" v-model="user.email" :placeholder="this.getEmail+'  (ایمیل)'" v-bind:class="!verifyEmail ? 'notVerified' : 'input'">
                <p v-if="!verifyEmail" class="red">ایمیل معتبر نمی باشد*</p>
                <input type="password" v-model="user.password" v-bind:class="!verifyPassword ? 'notVerified' : 'input'" placeholder="رمز عبور">
                <input type="text" v-model="user.phoneNumber" :placeholder="this.getPhoneNumber+'  (تلفن)'"  v-bind:class="!verifyPhoneNumber ? 'notVerified' : 'input'">
                <input type="email" v-model="user.age" :placeholder="this.getAge+'  (سن)'" v-bind:class="!verifyAge ? 'notVerified' : 'input'">
            </div>
            <div class="button">
                <button @click="editUser()">ثبت</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EditUserInfoContent",
        data: function () {
            return {
                user: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    studentNumber: '',
                    phoneNumber: '',
                    password: '',
                    age: ''
                },
                checked:''
            }
        },
        computed: {
            verifyEmail: function () {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email) || this.user.email === '') {
                    return true;
                }
                return false;
            },
            getFirstName:function () {
                return this.$store.getters.getLoggedInUser.firstName;
            },
            getLastName:function () {
                return this.$store.getters.getLoggedInUser.lastName;
            },
            getEmail:function () {
                return this.$store.getters.getLoggedInUser.email;
            },
            getPhoneNumber:function () {
                return this.$store.getters.getLoggedInUser.phoneNumber;
            },
            getStudentNumber:function () {
                return this.$store.getters.getLoggedInUser.studentNumber;
            },
            getAge:function () {
                return this.$store.getters.getLoggedInUser.age;
            },
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
                if (this.user.phoneNumber == '' || (this.user.phoneNumber.length == 11 && p.test(this.user.studentNumber))) {
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
        },
        methods:{
            editUser:async function () {
                var newUser=this.user
                for (var propName in newUser) {
                    if (newUser[propName] === null || newUser[propName] ==="" || newUser[propName] === undefined) {
                        delete newUser[propName];
                    }
                }
                console.log(newUser)
                var success=await this.$store.dispatch('editUserInfo',newUser)
                this.$wait.start('Wait to sign in');
                if(success==true){
                    this.$notify('ویرایش با موفقیت انجام شد')
                    this.user = {
                        firstName: '',
                        lastName: '',
                        email: '',
                        studentNumber: '',
                        phoneNumber: '',
                        password: '',
                    };
                    await this.$router.push('/user/me')

                }

            }
        }
    }
</script>

<style scoped>
    p{
        font-family: 'iransans';
    }
    input{
        font-family: 'iransans';
    }
    h1{
        font-family: 'iransans';
        text-align: center;
        margin: 5px 0 5px 0;
    }
    .parent{
        background-color: black;
        padding: 100px 200px 100px 200px;
    }
    .main-frame {
        background-color: white;
        padding: 40px;
        border-radius: 60px;
        width: 600px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;

    }
    .info-list{
        display: flex;
        flex-direction: column;
        justify-content: right;
        flex-wrap: wrap;
    }
    .info-list .input{
        margin: 10px;
        border: none;
        background-color: #dddddd;
        border-radius: 25px;
        padding: 10px;
        text-align: right;
    }

    .button button {
        background-color: #e4b22b;
        border-radius: 25px;
        border: none;
        padding: 5px 30px 5px 30px;
        font-size: 15px;
        color: white;
        margin: 10px;
    }
    .button button:hover {
        background-color: #521c34;
    }
    .red{
        color: darkred;
    }
    .check-box {
        display: flex;
        flex-direction: row-reverse;
        justify-content: right;
        margin-top: 10px;
    }

     #checkbox {
        justify-content: right;
        position: relative;
        top: -10px;
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
</style>