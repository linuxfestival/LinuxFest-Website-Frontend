<template>
    <section class="homeHeaderWrapper">
        <h2 class="homeHeader-title-horizontal">{{homeHeaderTitleHorizontal}}</h2>
        <h1 class="homeHeader-title" >
            <span class="homeHeader-title-yazdahomin">
            یازدهمین دوره
            </span>
            <br>
            <span class="homeHeader-title-jashnvareh">
            جشنواره
            </span>
            <br>
            <span class="homeHeader-title-linux">
            لینوکس
            </span>
            <br>
            <span class="homeHeader-title-amirkabir">
            امیرکبیر
            </span>
        </h1>
        <router-link to="/" v-scroll-to="'#workshops'" class="homeHeader--startButton">
            <i class="material-icons">keyboard_arrow_down</i>
        </router-link>
    </section>
</template>
<script>
    export default {
        name : "HomeHeader",
        data() {
            return {
                homeHeaderTitleHorizontal: 'انجمن علمی دانشکده مهندسی کامپیوتر دانشگاه صنعتی امیرکبیر با همکاری اسنپ برگزار می کند:'
            }
        }
    }
</script>
<style scoped>
    .homeHeaderWrapper {
        width: 100%;
        padding-top:40px;
        padding-bottom:40px;
        min-height:calc(100vh - 64px);
        display:flex;
        align-items:center;
        justify-content:center;
        background: rgb(41, 41, 41) url("../../assets/img/linus-torvalds.svg") no-repeat center / 100%;
        border-bottom:10px solid rgb(242,169,56);
    }

    .homeHeader-title {
        font-family : 'iransans';
        font-size: 145px;
        font-weight:bolder;
        line-height: 145px;
        color: rgb(242,169,56);
    }

    .homeHeader-title-horizontal {
        color:white;
        font-family: 'iransans';
        font-size:18px;
        text-align:center;
        writing-mode: vertical-rl;
        text-orientation: mixed;
        height:390px;
        margin-left:10px;
    }

    .homeHeader--startButton {
        color:white;
        position: absolute;
        bottom: 0;
        margin-bottom:20px;
        transition:all 0.2s ease-in;
    }

    .homeHeader--startButton i.material-icons {
        font-size : 60px;
    }

    .homeHeader--startButton:hover {
        color: rgb(242,169,56);
    }

    .homeHeader-title-yazdahomin {
        font-size: 86px;
        word-spacing: -29px;
    }
    .homeHeader-title-jashnvareh {
        font-size: 145px;
    }
    .homeHeader-title-linux {
        font-size: 155px;
    }
    .homeHeader-title-amirkabir {
        font-size: 155px;
    }

    @media only screen and (max-width: 660px) {
        .homeHeaderWrapper {
            background-size: 140%;
        }
    }

    @media only screen and (max-width : 560px) {
        .homeHeaderWrapper {
            background-size: 200%;
            flex-direction: column-reverse;
        }

        .homeHeader-title {
            line-height:80px;
            text-align: center;
            order: 1;
        }

        .homeHeader-title-yazdahomin {
            font-size: 50px;
            word-spacing: -10px;
        }
        .homeHeader-title-jashnvareh {
            font-size: 85px;
        }
        .homeHeader-title-linux {
            font-size: 90px;
        }
        .homeHeader-title-amirkabir {
            font-size: 90px;
        }

        .homeHeader-title-horizontal {
            width: 300px;
            text-align: center;
            writing-mode: initial;
            text-orientation: mixed;
            height: initial;
            margin:20px;
            font-size:15px;
            order: 2;
        }
    }
</style>
