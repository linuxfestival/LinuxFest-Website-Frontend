<template>
    <div class="workshops">
        <div class="top">
            <h1>کارگاه ها</h1>
        </div>
        <div class="bottom">
            <!--            <div v-for="ws in allWorkshops">-->
            <!--                {{ name }}: {{ value }}-->
            <div class="main-frame">
                <div class="left">
                    <div class="detail">
                        <h2>{{workshop.name}}</h2>
                        <p>:مدرس</p>
                        <p>{{workshop.teacher}}</p>
                    </div>
                    <div class="buttom">
                        <button>توضیحات</button>
                    </div>
                </div>
                <div class="right">
                    <!--                    <img v-bind:src="workshop.image" alt="WORKSHOP">-->
                    <img src="../assets/workshop.png" alt="WORKSHOP">
                </div>
            </div>
            <!--            </div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "Workshops",
        data: function () {
            return {
                workshop: {
                    name: 'workshop1',
                    teacher: 'mahvash',
                    image: '../assets/workshop.png'
                },
                allWorkshops: []
            }
        },
        methods: {
            getWorkshops: function () {
                this.allWorkshops.push(this.workshop);
            }
        }
    }
</script>

<style scoped>
    .workshops {
        padding: 10px;
    }

    h1 {
        color: #521c34;
        text-align: center;
    }

    .top {
        margin: 0 auto;
        width: 70%;
        border-bottom: 2px solid #521c34;
    }

    .bottom {
        padding: 20px 60px 20px 60px;
    }

    .main-frame {
        width: 30%;
        height: 300px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .left {
        border-radius: 40px 0 0 40px;
        background-color: #292929;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: white;
        width: 50%;
        padding: 30px;
    }

    .right {
        border-radius: 0 40px 40px 0;
        width: 50%;
        background-color: white;
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 0 40px 40px 0;
    }

    .left h2 {
        margin-bottom: 40px;
        font-size: 30px;
    }

    .left p {
        margin: 0;
    }
    .left button{
        background-color: white;
        border-radius: 25px;
        border: none;
        padding: 5px 30px 5px 30px;
        font-size: 15px;
        color: black;
    }
    .left .buttom{
        margin: 0 auto;
    }
    .left .detail{
        display: flex;
        flex-direction: column;
        text-align: right;
    }


</style>