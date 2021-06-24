<template>
    <section class="aboutEventWrapper">
        <div class="aboutEventContainer">
            <h1 class="aboutEvent-title">
                {{sponsorTitle}}
            </h1>
            <p class="aboutEvent-description">{{sponsorDescription}}</p>
            <img src="@/assets/img/pinguin.png" :alt="`${sponsorTitle}'s logo`" class="aboutEvent-logo" draggable="false">
        </div>
    </section>
</template>

<script>
import localization from '@/localization/index';

const {
    sponsorTitle,
    sponsorDescription
} = localization.farsi;

    export default {
        name: "Sponsor",
        data() {
            return {
                sponsorTitle,
                sponsorDescription,
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
        min-height: 500px;
        background: #521c34;
    }

    .aboutEventContainer {
        max-width:1140px;
        display: flex;
        flex-direction : column;
        align-items : center;
        justify-content : flex-start;
    }

    .aboutEvent-title {
        color:rgb(242,169,56);
        font-family: 'iransans';
        font-size:25px;
        margin:20px 30px;
        display:flex;
        align-items:center;

    }

    .aboutEvent-description {
        color:white;
        font-family: 'iransans';
        margin:0 30px 30px 30px;
        line-height:50px;
        text-align:justify;
        font-size:18px;
    }

    .aboutEvent-logo {
        width:40%;
        margin-bottom: 30px;
    }
</style>