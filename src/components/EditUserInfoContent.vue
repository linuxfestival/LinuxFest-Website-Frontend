<template>
    <div class="parent">
        <PartialHeader title="حساب کاربری" backgroundUrl="../assets/img/background2.png" ></PartialHeader>

        <form class="main-frame" @submit.prevent="editUser()">
            <div class="formHeader">
                <h2 class="formHeader-title">
                    <i class="material-icons formHeader-title-icon">edit</i>
                    ویرایش اطلاعات شخصی
                </h2>
                <div class="formHeader-line"></div>
            </div>

            <h5 class="formDescription">برای ویرایش اطلاعات خود فیلد های مورد نظر را تغییر دهید. فیلد های خالی نادیده گرفته می شوند</h5>

            <div class="formGroup">
                <div class="formInputGroup">
                    <label for="firstName">نام :</label>
                    <input type="text" id="firstName" class="input" v-model="$v.user.firstName.$model"  :placeholder="this.currentUserData.firstName" >
                </div>
                <div class="formInputGroup">
                    <label for="lastName">نام خانوادگی :</label>
                    <input type="text" id="lastName" class="input" v-model="$v.user.lastName.$model" :placeholder="this.currentUserData.lastName" >
                </div>                
            </div>

            <div class="formGroup">
                <div class="formInputGroup">
                    <label for="email">ایمیل :</label>
                    <input type="email" id="email" class="input" v-model="$v.user.email.$model" :placeholder="this.currentUserData.email" >
                </div>
                <div class="formInputGroup">
                    <label for="phoneNumber">شماره تماس :</label>
                    <input type="text" id="phoneNumber" class="input" v-model="$v.user.phoneNumber.$model" :placeholder="this.currentUserData.phoneNumber"  >
                </div>                
            </div>

            <div class="formGroup">
                <div class="formInputGroup">
                    <label for="password">رمز عبور :</label>
                    <input type="password" id="password" class="input" v-model="$v.user.password.$model" placeholder="رمز عبور">
                </div>
                <div class="formInputGroup">
                    <label for="age">سن :</label>
                    <input type="number" id="age" class="input" v-model="$v.user.age.$model" :placeholder="this.currentUserData.age">
                </div>                
            </div>

            <div class="formGroup">
                <button>اعمال تغییرات</button>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'
    import PartialHeader from '@/components/PartialHeader'
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
        components: {
            PartialHeader
        },
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
                    url : this.$store.getters.baseUrl + 'users/me',
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
                        url : this.$store.getters.baseUrl + 'users/me',
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
                        text : 'لطفا ورودی های وارد شده خود را کنترل کنید.',
                        type : "error"
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .parent{
        background-color: #e1e1e1;
        width: 100%;
        min-height: calc(100vh - 40px);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction:column;
    }

    .main-frame {
        background-color: white;
        padding: 30px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-shadow: 0px 0 25px rgba(0,0,0,0.2);
        width:calc(100% - 60px);
        max-width: 1140px;
    }

    .formHeader {
        display: flex;
    align-items: center;
    justify-content: space-between;
    }


    .formHeader-title {
        display:flex;
        align-items:center;
        font-family: "iransans";
        color : #521c34;
        margin:10px;
    }

    .formHeader-title-icon {
        margin-left:5px;
    }

    .formHeader-line {
        height:3px;
        background-color: #e4b22b;
        width: calc(100% - 300px);
    }

    .formDescription {
        color : #521c34;
        margin:10px;
        font-family : "iransans";
    }

    .formGroup {
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-top:10px;
    }

    .formInputGroup {
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        align-items:flex-start;
        width: calc(50% - 10px);
    }

    .formGroup button {
        font-family: 'iransans';
        background: #521c34;
        border: none;
        color: white;  
        padding: 10px 30px;
        border-radius: 5px;
        margin: 10px auto;
        cursor: pointer;
        }

    .input {
        border:none;
        border-radius:15px;
        background-color : #e6e6e6dd;
        padding:15px 5px;
        margin:10px;
        width: calc(100% - 20px);
        font-family : 'iransans';
    }

    label {
        margin-right:10px;
        font-family: 'iransans';
        color : #521c34;
    }

    @media only screen and (max-width:576px) {
        .formGroup {
            flex-direction: column;
        }

        .formInputGroup {
            width: 100%;
        }

        .formHeader-line {
            display:none;
        }
    }

</style>