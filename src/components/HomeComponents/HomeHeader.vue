<template>
    <section class="homeHeaderWrapper">
        <h2 class="homeHedaer-title-horizontal">{{homeHeaderTitleHorizontal}}</h2>
        <h1 class="homeHeader-title" v-html="homeHeaderTitle"></h1>
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
        min-height:500px;
        display:flex;
        align-items:center;
        justify-content:center;
        background: url("../../assets/img/linus-torvalds.svg") no-repeat center;
        background-size:60%;
        background-color: rgb(41,41,41);
    }

    .homeHeader-title {
        font-family : 'iransans';
        font-size: 120px;
        font-weight:bolder;
        line-height:120px;
        color: rgb(242,169,56);
    }

    .homeHedaer-title-horizontal {
        color:white;
        font-family: 'iransans';
        font-size:18px;
        text-align:justify;
        writing-mode: vertical-rl;
        text-orientation: mixed;
        height:335px;
        margin-left:10px;
    }

    @media only screen and (max-width: 576px) {
        .homeHeader-title {
            font-size: 65px;
            line-height:70px;
        }
    }
</style>