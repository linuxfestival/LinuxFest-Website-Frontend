<template>
    <div class="parent">
        <div>
            <div class="top">
                <img src="../assets/background2.png" alt="">
            </div>
            <div class="title"><h3>کارگاه فلان</h3></div>
        </div>
        <div class="bottom">
            <div class="right">
                <div><h3 class="yellow">در مورد مدرس کارگاه</h3></div>
                <div>
                    <h4 class="teacher yellow indent">فلانی</h4>
                    <p class="teacher-des text indent">فلان</p>
                </div>
            </div>
            <div class="left">
                <div><h3 class="yellow">در مورد این کارگاه</h3></div>
                <div><p class="text indent">{{}}</p></div>
                <div class="button">
                    <button>ثبت نام برای این کارگاه</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WorkshopMoreContent"
    }
</script>

<style scoped>
    .top img {
        width: 100%;
    }

    .parent {

    }

    .bottom {
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        min-height: 300px;
        position: relative;
        top: -100px;
        text-align: right;
    }

    .title {
        position: relative;
        margin: 0 auto;
        text-align: center;
        font-size: 40px;
        top: -200px
    }

    .right {
        padding: 10px 30px 10px 20px;
        background-color: #521c34;
        border-radius: 0 25px 25px 0;
        min-width: 25%;
    }

    .left {
        padding: 10px 100px 10px 20px;
        background-color: black;
        border-radius: 25px 0 0 25px;
        min-width: 40%;
    }

    .left button {
        background-color: #e4b22b;
        border-radius: 25px;
        border: none;
        padding: 5px 10px 5px 10px;
        font-size: 15px;
        color: white;
    }

    .yellow {
        color: #e4b22b;
    }

    .text {
        color: white;
    }
    .indent{
        margin-right: 40px;
    }
    .button{
        display: flex;
        justify-content: left;
        position: absolute;
        bottom: 30px;
    }

</style>