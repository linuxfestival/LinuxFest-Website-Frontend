<template>
    <div class="parent">
        <div>
            <div class="top">
                <img src="../assets/img/background2.png" alt="">
            </div>
            <div class="title"><h3>ثبت نام کارگاه ها</h3></div>
        </div>
        <div class="workshop-list" v-if="getWorkshops.length>0" v-for="workshop in getWorkshops">
            <div class="workshop-item">
                 <div class="sub one"><img src="../assets/img/background2.png" alt=""></div>
                <div class="sub two"><p>{{workshop.title}}</p></div>
                <div class="sub three" v-for="teacher in workshop.teacher"><p>{{teacher.teacher}}</p></div>
                <div class="sub four"><p><span>{{workshop.price}}</span>هزار تومان</p></div>
                <!--                        //workshop id is something that you use to identify workshops easily-->
                <div class="sub five">
                    <button @click="this.$router.push('/more/'+workshop.id)">اطلاعات بیشتر</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AllWorkshopsContent",
        async created() {
            await this.$store.dispatch('getWorkshopsFromServer');
        },
        computed: {
            getWorkshops: function () {
                return this.$store.getters.getAllWorkshops;

            }
        }
    }
</script>

<style scoped>
    p {
        font-family: 'iransans';
    }

    h4 {
        font-family: 'iransans';
    }

    .parent {
        background-color: #e8e8e8;
    }

    .top img {
        width: 100%;
    }
    .title {
        position: relative;
        margin: 0 auto;
        text-align: center;
        font-size: 40px;
        top: -100px;
        color: white;
    }

    .bottom {
        display: flex;
        flex-direction: row-reverse;
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

    .right button:hover {
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

    /*.link {*/
    /*    text-decoration: none;*/
    /*    color: white;*/
    /*    font-family: 'iransans';*/
    /*}*/

    /*.info-title {*/
    /*    margin: 20px 30px 0 0;*/
    /*    font-family: 'iransans';*/
    /*}*/
</style>