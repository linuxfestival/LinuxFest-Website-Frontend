<template>
    <section class="homeHeaderWrapper">
        <h2 class="homeHeader-title-horizontal">{{homeHeaderTitleHorizontal}}</h2>
        <h1 class="homeHeader-title" v-html="homeHeaderTitle"></h1>
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
                homeHeaderTitle : 'جشنواره <br> لینوکس <br> امیرکبیر',
                homeHeaderTitleHorizontal: 'انجمن علمی دانشکده مهندسی کامپیوتر دانشگاه صنعتی امیرکبیر'
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
        font-size: 120px;
        font-weight:bolder;
        line-height:160px;
        color: rgb(242,169,56);
    }

    .homeHeader-title-horizontal {
        color:white;
        font-family: 'iransans';
        font-size:18px;
        text-align:justify;
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

    @media only screen and (max-width: 576px) {
        .homeHeader-title {
            font-size: 100px;
            line-height:120px;
        }
    }

    @media only screen and (max-width : 500px) {
        .homeHeaderWrapper {
            background-size: 200%;
            flex-direction: column-reverse;
        }
        .homeHeader-title {
            font-size: 50px;
            line-height:70px;
        }

        .homeHeader-title-horizontal {
            writing-mode: initial;
            text-orientation: mixed;
            height: initial;
            margin:20px;
            font-size:15px;
        }
    }
</style>