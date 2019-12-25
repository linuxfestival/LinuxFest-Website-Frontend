<template>
    <div class="back">
        <v-wait for="Wait to sign in"></v-wait>
        <notifications position="top center" class="noti-style"/>
        <div class="main-frame">
            <div class="subject"><h1>ورود به حساب کاربری</h1></div>
            <div class="top">
                <input type="email" v-model="user.email" placeholder="ایمیل">
                <input type="password" v-model="user.password" placeholder="رمز عبور">
            </div>
            <div class="bottom">
                <button @click="logIn()" type="button">ورود به حساب کاربری</button>
                <div class="help">
                    <p class="help-text">در صورت نداشتن حساب کاربری یک حساب <span><router-link to="/signup"
                                                                                               class="red"> ایجاد </router-link></span>کنید
                    </p>
                    <p class="help-text">
                        <router-link to="" class="link">رمز عبور خود را فراموش کرده ام</router-link>
                    </p>
                </div>
            </div>
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
            logIn: async function () {
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
            logOut: function () {
                // console.log(this.$store.getters.isLoggedIn);
                this.$store.dispatch('logOut');
                this.user = {
                    email: '',
                    password: ''
                }
                // console.log(this.$store.getters.isLoggedIn);
            }
        },

        computed: {
            isLoggedIn: function () {
                return this.$store.getters.isLoggedIn;
            }
        }
    }
</script>

<style scoped>
    input{
        font-family: 'iransans';
    }
    p{
        font-family: 'iransans';
    }
    .back {
        background-color: black;
        display: flex;
        justify-content: center;
        padding: 50px 0 30px 0 ;
    }

    .main-frame {
        background-color: white;
        padding: 10px;
        border-radius: 60px;
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
        border-radius: 35px;
        border: none;
        padding: 0px 30px 0px 30px;
        font-size: 15px;
        color: white;
        margin: 10px;
        font-family: 'iransans';
    }
    button:hover {
        background-color: rgb(242,169,56);
    }

    .bottom .help-text {
        color: #521c34;
        text-align: right;
        margin: 0;
        font-size: 13px;
    }

    .bottom .link {
        color: #521c34;
    }

    .top {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .top input {
        margin: 10px;
        border: none;
        background-color: #dddddd;
        border-radius: 25px;
        padding: 10px;
        text-align: right;

    }

    .subject h1 {
        text-align: center;
        color: #521c34;
        font-family: 'iransans';
    }

    .help {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px
    }
</style>