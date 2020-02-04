<template>
    <div class="infoWrapper">
        <h1 v-if="qData.status == 'GOOD'">پرداخت شما با موفقیت انجام شد</h1>
        <h1 v-else>خطایی هنگام پرداخت رخ داد</h1>
        <br>
        <h2>
           اطلاعات پرداخت :
            <br>
            کد 1 : {{qData.RetrivalRefNo}}
            <br>
            کد 2 : {{qData.SystemTraceNo}}
        </h2>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "ConfirmPayment",
        methods : {

        },
        created() {
            console.log(this.$route);
            console.log(this.$route.query.data);
            console.log(JSON.parse(this.$route.query.data));
        },
        computed: {
            qData : function() {
                return JSON.parse(this.$route.query.data);
            }
        }
    }
</script>

<style scoped>
    .infoWrapper {
        display:flex;
        align-items:center;
        justify-content:center;
        min-height:calc(100vh - 40px);
        background-color: #e8e8e8;
        flex-direction:column;
    }
</style>