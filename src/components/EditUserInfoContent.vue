<template>
    <div class="parent">
        <form class="main-frame" @submit.prevent="editUser()">
            <h1>ویرایش اطلاعات</h1>
            <h5>برای ویرایش اطلاعات خود فیلد های مورد نظر را تغییر دهید. فیلد های خالی نادیده گرفته می شوند</h5>
            <div class="info-list">
                <input type="text" class="input" v-model="$v.user.firstName.$model"  :placeholder="this.currentUserData.firstName +'  (نام)'" >
                <input type="text" class="input" v-model="$v.user.lastName.$model" :placeholder="this.currentUserData.lastName+'  (نام خانوادگی)'" >
                <input type="email" class="input" v-model="$v.user.email.$model" :placeholder="this.currentUserData.email+'  (ایمیل)'" >
                <input type="password" class="input" v-model="$v.user.password.$model" placeholder="رمز عبور">
                <input type="text" class="input" v-model="$v.user.phoneNumber.$model" :placeholder="this.currentUserData.phoneNumber+'  (تلفن)'"  >
                <input type="number" class="input" v-model="$v.user.age.$model" :placeholder="this.currentUserData.age+'  (سن)'">
            </div>
            <div class="button">
                <button>اعمال تغییرات</button>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'
    import {numeric, between, email, helpers, minLength, maxLength} from 'vuelidate/lib/validators'
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
        name: "EditUserInfoContent",
        validations: {
            user : {
                firstName : {perisanRexValidator},
                lastName : {perisanRexValidator},
                email : {email},
                phoneNumber : {numeric, persianPhoneValidator},
                password : {passwordRegexValidator},
                age : {numeric , between: between(15,100)}
            }
        },

        data: function () {
            return {
                user: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    password: '',
                    age: '',
                },
                currentUserData: {}
            }
        },
        created() {
            this.getUser();
        },
        methods:{
            getUser: function() {
                    this.$notify({
                        group : "auth",
                        title : "صبر کنید",
                        text : "چند لحظه صبر کنید...",
                        type : "warn"
                    })
                axios({
                    url : this.$store.getters.baseUrl + '/users/me',
                    method : 'GET',
                    headers : this.$store.getters.httpHeaders,
                }).then(response => {
                    console.log(response);
                    this.currentUserData = response.data.user;
                    this.$notify({
                                group: "auth",
                                title: "موفقیت",
                                text: "اطلاعات شما دریافت شد.",
                                type: "success"
                            });
                }).catch(error => {
                    console.log(error.response);
                            this.$notify({
                                group: "auth",
                                title: "خطا",
                                text: "خطایی هنگام ارتباط با سرور رخ داد. لطفا اتصال اینترنت خود را بررسی کنید",
                                type: "error"
                            });
                })
            },
            updatedFieldsAreValid: function(updatedUserPayload) {
                for(let propName in updatedUserPayload) {
                    if(this.$v.user[propName].$invalid) {
                        return false;
                    }
                }
                return true;
            },
            editUser: async function () {
                let updatedUserPayload = {};
                for (let propName in this.user) {
                    if (Boolean(this.user[propName])) {
                        updatedUserPayload[propName] = this.user[propName];
                    }
                }

                if(this.updatedFieldsAreValid(updatedUserPayload)) {
                    console.log('remaining form is valid');
                    axios({
                        url : this.$store.getters.baseUrl + '/users/me',
                        method : 'PATCH',
                        data : updatedUserPayload,
                        headers : this.$store.getters.httpHeaders 
                    }).then(response => {
                        this.$notify({
                                group: "auth",
                                title: "موفقیت",
                                text: "اطلاعات حساب کاربری شما با موفقیت به روز رسانی شد. به پروفایل خود برده می شوید",
                                type: "success"
                            });
                            this.$router.push("/user/me");
                    }).catch(error => {
                        this.$notify({
                        group : 'auth',
                        title : 'خطا',
                        text : 'خطایی هنگام ارتباط با سرور رخ داد. لطفا اتصال اینترنت خود را بررسی کنید',
                        type : "error"
                    })    
                    })
                } else {
                    this.$notify({
                        group : 'auth',
                        title : 'خطا',
                        text : 'لطفا ورودی های وارد شده خود را کنترل کنید',
                        type : "error"
                    })
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
    h5 {
        font-family: 'iransans';
        margin-top:10px;
        margin-bottom:10px;
    }
    .parent{
        background-color: black;
        width: 100%;
        min-height: calc(100vh - 40px);
        display: flex;
        align-items: center;
        justify-content: center;
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

    .button {
        text-align:center;
    }
    
    .button button {
        background-color: #e4b22b;
        font-family: 'iransans';
        cursor: pointer;
        border-radius: 25px;
        border: none;
        padding: 10px 30px;;
        font-size: 15px;
        color: white;
        transition:all 0.1s ease-in;
        margin: 10px;
    }
    .button button:hover {
        background-color: #521c34;
    }
    .red{
        color: darkred;
    }
</style>