<template>
    <div class="loginWrapper">
        <v-wait for="Wait to sign in"></v-wait>
        <notifications position="top center" class="noti-style"/>
        <div class="formWrapper">
            <h1 class="formTitle">ورود به حساب کاربری</h1>
            <form action="" class="formForm" @submit.prevent="login()">
                <input v-model="user.email" type="email" class="formFormInput" placeholder="ایمیل خود را وارد کنید">
                <input v-model="user.password" type="password" class="formFormInput" placeholder="رمز عبور خود را وارد کنید">

                <div class="formFormFooter">
                    <ul class="formOptionsList">
                        <li>حساب کاربری ندارید ؟ <router-link to="/singup">اینجا</router-link> را کلیک کنید</li>
                        <li><a href="#">رمز عبور خود را فراموش کردم</a></li>
                    </ul>
                    <button class="loginButton">
                        ورود به حساب کاربری
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>


    export default {
        name: "SigninContent",
        data: function () {
            return {
                user: {
                    email: '',
                    password: '',
                }
            }
        },
        methods: {
            login: async function () {
                var success = await this.$store.dispatch('logIn', this.user)
                this.$wait.start('Wait to sign in');
                if (success == true & this.$store.getters.getLoggedInUser != '') {

                    console.log("logged in")
                    console.log(success);
                    await this.$router.push('/user/me')
                } else {
                    this.$notify('خطا در ورود به حساب')

                }
                this.$wait.end('Wait to sign in');

            },
        },
    }
</script>

<style scoped>

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
        border-radius:30px;
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
        border-radius:30px;
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
        border-radius:30px;
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



</style>