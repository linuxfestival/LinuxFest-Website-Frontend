<template>
    <div class="parent">
        <div class="top">
            <img src="../assets/background2.png" alt="">
        </div>
        <div class="bottom">
            <div class="left info-card">
                <div class="head">
                    <div class="line"></div>
                    <div class="title"><h4>  کارگاه ها  </h4></div>
                    <div class="line"></div>
                </div>
                <div class="workshop-list">
                    <div class="workshop-item">
                        <div class="sub one"><img src="../assets/background2.png" alt=""></div>
                        <div class="sub two"><p>عنوان کارگاه</p></div>
                        <div class="sub three"><p>{{}}</p></div>
                        <div class="sub four"><p><span>{{}}</span>هزار تومان</p></div>
                        <div class="sub five"><button>اطلاعات بیشتر</button></div>
                    </div>
                </div>
            </div>
            <div class="right workshop-card">
                <div class="head">
                    <div class="line"></div>
                    <div class="title"><h4>  اطلاعات شخصی  </h4></div>
                    <div class="line"></div>
                </div>
                <div class="info-list">
                    <p>:نام</p>
                    <!--                    <p class="yellow">{{this.$store.getLoggedInUser.name}}</p>-->
                    <p>:ایمیل</p>
                    <!--                    <p class="yellow">{{this.$store.getLoggedInUser.email}}</p>-->
                    <p>:شماره تماس</p>
                    <!--                    <p class="yellow">{{this.$store.getLoggedInUser.phoneNumber}}</p>-->
                    <p>:شماره دانشجویی</p>
                    <!--                    <p class="yellow">{{this.$store.getLoggedInUser.studentNumber}}</p>-->
                </div>
                <div class="button">
                    <button>ویرایش اطلاعات</button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "UserAccountContent",
    }
</script>

<style scoped>
    .parent{
        background-color: #e8e8e8;
    }
    .top img {
        width: 100%;
    }

    .bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
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
        min-width: 20%;
        border-radius: 30px;
        background-color: black;
        display: flex;
        flex-direction: column;
        color: white;
        padding: 10px 40px 10px 40px;
        text-align: right;
    }

    .yellow {
        color: #c7962b;
    }

    .right button {
        background-color: #e4b22b;
        border-radius: 25px;
        border: none;
        padding: 5px 10px 5px 10px;
        font-size: 15px;
        color: white;
        margin: 20px 0 0 0;
    }

    .button {
        text-align: left;
    }

    .right p {
        margin: 20px 0 0 0;
    }

    .left .line {
        border-bottom: 3px solid #c7962b;
        width: 100%;
        height: 30px;
    }
    .right .line {
        border-bottom: 3px solid #c7962b;
        width: 100%;
        height: 30px;
    }
    .title{
        text-align: center;
        padding: 0 auto;
        margin: 0 10px 0 10px;
        min-width: 100px;
    }
    .head{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .workshop-list{
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

    .sub img{
        width: 50px;
        height: 100%;
        border-radius: 0 25px 25px 0;
    }
    .one{
        width: 50px;
        border-left: 2px solid #e4b22b;
    }

    .workshop-item .sub button{
        background-color: #e4b22b;
        border-radius: 25px;
        border: none;
        padding: 5px 10px 5px 10px;
        font-size: 15px;
        color: white;
        margin: 10px;
    }
</style>