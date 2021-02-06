<template>
    <section class="workshops" id="workshops">
        <div class="workshopsContainer">
            <h1 class="workshops-title">{{workshopsTitle}}</h1>
        <section class="workshops-list">
            <WorkshopItem v-for="(workshop, index) in getWorkshops" :workshop="workshop" :key="index" />
        </section>
        </div>
    </section>
</template>

<script>
    import WorkshopItem from "@/components/WorkshopItem";
    export default {
        name: "Workshops",
        components : {WorkshopItem},
        data: function () {
            return {
                workshopsTitle : 'ارائه ها و سخنرانی‌ها',
                allWorkshops: []
            }
        },
        methods: {

        },

        async created() {
            await this.$store.dispatch('getWorkshopsFromServer')
        },

        mounted() {
            console.log("component mounted.");
        },

        computed:{
            getWorkshops:function () {
                return this.$store.getters.getAllWorkshops;
            },
        }
    }
</script>

<style scoped>
    .workshops {
        width: 100%;
        display:flex;
        min-height:100vh;
        align-items:center;
        justify-content:center;
        padding-bottom:30px;
    }

    .workshopsContainer {
        max-width:1300px;
        display : flex;
        align-items:center;
        justify-content:flex-start;
        flex-direction:column;
    }

    .workshops-title {
        font-family: 'iransans';
        font-size:30px;
        margin-top:30px;
        margin-bottom:30px;
        border-bottom:1px solid purple;
    }

    .workshops-list {
        display:flex;
        flex-wrap: wrap;
        width:100%;
        max-width:1300px;
        justify-content: space-evenly;
    }

</style>