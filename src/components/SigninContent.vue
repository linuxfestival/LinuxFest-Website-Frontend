<template>
    <div class="loginWrapper">
        <v-wait for="Wait to sign in"></v-wait>
        <notifications position="top center" class="noti-style"/>
        <transition name="fade" mode="out-in">
            <div class="formWrapper" v-if="showLoginForm" key="loginForm">
            <h1 class="formTitle">ورود به حساب کاربری</h1>
            <form action="" class="formForm" @submit.prevent="login()">
                <input v-model="user.email" type="email" class="formFormInput" placeholder="ایمیل خود را وارد کنید">
                <input v-model="user.password" type="password" class="formFormInput" placeholder="رمز عبور خود را وارد کنید">

                <div class="formFormFooter">
                    <ul class="formOptionsList">
                        <li>حساب کاربری ندارید؟ <router-link to="/signup">اینجا</router-link> را کلیک کنید</li>
                        <li><button @click="toggleForgetLoginForm()" type="button" class="optionButton">رمز عبور خود را فراموش کردم</button></li>
                    </ul>
                    <button class="loginButton">
                        ورود به حساب کاربری
                    </button>
                </div>
            </form>
        </div>

        <div class="formWrapper" v-else key="forgetPassForm">
            <h1 class="formTitle">فراموشی رمز عبور</h1>
            <form action="" class="formForm" @submit.prevent="forgetPasswordRequest()">
                <input v-model="user.email" type="email" class="formFormInput" placeholder="ایمیل خود را وارد کنید">

                <div class="formFormFooter">
                    <ul class="formOptionsList">
                        <li><button @click="toggleForgetLoginForm()" type="button" class="optionButton">ورود</button></li>
                    </ul>
                    <button class="loginButton">
                        درخواست تعویض رمز عبور
                    </button>
                </div>
            </form>
        </div>

        </transition>        
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "SigninContent",
        data: function () {
            return {
                user: {
                    email: '',
                    password: '',
                },
                showLoginForm: true,
            };
        },

        methods: {
            toggleForgetLoginForm() {
                this.showLoginForm = !this.showLoginForm;
            },

            forgetPasswordRequest: function() {
                console.log("forget password request");
                axios({
                    url : this.$store.getters.baseUrl + "users/forget",
                    method : 'post',
                    data  : this.user
                }).then(response => {
                    console.log(response);
                    this.$notify({
                        group :'auth',
                        type : 'success',
                        title : 'موفقیت',
                        text : 'ایمیل خود را برای ادامه مراحل چک کنید..' 
                    })
                }).catch(error => {
                  if(error.response.status===404){
                    this.$notify({
                      group: "auth",
                      type: "error",
                      title: "خطا",
                      text: 'چنین کاربری وجود ندارد. از صحت ایمیل اطمینان حاصل کنید.'
                    });
                  }
                  else {
                    this.$notify({
                      group: 'auth',
                      type: 'error',
                      title: 'خطا',
                      text: 'خطایی هنگام ارتباط با سرور رخ داد. لطفا اتصال اینترنت خود را بررسی کنید.',
                    })
                  }
                    console.log(error.response);
                })
            },

            login: function () {
                this.$store.dispatch('login', this.user).then(() => {
                    this.$router.push('/user/me');
                    this.$notify({
                        group :'auth',
                        type : 'success',
                        title : 'موفقیت',
                        text : 'با موفقیت وارد شدید. به صفحه پروفایل برده می شوید.' 
                    })
                }).catch(() => {
                    this.$notify({
                        group :'auth',
                        type : 'error',
                        title : 'خطا',
                        text : 'خطایی هنگاه ورود رخ داد. لطفا ورودی های خود را کنترل کنید' ,
                    })
                }).finally(() => {

                })
            },
        },
    }
</script>

<style scoped>

    .fade-enter-active, .fade-leave-active {
        transition: opacity .2s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    .loginWrapper {
        min-height: 100vh;
        background: rgb(0,0,0);
        display:flex;
        align-items:center;
        justify-content: center;
        width:100%;
    }

    .formWrapper {
        width:550px;
        background-color: white;
        border-radius:15px;
        padding:50px;
        display:flex;
        align-items:center;
        justify-content:flex-start;
        flex-direction: column;
    }

    .formTitle {
        font-family : "iransans";
        margin-bottom:10px;
        color: #521c34;
    }

    .formForm {
        width:100%;
        display:flex;
        align-items:center;
        justify-content: center;
        flex-direction:column;
    }

    .formFormInput {
        width:100%;
        margin-top:5px;
        margin-bottom:5px;
        border-radius:15px;
        background-color : #ddd;
        padding:15px;
        color: #333;
        border:none;
        font-family : 'iransans';
    }

    .formFormFooter {
        display:flex;
        align-items:center;
        justify-content:space-between;
        width:100%;
        margin-top:10px;        
    }

    .loginButton {
        border:none;
        border-radius:5px;
        padding:10px 20px;
        background-color :#521c34;
        color:white;
        cursor:pointer;
        font-family:'iransans';
    }

    .formOptionsList {
        font-family : 'iransans';
        list-style-type :disc;
        font-size:15px;
    }

    .optionButton {
        border:none;
        font-family: 'iransans';
        background:none;
        cursor:pointer;
    }

    .optionButton:hover {
        color: #521c34;
    }
</style>
