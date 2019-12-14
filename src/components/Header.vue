<template>
    <div class ="header">
        <div class="left child">
            <button class="register">ثبت نام کارگاه ها</button>
            <div class="vl"></div>
            <router-link to="/signin" class="link" v-if="!this.ifLoggedin"> ورود به حساب کاربری </router-link>
            <router-link to="/signin" class="link" v-if="this.ifLoggedin">
                حساب من
            </router-link>
            <button class="sign-out" v-if="this.ifLoggedin" @click="this.logout">خروج</button>
        </div>
        <div class="right child">
            <router-link to="/user/me" class="link"> تماس با ما </router-link>
            <div class="vl"></div>
            <router-link to="" class="link"> کارگاه ها </router-link>
            <div class="vl"></div>
            <router-link to="/" class="link"> خانه </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        methods:{
          logout:function () {
              this.$store.commit('logOut');
          }
        },
        computed:{
            ifLoggedin:function () {
                return this.$store.getters.isLoggedIn;
            }
        }
    }
</script>

<style scoped>
    .header{
        background-color: #521c34;
        display: flex;
        justify-content: space-between;
        padding: 15px;
    }
    button{
        background-color: #e4b22b;
        border-radius: 25px;
        border: none;
        padding: 5px 10px 5px 10px;
        font-size: 15px;
        color: white;
    }
    .link{
        color: white;
        text-decoration: none;
    }
    .vl {
        border-left: 2px solid #e4b22b;
        width: 1px;
    }
    .child{
        display: flex;
        justify-content: space-between;
    }
    .left{
        width: 250px;
    }
    .right{
        width: 200px;
    }
</style>