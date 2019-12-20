<template>
    <header class ="header">
        <nav class="mainMenu">
            <router-link to="/" class="mainMenu-link">خانه</router-link>
            <div class="divider"></div>
            <router-link to="/" class="mainMenu-link">کارگاه ها</router-link>
            <div class="divider"></div>
            <router-link to="/user/me" class="mainMenu-link">تماس با ما</router-link>
        </nav>

        <nav class="profileMenu">
            <router-link to="/signin" class="profileMenu-link" v-if="!isLoggedIn">ورود به حساب کاربری</router-link>
            <div class="divider" v-if="!isLoggedIn"></div>

            <router-link to="/user/me" class="link" v-if="isLoggedIn"> حساب من </router-link>

            <div class="divider" v-if="isLoggedIn"></div>
            <button class="profileMenu-link singoutLink" v-if="isLoggedIn" @click="logout()">خروج</button>
            <div class="divider" v-if="isLoggedIn"></div>
            <router-link to="/registerworkshops" class="profileMenu-link registerLink">ثبت نام کارگاه ها</router-link>

        </nav>
        
    </header>
</template>

<script>
    export default {
        name: "Header",
        methods:{
          logout:async function () {
              var success=await this.$store.dispatch('logOut');
              if(success==true){
                  await this.$router.push('/')
              }
          }
        },
        mounted() {
          console.log('is logged in :', this.isLoggedIn)  
        },
        computed:{
            isLoggedIn:function () {
                return this.$store.getters.isLoggedIn;
            }
        }
    }
</script>

<style scoped>
    .header{
        background-color: #521c34;
        display: flex;
        align-items:center;
        justify-content: space-between;
        padding: 15px;
        box-shadow:0 0 30px 10px rgba(0,0,0,0.2);
    }
    .registerLink{
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
        font-family: 'iransans';
    }

    .mainMenu {
        display:flex;
    }

    .profileMenu {
        display:flex;
    }

    .mainMenu-link {
        color: white;
        font-family: 'iransans';
        margin:0 10px;
        text-decoration:none;
    }

    .profileMenu-link {
        color:white;
        font-family: 'iransans';
        margin:0 10px;
        text-decoration:none;
    }

    .divider {
        border-left: 2px solid #e4b22b;
        width: 1px;
        margin: 0 3px 0 3px;
    }
    .profileMenu button{
        background-color: #e4b22b;
        border-radius: 25px;
        border: none;
        padding: 5px 10px 5px 10px;
        font-size: 15px;
        color: white;
    }
</style>