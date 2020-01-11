<template>
    <div class="infoWrapper">
        <h1>Payment token validation : {{$route.params.paymentToken}}</h1>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "ConfirmPayment",
        methods : {
            validatePaymentToken() {
                axios({
                    url : "http://www.google.com/" + this.$route.params.paymentToken,
                    method : 'GET',
                    headers : this.$store.getters.httpHeaders,
                }).then(response => {
                    console.log(response);
                }).catch(error => {
                    console.log(error.response)
                })
            }
        },
        created() {
            this.validatePaymentToken();
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