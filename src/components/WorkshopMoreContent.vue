<template>
    <div class="parent">
        <div>
            <div class="top">
                <img src="../assets/img/background2.png" alt="">
            </div>
            <div class="title"><h3>{{getName}}</h3></div>
        </div>
        <div class="bottom">
            <div class="right">
                <div>
                    <h3 class="sub-title" v-if="getTeachers.length == 1">در مورد مدرس کارگاه</h3>
                    <h3 class="sub-title" v-if="getTeachers.length > 1">در مورد مدرسین کارگاه</h3>
                </div>
                <div>
                    <div v-for="teacher in getTeachers">
                        <h4 class="teacher yellow indent">{{teacher.teacher}}</h4>
                        <p class="teacher-des text indent">{{teacher.description}}</p>
                    </div>
                </div>
            </div>
            <div class="left">
                <div><h3 class="sub-title">در مورد این کارگاه</h3></div>
                <div><p class="text indent">{{getDescription}}</p></div>
                <div class="button">
                    <button>ثبت نام برای این کارگاه</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WorkshopMoreContent",
        computed: {
            getName: function () {
                return this.$store.getters.getWorkshopMore.title;
            },
            getDescription: function () {
                return this.$store.getters.getWorkshopMore.description;
            },
            getTeachers: function () {
                return this.$store.getters.getWorkshopMore.teachers;
            }
        },
        async created() {
            console.log(this.$route.params.id);
            await this.$store.dispatch('getWorkshopMoreInfo', this.$route.params.id)

        }
    }
</script>

<style scoped>

    p, h4, h3 {
        font-family: 'iransans';
    }

    .top img {
        width: 100%;
    }

    .parent {
    }

    .bottom {
        display: flex;
        flex-direction: row;
        justify-content: center;
        min-height: 300px;
        position: relative;
        text-align: right;
        padding: 20px;

    }

    .title {
        position: relative;
        margin: 0 auto;
        text-align: center;
        font-size: 40px;
        top: -100px
    }

    .sub-title {
        margin: 5px 0 20px 0;
        color: #e4b22b;

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
        font-size: 15px;
    }

    .text {
        color: white;
        margin-bottom: 20px;
    }

    .indent {
        margin-right: 40px;
    }

    .button {
        display: flex;
        justify-content: left;
        position: absolute;
        bottom: 30px;
    }

    @media only screen and (max-width: 768px) {
     .title{
         font-size: 20px;
         top: -50px
     }
        P, h4, h3{
            font-size: smaller;
        }
    }

</style>