<template>
    <div class="main-frame">
        <div class="top child"><p></p></div>
        <div class="child about-event">
            <AboutEvent></AboutEvent>
        </div>
        <div class="workshops child">
            <Workshops></Workshops>
        </div>
        <div class="text"></div>
    </div>
</template>

<script>
    import AboutEvent from "./AboutEvent";
    import Workshops from "./Workshops";

    export default {
        name: "HomeContent",
        components: {Workshops, AboutEvent},
        data: function () {
            return {}
        },

    }
</script>

<style scoped>
    .top {
        background-color: #292929;
        min-height: 500px;
    }

    .about-event {
        margin: 5px 0 0 0;
        border-bottom: 4px solid #e4b22b;
    }

    .workshops {
        border-bottom: 4px solid #e4b22b;
    }
</style>