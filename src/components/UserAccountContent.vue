<template>
    <div class="parent">
        <div class="top">
            <!-- <img src="../assets/background2.png" alt=""> -->
        </div>
        <div class="bottom">
            <div class="left info-card">
                <div class="head">
                    <div class="line"></div>
                    <div class="title"><h4> کارگاه ها </h4></div>
                    <div class="line"></div>
                </div>
                <div class="workshop-list" v-if="hasWorkshop" v-for="workshop in this.getUserWorkshops">
                    <div class="workshop-item">
                        <!-- <div class="sub one"><img src="../assets/img/background2.png" alt=""></div> -->
                        <div class="sub two"><p>{{workshop.name}}</p></div>
                        <div class="sub three" v-for="teacher in workshop.teacher"><p>{{teacher}}</p></div>
                        <div class="sub four"><p><span>{{workshop.price}}</span>هزار تومان</p></div>
                        <!--                        //workshop id is something that you use to identify workshops easily-->
                        <div class="sub five">
                            <button @click="this.$router.push('/more/'+workshop.id)">اطلاعات بیشتر</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right workshop-card">
                <div class="head">
                    <div class="line"></div>
                    <div class="title"><h4> اطلاعات شخصی </h4></div>
                    <div class="line"></div>
                </div>
                <div class="info-list">
                    <p class="info-title">نام:</p>
                    <p class="yellow">{{this.getName}}</p>
                    <p class="info-title">ایمیل:</p>
                    <p class="yellow">{{this.getEmail}}</p>
                    <p class="info-title">شماره تماس:</p>
                    <p class="yellow">{{this.getPhoneNumber}}</p>
                    <p class="info-title" v-if="isAmirkabiri">شماره دانشجویی:</p>
                    <p v-if="isAmirkabiri" class="yellow">{{this.getStudentNumber}}
                    <p class="info-title">سن:</p>
                    <p class="yellow">{{this.getAge}}</p>
                </div>
                <div class="button">
                    <button>
                        <router-link to="/edit" class="link">ویرایش اطلاعات</router-link>
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "UserAccountContent",
        data: function () {
            return {
                allWorkshops:[]
            }
            },
        computed: {
            hasWorkshop:function(){
              if(this.$store.getters.getLoggedInUser.workshops =='')
                  return false;
                else return true;
            },
            getUserWorkshops: function () {
                return this.$store.getters.getLoggedInUser.workshops
            }, getName: function () {
                return this.$store.getters.getLoggedInUser.firstName + " " + this.$store.getters.getLoggedInUser.lastName;
            },
            getEmail: function () {
                return this.$store.getters.getLoggedInUser.email + " ";
            },
            getAge: function () {
                return this.$store.getters.getLoggedInUser.age + " ";
            },
            getPhoneNumber: function () {
                return this.$store.getters.getLoggedInUser.phoneNumber + " ";
            },
            getStudentNumber: function f() {
                return this.$store.getters.getLoggedInUser.studentNumber + " ";
            },
            isAmirkabiri: function () {
                if('studentNumber' in this.$store.getters.getLoggedInUser){
                    return true
                }else {
                    return false
                }
            }
        },
        created() {
            console.log("component created");
            this.$store.dispatch('getUserFromServer');
        },
        mounted() {
            console.log("component mounted.");
        }
    }
</script>

<style scoped>
    p{
        font-family: 'iransans';
    }
    h4{
        font-family: 'iransans';
    }
    .parent {
        background-color: #e8e8e8;
    }

    .top img {
        width: 100%;
    }

    .bottom {
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        padding: 40px 0 30px 0;
    }

    .left {
        min-height: 300px;
        min-width: 50%;
        border-radius: 30px;
        background-color: white;
        display: flex;
        flex-direction: column;
        padding: 10px 40px 10px 40px;

    }

    .right {
        min-height: 300px;
        min-width: 25%;
        border-radius: 30px;
        background-color: black;
        display: flex;
        flex-direction: column;
        color: white;
        padding: 10px 20px 10px 20px;
        text-align: right;
    }

    .yellow {
        color: #c7962b;
        margin: 5px 30px 30px 0;
    }

    .right button {
        background-color: #e4b22b;
        border-radius: 25px;
        border: none;
        padding: 5px 10px 5px 10px;
        font-size: 15px;
        color: white;
        margin: 20px 0 0 0;
        font-family: 'iransans';
    }

    .right button:hover{
        opacity: 0.8;
    }
    .button {
        text-align: left;
    }



    .left .line {
        border-bottom: 3px solid #c7962b;
        width: 100%;
        height: 30px;
        position: relative;
        top: -20px;
    }

    .right .line {
        border-bottom: 3px solid #c7962b;
        width: 100%;
        height: 30px;
        position: relative;
        top: -20px;
    }

    .title {
        text-align: center;
        padding: 0 auto;
        margin: 0 10px 0 10px;
        min-width: 100px;
        font-family: 'iransans';
    }

    .head {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .workshop-list {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .workshop-item {
        background-color: black;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: stretch;
        border-radius: 25px;
        width: 90%;
        margin: 0 auto;
        color: white;
    }

    .sub img {
        width: 50px;
        height: 100%;
        border-radius: 0 25px 25px 0;
    }

    .one {
        width: 50px;
        border-left: 2px solid #e4b22b;
    }

    .workshop-item .sub button {
        background-color: #e4b22b;
        border-radius: 25px;
        border: none;
        padding: 5px 10px 5px 10px;
        font-size: 15px;
        color: white;
        margin: 10px;
        font-family: 'iransans';
    }

    .link {
        text-decoration: none;
        color: white;
        font-family: 'iransans';
    }
    .info-title{
        margin: 20px 30px 0 0;
        font-family: 'iransans';
    }

    @media only screen and (max-width: 768px) {
        p,h4{
            font-size: smaller;
        }
        .bottom{
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
            padding: 40px 0 30px 0;
        }
        .left , .right{
            width: 80%;
            margin: 5px;
        }
    }
</style>