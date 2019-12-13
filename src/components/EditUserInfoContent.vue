<template>
    <div class="parent">
        <notifications position="top center" class="noti-style"/>
        <div class="main-frame">
            <div class="info-list">
                <input type="text" v-model="user.firstName"  :placeholder="this.$store.getters.getLoggedInUser.firstName+'  (نام)'">
                <input type="text" v-model="user.lastName" :placeholder="this.$store.getters.getLoggedInUser.lastName+'  (نام خانوادگی)'">
                <input type="email" v-model="user.email" :placeholder="this.$store.getters.getLoggedInUser.email+'  (ایمیل)'">
                <p v-if="!verifyEmail" class="red">ایمیل معتبر نمی باشد*</p>
                <input type="password" v-model="user.password" placeholder="رمز عبور">
                <input type="text" v-model="user.phoneNumber" :placeholder="this.$store.getters.getLoggedInUser.phoneNumber+'  (تلفن)'">
                <div class="check-box">
                    <input type="checkbox" id="checkbox" v-model="checked">
                    <label for="checkbox">امیرکبیری هستم</label>
                </div>
                <input type="email" v-model="user.email" v-if="this.checked" :placeholder="this.$store.getters.getLoggedInUser.studentNumber+'  (شماره دانشجویی)'">
                <input type="email" v-model="user.email" :placeholder="this.$store.getters.getLoggedInUser.age+'  (سن)'">
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
            }
        },
        methods:{
            editUser: function () {
                var newUser=this.user
                for (var propName in newUser) {
                    if (newUser[propName] === null || newUser[propName] ==="" || newUser[propName] === undefined) {
                        delete newUser[propName];
                    }
                }
                console.log(newUser)
                var success=this.$store.commit('editUserInfo',newUser)
                if(success===true){
                    this.$notify('ویرایش با موفقیت انجام شد')
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
        }
    }
</script>

<style scoped>
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
    .info-list input{
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
</style>