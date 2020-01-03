<template>
    <div class="infoWrapper">
        <div class="infoMiddleWrapper">
            
            <div class="userInfoBox">
                <div class="infoBoxHeader">
                    <div class="infoBoxHeader-line"></div>
                    <div class="infoBoxHeader-title"><h4> اطلاعات شخصی </h4></div>
                    <div class="infoBoxHeader-line"></div>
                </div>
                <div class="infoItem">
                    <h3 class="infoItemTitle">نام و نام خانوادگی ؛</h3>
                    <p class="infoItemContent">{{this.user.firstName + " " + this.user.lastName}}</p>
                </div>
                <div class="infoItem">
                    <h3 class="infoItemTitle">ایمیل :</h3>
                    <p class="infoItemContent">{{this.user.email}}</p>
                </div>
                <div class="infoItem">
                    <h3 class="infoItemTitle">‌‌شماره تماس :‌</h3>
                    <p class="infoItemContent">{{this.user.phoneNumber}}</p>
                </div>
                <div class="infoItem">
                    <h3 class="infoItemTitle">سن :</h3>
                    <p class="infoItemContent">{{this.user.age}}</p>
                </div>
                <div class="infoItem" v-if="user.studentNumbe != undefined">
                    <h3 class="infoItemTitle">شماره دانشجویی :</h3>
                    <p class="infoItemContent">{{this.user.studentNumber}}</p>
                </div>
                <div class="infoItem">
                    <router-link class="infoItemButton" to="/user/edit">ویرایش اطلاعات</router-link>
                </div>
            </div>

            <div class="workshopsInfoBox">
                <div class="infoBoxHeader">
                    <div class="infoBoxHeader-line"></div>
                    <div class="infoBoxHeader-title dark"><h4>لیست کارگاه های ثبت نام شده</h4></div>
                    <div class="infoBoxHeader-line"></div>
                </div>
                <WorkshopDoneRegisterItem :key="workshop._id" v-for="workshop in workshops" :workshop="workshop"></WorkshopDoneRegisterItem>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import WorkshopDoneRegisterItem from '@/components/WorkshopComponents/WorkshopDoneRegisterItem'
    export default {
        name: "UserAccountContent",
        components : {
            WorkshopDoneRegisterItem
        },
        data: function () {
            return {
                user : {},
                workshops : []
            }
        },
        methods: {
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
                    this.user = response.data.user;
                    this.workshops = response.data.workshops;
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
        },
        created() {
            console.log("component created");
            this.getUser(); 
        },
        mounted() {
            console.log("component mounted.");
        }
    }
</script>

<style scoped>
    .infoWrapper {
        display:flex;
        align-items:flex-start;
        justify-content:center;
        min-height:calc(100vh - 40px);
        background-color: #e8e8e8;
    }

    .infoMiddleWrapper {
        width:1140px;
        display:flex;
        align-items:flex-start;
        justify-content:space-between;
        margin-top:40px;
    }

    .userInfoBox {
        background-color: black;
        border-radius:30px;
        flex-flow: column wrap;
        display:flex;
        margin-left:20px;
        padding:10px;
    }

    .infoItem {
        padding-right:15px;
        padding-left:15px;
        margin-top:15px;
        display: flex;
        flex-direction: column;
    }

    .infoItemTitle {
        color:white;
        font-size:14px;
        font-family: 'iransans';
    }

    .infoItemContent {
        color: #e4b22b;
        font-size:17px;
        font-weight:bold;
        margin-right:5px;
        margin-top:5px;
        font-family: 'iransans';
    }

    .infoItemButton {
        margin:auto;
        margin-bottom:10px;
        font-family: 'iransans';
        text-decoration: none;
        color:white;
        background-color: #e4b22b;
        border-radius:15px;
        padding:5px 25px;
    }

    .infoBoxHeader {
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-top:15px;
        margin-right:10px;
        margin-left:10px;
    }

    .infoBoxHeader-line {
        height:4px;
        background-color: #e4b22b;
        justify-self: stretch;
        width:100px;
    }

    .infoBoxHeader-title {
        color:white;
        font-weight:bold;
        text-align:center;
        font-family: 'iransans';
    }

    .workshopsInfoBox {
        background-color: #f4f4f4;
        border-radius:30px;
        flex-flow: column wrap;
        display:flex;
        padding:10px;
        width:calc(70% - 60px);
    }

    .infoBoxHeader-title.dark {
        color: #333;
    }

    @media only screen and (max-width: 876px) {
        .infoMiddleWrapper {
            flex-direction:column;
            align-items:stretch;            
        }
        .userInfoBox {
            margin:10px;
        }  

        .workshopsInfoBox {
            margin: 10px;
            width: initial;
        }
    }
    
</style>