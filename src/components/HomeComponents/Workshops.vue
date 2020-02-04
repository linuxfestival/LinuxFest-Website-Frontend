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
                workshopsTitle : 'کارگاه ها',
                allWorkshops: [
                    {
                        name : 'linux test ws1',
                        teachers : [{name : 'هادی طباطبایی'},{name : 'mahvash'}],
                        image : "",
                        id : '1'
                    },
                    {
                        name : 'linux test ws2',
                        teachers : [{name : 'mahvash'}],
                        image : '',
                        id : '2'
                    },
                                        {
                        name : 'linux test ws2',
                        teachers : [{name : 'mahvash'}],
                        image : '',
                        id : '3'
                    },
                    {
                        name : 'linux test ws2',
                        teachers : [{name : 'mahvash'}],
                        image : '',
                        id : '4'
                    },
                   {
                        name : 'linux test ws2',
                        teachers : [{name : 'mahvash'}],
                        image : '',
                        id : '5'
                    },
                    {
                        name : 'linux test ws2',
                        teachers : [{name : 'mahvash'}],
                        image : '',
                        id : '5'
                    }
                ]
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
        align-items:center;
        justify-content:center;
        padding-bottom:30px;
    }

    .workshopsContainer {
        max-width:1140px;
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
        justify-content: center;
    }

</style>