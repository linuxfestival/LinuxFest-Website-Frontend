<template>
    <div>
        <Header />
        <AboutEvent/>
        <Workshops/>
        <!-- <calendar/> -->
       <Sponsor />
    </div>
</template>

<script>
    import calendar from "@/components/calendar.vue";

    import Sponsor from './components/Sponsor.vue';
    import Header from "./components/Header.vue";
    import AboutEvent from './components/AboutEvent.vue';
    import Workshops from "./components/Workshops.vue";

    export default {
        name: 'home',
        components: {
            Header,
            AboutEvent,
            Workshops,
            Sponsor,
            calendar
        },
    }
</script>
