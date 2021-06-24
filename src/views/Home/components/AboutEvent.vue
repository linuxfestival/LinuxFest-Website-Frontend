<template>
    <section class="aboutEventWrapper" id="abouts">
        <div class="aboutEventContainer">
            <h1 class="aboutEvent-title">
            <i class="material-icons">keyboard_arrow_left</i>
            {{aboutThisEventTitle}}
        </h1>
        <p class="aboutEvent-description">{{aboutThisEventDescription}}</p>
        </div>
        <router-link :to="homePath" v-scroll-to="'#workshops'" class="about--startButton">
            <i class="material-icons">keyboard_arrow_down</i>
        </router-link>
    </section>
</template>

<script>
import localization from '@/localization/index';
import { home as homePath } from '@/configs/route-paths';

const { 
    aboutThisEventTitle,
    aboutThisEventDescription
} = localization.farsi;

    export default {
        name: "AboutEvent",
        data: function () {
            return {
                aboutThisEventTitle,
                aboutThisEventDescription,
                homePath
            }
        }
    }
</script>

<style scoped>
    .aboutEventWrapper {
        width:100%;
        border-bottom:5px solid rgb(242,169,56);
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        min-height:500px;
        background: #521c34 url("../../../assets/img/pinguin.png") no-repeat left / 50%;
    }

    .aboutEventContainer {
        max-width:1140px;
        display: flex;
        flex-direction : column;
        align-items : flex-start;
        justify-content : flex-start;   
    }

    .aboutEvent-title {
        color:rgb(242,169,56);
        font-family: 'iransans';
        font-size:28px;
        margin:15px 30px;
        display:flex;
        align-items:center;

    }

    .aboutEvent-description {
        color:white;
        font-family: 'iransans';
        margin:0 30px 30px 30px;
        line-height:50px;
        text-align:justify;
        font-size:20px;
    }

    .about--startButton {
        color:white;
        transition:all 0.2s ease-in;
    }

    .about--startButton i.material-icons {
        font-size : 60px;
    }

    .about--startButton:hover {
        color: rgb(242,169,56);
    }
</style>
