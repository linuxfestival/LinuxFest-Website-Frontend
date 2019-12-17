<template>
    <section class="workshops">
        <h1 class="workshops-title">{{workshopsTitle}}</h1>
        <section class="workshops-list">
            <WorkshopItem v-for="workshop in allWorkshops" :workshop="workshop" :key="allWorkshops.indexOf(workshop)"></WorkshopItem>
        </section>
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
                        id : '2'
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
                        id : '2'
                    },
                    {
                        name : 'linux test ws2',
                        teachers : [{name : 'mahvash'}],
                        image : '',
                        id : '2'
                    }
                ]
            }
        },
        methods: {
            getWorkshops: function () {
                // this.allWorkshops.push(this.workshopSample);
                this.$store.commit('getWorkshopsFromServer')
            }
        },

        created() {
            console.log("component created");
            this.getWorkshops()

        },
        mounted() {
            console.log("component mounted.");

        }
    }
</script>

<style scoped>
    .workshops {
        width: 100%;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        padding-bottom:30px;
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