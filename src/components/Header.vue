<template>
    <header class ="header">

        <nav class="mainMenu">
            <button @click="toggleMobileMenu()" class="mobileMenuButton" v-if="showMobileMenu"><i class="material-icons">close</i></button>
            <button @click="toggleMobileMenu()" class="mobileMenuButton" v-else><i class="material-icons">menu</i></button>
            <router-link to="/" class="mainMenu-link" :class="[{'show' : showMobileMenu}]" >خانه</router-link>
            <div class="divider"></div>
            <router-link to="/" class="mainMenu-link" :class="[{'show' : showMobileMenu}]" >کارگاه ها</router-link>
            <div class="divider"></div>
            <router-link to="/user/me" class="mainMenu-link" :class="[{'show' : showMobileMenu}]" >تماس با ما</router-link>
        </nav>

        <nav class="profileMenu">
            <button @click="toggleMobileProfile()" class="mobileMenuButton" v-if="showMobileProfile"><i class="material-icons">close</i></button>
            <button @click="toggleMobileProfile()" class="mobileMenuButton" v-else><i class="material-icons">menu</i></button>
            <router-link to="/signin" class="profileMenu-link" v-if="!isLoggedIn" :class="[{'show' : showMobileProfile}]">ورود به حساب کاربری</router-link>
            <div class="divider" v-if="!isLoggedIn"></div>

            <router-link to="/user/me" class="link" v-if="isLoggedIn" :class="[{'show' : showMobileProfile}]"> حساب من </router-link>

            <div class="divider" v-if="isLoggedIn"></div>
            <button class="profileMenu-link singoutLink" v-if="isLoggedIn" @click="logout()" :class="[{'show' : showMobileProfile}]">خروج</button>
            <div class="divider" v-if="isLoggedIn"></div>
            <router-link to="/allWorkshops" class="profileMenu-link registerLink" :class="[{'show' : showMobileProfile}]">ثبت نام کارگاه ها</router-link>

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
          },
            toggleMobileMenu: function(){
              console.log("toggle mobile menu");
                this.showMobileMenu = !this.showMobileMenu;
                console.log(this.showMobileMenu);
            },
            toggleMobileProfile: function () {
                console.log("Toggle Mobile Profile");
                this.showMobileProfile=!this.showMobileProfile;
                console.log(this.showMobileProfile);
            }
        },
        data(){
            return {
                showMobileMenu : false,
                showMobileProfile:false,
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
    .registerLink{
        background-color: #e4b22b;
        border-radius: 25px;
        border: none;
        padding: 5px 10px 5px 10px;
        font-size: 15px;
        color: white;
    }

    .mobileMenuButton {
        background:none;
        color:white;
        border:none;
        display: none;
    }

    /*med*/
    @media only screen and (max-width:768px) {
        .header {
            /*background-color: red;*/
        }

        .mainMenu {
            flex-direction: column;
        }

        .mobileMenuButton {
            display:flex;
        }

        .mainMenu-link {
            display:none;
        }

        .mainMenu-link.show {
            display:flex;
        }

        .profileMenu {
            flex-direction: column;
        }

        .profileMenu-link {
            display:none;
        }

        .profileMenu-link.show {
            display:flex;
        }

    }
</style>